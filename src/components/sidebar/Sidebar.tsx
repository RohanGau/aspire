import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { AspireLogo } from '../../assets/icons';
import { sidebarItems } from '../../utils';

const Sidebar = () => {
  const [activePath, setActivePath] = useState<string>('/cards');
  const navigate = useNavigate();

  const handleItemClick = (path: string) => {
    setActivePath(path);
  };

  useEffect(() => {
    navigate(activePath);
  }, [activePath]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={AspireLogo} />
        <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      </div>
      <div className={styles.menu}>
        <ul>
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className={item.path === activePath ? styles.active : ''}
              onClick={() => handleItemClick(item.path)}
            >
              <img className={styles.icon} src={item.icon} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
