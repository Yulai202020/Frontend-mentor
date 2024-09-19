import SocialLinksProfile from './components/SocialLinksProfile/SocialLinksProfile'
import BlogPreviewCard from './components/BlogPreviewCard/BlogPreviewCard';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SocialLinksProfile" element={<SocialLinksProfile />}/>
        <Route path="/BlogPreviewCard" element={<BlogPreviewCard />}/>
      </Routes>
    </Router>
  );
}

export default App;
