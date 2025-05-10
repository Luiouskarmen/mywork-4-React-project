import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from '../views/login';
import Main from '../views/main';
import Register from '../views/resgiter';
function Router(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/q" element={<Main/>}>
                        <Route path="/q/Show" element={<Main/>}/>
                    </Route>
                    <Route path="/Register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    ) 

}
export default Router;