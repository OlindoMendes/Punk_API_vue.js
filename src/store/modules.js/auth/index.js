import mutations  from "./mutations"
import actions  from "./actions.js"
import getters from "./getters"

export default {
    namespaced: true,
    state(){
        return {
            userID: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutations,
    actions, 
    getters
}