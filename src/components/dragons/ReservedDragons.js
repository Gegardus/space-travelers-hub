import React from 'react';
import { useSelector } from 'react-redux';

const ReservedDragons = () => {
  const selectedDragons = useSelector((state) => state.dragons);
  const reservedDragons = selectedDragons.filter((dragon) => dragon.reserved === true);
  return (
    <div className="profile-container">
      <h4>My Dragons</h4>
      {
reservedDragons.map((dragon) => (
  <div key={dragon.dragon_id}>
    <p>{dragon.dragon_name}</p>
  </div>
))
}
    </div>
  );
};

export default ReservedDragons;
