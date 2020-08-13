// enhancer
const autoLogger = () => {
  return (createStore) => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer);
    function dispatch(action) {
      console.log(`dispatch an action: ${JSON.stringify(action)}`);
      const res = store.dispatch(action);
      const newState = store.getState();
      console.log(`current state: ${JSON.stringify(newState)}`);
      return res;
    }
    return { ...store, dispatch };
  };
};

export default autoLogger;
