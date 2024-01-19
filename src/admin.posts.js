import AdminLayout from "./admin.layout"
import { getPostsAPI } from "./api"

const AdminPostsPage = async () => {
    const posts = await getPostsAPI()
    const postsHtml = posts.map(post => `<div>${JSON.stringify(post)}</div>`).join("\n")
    const content = `
    <h2>Admin Posts page</h2>
    ${postsHtml}
    `
    AdminLayout(content)
}
export default AdminPostsPage