import"./styles/reboot/reboot.css"
// ライブラリ
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// コンポーネント群
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import './styles/App/App.scss';
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