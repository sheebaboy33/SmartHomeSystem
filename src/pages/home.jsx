import Header from "../components/header/header";
import LocationChip from "../components/location_chip/location_chip";
import SearchBar from "../components/search-bar/search-bar";
import DeviceCard from "../components/device_card/device_card";
import { useState, useEffect } from "react";

function Home() {

    const [loading, setLoading] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [searchValue, setSearchValue] = useState("");

    const handleSearchTyping = (value) => {
        setSearchValue(value);
        console.log(value);
    };
    
    const devices = [
        {
            id: 1,
            name: "Main Light",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: "Living Room"
        },
  
        {
            id: 2,
            name: "Ceiling Fan",
            image: "https://images.unsplash.com/photo-1632394128474-b8c3dca00f83?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: "Living Room"
        },
  
        {
            id: 3,
            name: "Night Light",
            image: "https://plus.unsplash.com/premium_photo-1684182360671-5c55c2cacc87?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: "Bed Room"
        },
  
        {
            id: 4,
            name: "CCTV",
            image: "https://images.unsplash.com/photo-1554936970-e49a373f6967?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: "Living Room"
        }
    ];

    //const [devices, setDevices] = useState([]); // Initialize the state with an empty array


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

    const filteredDevices =
        selectedLocation === "All"
            ? devices.filter((device) => {
                return device.name
                    .replace(" ", "")
                    .toLowerCase()
                    .includes(searchValue);
            })
            : devices.filter((device) => {
                return (
                    device.location === selectedLocation &&
                    device.name.replace(" ", "").toLowerCase().includes(searchValue)
                );
            });

    return (
        <div className="home">
            <Header />
            <div className="devices_section">
                <h1 className="devices_section_heading">Devices</h1>
    
                {/* Menu Bar */}
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
                    <SearchBar
                        handleSearchTyping={handleSearchTyping}
                        searchValue={searchValue}
                    />
                </div>
                <div className="device_container">
                    {!loading ? (
                        filteredDevices.map((device) => {
                            return (
                                <DeviceCard
                                    key={device.id}
                                    device={device}
                                />
                            );
                        })
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Home;
    