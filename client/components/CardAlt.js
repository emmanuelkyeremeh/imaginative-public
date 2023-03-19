import styles from "../styles/cardAlt.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const CardAlt = ({ url, height }) => {
  const style = {
    backgroundImage: `url(${url})`,
    height: height,
  };
  return (
    <section className={styles.cardalt_container}>
      <div className={styles.cardalt_banner} style={style}>
        1
      </div>
      <div className={styles.cardalt_container_info}>
        <button className="ShowcaseCard_button">UNCATEGORIZED</button>
        <h3>Best Designs of 2021</h3>
        <p>
          {" "}
          <AccessTimeIcon style={{ fontSize: "15px" }} /> May 3, 2000
        </p>
      </div>
    </section>
  );
};

export default CardAlt;
