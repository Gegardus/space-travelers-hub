import React from 'react';
import ReservedRockets from './rockets/ReservedRockets';
import ReservedDragons from './dragons/ReservedDragons';

const MyProfile = () => (
  <div className="profile-wrapper">
    <ReservedRockets />
    <ReservedDragons />
  </div>
);
export default MyProfile;
