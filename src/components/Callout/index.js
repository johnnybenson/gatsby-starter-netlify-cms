import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withReleaseInfo from '../../common/lib/withReleaseInfo';

import styles from './styles.module.scss';

export const CALLOUT_ALIGNED_LEFT = 'left-aligned';
export const CALLOUT_ALIGNED_RIGHT = 'right-aligned';
export const CALLOUT_ALIGNED_CENTER = 'center-aligned';
export const CALLOUT_BIG_NUMBERS = 'big-numbers';
export const CALLOUT_FULL_BLEED = 'full-bleed';
export const CALLOUT_FOUR_UP = 'four-up';
export const CALLOUT_FORMATS = [
  CALLOUT_ALIGNED_LEFT,
  CALLOUT_ALIGNED_RIGHT,
  CALLOUT_ALIGNED_CENTER,
  CALLOUT_BIG_NUMBERS,
  CALLOUT_FULL_BLEED,
  CALLOUT_FOUR_UP,
];

const Callout = ({ release, ...data }) => {
  const calloutFormat = data.format;
  const inlineStyle = {};

  if (data.background) {
    inlineStyle.backgroundImage = `url("${`/images/${data.background}`}")`;
  }

  if (data.hide === true) {
    return null;
  }

  return (
    <div
      id={`${data.name}`}
      className={cx('callout', styles.Callout, {
        [styles.CalloutLeft]: calloutFormat === CALLOUT_ALIGNED_LEFT,
        [styles.CalloutRight]: calloutFormat === CALLOUT_ALIGNED_RIGHT,
        [styles.CalloutCenter]: calloutFormat === CALLOUT_ALIGNED_CENTER,
        [styles.CalloutFull]: calloutFormat === CALLOUT_FULL_BLEED,
        [styles.CalloutBigNumbers]: calloutFormat === CALLOUT_BIG_NUMBERS,
        [styles.CalloutFourUp]: calloutFormat === CALLOUT_FOUR_UP,
        [styles.hasBg]: data.background,
      })}
      style={inlineStyle}
    >
      <div
        className={cx('callout-content', styles.Content)}
        dangerouslySetInnerHTML={{ __html: data.html || '' }}
      />
    </div>
  );
};

Callout.propTypes = {
  name: PropTypes.string,
  format: PropTypes.oneOf(CALLOUT_FORMATS),
};

export default withReleaseInfo(Callout);
