import Sidebar from '../components/sidebar/Sidebar';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <main className={styles.mainLayout__content}>{children}</main>
    </div>
  );
};

export default MainLayout;
