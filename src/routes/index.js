import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Menu } from '../pages/menu/menu';
import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => (

    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
    </Routes>

);

export default AllRoutes;
