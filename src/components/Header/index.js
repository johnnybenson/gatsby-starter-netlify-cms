import React from 'react';
import cx from 'classnames';

import withReleaseInfo from '../../common/lib/withReleaseInfo';
import Navigation from '../Navigation';
import Logo from '../Logo';

import styles from './styles.module.scss';

const Header = ({ release, ...data }) => {
  const { hide } = data;

  if (hide) {
    return null;
  }

  return (
    <header className={cx('header', styles.Header)}>
      <h1 className={cx('header--h1', styles.HeaderH1)}>
        <a href="/">
          <Logo />
        </a>
      </h1>
      <Navigation />
    </header>
  );
};

export default withReleaseInfo(Header);
