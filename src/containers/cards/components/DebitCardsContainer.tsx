import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import styles from './DebitCardsContainer.module.scss';
import CardCarousel from './CardCarousel';
import { selectCards } from '../../../store/cardSlice/cardSelectors';
import ActionsPanel from './ActionsPanel';

export interface DebitCardsProps {
  isFetching: boolean;
}

const DebitCardsContainer = ({ isFetching }: DebitCardsProps) => {
  const cards = useSelector(selectCards);
  return (
    <Row className={styles.container}>
      <Col className={styles.leftContainer} xs={12}>
        <div className={styles.cardLeftContainer}>
          <CardCarousel cards={cards} />
          <ActionsPanel />
        </div>
      </Col>
      <Col className={styles.rightContainer} xs={12}>
        <div className={styles.cardRightContainer}>right</div>
      </Col>
    </Row>
  );
};

export default DebitCardsContainer;
