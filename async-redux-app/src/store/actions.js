import axios from 'axios'

export const FETCH_TEAM_DATA_START = 'FETCH_TEAM_DATA_START'
export const FETCH_TEAM_DATA_SUCCESS = 'FETCH_TEAM_DATA_SUCCESS'
export const FETCH_TEAM_DATA_FAILURE = 'FETCH_TEAM_DATA_FAILURE'
export const TOGGLE_BLURB = 'TOGGLE_BLURB'

export const fetchTeamData = () => {
     return dispatch => {
          dispatch({type: FETCH_TEAM_DATA_START})
          axios
               .get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
               .then(res => {
                    console.log(res.data)
                    dispatch({type: FETCH_TEAM_DATA_SUCCESS, payload: res.data.teams})
               })
               .catch(err => {
                    console.log(err)
                    // dispatch({type: FETCH_TEAM_DATA_FAILURE})
               })
     }
}

export const toggleBlurb = (team) => {
     return { type: TOGGLE_BLURB, payload: team }
}
