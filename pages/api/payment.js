import axios from "axios";
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200,
  })
  const data = JSON.stringify(req.body);
  const response = await axios.post('https://a010277d-1265-4ff9-a481-3e797f772c20.mock.pstmn.io/pay', data)
  res.status(200).json(response.data)
}