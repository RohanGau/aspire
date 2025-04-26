import React, { useState } from 'react';
import { Collapse, Typography } from 'antd';
import styles from './RecentTransactions.module.scss';
import { dummyTransactions } from '../../../utils/constant';
import { CreditCard, Transaction } from '../../../assets/icons';

const { Panel } = Collapse;

const RecentTransactions: React.FC = () => {
  const [viewAll, setViewAll] = useState(false);
  const visibleTransactions = viewAll ? dummyTransactions : dummyTransactions.slice(0, 4);
  return (
    <Collapse
      defaultActiveKey={['1']}
      ghost
      expandIconPosition="end"
      className={styles.collapseWrapper}
    >
      <Panel
        header={
          <Typography.Text className={styles.header}>
            <img src={Transaction} />
            Recent transactions
          </Typography.Text>
        }
        className={styles.panel}
        key="1"
      >
        <div className={`${styles.transactionsList} ${viewAll ? styles.viewAll : ''}`}>
          {visibleTransactions.map((txn) => (
            <div key={txn.id} className={styles.transactionItem}>
              <img className={styles.iconWrapper} src={txn.icon} />
              <div className={styles.detailsWrapper}>
                <div className={styles.topRow}>
                  <div className={styles.merchant}>{txn.merchant}</div>
                  <div className={styles.amount} style={{ color: txn.amountColor }}>
                    {txn.amount}
                  </div>
                </div>
                <div className={styles.bottomRow}>
                  <span className={styles.date}>{txn.date}</span>
                  <span className={styles.type}>
                    <img src={CreditCard} />
                    {txn.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!viewAll && (
          <div className={styles.viewAllButton} onClick={() => setViewAll(true)}>
            View all card transactions
          </div>
        )}
      </Panel>
    </Collapse>
  );
};

export default RecentTransactions;
