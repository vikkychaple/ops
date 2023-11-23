import React, { useState } from 'react';
import AddCar from './components/AddCar';
import CarList from './components/CarList';

const App = () => {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCars) => {
    setCars(newCars);
  };

  return (
    <div>
      <AddCar onAddCar={handleAddCar} cars={cars} />
      <CarList cars={cars} />
    </div>
  );
};

export default App;