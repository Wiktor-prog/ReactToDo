import React from 'react';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src="https://i.postimg.cc/PJ0pWhM9/space.png"/>
  </header>
);

export default Hero;