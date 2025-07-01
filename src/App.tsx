import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';

const App = (): JSX.Element => {
    return (
          <Routes>
            <Route path="/" element={<Gallery />} />
          </Routes>
    );
}

export default App;