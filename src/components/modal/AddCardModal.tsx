import React, { useState, useEffect } from 'react';
import styles from './AddCardModal.module.scss';
import { AddCardParamsProps } from '../../interface/types';
import { generateRandomCardNumber, generateRandomCVV, generateRandomExpiryDate } from '../../utils';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (card: AddCardParamsProps) => void;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose, onAddCard }) => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    if (isOpen) {
      setCardNumber(generateRandomCardNumber());
      setExpiryDate(generateRandomExpiryDate());
      setCvv(generateRandomCVV());
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardName.trim()) return;

    const newCard = {
      name: cardName.trim(),
      number: cardNumber,
      expiry: expiryDate,
      cvv: cvv,
    };

    onAddCard(newCard);
    setCardName('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
          <div className={styles.cardPreview}>
            <p>
              <strong>Card Number:</strong> {cardNumber}
            </p>
            <p>
              <strong>Expiry Date:</strong> {expiryDate}
            </p>
            <p>
              <strong>CVV:</strong> {cvv}
            </p>
          </div>

          <div className={styles.modalActions}>
            <button type="submit">Add Card</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
