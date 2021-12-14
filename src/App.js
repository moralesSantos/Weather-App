import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather Api</h1> 
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Luis Morales 
      </footer>
    </div>
  );
}

export default App;
