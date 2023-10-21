import './App.css';
import Shelf from './components/Shelf'
import Navbar from './components/Navbar';
import Stats from './components/Stats'
import Challenge from './components/Challenge'
import Recommendations from './components/Recommendations'

function App() {
  return (
    <div className>
      <Navbar />
      <div className="Shelves">
        <Shelf type="isCurrentlyReading" shelfTitle="Currently Reading"></Shelf>
        <Shelf type="isTBR" shelfTitle="TBR"></Shelf>
        <Shelf type="isAlreadyRead" shelfTitle="Already Read"></Shelf>
      </div>
      <div className = "right-side">
        <Challenge></Challenge>
        <Stats></Stats>
        <Recommendations type="isRecommended" shelfTitle="Recommendations"></Recommendations>
      </div>
    </div>
    
  );
}

export default App;
// border: 5px solid #75420e;
