export default {
  async login({ commit }, payload) {
    const bodyPayload = {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    };
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyrA01ieQpsPFaqwY7CfIASNNDNX7xR3o",
      bodyPayload
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || "Erro ao autenticar!");
      throw error;
    }

    console.log(responseData);

    commit("SET_USER", {
      token: responseData.idToken,
      userID: responseData.localID,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signUp({ commit }, payload) {
    console.log(payload);
    const bodyPayload = {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    };
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyrA01ieQpsPFaqwY7CfIASNNDNX7xR3o",
      bodyPayload
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || "Erro ao autenticar!");
      throw error;
    }

    console.log(responseData);

    commit("SET_USER", {
      token: responseData.idToken,
      userID: responseData.localID,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async loadBeers({ commit }) {
    console.log("aqui");

    const response = await fetch("https://api.punkapi.com/v2/beers");
    const responseData = await response.json();
    commit("LOAD_BEERS", responseData);
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || "Erro ao autenticar!");
      throw error;
    }
  },
};
