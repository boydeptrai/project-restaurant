
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Header,AboutUs,SpecialMenu, Chef, Intro, Footer, Laurels, Gallery, FindUs} from './container';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
