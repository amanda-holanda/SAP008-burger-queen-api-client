import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
import { Routes, Route } from 'react-router-dom';

function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup/*" element={<Signup />} />
        </Routes>
    )
}

export default AllRoutes;
