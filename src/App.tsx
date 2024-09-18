import General from './components/social_links_profile/General'
import { HashRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/social_links_profile" element={<General />}/>
      </Routes>
    </Router>
  );
}

export default App;
