import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import My from '../pages/My';

export default function Router() {
  return (
    <BrowserRouter>
      <Link to="/">主页</Link>
      <Link to="/my">我的</Link>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my" element={<My />} />
    </Routes>
    </BrowserRouter>
  );
}

