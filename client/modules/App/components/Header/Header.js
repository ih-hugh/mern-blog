import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './Header.css';
import bgImage from '../../assets/writer.jpg';
import fbStyles from '../../../../styles/flexboxgrid.css';

const Header = () => (
  <Parallax bgImage={bgImage} strength={400} >
    <div style={{ position: 'relative', top: '150px', height: '482px' }}>
      <div className={`${fbStyles['container-fluid']}`}>
        <div className={`${fbStyles.row}`}>
          <div className={styles['header-copy']}>
            <h1>Magic Blog</h1>
            <h2>Write About Anything!</h2>
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);

export default Header;
