import type { NextPage } from 'next';
import { OneColLayout } from '../src/layout/oneColLayout';
import { ParsedContent } from '../src/parsedContent/parsedContent';

const Home: NextPage = () => {
  return (
    <OneColLayout
      renderContent={() => (
        <ParsedContent content="My favorite search engine is [Duck Duck Go](https://duckduckgo.com)." />
      )}
    />
  );
};

export default Home;
