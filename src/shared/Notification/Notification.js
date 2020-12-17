import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Notification.module.css';

const Notification = ({ error, message }) => {
  return (
    <CSSTransition
      in={error}
      appear={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={styles.container}>
        <p className={styles.text}>{message}</p>
      </div>
    </CSSTransition>
  );
};

export default Notification;
