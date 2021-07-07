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
               teams: action.payload,
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
               teams: [...state.teams.map(team => team.idTeam === action.payload ? {...team, blurb: !team.blurb } : team)]
          }
    default:
      return state;
  }
};
