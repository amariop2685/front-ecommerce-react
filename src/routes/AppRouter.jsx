import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import ListProduct from '../components/pages/ListProduct';
import Login from '../components/pages/Login';
import Product from '../components/pages/Product';
import Profile from '../components/pages/Profile';
import UserRegistration from '../components/pages/UserRegistration';
import Checkout from '../components/pages/Checkout';


    const NotFound = () => <h1>404: Not Found</h1>;

    function AppRouter() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Navigate to="/404" />} />
                    <Route path='404' element={<NotFound />} />

                    <Route path='home' element={<Home />} />
                    <Route path='checkout' element={<Checkout />} />
                    <Route path='userregistration' element={<UserRegistration />} />
                    <Route path='login' element={<Login />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='ListProduct' element={<ListProduct />} />
                    <Route path='product' element={<Product />} />          
                </Routes>
            </>
        );
    }

    export default AppRouter;
