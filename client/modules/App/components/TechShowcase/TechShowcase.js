import React from 'react';
import styles from './TechShowcase.css';

const TechShowcase = () => {
  return (
    <div className={`${styles['tech-showcase']}`}>
      <div className={`${styles['tech-box']}`}>
        <a href="https://www.mongodb.com/" target="_blank">
          <img className="mongodb-img" role="presentation" src="http://res.cloudinary.com/hashnode/image/upload/w_500,e_grayscale/v1466456749/static_imgs/mern/v2/mongodb.jpg" />
        </a>
      </div>
      <div className={`${styles['tech-box']}`}>
        <a href="http://expressjs.com" target="_blank">
          <img className="express-img" role="presentation" src="http://res.cloudinary.com/hashnode/image/upload/w_500,e_grayscale/v1466456747/static_imgs/mern/v2/express.jpg" />
        </a>
      </div>
      <div className={`${styles['tech-box']}`}>
        <a href="https://facebook.github.io/react/" target="_blank">
          <img className="react-img" role="presentation" src="http://res.cloudinary.com/hashnode/image/upload/w_500,e_grayscale/v1466456747/static_imgs/mern/v2/react.png" />
        </a>
      </div>
      <div className={`${styles['tech-box']}`}>
        <a href="https://nodejs.org/en/" target="_blank">
          <img className="nodejs-img" role="presentation" src="http://res.cloudinary.com/hashnode/image/upload/w_500,e_grayscale/v1466456747/static_imgs/mern/v2/nodejs.png" />
        </a>
      </div>
      <div className={`${styles['tech-box']}`}>
        <a href="http://redux.js.org/" target="_blank">
          <img className="redux-img" role="presentation" src="http://res.cloudinary.com/hashnode/image/upload/w_500,e_grayscale/v1466456747/static_imgs/mern/v2/redux-logo.png" />
        </a>
      </div>
      <div className={`${styles['tech-box']}`}>
        <a href="https://webpack.github.io/" target="_blank">
          <img className="webpack-img" role="presentation" src="http://res.cloudinary.com/hashnode/image/upload/w_500,e_grayscale/v1466456748/static_imgs/mern/v2/webpack.png" />
        </a>
      </div>
    </div>
  );
};

export default TechShowcase;
