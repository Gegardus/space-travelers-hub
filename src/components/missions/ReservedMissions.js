import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMissions = () => {
  const selectedMissions = useSelector((state) => state.missions);
  const reservedMissions = selectedMissions.filter((mission) => mission.reserved === true);
  return (
    <ul className="profile-container">
      <h4>My Missions</h4>
      {
 reservedMissions.map((mission) => (
   <li key={mission.mission_id}>
     <p>{mission.mission_name}</p>
   </li>
 ))
}
    </ul>
  );
};

export default ReservedMissions;
