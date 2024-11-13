import react from 'react';
import Silder from '../Components/Silder/Silder';
import FlashSale from '../Components/FlashSale/FlashSale';
import Monthly from '../Components/MonthlySale/MonthlySale';
import Cart from '../Components/ProductsCart/ProductCart';
import Customer from '../Components/CustomerCare/CustomerCare';


const Home = () =>{


    return<>
    
    <Silder/>
    <FlashSale/>
    <Monthly/>
    <Cart/>
    <Customer/>
    
    </>
}

export default Home;