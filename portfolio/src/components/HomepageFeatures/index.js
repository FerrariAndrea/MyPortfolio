import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',  
    img: '/MyPortfolio/img/Github.png',
    url:"https://github.com/FerrariAndrea",
    description: (
     <a href="https://github.com/FerrariAndrea" target="_blank">My Github profile</a>
    ),
  },
  {
    title: 'Master\'s Degree in Computer Engineering at the University of Bologna',
    img: '/MyPortfolio/img/univerity.png',
  },
  { 
    title: '',
    img: '/MyPortfolio/img/linkedin.png',
    url:"https://www.linkedin.com/in/andrea-ferrari-11a29815a/",
    description: (
      <a href="https://www.linkedin.com/in/andrea-ferrari-11a29815a/"  target="_blank">My Linkedin profile</a>
     ),
  },
];

function Feature({Svg, title, description, img=null,url=null}) {
  if(img!==null){
    if(url!==null){
      return (
        <div className={clsx('col col--4')}>
          <div className="text--center">
            <a href={url} target="_blank">
              <img src={img} role="img" style={{width:"20vmin"}}/>
            </a>
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );
    }else{
      return (
        <div className={clsx('col col--4')}>
          <div className="text--center">
            <img src={img} role="img" style={{width:"20vmin"}}/>
          </div>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      );
    }
  }else{
    return (
      <div className={clsx('col col--4')}>
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
