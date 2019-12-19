
import UserRouter from "./users/index";
import ArticleRouter from "./article/index";
import TagRouter from "./tag/index";
// import MessageRouter from "./message/index";
import PostRouter from "./post/index";
/**
 * All application routes.
 */
const AppRoutes = [
    ...UserRouter,
    ...ArticleRouter,
    ...TagRouter,
    // ...MessageRouter,
    ...PostRouter
];

export default AppRoutes;