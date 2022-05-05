import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TermsAndConditions from "./components/TermsandConditions";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Blog from "./components/Blog";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Impact from "./components/Impact";
import LemappExtension from "./components/LemappExtension";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index path="/" element={<Home />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/lemappextension" element={<LemappExtension />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
