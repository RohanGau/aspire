// ActionsPanel.tsx
import React from 'react';
import styles from './ActionsPanel.module.scss';
import { actionsItems } from '../../../utils';

const ActionsPanel: React.FC = () => {
  return (
    <div className={styles.panelWrapper}>
      {actionsItems.map((action, index) => (
        <div key={index} className={styles.actionItem}>
          <img className={styles.icon} src={action.icon} />
          <div className={styles.label}>{action.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ActionsPanel;
