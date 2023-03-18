import { NextPage } from 'next';
import Link from 'next/link';

import { Typography } from '../elements';

const NotFoundPage: NextPage = () => (
  <Typography as="h1" variant="title1">
    404 - Not Found <Link href="/">Home</Link>
  </Typography>
);

export default NotFoundPage;
