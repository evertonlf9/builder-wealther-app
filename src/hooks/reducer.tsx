interface State {
  loading: boolean;
}

interface Action {
  type: string;
  payload: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
