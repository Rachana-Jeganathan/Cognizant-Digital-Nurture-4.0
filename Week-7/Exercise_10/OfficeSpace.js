import React from 'react';
import './OfficeSpace.css'; 
export default function OfficeSpace() {
  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: "https://imgs.search.brave.com/ehUjUEGM4sCxV7ub-RzKgJQ6DvwxZ4K4p6J6B5wCMMo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0NvZ25pemFu/dC1DaGVubmFpLmpw/Zw"
    },
  ];

  return (
    <div className="container">
      <h1>Office Space, at Affordable Range</h1>
      <div className="cards">
        {offices.map((item, index) => {
          const rentClass = item.Rent <= 60000 ? "textRed" : "textGreen";

          return (
            <div key={index} className="card">
              <img src={item.Image} alt="Office" className="office-img" />
              <h2>Name: {item.Name}</h2>
              <h3 className={rentClass}>Rent: Rs. {item.Rent}</h3>
              <h3>Address: {item.Address}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
