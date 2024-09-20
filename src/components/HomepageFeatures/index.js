import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Delivery Framework",
    Svg: require("@site/static/img/icon-1.svg").default,
    url: "/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework",
    description: (
      <>Streamlining Processes for On-Time, Quality Delivery</>
    ),
  },
  {
    title: "Engineering Excellence Framework",
    Svg: require("@site/static/img/icon-2.svg").default,
    url: "/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework",
    description: (
      <>
        A Blueprint for Achieving Technical Mastery
      </>
    ),
  },
  {
    title: "Well Architecture Framework",
    Svg: require("@site/static/img/icon-3.svg").default,
    url: "/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework",
    description: <>Ensuring Best Practices for Robust System Design</>,
  },
  {
    title: "Product Health Review Guidelines",
    Svg: require("@site/static/img/icon-4.svg").default,
    url: "/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework",
    description: <>Structured Reviews to Maximize Product Longevity.</>,
  },
  {
    title: "Winning Product Platform",
    Svg: require("@site/static/img/icon-5.svg").default,
    url: "/docs/facilitated-teams/engineering/architecting/99x-well-architected-framework",
    description: <>A Platform Designed for Market-Leading Products.</>,
  }
];

function Feature({ Svg, title, url, description }) {
  return (
    <Link to={url} className={styles.frameworkCard}>
      <div className={styles.freameworkCardImg}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.freameworkCardDetails}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.frameworksWrapper}>
      <div className="container container-xxl">
        <div>
          <h4 className={styles.frameworksTitleSub}>The knowledge base</h4>
          <h2 className={styles.frameworksTitle}>
            Your product’s core delivered in days, not months
          </h2>
        </div>
        <div>
          <div className={styles.frameworks}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
