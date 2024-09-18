import SocialLinksProfile from './components/SocialLinksProfile/SocialLinksProfile'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SocialLinksProfile" element={<SocialLinksProfile />}/>
      </Routes>
    </Router>
  );
}

export default App;
