import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
        <div className="container container-xxl">
          <h2 className={`${styles.hero__title} fadeIn`}>Over a Decade of Expertise</h2>
          <h3 className={`${styles.hero__title} fadeIn`}>
            Empowering Success in Software Product Delivery
          </h3>
          <p className={`${styles.hero__p} fadeIn`}>
            99X has specialized in building software products and platforms for
            over a decade, amassing extensive knowledge on how to successfully
            deliver software products. This knowledge base aims to share that
            expertise for the benefit of Xians and others.
          </p>
          <a className="cta-button fadeIn" href="#sections">Show me how →</a>
        </div>
      </section>
    // <header className={clsx("hero hero--primary", styles.heroBanner)}>
    //   <div className="container">
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro"
    //       >
    //         Way of Work 👆
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`99x WoW ${siteConfig.title}`}
      description="Way of Work <head />"
    >
      <HomepageHeader />
      <main id="sections">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
