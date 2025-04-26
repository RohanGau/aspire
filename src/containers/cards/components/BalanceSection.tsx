import styles from './BalanceSection.module.scss';
import { Skeleton } from 'antd';

interface BalanceSectionProps {
  isLoading: boolean;
  balance: number;
  currency: string;
  onhandleAddCard: () => void;
}

const BalanceSection = ({ isLoading, balance, currency, onhandleAddCard }: BalanceSectionProps) => {
  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceCard__header}>
        <p className={styles.balanceCard__label}>Available Balance</p>
        <div className={styles.balanceCard__priceContainer}>
          <span className={styles.balanceCard__currency}>{currency}</span>
          {isLoading ? (
            <Skeleton.Button active size={'default'} shape={'square'} />
          ) : (
            <h2 className={styles.balanceCard__currencyText}>{balance.toLocaleString()}</h2>
          )}
        </div>
      </div>

      <div className={styles.balanceCard__buttonContainer}>
        <button className={styles.balanceCard__cta} onClick={onhandleAddCard}>
          New Card
        </button>
      </div>
    </div>
  );
};

export default BalanceSection;
