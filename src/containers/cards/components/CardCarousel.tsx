import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CardCarousel.module.scss';
import { Card } from '../../../interface/types';
import CreditCard from '../../../components/card/CreditCard';
import { Pagination } from 'swiper/modules';
import { GreenEye } from '../../../assets/icons';

interface CardCarouselProps {
  cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [showDetails, setShowDetails] = useState(false);
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
