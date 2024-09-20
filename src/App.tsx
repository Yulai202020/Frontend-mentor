import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

import SocialLinksProfile from './components/SocialLinksProfile/SocialLinksProfile'
import BlogPreviewCard from './components/BlogPreviewCard/BlogPreviewCard';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/SocialLinksProfile" element={<SocialLinksProfile />}/>
        <Route path="/BlogPreviewCard" element={<BlogPreviewCard />}/>
        <Route path="/Rating" element={<Rating />}/>

        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
