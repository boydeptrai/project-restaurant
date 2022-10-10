
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Header,AboutUs,SpecialMenu} from './container';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
