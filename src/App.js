import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />

       <Route path="*" element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;
