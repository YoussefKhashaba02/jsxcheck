
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilePhoto />
        <FullName />
        <Address />
      </header>
    </div>
  );
}

export default App;
