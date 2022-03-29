import { FC } from 'react';
import { OneColLayout } from '../layout/oneColLayout';
import { NavigationBar } from '../layout/navigation/navigation';

export const PageContainer: FC = () => {
  return <OneColLayout renderHeader={() => <NavigationBar />} renderContent={() => <div>test</div>} />;
};