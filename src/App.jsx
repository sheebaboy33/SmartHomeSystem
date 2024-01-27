import './App.css';
import Header from './components/header/header'
import DeviceCard from './components/device_card/device_card';
import LocationChip from './components/location_chip/location_chip';
import { useState, useEffect } from 'react';
import SearchBar from "./components/search-bar/search-bar";

function App() {

  //const [devices, setDevices] = useState([]); // Initialize the state with an empty array
  const [loading, setLoading] = useState(true);

  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchTyping = (value) => {
    setSearchValue(value);
    console.log(value);
  };


  
  const devices = [
    {
      name: "Main Light",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Living Room"
    },

    {
      name: "Ceiling Fan",
      image: "https://images.unsplash.com/photo-1632394128474-b8c3dca00f83?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Living Room"
    },

    {
      name: "Night Light",
      image: "https://plus.unsplash.com/premium_photo-1684182360671-5c55c2cacc87?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Bed Room"
    },

    {
      name: "CCTV",
      image: "https://images.unsplash.com/photo-1554936970-e49a373f6967?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Living Room"
    }
  ];
  

  // Using useEffect, we can call the devices data if there is a server storing the data as below
  /*
  useEffect(() => {
    const getDevices = async () => {
      const response = await fetch(
        "https://smart-home-ui-api-production.up.railway.app/api/devices",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data.data);
      setDevices(data.data);
    };
    getDevices();
    setLoading(false);
  }, []); // Run everything inside the function on the first load
  */
  
  useEffect(() => {
    setLoading(false);
  }, [selectedLocation]); // Run everything inside the function when the selectedLocation changes

  const locations = ["All", "Living Room", "Bed Room"];


  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const filteredDevices = selectedLocation === "All" ? devices :
    devices.filter((device) => {
    return device.location === selectedLocation;
  });


  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>

          {/* This is the Menu Bar */}
          <div className="menu-bar">
            <div className="menubar_item_container">
              {locations.map((location, i) => {
                return (
                  <LocationChip
                    key={i}
                    location={location}
                    selectedLocation={selectedLocation}
                    handleLocationSelect={handleLocationSelect}
                  />
                );
              })}
            </div>
            <SearchBar handleSearchTyping={handleSearchTyping} searchValue={searchValue}/>
          </div>
          <div className="device_container">
            {!loading ? (
              filteredDevices.map((device, i) => {
                return (
                  <DeviceCard key={i} image={device.image} name={device.name} />
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
