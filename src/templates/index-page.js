import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Callout from '../components/Callout';
import Conversion from '../components/Conversion';
import Footer from '../components/Footer';

export const IndexPageTemplate = (props) => (
  <>
    <Header {...props.header} />
    <Hero {...props.hero} />
    <Callout name="Callout1" {...props.callout1} />
    <Callout name="Callout2" {...props.callout2} />
    <Callout name="Callout3" {...props.callout3} />
    <Callout name="Callout4" {...props.callout4} />
    <Conversion {...props.conversion} />
    <Footer {...props.footer} />
  </>
);

IndexPageTemplate.propTypes = {
  header: PropTypes.object,
  footer: PropTypes.object,
  hero: PropTypes.object,
  conversion: PropTypes.object,
  callout1: PropTypes.shape({
    hide: PropTypes.bool,
    format: PropTypes.string,
  }),
  callout2: PropTypes.shape({
    hide: PropTypes.bool,
    format: PropTypes.string,
  }),
  callout3: PropTypes.shape({
    hide: PropTypes.bool,
    format: PropTypes.string,
  }),
  callout4: PropTypes.shape({
    hide: PropTypes.bool,
    format: PropTypes.string,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        header {
          hide
          logo {
            hide
            image
          }
        }
        hero {
          hide
          fullscreen
          ctaLabel
          ctaUrl
          background
        }
        callout1 {
          hide
          format
        }
        callout2 {
          hide
          format
        }
        callout3 {
          hide
          format
        }
        callout4 {
          hide
          format
        }
        conversion {
          hide
          useCustom
          heading
          first
          last
          email
          submit
        }
        footer {
          hide
          logo {
            hide
            image
          }
        }
      }
    }
  }
`;
