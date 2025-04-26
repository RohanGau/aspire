import styles from './BalanceSection.module.scss';

interface BalanceSectionProps {
  balance: number;
  currency: string;
  onhandleAddCard: () => void;
}

const BalanceSection = ({ balance, currency, onhandleAddCard }: BalanceSectionProps) => {
  return (
    <div className={styles.balanceCard}>
      <div className={styles.balanceCard__header}>
        <p className={styles.balanceCard__label}>Available Balance</p>
        <div className={styles.balanceCard__priceContainer}>
          <span className={styles.balanceCard__currency}>{currency}</span>
          <h2 className={styles.balanceCard__currencyText}>{balance.toLocaleString()}</h2>
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
