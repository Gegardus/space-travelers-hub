import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {
  getMissionFromAPI,
  reserveMission,
  cancelMissionReservation,
} from '../../redux/missions/missions';
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
          <ul key={mission.mission_id}>
            <li className="name title">{mission.mission_name}</li>
            <li className="description">{mission.description}</li>
            <li className="status">
              {mission.reserved ? <div className="active-member">Active Member</div> : <div className="not-active">Not A Member</div>}
            </li>
            <li className="loading">
              {mission.reserved ? (
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(cancelMissionReservation(mission.mission_id))}
                >
                  Leave Mission
                </Button>
              ) : (
                <Button
                  variant="outline-secondary"
                  onClick={() => dispatch(reserveMission(mission.mission_id))}
                >
                  Join Mission
                </Button>
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Missions;
