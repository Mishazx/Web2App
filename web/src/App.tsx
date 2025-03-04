import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="welcome-screen-wrapper">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/quiz" element={<Navigate to="/quiz/1" />} />
            <Route path="/results" element={<ResultsScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



