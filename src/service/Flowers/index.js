import axios from "../axios";

const flowersApi = {
    getFlowers: async function () {
        return axios.get("/flowers")
    },
    getSingleFlower: async function (id) {
        return axios.get(`/flowers/${id}`)
    }
}

export default flowersApi