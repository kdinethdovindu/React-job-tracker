function applicationReducer(state, action) {
  switch (action.type) {
    case "ADD_APPLICATION":
      return [...state, action.payload];

    case "DELETE_APPLICATION":
      return state.filter(
        (application) =>
          application.id !== action.payload
      );

    case "UPDATE_APPLICATION":
      return state.map((application) =>
        application.id === action.payload.id
          ? action.payload
          : application
      );

    case "UPDATE_STATUS":
      return state.map((application) =>
        application.id === action.payload.id
          ? {
              ...application,
              status: action.payload.status,
            }
          : application
      );

    default:
      return state;
  }
}

export default applicationReducer;