import './App.css';
import Shelf from './components/Shelf'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Shelf type="isCurrentlyReading" shelfTitle="Currently Reading"></Shelf>
      <Shelf type="isTBR" shelfTitle="TBR"></Shelf>
      <Shelf type="isAlreadyRead" shelfTitle="Already Read"></Shelf>

    </div>
  );
}

export default App;
