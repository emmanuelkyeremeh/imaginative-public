import styles from "../styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Nav = () => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <Image src="/imagination-logo.svg" width="40" height="40" />
      </div>
      <div className={styles.navbar_links}>
        <div className={styles.navbar_links_item}>
          <Link href="/">Web Design</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">Web Frameworks</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">Tech News</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">UI</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">Tech Review</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">Graphics</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">DevOps</Link>
        </div>
        <div className={styles.navbar_links_item}>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className={styles.navbar_button}>
        <div className={styles.navbar_button_item}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <div className={styles.navbar_button_item}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
