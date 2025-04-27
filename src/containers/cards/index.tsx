import { useEffect, useState } from 'react';
import BalanceSection from './components/BalanceSection';
import styles from './Card.module.scss';
import AddCardModal from '../../components/modal/AddCardModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { selectCardsFetchLoading } from '../../store/cardSlice/cardSelectors';
import { addCard, fetchCards } from '../../store/cardSlice/cardSlice';
import { AddCardParamsProps } from '../../interface/types';
import { Tabs, TabsProps } from 'antd';
import DebitCardsContainer from './components/DebitCardsContainer';

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isCardFetching = useSelector(selectCardsFetchLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (card: AddCardParamsProps) => {
    dispatch(addCard(card));
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'My debit cards',
      children: <DebitCardsContainer isFetching={isCardFetching} />,
    },
    {
      key: '2',
      label: 'All company cards',
      children: 'Company Cards',
    },
  ];

  return (
    <div className={styles.container}>
      <BalanceSection
        isLoading={isCardFetching}
        balance={3000}
        currency={'$$'}
        onhandleAddCard={() => setIsModalOpen(true)}
      />
      <Tabs defaultActiveKey="1" items={items} />
      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
};

export default Cards;
