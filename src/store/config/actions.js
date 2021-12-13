import axios from "axios";
import { scroller } from "vue-scrollto/src/scrollTo";

const actions = {
    viewContents({ commit, state }) {
        try {
            axios
                .get(`${state.baseURL}/content/home`)
                .then((result) => {
                    let content = result.data.content;
                    commit("set_citations", content.citations);
                    commit("set_events", content.evenements);
                    commit("set_formations", content.formations);
                    commit("set_exhortations", content.exhortations);
                    commit("set_livres", content.livres);
                    commit("set_jeux", content.jeux);
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    },

    viewSingleContents({ commit, state }, url) {
        try {
            axios
                .get(`${state.baseURL}/content/${url}`)
                .then((result) => {
                    let data = result.data;
                    switch (url) {
                        case "evenements":
                            commit("set_events", data.evenements);
                            break;
                        case "citations":
                            commit("set_citations", data.citations);
                            break;
                        case "livres":
                            commit("set_livres", data.livres);
                            break;
                        case "formations":
                            commit("set_formations", data.formations);
                            break;
                        case "exhortations":
                            commit("set_exhortations", data.exhortations);
                            break;
                        case "jeux":
                            commit("set_jeux", data.jeux);
                            break;
                        default:
                            console.log("data isEmpty !");
                            break;
                    }
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    },

    scrollToTop() {
        const scrollTo = scroller();
        scrollTo("#topBar");
    },
};

export default actions;