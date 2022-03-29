import { FC } from 'react';
import * as Styles from './oneColLayout.styles';

interface OneColLayoutProps {
  renderHeader?: () => React.ReactNode;
  renderContent: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
}

export const OneColLayout: FC<OneColLayoutProps> = ({ renderHeader, renderContent, renderFooter }) => {
  return (
    <Styles.OneColLayout>
      {renderHeader ? renderHeader() : null}
      {renderContent ? renderContent() : null}
      {renderFooter ? renderFooter() : null}
    </Styles.OneColLayout>
  );
};
