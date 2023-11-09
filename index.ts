import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const prisma = new PrismaClient()

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    const unclean:string = String(req.query.id)
    const req_data = JSON.parse(unclean)
    console.log(req.query.id)
    main()
    .then(async () => {
    await prisma.$disconnect()
    })
    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
    })
    async function main() {
            
    }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



