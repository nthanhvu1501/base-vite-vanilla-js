import { getPostsAPI } from "./api"
import ClientLayout from "./client.layout"

const PostsPage = async () => {
    const posts = await getPostsAPI()
    const postsHtml = posts.map(post => `<div>${JSON.stringify(post)}</div>`).join("\n")
    const content = `
    <h2>Client Posts page</h2>
    ${postsHtml}
    `
    ClientLayout(content)
}
export default PostsPage