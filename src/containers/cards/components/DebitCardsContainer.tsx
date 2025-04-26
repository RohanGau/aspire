import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DebitCardsContainer.module.scss';
import CardCarousel from './CardCarousel';
import { selectCards } from '../../../store/cardSlice/cardSelectors';
import ActionsPanel from './ActionsPanel';
import RecentTransactions from './RecentTransactions';
import { AppDispatch } from '../../../store';
import { deleteCard } from '../../../store/cardSlice/cardSlice';
import { useState } from 'react';

export interface DebitCardsProps {
  isFetching: boolean;
}

const DebitCardsContainer = ({ isFetching }: DebitCardsProps) => {
  const cards = useSelector(selectCards);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCard = () => {
    const cardIdToDelete = cards[activeIndex]?.id;
    if (cardIdToDelete) {
      dispatch(deleteCard(cardIdToDelete));
    }
  };

  return (
    <Row className={styles.container}>
      <Col className={styles.leftContainer} xs={12}>
        <div className={styles.cardLeftContainer}>
          <CardCarousel
            isFetching={isFetching}
            cards={cards}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <ActionsPanel isFetching={isFetching} onCancelCardClick={handleDeleteCard} />
        </div>
      </Col>
      <Col className={styles.rightContainer} xs={12}>
        <div className={styles.cardRightContainer}>
          <RecentTransactions />
        </div>
      </Col>
    </Row>
  );
};

export default DebitCardsContainer;
