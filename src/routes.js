import Navigo from "navigo"
import AdminHomePage from "./admin.home"
import HomePage from "./client.home"
import PostsPage from "./client.posts"
import AdminPostsPage from "./admin.posts"
import ProfilePage from "./client.post-details"
import PostDetailPage from "./client.post-details"

const router = new Navigo('/',{linksSelector: '.navigo'}) // sử dụng <a href="" class="navigo"></a>
router.on({
    '/': HomePage,
    '/posts': PostsPage,
    '/posts/:id': ({data}) => PostDetailPage(data), // có params: /posts/1
    '/admin': AdminHomePage,
    '/admin/posts':AdminPostsPage
}).resolve()