import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your SignIn and SignUp components
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links for Sign In and Sign Up */}
        <nav>
          <ul>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </nav>

        {/* Define your routes here using Routes instead of Switch */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
