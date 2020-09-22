// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import DarkmodeToggle from '../Darkmode/DarkmodeToggle';
import '../Darkmode/Darkmode.scss';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';


type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <DarkmodeToggle />
        <br></br>
        <Copyright copyright={copyright} />
        <span>
        <Link href="https://github.com/alxshelepenok/gatsby-starter-lumen">Original Gatsby Starter template</Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
