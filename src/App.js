
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Header,AboutUs,SpecialMenu, Chef, Intro} from './container';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
}

export default App;
