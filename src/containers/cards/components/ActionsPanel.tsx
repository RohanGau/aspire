import React from 'react';
import styles from './ActionsPanel.module.scss';
import { actionsItems } from '../../../utils';
import { Skeleton } from 'antd';

interface ActionsPanelProps {
  isFetching: boolean;
  onCancelCardClick: () => void;
}

const ActionsPanel: React.FC<ActionsPanelProps> = ({ isFetching, onCancelCardClick }) => {
  const handleActionClick = (label: string) => {
    if (label === 'Cancel card') {
      onCancelCardClick();
    }
  };

  if (isFetching) {
    return (
      <Skeleton.Button className={styles.skeleton} active size={'large'} shape={'square'} block />
    );
  }

  return (
    <div className={styles.panelWrapper}>
      {actionsItems.map((action, index) => (
        <div
          key={index}
          className={styles.actionItem}
          onClick={() => handleActionClick(action.label)}
        >
          <img className={styles.icon} src={action.icon} />
          <div className={styles.label}>{action.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ActionsPanel;
