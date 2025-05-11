import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import '../css/login.scss'
import logo from '../static/logo3.png'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Clear=()=>{
        setUsername('');
        setPassword('');
    }
    const submit=()=>{
        console.log(username,password);
    }

  return (
    <div className="login">
      <div className="ltitle">
        
        作者：karmen-luious<a href="/My" style={{ marginLeft: '30px' }}>关于我们</a>
        
      </div>
      <div className="logo">
          <img className='i' src={logo} alt="hhh" />
      </div>
      <div className="l1">
        <div>
        <div className='l0'>
          <h1>欢迎使用星辰网</h1>
          <h3 className='h3'>请登录</h3>
        </div>    
        <div className='l2'>
          <label htmlFor="username">用户名:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="username" label='姓名' name="username" variant="outlined"  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <br />
          <TextField sx={{ width: '25ch'}} size='small' id="password" label="密码" name="password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='l3'>
            <Button variant="contained" color="success" onClick={submit} size='small'>登录</Button>
            <Button variant="contained" color="error" onClick={Clear} size='small'>重置</Button>
        </div>
        
        <div className="l4">
            <h3>没有账号？<a href="/Register">注册</a></h3>
         </div>   
      </div>
      </div>
       
    </div>
  );
}
export default Login;