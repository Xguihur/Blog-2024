import React from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
import { HomeOutlined, CloudUploadOutlined, BarChartOutlined } from '@ant-design/icons';
import { Menu,Layout } from 'antd';
const { Content, Sider } = Layout;
import logo from '../../assets/beian_logo.png'

import './index.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('首页', 'sub1', <HomeOutlined /> , [
    getItem('项目介绍', '1'),
  ]),
  getItem('上传', 'sub2', <CloudUploadOutlined />, [
    getItem('博客', '2'),
    getItem('算法文档', '3'),
    getItem('其他', '4'),
  ]),
  getItem('图表 ', 'sub3', <BarChartOutlined />, [
    getItem('博客网站信息', '5'),
  ]),
];

function Label() {
  const navigate = useNavigate();
  const routerChange = (key)=>{
    switch(key){
      case '1':
        return navigate('/');
      case '2':
        return navigate('/upload/blog');
      case '3':  
        return navigate('/upload/arithmetic');
      case '4':
        return navigate('/upload/other');
      case '5':  
        return navigate('/charts');
      default:
        break;
    }
  }

  return (
    <Layout className='label'>
      <Sider>
        <Menu
        onClick={(e)=>routerChange(e.key)}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className='myLayout'>
        <Content>
          <Outlet />
        </Content>
      </Layout>

      {/* 备案号悬挂 */}
      <div className="footer">
          <a href="https://beian.miit.gov.cn/" target='_blank'>粤ICP备2024216058号</a>
          <img className="beian-logo" src={logo} alt="" />
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44020402000314" target='_blank'>粤公网安备44020402000314号</a>
      </div>
    </Layout>
    
  );
}

export default Label;

