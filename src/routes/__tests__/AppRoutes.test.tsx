import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../AppRoutes';

jest.mock('../../containers/home', () => () => <div>HomeScreen Mock</div>);
jest.mock('../../containers/cards', () => () => <div>CardsScreen Mock</div>);
jest.mock('../../layout/MainLayout', () => ({ children }: any) => (
  <div>MainLayout Mock {children}</div>
));

describe('AppRoutes', () => {
  it('should render HomeScreen on "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('HomeScreen Mock')).toBeInTheDocument();
  });

  it('should render HomeScreen on "/home" route', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('HomeScreen Mock')).toBeInTheDocument();
  });

  it('should render CardsScreen on "/cards" route', () => {
    render(
      <MemoryRouter initialEntries={['/cards']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('CardsScreen Mock')).toBeInTheDocument();
  });

  it('should redirect to "/" for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <AppRoutes />
      </MemoryRouter>
    );

    // After redirection, HomeScreen should be rendered
    expect(screen.getByText('HomeScreen Mock')).toBeInTheDocument();
  });
});
