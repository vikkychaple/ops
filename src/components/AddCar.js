import React, { useState } from 'react';

const AddCar = ({ onAddCar, cars }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddCar = () => {
    // Check if the car with the same brand and model already exists
    const existingCar = cars.find(car => car.name === name && car.model === model);

    if (existingCar) {
      // If the car exists, update the quantity
      existingCar.quantity += parseInt(quantity, 10);
      onAddCar([...cars]);
    } else {
      // If the car doesn't exist, create a new car object
      const newCar = { name, model, quantity: parseInt(quantity, 10) };
      onAddCar([...cars, newCar]);
    }

    // Clear the input fields after adding the car
    setName('');
    setModel('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Add Car</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Model:</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default AddCar;