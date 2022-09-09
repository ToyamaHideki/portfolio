import './styles/App.scss';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;