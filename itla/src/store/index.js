import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store  = new Vuex.Store({
    state: {
        loginedID: null,
        loginedEmail : "",
        feedCategories : [
            "Software", "Hardware", "Technology", "Tips", "Reviews", "Misc"
        ],
    },
    getters: {
        getLoginedID: function (state) {
            return state.loginedID;
        },
        getLoginedEmail: function (state) {
            return state.loginedEmail;
        }
    },
    mutations: {
        LOGIN (state, payload) {
            state.loginedID = payload.id;
            state.loginedEmail = payload.email;
        },
        LOGOUT (state) {
            state.loginedID = null;
        }
    },
    actions: {

    }
} );