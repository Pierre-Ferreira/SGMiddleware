export default function({ dispatch }) {
  return next => action => {
    console.log(action);
// If the action does not have a payload
// or the payload does not have a .then property
// we don't care about it, send it on.
    if (!action.payload || !action.payload.then) {
      return next(action); // next = Go to the next middleware!
    }
    console.log("We DO have a promise", action);

    // Make sure the action's promise resolves.
    action.payload
      .then(function(response) {
        // Create a new action with the old types, but
        // replace the promise with the response data.
        const newAction = { ...action, payload: response };
        dispatch(newAction); // dispatch = Run through all the middleware again!
      });
  }
}
