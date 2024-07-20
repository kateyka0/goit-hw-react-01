import React from 'react';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendItem}>
    <img className={styles.avatar} src={avatar} alt="User avatar" />
    <p className={styles.name}>{name}</p>
    <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);


export default FriendListItem;