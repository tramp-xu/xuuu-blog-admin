
import UserRouter from "./users/index";
import ArticleRouter from "./article/index";
/**
 * All application routes.
 */
const AppRoutes = [
    ...UserRouter,
    ...ArticleRouter
];

export default AppRoutes;