import React from 'react';
import cx from 'classnames';

import withReleaseInfo from '../../common/lib/withReleaseInfo';

import Logo from '../Logo';

import styles from './styles.module.scss';

const Footer = ({ release, ...data }) => {
  const { hide, html } = data;
  if (hide) {
    return null;
  }

  return (
    <footer id={`${data.name}`} className={cx('footer', styles.Footer)}>
      <Logo className={cx('footer--logo', styles.Logo)} />
      <div
        className={cx('footer--content', styles.Content)}
        dangerouslySetInnerHTML={{ __html: html || '' }}
      />
    </footer>
  );
};

export default withReleaseInfo(Footer);
