import React from 'react';
import styles from './app-header.module.css';

type Props = {};

export const AppHeader: React.FC<Props> = (_props) => {
  return (
    <div className={styles.container}>
      Header is working.
    </div>
  );
};
