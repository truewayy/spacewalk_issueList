import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Custom404 from './pages/Custom404';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
