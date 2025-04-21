// import About from "./components/About"
// import CTA_section from "./components/CTA_section"
// import Endpage from "./components/Endpage"
// import Event from "./components/Event"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import Main from "./components/Main"
// import './Styles.css'
// function App() {

//   return (
//     <>
//     <Header/>
//     <Main/>
//     <About/>
//     <Event/>
//     <CTA_section/>
//     <Endpage/>
//     <Footer/>
//     </>
//   )
// }

// export default App
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import CTA_section from "./components/CTA_section";
// import Endpage from "./components/Endpage";
// import Event from "./components/Event";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import './Styles.css';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Define paths for each component */}
        
//         <Route path="/" element={<Main />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/event" element={<Event />} />
//         <Route path="/cta" element={<CTA_section />} />
//         <Route path="/endpage" element={<Endpage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import CTA_section from "./components/CTA_section";
import Endpage from "./components/Endpage";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import './Styles.css';
import WeatherPage from './components/WeatherPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>

        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/cta" element={<CTA_section />} />
        <Route path="/end" element={<Endpage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
