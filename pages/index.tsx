import type { NextPage } from 'next';
import { OneColLayout } from '../src/layout/oneColLayout';

const Home: NextPage = () => {
  return <OneColLayout renderContent={() => <div>Hello world!</div>} />;
};

export default Home;
