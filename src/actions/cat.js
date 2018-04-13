export const FETCH_CATS_REQUEST = 'FETCH_CATS_REQUEST';
export const FETCH_CATS_SUCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_FAILURE = 'FETCH_CATS_FAILURE';

export const getCats = () => dispatch => {
  dispatch({type: FETCH_CATS_REQUEST})
  fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed')
  .then(results => {
    return results.json()
  })
  .then(data => {
    return dispatch({type: FETCH_CATS_SUCESS, payload: data})
  })
  .catch(err => {
    return dispatch ({type: FETCH_CATS_FAILURE, payload:err})
  })
  
}