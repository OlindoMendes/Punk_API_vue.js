export default {
    SET_USER(state, payload){
        state.token = payload.token
        state.userID = payload.userID
        state.tokenExpiration = payload.tokenExpiration
    }
}