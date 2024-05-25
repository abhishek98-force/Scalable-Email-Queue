import { Worker, Job } from 'bullmq';
import {sendEmail} from '../emailModule';
const worker = new Worker('mssgQueue', async (job: Job) => {
  // Optionally report some progress
  const dta = job.data;
  await sendEmail(dta);
}
  , { connection : {
        host: process.env.REDIS_HOST_NAME,
        port: Number(process.env.REDIS_PORT),
        password : process.env.REDIS_PASSWORD,
        username : process.env.REDIS_USERNAME
}});