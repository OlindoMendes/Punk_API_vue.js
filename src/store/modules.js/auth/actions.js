export default {
  async login({ dispatch }, payload) {
    return dispatch("auth", {
      ...payload,
      mode: payload.mode,
    });
  },
  async signUp({ dispatch }, payload) {
    return dispatch("auth", {
      ...payload,
      mode: payload.mode,
    });
  },
  async auth({ commit }, payload) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyrA01ieQpsPFaqwY7CfIASNNDNX7xR3o";

    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyrA01ieQpsPFaqwY7CfIASNNDNX7xR3o";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Erro ao autenticar!");
      throw error;
    }

    commit("SET_USER", {
      token: responseData.idToken,
      beerID: responseData.localID,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async loadBeers({ commit }) {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const responseData = await response.json();

    commit("LOAD_BEERS", responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || "Erro ao autenticar!");
      throw error;
    }
  },
  async getBeers({ commit }, payload) {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?per_page=80&page=${payload.current}`
    );
    const responseData = await response.json();
    commit("LOAD_BEERS", responseData);
  },
  beerDelete({ commit }, ID) {
    commit("DELETE_BEER", ID);
  },
  editBeer({ commit }, payload) {
    const payloadName = localStorage.setItem("name", payload.name);
    const payloadTagline = localStorage.setItem("tagline", payload.tagline);

    commit("EDIT_BEER", { payloadName, payloadTagline });
  },
  logOut({ commit }) {
    commit("LOG_OUT", { token: null, tokenExpiration: null });
  },
};
