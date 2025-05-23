import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "../css/register.scss"

function Register() {
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
    <div className="reg">
      <div className='reg1'>
        <div className='reg0'>
          <h1>欢迎使用星辰网</h1>
        </div>
        <div className='reg2'>
          <label htmlFor="username">用户名:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="username" label='姓名' name="username" variant="outlined"  value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className='reg4'>
          <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="password" label="密码" name="password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className='reg3'>
            <Button variant="contained" color="success" onClick={submit} size='small'>注册</Button>
            <Button variant="contained" color="error" onClick={Clear} size='small'>重置</Button>
        </div>
       </div>
    </div>
  );
}
export default Register;