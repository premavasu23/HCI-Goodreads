import './App.css';
import Shelf from './components/Shelf'

function App() {
  return (
    <div className="App">

      <p>Nav Bar Under Construction</p>
      <Shelf type="isCurrentlyReading" shelfTitle="Currently Reading"></Shelf>
      <Shelf type="isTBR" shelfTitle="TBR"></Shelf>
      <Shelf type="isAlreadyRead" shelfTitle="Already Read"></Shelf>

    </div>
  );
}

export default App;
