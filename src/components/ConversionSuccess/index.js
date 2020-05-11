import React from 'react';
import cx from 'classnames';

import { trackEvent } from '../../common/lib/analytics';
import withReleaseInfo from '../../common/lib/withReleaseInfo';

import styles from './styles.module.scss';

const ConversionSuccess = ({ release, ...data }) => {
  React.useEffect(() => {
    if (data.redirect === true) {
      setTimeout(() => {
        document.location.href = '/';
      }, 5000);
    }
  }, [data.redirect]);

  React.useEffect(() => {
    trackEvent(trackEvent.EVENT__CONVERSION__SUCCESS, { release });
  }, [release]);

  return (
    <div
      id={`${data.name}`}
      className={cx('success', styles.ConversionSuccess)}
    >
      <div
        className={cx('success--content', styles.Content)}
        dangerouslySetInnerHTML={{ __html: data.html || '' }}
      />
    </div>
  );
};

export default withReleaseInfo(ConversionSuccess);
