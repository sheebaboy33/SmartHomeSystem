import './App.css';
import { Outlet } from 'react-router-dom';
import NavIcon from './components/nav-icon/nav-icon.jsx';
import ToothIcon from './components/nav-icon/ToothIcon.jsx';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
      <NavIcon route="/" />
      <NavIcon route="settings" />

      </div>
      <div className="widgets"></div>
      <Outlet />
    </div>
  );
}
export default App;
