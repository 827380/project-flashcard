// function to save the data to localstorage
export function saveToLocalStorage(state) {
  // save to local storage function to save the redux store in localstorage
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

//function to retrieve the data from localstorage
export function loadFromLocalStorage() {
  // function to load the state from local storage and save as a JSON object
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
}
