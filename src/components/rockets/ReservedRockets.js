import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const selectedRockets = useSelector((state) => state.rockets);
  const reservedRockets = selectedRockets.filter((rocket) => rocket.reserved === true);
  return (
    <ul className="profile-container">
      <h4>My Rockets</h4>
      {
 reservedRockets.map((rocket) => (
   <li key={rocket.rocket_id}>
     <p>{rocket.rocket_name}</p>
   </li>
 ))
}
    </ul>
  );
};

export default ReservedRockets;
