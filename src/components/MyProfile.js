import React from 'react';
import ReservedRockets from './rockets/ReservedRockets';
import ReservedDragons from './dragons/ReservedDragons';
import ReservedMissions from './missions/ReservedMissions';

const MyProfile = () => (
  <div className="profile-wrapper">
    <ReservedMissions />
    <ReservedRockets />
    <ReservedDragons />
  </div>
);
export default MyProfile;
