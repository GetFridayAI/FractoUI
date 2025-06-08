import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';

function App() {
    return (
          <Routes>
              <Route path="/" element={<Gallery />} />
          </Routes>
    );
}

export default App;