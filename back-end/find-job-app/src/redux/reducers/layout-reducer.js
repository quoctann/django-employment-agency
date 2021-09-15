import { layoutTypes } from "../types";

const initialState = { alert: {}, snackbar: {} };

export function layout(state = initialState, action) {
  switch (action.type) {
    //
    case layoutTypes.SHOW_ALERT:
      return {
        ...state,
        alert: {
          open: true,
          title: action.title,
          message: action.message,
          onResult: action.onResult,
        },
      };
    case layoutTypes.HIDE_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          open: false,
        },
      };
    //
    case layoutTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: action.snackbar,
      };
    case layoutTypes.HIDE_SNACKBAR:
      return {
        ...state,
        snackbar: {},
      };
    default:
      return state;
  }
}
