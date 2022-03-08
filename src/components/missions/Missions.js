import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionFromAPI } from '../../redux/missions/missions';
import './Mission.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missions);
  const getMissions = () => {
    if (missionsData.length === 0) {
      dispatch(getMissionFromAPI());
    }
  };
  useEffect(() => {
    getMissions();
  }, []);

  return (
    <div className="mission-container">
      <div className="main-title">
        <ul>
          <li className="name title">Mission</li>
          <li className="title">Description</li>
          <li className="status title">Status</li>
          <li> </li>
        </ul>
      </div>
      <div className="mission-title">
        {missionsData.map((mission) => (
          <ul key={mission.id}>
            <li className="name title">{mission.name}</li>
            <li className="description">{mission.description}</li>
            <li className="status">
              <div className="not-active">Not A Member</div>
            </li>
            <li className="loading">
              <button type="button" className="btn btn-outline-success">
                Leave Mission
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Missions;
