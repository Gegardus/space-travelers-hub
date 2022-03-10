import React from 'react';
import { useSelector } from 'react-redux';

const ReservedDragons = () => {
  const selectedDragons = useSelector((state) => state.dragons);
  const reservedDragons = selectedDragons.filter((dragon) => dragon.reserved === true);
  return (
    <ul className="profile-container">
      <h4>My Dragons</h4>
      {
 reservedDragons.map((dragon) => (
   <li key={dragon.dragon_id}>
     <p>{dragon.dragon_name}</p>
   </li>
 ))
}
    </ul>
  );
};

export default ReservedDragons;
