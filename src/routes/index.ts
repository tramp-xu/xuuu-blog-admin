
import UserRouter from "./users/index";
import PostRouter from "./post/index";
/**
 * All application routes.
 */
const AppRoutes = [
    ...PostRouter,
    ...UserRouter
];

export default AppRoutes;