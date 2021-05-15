import './App.css';
import {Navbar, Iconcard} from './component';
import Message from './message';

function App() {
  return (
    <div style={{flex: 1}}>
      <Navbar />
      <div
        className="d-flex flex-row h-50 justify-content-around"
        style={{marginTop: 10}}>
        <Iconcard info={Message.icon} />
        <Iconcard info={Message.splash} />
      </div>
    </div>
  );
}

export default App;
