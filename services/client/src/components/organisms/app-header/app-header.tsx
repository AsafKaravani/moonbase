import React from 'react';
import {
  UserButton,
  useClerk,
} from '@clerk/clerk-react';
import { Button } from 'antd';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';

import styles from './app-header.module.css';

type Props = {};

export const AppHeader: React.FC<Props> = (_props) => {
  const {
    user, session, signOutOne, openSignIn,
  } = useClerk();
  session?.getToken().then((res) => console.log(res));
  return (
    <div className={styles.container}>
      {user && <UserButton />}
      {!user && (
        <Button type="primary" icon={<LoginOutlined />} onClick={() => openSignIn()}>
          התחברות
        </Button>
      )}
      {user && (
        <Button type="ghost" danger icon={<LogoutOutlined />} onClick={() => signOutOne()}>
          התנתקות
        </Button>
      )}
    </div>
  );
};
