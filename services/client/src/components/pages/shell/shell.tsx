import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '@components/organisms/app-header';
import { AppFooter } from '@components/organisms/app-footer';

import styles from './shell.module.less';

const {
  Header, Footer, Content,
} = Layout;

type Props = {};

export const Shell: React.FC<Props> = (_props) => {
  return (
    <div className={styles.container}>
      <Layout className={styles.layout}>

        <Header className={styles.header}>
          <AppHeader />
        </Header>

        <Content>
          <Outlet />
        </Content>

        <Footer>
          <AppFooter />
        </Footer>

      </Layout>
    </div>
  );
};
