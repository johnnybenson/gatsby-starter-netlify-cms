import React from 'react';
import cx from 'classnames';

import withReleaseInfo from '../../common/lib/withReleaseInfo';
import { isVideoAsset, isImageAsset } from '../../common/lib/expressions';

import CTA from '../CTA';

import styles from './styles.module.scss';

const HeroContainer = ({ background, fullScreen, children }) => {
  const isImage = isImageAsset(background);
  const isVideo = isVideoAsset(background);

  // Prepare inline styles to apply image file
  const inlineStyle = {};
  if (isImage) {
    inlineStyle.backgroundImage = `url("${`/${background}`}")`;
  }

  // Prepare video element
  let videoBg;
  let videoExt;
  if (isVideo) {
    // Grab Video file extension to set <source type="video/[mp4|avi|webm]">
    videoExt = background.split('.').pop();
    // Video Tag
    videoBg = (
      <video
        id="hero-background-video"
        className={cx('hero--video', styles.HeroVideo)}
        playsInline
        autoPlay
        muted
        loop
        // TODO: Consider Poster Frame
        // poster=""
      >
        <source src={background} type={`video/${videoExt}`} />
      </video>
    );
  }

  return (
    <div
      className={cx(
        {
          [styles.HeroFullScreen]: fullScreen,
          [styles.HeroBgImage]: isImage,
          [styles.HeroBgVideo]: isVideo,
        },
        styles.Hero,
        'hero'
      )}
      style={inlineStyle}
    >
      {videoBg}
      {children}
    </div>
  );
};

const Hero = ({ release, ...data }) => {
  const { hide, fullScreen, html } = data;

  debugger;

  if (hide) {
    return null;
  }

  return (
    <HeroContainer
      background={data.background || '/images/site.png'}
      fullScreen={fullScreen}
    >
      <div
        className={cx('hero--content', styles.Content)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CTA label={data.ctaLabel} url={data.ctaUrl} />
    </HeroContainer>
  );
};

export default withReleaseInfo(Hero);
