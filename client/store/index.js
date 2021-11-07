import axios from 'axios'

export const state = () => ({
    Blog: [],
    latePost: [],
})


export const mutations = {
    SET_BLOG_DATA(state, payload) {
        state.Blog = payload;
    },
    SET_LATEPOST_DATA(state, payload) {
        state.latePost = payload;
    },
}


export const actions = {
    async getAllBlogData({commit, state}, payload) {
        await axios
            .get("http://localhost:8080/get/")
            .then((Response) => {
                // this.Blog = res.data;
                commit('SET_BLOG_DATA', Response.data)
                // console.log(Response.data)
            })
            .catch((err) => {
                console.log('ERROR DATA', err);
            });
    },


    getLatestPostData({commit, state}, payload) {
        axios
            .get(latestposturl)
            .then((reslatespost) => {
                this.latestPost = reslatespost.data;
                // console.log("reslatestpost");
            })
            .catch((err) => {
                console.log(err);
            });
    }
}