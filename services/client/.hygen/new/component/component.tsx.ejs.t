---
to: <%= absPath %>/<%= h.changeCase.param(component_name) %>.tsx
---
import React from 'react';
import styles from './<%= h.changeCase.param(component_name) %>.module.css';

type Props = {};

export const <%= component_name %>: React.FC<Props> = (_props) => {
  return <div className={styles.container} />;
};
