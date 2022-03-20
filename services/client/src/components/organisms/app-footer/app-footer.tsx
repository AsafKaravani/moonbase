import React from 'react';
import styles from './app-footer.module.css';

type Props = {};

export const AppFooter: React.FC<Props> = (_props) => {
  return (
    <div className={styles.container}>
      AppFooter is working.
    </div>
  );
};
