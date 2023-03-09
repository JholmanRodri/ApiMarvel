import * as Vue from 'vue';
import Vuex from 'vuex';
import CryptoJS from 'crypto-js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    Personajes: [],
    PersonajesFiltro: [],
    Comics: [],
    Token: '',
    usuario: []
  },
  mutations: {
      setPersonajes(state, payload) {
        state.Personajes = payload
      },
      setPersonajesFiltro(state, payload) {
        state.PersonajesFiltro = payload
      },
      setComics(state, payload) {
        state.Comics = payload
      },      
      setToken(state, payload) {
        state.Token = payload
      },
    },
    actions: {
      async getPersonajes({ commit }) {
        try {
          const publicKey = 'c3d8a938ba82ebef83080d0295ff6536';
          const privateKey = '979d030f571474d1cf6cdc79dce41ca2941437f8';
          const timestamp = new Date().getTime();
          const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
          const apiUrl = 'https://gateway.marvel.com/v1/public/characters';
          const url = `${apiUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
          const response = await fetch(url)
          const data = await response.json()
          console.log(data.data.results);
          commit('setPersonajes', data.data.results)
          commit('setPersonajesFiltro', data.data.results)
        } catch (error) {
          console.error(error)
        }
      },
    },
    modules: {
    }
})
