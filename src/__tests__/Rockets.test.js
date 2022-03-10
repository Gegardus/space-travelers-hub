import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Rockets from '../components/rockets/Rockets';

import { addRocket, cancelRocketReservation, reserveRocket } from '../redux/rockets/rockets';

describe('Rockets Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Rockets />

      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Rockets /></Provider>);
    expect(container.getElementsByClassName('rockets-list').length).toBe(1);
  });
  it('Returns an addRocket() action object ', () => {
    expect(addRocket([])).toStrictEqual({ rockets: [], type: 'spacetravelers-hub/redux/rockets/ADD_ROCKET' });
  });
  it('Returns a reserveRocket() action object', () => {
    expect(reserveRocket('1690')).toStrictEqual({ type: 'spacetravelers-hub/redux/rockets/RESERVE_ROCKET', rocketId: '1690' });
  });
  it('Returns a cancelRocketReservation() action object', () => {
    expect(cancelRocketReservation('1690')).toStrictEqual({ type: 'spacetravelers-hub/redux/rockets/CANCEL_RESERVATION', rocketId: '1690' });
  });
});
