import { NextApiRequest, NextApiResponse } from 'next';

import { setStoraj } from '../../../server';

const initializer = (req: NextApiRequest, res: NextApiResponse): void => {
  setStoraj();

  res.status(200).json({ message: 'Hello Everyone!' });
};

export default initializer;
