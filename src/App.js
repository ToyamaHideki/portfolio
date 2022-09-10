import './styles/App.scss';
// ライブラリ
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion"
// コンポーネント群
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;