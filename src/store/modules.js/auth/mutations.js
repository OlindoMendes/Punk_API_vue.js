export default {
    SET_USER(state, payload){
        state.token = payload.token
        state.userID = payload.userID
        state.tokenExpiration = payload.tokenExpiration
    },
    LOAD_BEERS(state, payload){
        state.beers = payload
    },
    DELETE_BEER(state, ID) {
        state.beers = state.beers.filter(beer => {
            return beer.id !== ID
        })
    },
    EDIT_BEER(state, payload ){
        state.beers[payload] = state.beers
    
    },
    LOG_OUT(state, payload){
            state.token =  payload.token,
            state.tokenExpiration = payload.tokenExpiration
    }
}