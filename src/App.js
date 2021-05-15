import './App.css';
import {Navbar, Iconcard} from './component';
import Message from './message';
import styles from './style';

function App() {
  return (
    <div style={{flex: 1}}>
      <Navbar />
      <div
        className="d-flex flex-row h-50 justify-content-around"
        style={{marginTop: 10}}>
        <Iconcard
          style={styles.imageCard}
          info={Message.icon}
          uploadButtonStyle={styles.uploadButton}
          uploadConatiner={styles.uploadConatiner}
        />
        <Iconcard
          style={styles.imageCard}
          info={Message.splash}
          uploadButtonStyle={styles.uploadButton}
          uploadConatiner={styles.uploadConatiner}
        />
      </div>
    </div>
  );
}

export default App;
