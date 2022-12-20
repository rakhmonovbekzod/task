
import NextCors from 'nextjs-cors';
export default async function handler(req, res) {
    await NextCors(req, res, {
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200,
    })
    const data  = req.body;
    res.status(200).json(data)
}