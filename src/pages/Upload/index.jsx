import React from 'react';
import {useParams} from 'react-router-dom'
import Arithmetic from './arithmetic';
import Blog from './blog';
import Other from './other';
function Upload() {
  const {type} = useParams();
  const chooseDom = (type)=>{
    if(type === 'arithmetic'){
      return <Arithmetic/>;
    }
    if(type === 'blog'){
      return <Blog/>;
    }
    if(type === 'other'){
      return <Other/>;
    }
    return <div>没有匹配到对应的组件</div>;
  }

  return (
    <div className="Upload">
      {/* {type === 'arithmetic' ? <Arithmetic/> : null}
      {type === 'blog' ? <Blog/> : null}
      {type === 'other' ? <Other/> : null} */}
      {chooseDom(type)}
    </div>
  );
}

export default Upload;
