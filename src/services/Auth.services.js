import axios from 'axios';

const WS_PATH = "https://api-ecommerce-express-6nv9.onrender.com";


const loginService = async (data) => {
    console.log('Entro a loginService');
    const response = await axios.post(WS_PATH + '/login', data);
    return response;
};

export {loginService}