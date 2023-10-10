import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const item = [
    "Order & Refund",
    "Wishlist",
    "Gift Cards",
    "Service Membership",
    "Refer to a Friend",
    "Help & Support",
  ];
  const handleItemClick = (item) => {
    setSelectedOption(item);
  };
  return (
    <div className="App">
      <Navbar />
      <Sidebar items={item} onItemClick={handleItemClick} />
      <Form selectedOption={selectedOption} />
    </div>
  );
}

export default App;
