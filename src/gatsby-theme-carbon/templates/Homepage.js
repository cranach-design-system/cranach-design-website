import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

// import Carbon from '../../images/carbon.jpg';
import Cranach from '../../images/cranach-hero.jpg';

const FirstLeftText = () => <p>Cranch Design</p>;

const FirstRightText = () => (
  <p>
    <b>Cranach Design</b> ist ein Design System für digital Produkte des Cranach Digital Archives
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>Die Designsprache für das Cranach Digital Archive</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Cranach} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#dfdfdf"
      color="black"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="black"
      backgroundColor="#dfdfdf"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
