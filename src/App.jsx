import './App.css';
import Header from './components/header/header'
import DeviceCard from './components/device_card/device_card';

function App() {
  const devices = [
    { name: "Main Light", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Ceiling Fan", image: "https://images.unsplash.com/photo-1632394128474-b8c3dca00f83?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Night Light", image: "https://plus.unsplash.com/premium_photo-1684182360671-5c55c2cacc87?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "CCTV", image: "https://images.unsplash.com/photo-1554936970-e49a373f6967?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]

  return (
    <div className='App'>
      <div className='sideBar'></div>
      <div className='widgets'></div>
      <div className='home'>
        <Header />
        <div className='devices_section'>
          <h1 className='devices_section_heading'>Devices</h1>
          <div className='device_container'>
            {
              devices.map((device, i) => {
                return (<DeviceCard key={i} name={device.name} image={device.image} />);
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
