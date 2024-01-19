import { getPostAPI } from "./api";
import ClientLayout from "./client.layout"

const PostDetailPage = async (data) => {
    const postId = data.id
    const post = await getPostAPI(postId)
    const content = `
    <h2>Client post details page</h2>
    ${JSON.stringify(post)}
    `
    ClientLayout(content)
}
export default PostDetailPage