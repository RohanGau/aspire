import styles from './BalanceSection.module.scss';
import { useState } from 'react';

interface BalanceSectionProps {
  balance: number;
  currency: string;
}

const BalanceSection = ({ balance, currency }: BalanceSectionProps) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceCard__header}>
        <p className={styles.balanceCard__label}>Available Balance</p>
        <button
          className={styles.balanceCard__toggle}
          onClick={() => setVisible((prev) => !prev)}
          aria-label="Toggle Balance Visibility"
        ></button>
      </div>

      <div className={styles.balanceCard__amount}>
        {visible ? (
          <h2>
            {currency} {balance.toLocaleString()}
          </h2>
        ) : (
          <h2>****</h2>
        )}
      </div>

      <button className={styles.balanceCard__cta}>{/* <FaPlus /> New Card */}</button>
    </div>
  );
};

export default BalanceSection;
