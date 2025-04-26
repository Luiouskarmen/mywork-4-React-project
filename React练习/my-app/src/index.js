//项目的入口，必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
//项目的组件
import App from './App';

//把app根组件渲染到id 为root的DOM节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />

);


