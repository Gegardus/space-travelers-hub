import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Dragons from '../components/dragons/Dragons';
import { addDragon, cancelDragonReservation, reserveDragon } from '../redux/dragons/dragons';

describe('Dragons Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('has a text in the DOM', () => {
    const { container } = render(<Provider store={store}><Dragons /></Provider>);
    expect(container.getElementsByClassName('dragons-list').length).toBe(1);
  });
  it('Returns an addDragon() action object ', () => {
    expect(addDragon([])).toStrictEqual({ dragons: [], type: 'spacetravelers-hub/redux/dragons/ADD_DRAGON' });
  });
  it('Returns a reserveDragon() action object ', () => {
    expect(reserveDragon('5107')).toStrictEqual({ dragonId: '5107', type: 'spacetravelers-hub/redux/dragons/RESERVE_DRAGON' });
  });
  it('Returns a cancelDragonReservation() action object ', () => {
    expect(cancelDragonReservation('5107')).toStrictEqual({ dragonId: '5107', type: 'spacetravelers-hub/redux/dragons/CANCEL_RESERVATION' });
  });
});
