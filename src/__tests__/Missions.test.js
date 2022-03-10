import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import { addMission, reserveMission, cancelMissionReservation } from '../redux/missions/missions';

describe('Mission Component test', () => {
  it('Renders Missions Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Missions /></Provider>);
    expect(container.getElementsByClassName('mission-container').length).toBe(1);
  });
  it('Returns an addMission() action object ', () => {
    expect(addMission([])).toStrictEqual({ missions: [], type: 'spacetravelers-hub/redux/missions/ADD_MISSION' });
  });
  it('Returns a reserveMission() action object ', () => {
    expect(reserveMission('F4F83DE')).toEqual({ type: 'spacetravelers-hub/redux/missions/RESERVE_MISSION', missionId: 'F4F83DE' });
  });
  it('Returns a cancelMissionReservation() action object ', () => {
    expect(cancelMissionReservation('F4F83DE')).toEqual({ type: 'spacetravelers-hub/redux/missions/CANCEL_RESERVATION', missionId: 'F4F83DE' });
  });
});
