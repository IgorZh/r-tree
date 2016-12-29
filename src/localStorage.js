const key = 'tree_state';

export const getState = () => {
  const state = localStorage.getItem(key);
  if(state === null){
    return undefined;
  }

  return JSON.parse(state);
};

export const setState = (state) => {
  localStorage.setItem(key, JSON.stringify(state));
};
