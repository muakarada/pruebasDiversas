import './App.css';
import Home from 'pages/home';
import People from 'pages/people';
import Enterprises from 'pages/enterprises';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
	      <Routes>
          <Route exact path= "/"
            element={<Home />} />
          <Route exact path= "/people"
            element={<People />} />
          <Route exact path= "/enterprises"
            element={<Enterprises />} />
	      </Routes>
      </Router>
    </div>
  );
}

export default App;
