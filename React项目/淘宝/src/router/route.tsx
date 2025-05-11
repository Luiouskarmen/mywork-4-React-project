import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from '../views/login';
import Main from '../views/main';
import Register from '../views/resgiter';
import My from '../views/my';
function Router(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Main" element={<Main/>}>
                        <Route path="/Main/Show" element={<Main/>}/>
                    </Route>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/My" element={<My/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    ) 

}
export default Router;