import { NextPage } from 'next';

import { Iframe } from '../elements';

const SettingsPage: NextPage = () => (
  <Iframe
    all="unset"
    width="100vw"
    height="100vh"
    src={process.env.NEXT_PUBLIC_SETTINGS_URL}
  />
);

export default SettingsPage;
