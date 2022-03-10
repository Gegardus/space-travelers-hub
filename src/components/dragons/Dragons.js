import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {
  getDragonsFromAPI,
  reserveDragon,
  cancelDragonReservation,
} from '../../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsData = useSelector((state) => state.dragons);
  const getDragons = () => {
    if (dragonsData.length === 0) {
      dispatch(getDragonsFromAPI());
    }
  };
  useEffect(() => {
    getDragons();
  }, []);

  return (
    <div className="dragons-list">
      {dragonsData.map((dragon) => (
        <div key={dragon.dragon_id} className="dragon">
          <div className="dragon-img">
            <img src={dragon.dragon_img} alt={dragon.dragon_name} />
          </div>
          <div className="dragon-description">
            <h3>{dragon.dragon_name}</h3>
            <p>
              {dragon.reserved && (
                <Badge bg="info" className="reserved-badge">
                  Reserved
                </Badge>
              )}
              {dragon.dragon_description}
            </p>
            {dragon.reserved ? (
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(cancelDragonReservation(dragon.dragon_id))}
              >
                Cancel Reservation
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => dispatch(reserveDragon(dragon.dragon_id))}
              >
                Reserve Dragon
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
