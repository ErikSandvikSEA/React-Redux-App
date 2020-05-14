import {
     FETCH_TEAM_DATA_START, 
     FETCH_TEAM_DATA_SUCCESS, 
     FETCH_TEAM_DATA_FAILURE,
     TOGGLE_BLURB
} from '../store/actions'


const initialState = {
  isFetching: false,
  teams: [],
  error: '',
  blurb: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
     case FETCH_TEAM_DATA_START:
          return {
               ...state,
               isFetching: true
          }
     case FETCH_TEAM_DATA_SUCCESS:
          return {
               ...state,
               isFetching: false,
               teams: action.payload
          }
     case FETCH_TEAM_DATA_FAILURE:
          return {
               ...state,
               isFetching: false,
               error: `There has been an Error`
          }
     case TOGGLE_BLURB:
          return {
               ...state,
               blurb: !state.blurb
          }
    default:
      return state;
  }
};
