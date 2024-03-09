
import React,{useState} from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload,Button } from 'antd';
const { Dragger } = Upload;

const url = 'http://8.134.197.161:3000/api';
// const url = 'http://localhost:3000/api';

const onChange=(info, imgUrl,setImgUrl) =>{
  // console.log(info);// info 包含了我选择的图片信息，也包含了图片的上传状态以及上传后服务器返回的数据，这个 antd 是怎么做的？好酷！
  const { status } = info.file;
  if (status !== 'uploading') {
    // console.log(info.file, info.fileList);
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`);
    setImgUrl([...imgUrl,{url:url+info.file.response.url}]);
    // console.log(imgUrl);
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList:false,
  action: 'http://8.134.197.161:3000/upload/blog',
  // action: 'http://localhost:3000/upload/blog',
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Blog = () => {
  const [imgUrl,setImgUrl] = useState([]);
  return (<div>
    <h1>博客图片上传</h1>
    <Dragger {...props} onChange={(info)=>onChange(info,imgUrl,setImgUrl)}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或者拖拽图片实现上传</p>
    <p className="ant-upload-hint">目前仅支持单张图片上传</p>
  </Dragger>
    <div style={{marginTop:20+'px'}}>
      <div>图片链接：</div>
      {imgUrl.map(item=>{
        return <div key={item.url}>
          <a style={{color:'#55b87f',marginTop:10+'px'}} href={item.url} target='blank'>{item.url}</a>
          {/* <Button type='text' style={{marginLeft:15+'px'}} onClick={()=>setImgUrl(imgUrl.filter(item=> item.url!=item.url))}>删除</Button> */}
        </div>
      })}
      <div><Button type='primary' style={{marginTop:15+'px',float:'right'}} onClick={()=>setImgUrl([])} > 清空列表 </Button></div>
    </div>
  </div>)
};
export default Blog;
