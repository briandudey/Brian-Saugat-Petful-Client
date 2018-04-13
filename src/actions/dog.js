export const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST';
export const FETCH_DOGS_SUCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';

export const getDogs = () => dispatch => {
  dispatch({type: FETCH_DOGS_REQUEST})
  fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed')
  .then(results => {
    return results.json()
  })
  .then(data => {
    return dispatch({type: FETCH_DOGS_SUCESS, payload:data})
  })
  .catch(err => {
    return dispatch ({type: FETCH_DOGS_FAILURE, payload:err})
  })
  
  
}