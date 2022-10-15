
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Header,AboutUs,SpecialMenu, Chef} from './container';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
}

export default App;
