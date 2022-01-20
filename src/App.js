import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Homepage from './Pages/Homepage';

// Components
import Header from './Components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;