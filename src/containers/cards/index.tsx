import { useEffect, useState } from 'react';
import BalanceSection from './components/BalanceSection';
import styles from './Card.module.scss';
import AddCardModal from '../../components/modal/AddCardModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  selectCards,
  selectCardsError,
  selectCardsFetchLoading,
} from '../../store/cardSlice/cardSelectors';
import { addCard, fetchCards } from '../../store/cardSlice/cardSlice';
import { AddCardParamsProps } from '../../interface/types';

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(selectCards);
  const isCardFetching = useSelector(selectCardsFetchLoading);
  const cardFetchError = useSelector(selectCardsError);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (card: AddCardParamsProps) => {
    dispatch(addCard(card));
  };

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchCards());
    }
  }, [dispatch]);

  useEffect(() => {
    console.log('cards :', cards);
  }, [cards]);

  return (
    <div className={styles.container}>
      <BalanceSection balance={3000} currency={'$$'} onhandleAddCard={() => setIsModalOpen(true)} />
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
};

export default Cards;
