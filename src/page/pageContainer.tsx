import { FC } from 'react';
import { OneColLayout } from '../layout/oneColLayout';
import { NavigationBar } from '../layout/navigation/navigation';
import { Header } from '../layout/header/header';

export const PageContainer: FC = () => {
  return (
    <OneColLayout
      renderHeader={() => (
        <div>
          <NavigationBar />
          <Header />
        </div>
      )}
      renderContent={() => <div>test</div>}
    />
  );
};
