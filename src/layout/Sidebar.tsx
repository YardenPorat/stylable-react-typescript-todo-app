import React, { useState } from 'react';
import { st, classes } from './sidebar.st.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [isShownSidebar, setIsShownSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsShownSidebar((prevState) => !prevState);
  };

  return (
    <div className={st(classes.root, className)}>
      <div className={classes.box}></div>
      <nav className={st(classes.sidebar, { hidden: isShownSidebar })}>
        <div>
          <div className={classes.togglebtn} onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="list">
            <div className={classes.item}>Home</div>
            <div className={classes.item}>Login</div>
            <div className={classes.item}>Gallery</div>
            <div className={classes.item}>Contact us</div>
          </div>
        </div>
      </nav>
    </div>
  );
};
