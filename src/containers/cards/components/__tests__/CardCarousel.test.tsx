// // src/components/cardCarousel/__tests__/CardCarousel.test.tsx
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import CardCarousel from '../CardCarousel';
// import { Card } from '../../../../interface/types';
// import { Swiper } from 'swiper/react';

// jest.mock('swiper/css', () => {});
// jest.mock('swiper/css/pagination', () => {});

// jest.mock('swiper/react', () => ({
//   Swiper: ({ children, ...props }: any) => (
//     <div data-testid="swiper" {...props}>
//       {children}
//     </div>
//   ),
//   SwiperSlide: ({ children }: any) => <div data-testid="swiper-slide">{children}</div>,
// }));
// jest.mock('../../../../components/card/CreditCard', () => ({ card, showDetails }: any) => (
//   <div data-testid="credit-card">
//     {card.name} - {showDetails ? 'Details Shown' : 'Details Hidden'}
//   </div>
// ));
// jest.mock('../../../../assets/icons', () => ({
//   GreenEye: 'green-eye-icon.svg',
// }));

// describe('CardCarousel', () => {
//   const mockCards: Card[] = [
//     { id: '1', name: 'Card 1', cardNumber: '1234', expiry: '12/26', cvv: '123' },
//     { id: '2', name: 'Card 2', cardNumber: '5678', expiry: '11/24', cvv: '456' },
//   ];

//   const setActiveIndex = jest.fn();

//   it('renders skeleton when isFetching is true', () => {
//     render(
//       <CardCarousel cards={[]} isFetching={true} activeIndex={0} setActiveIndex={setActiveIndex} />
//     );
//     expect(screen.getByRole('button')).toBeInTheDocument(); // Skeleton renders as button
//   });

//   //   it('renders cards when isFetching is false', () => {
//   //     render(
//   //       <CardCarousel
//   //         cards={mockCards}
//   //         isFetching={false}
//   //         activeIndex={0}
//   //         setActiveIndex={setActiveIndex}
//   //       />
//   //     );
//   //     expect(screen.getAllByTestId('credit-card')).toHaveLength(2);
//   //   });

//   //   it('toggles show/hide card number', () => {
//   //     render(
//   //       <CardCarousel
//   //         cards={mockCards}
//   //         isFetching={false}
//   //         activeIndex={0}
//   //         setActiveIndex={setActiveIndex}
//   //       />
//   //     );

//   //     const toggleButton = screen.getByRole('button', { name: /show card number/i });
//   //     expect(toggleButton).toBeInTheDocument();

//   //     fireEvent.click(toggleButton);
//   //     expect(screen.getByRole('button', { name: /hide card number/i })).toBeInTheDocument();
//   //   });

//   //   it('calls setActiveIndex when slide changes', () => {
//   //     // Since Swiper is mocked, we simulate onSlideChange manually
//   //     render(
//   //       <CardCarousel
//   //         cards={mockCards}
//   //         isFetching={false}
//   //         activeIndex={0}
//   //         setActiveIndex={setActiveIndex}
//   //       />
//   //     );

//   //     // Simulate a slide change manually since swiper events can't be triggered directly here
//   //     const swiper = screen.getByTestId('swiper');
//   //     swiper.props?.onSlideChange?.({ activeIndex: 1 });

//   //     // Alternatively, you can directly call setActiveIndex in test if Swiper is hard to simulate
//   //     expect(setActiveIndex).not.toHaveBeenCalled(); // this will stay not called unless you manually simulate
//   //   });
// });
