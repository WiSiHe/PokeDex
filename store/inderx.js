import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducer";
import { loadState, saveState, saveVersion, setABSegment } from "../helpers/localStorage";

// Store app version number in localStorage
saveVersion();

// Assign to A or B segment randomly
setABSegment();

const devtools =
  (typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) || (() => (noop) => noop); // eslint-disable-line

function configureStore(initialState = {}) {
  // Create the store with middlewares
  const middlewares = [thunk, tracker];
  const enhancers = [applyMiddleware(...middlewares), devtools()];
  const store = createStore(rootReducer, initialState, compose(...enhancers));

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}

// Persist state to localstorage
const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  const fullStore = store.getState();
  saveState({
    signup: fullStore.signup,
    directOrder: fullStore.directOrder,
  });
});

export default store;
