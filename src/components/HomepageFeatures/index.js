import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "良好的幫助文章助文章",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>提供良好的幫助文章文章</>
  },
  {
    title: "社區",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>雙龍體育支援社區由大家以起起解答</>
  },
  {
    title: "專業聯繫",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>雙龍體育支持人員為你一對一解答</>
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
