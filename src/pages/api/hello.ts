// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getTranslation from './getTranslation';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // return googleSpreadsheet(req, res);
    return getTranslation(req, res);
  }
  // res.status(200).json({ name: 'John Doe' })
}
