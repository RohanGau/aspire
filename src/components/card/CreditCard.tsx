import React from 'react';
import styles from './CreditCard.module.scss';
import { Card } from '../../interface/types';

interface CreditCardProps {
  card: Card;
  showDetails: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({ card, showDetails }) => {
  const maskCardNumber = (number: string) => {
    return number.replace(/\d/g, '•');
  };

  const maskCVV = (cvv: string) => {
    return cvv.replace(/\d/g, '*');
  };

  return (
    <div className={styles.card}>
      <div className={styles.logo}>aspire</div>
      <div className={styles.cardName}>{card.name}</div>
      <div className={styles.cardNumber}>
        {showDetails ? card.number : maskCardNumber(card.number)}
      </div>
      <div className={styles.cardDetails}>
        <span>Thru: {card.expiry}</span>
        <span className={styles.cardDetailsCvv}>
          CVV: {showDetails ? card.cvv : maskCVV(card.cvv)}
        </span>
      </div>
      <div className={styles.visaLogo}>VISA</div>
    </div>
  );
};

export default CreditCard;
