import React from 'react';
import cx from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';

import withReleaseInfo from '../../common/lib/withReleaseInfo';

import styles from './styles.module.scss';

const Logo = ({ release, className, ...data }) => {
  const metadata = useStaticQuery(graphql`
    query {
      site {
        ...SiteInfo
      }
    }
  `);

  const { defaultTitle } = metadata.site.siteMetadata;
  const { hide } = data;

  if (hide) {
    return null;
  }

  const src = `/images/${data.asset || 'logo.svg'}`;

  return (
    <img
      alt={defaultTitle || 'Logo'}
      className={cx('logo', styles.Logo, className)}
      src={src}
    />
  );
};

export default withReleaseInfo(Logo);
