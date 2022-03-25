
import './App.css';
import HomePage from './containers/HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
