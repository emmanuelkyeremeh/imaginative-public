import styles from "../styles/showcase.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";

const BodyCard = ({ height, url }) => {
  const style = {
    height: height,
    backgroundImage: `url(${url})`,
  };
  return (
    <section
      className={`${styles.ShowcaseCard_container} ${styles.ShowcaseCard_banner_edit}`}
      style={style}
    >
      <div className={styles.ShowcaseCard_item}>
        <button className={styles.ShowcaseCard_button}>UNCATEGORIZED</button>
        <h3 className={styles.ShowcaseCard_item_title}>
          Web Design Trends in 2021
        </h3>
      </div>
      <div className={styles.ShowcaseCard_item}>
        <div className={styles.ShowcaseCard_info}>
          <Image
            className={styles.ShowcaseCard_info_image}
            src="/user.png"
            width="20"
            height="20"
          />{" "}
          <span>Emmanuel Kyeremeh</span>
        </div>
        <div className={styles.ShowcaseCard_info}>
          <AccessTimeIcon /> <span>April 8, 2001</span>
        </div>
      </div>
    </section>
  );
};

export default BodyCard;
