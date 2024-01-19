import instance from "./api.config";
const getPostsAPI = async () => {
    try {
        const res = await instance.get('/posts')
        return res
    } catch (error) {
        console.log(error);
    }
}
const getPostAPI = async (id) => {
    try {
        const res = await instance.get(`/posts/${id}`)
        return res
    } catch (error) {
        console.log(error);
    }
}
export { getPostsAPI, getPostAPI}