import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 

function Resgiter() {
    

    const Clear = () => {

    }

  return (
    <div>
      <div className="reg1">
        <div className='reg2'>
          <label htmlFor="username">用户名:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="username" label="姓名" variant="outlined" name="username"/>
        </div>
        <div className='reg2'>
          <label htmlFor="password">密码:</label>
          <TextField sx={{ width: '25ch'}} size='small' id="password" label="密码" variant="outlined" name="username"/>
        </div>
        <div className='reg3'>
            <Button variant="contained" color="success" onClick={}>注册</Button>
            <Button variant="contained" color="error" onClick={Clear}>重置</Button>
        </div>
       </div>
    </div>
  );
}
export default Resgiter;