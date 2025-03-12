import { Router } from "express";
import userRouter from "../module/user/user.router";
import authRoute from "../module/auth/auth.route";
import requestRouter from "../module/sendRequestTuror/request.router";
import paymentRouter from "../module/payments/paymentRouter";

const router = Router();

const moduleRoutes = [
    {
      path: '/auth',
      route: authRoute,
    },
    {
      path: '/user',
      route: userRouter,
    },
    {
      path: '/requests',
      route: requestRouter,
    },
    {
      path: '/',
      route: paymentRouter,
    },
  ];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;