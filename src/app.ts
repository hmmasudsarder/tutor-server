/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import express, { NextFunction, Request, Response } from 'express'
import authRoute from './module/auth/auth.route';
import userRouter from './module/user/user.router';
import cors from "cors";
import requestRouter from './module/sendRequestTuror/request.router';
import paymentRouter from './module/payments/paymentRouter';
import router from './routes';

const app = express()
// middleware
app.use(express.json())
app.use(cors({ origin: ["https://tutor-link-delta.vercel.app", "http://localhost:3000", "https://tutor-link-client.vercel.app"], credentials: true }));
// router 
app.use('/api', router);
// app.use('/api/user', userRouter)
// app.use('/api/auth', authRoute)
// app.use("/api/requests", requestRouter);
// app.use("/api", paymentRouter);



app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.log('error from app.ts', err)
  res
    .status(httpStatus.INTERNAL_SERVER_ERROR,)
    .json({ success: false, message: err.message, error: err })
})

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found'
  })
})

export default app
