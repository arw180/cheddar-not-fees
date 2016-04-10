import expect from 'expect';
import initialState from 'store/initialState'
import * as actions from 'actions/actionCreators'
import configureStore from 'store/configureStore';


describe('store:', () => {
  const store = configureStore(initialState);
  it('should do stuff', () => {
    // Log the initial state
    console.log(store.getState());

    // Every time the state changes, log it
    // Note that subscribe() returns a function for unregistering the listener
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    );

    // Dispatch some actions
    store.dispatch(actions.updateStartMonth('may'));
    store.dispatch(actions.updateStartYear('2015'));
    store.dispatch(actions.updateEndMonth('august'));
    store.dispatch(actions.updateEndYear('2015'));

    // Stop listening to state updates
    unsubscribe()
  });
});
