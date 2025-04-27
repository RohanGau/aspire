import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import styles from './CardCarousel.module.scss';
import { Card } from '../../../interface/types';
import CreditCard from '../../../components/card/CreditCard';
import { Pagination } from 'swiper/modules';
import { GreenEye } from '../../../assets/icons';
import { Skeleton } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';

interface CardCarouselProps {
  cards: Card[];
  isFetching: boolean;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards, isFetching, setActiveIndex }) => {
  const [showDetails, setShowDetails] = useState(false);
  if (isFetching) {
    return (
      <Skeleton.Button className={styles.skeleton} active size={'large'} shape={'square'} block />
    );
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.toggleButton}>
        <button onClick={() => setShowDetails(!showDetails)}>
          <img src={GreenEye} />
          {showDetails ? 'Hide Card Number' : 'Show Card Number'}
        </button>
      </div>
      <Swiper
        spaceBetween={20}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <CreditCard card={card} showDetails={showDetails} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
