import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import '../css/main.scss'

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
      <div className="logo">
          <img src="../static/" alt="hhh" />
      </div>
      <div className="l1">
        <div className='l'>      
        <div className='l2'>
          <label htmlFor="username">用户名:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="username" label='姓名' name="username" variant="outlined"  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className='l2'>
          <label htmlFor="password">密码:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="password" label="密码" name="password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='l3'>
            <Button variant="contained" color="success" onClick={submit} size='small'>注册</Button>
            <Button variant="contained" color="error" onClick={Clear} size='small'>重置</Button>
        </div>
        </div>
       </div>
    </div>
  );
}
export default Login;