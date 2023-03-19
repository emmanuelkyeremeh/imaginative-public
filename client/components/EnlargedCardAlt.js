import styles from "../styles/cardAlt.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const EnlargedCardAlt = ({ url, height }) => {
  const style = {
    backgroundImage: `url(${url})`,
    height: height,
  };
  return (
    <section className={styles.EnlargedCardAlt_container}>
      <div className={styles.Enlarged_cardalt_banner} style={style}>
        1
      </div>
      <div className={styles.Enlarged_cardalt_container_info}>
        <button className="ShowcaseCard_button">UNCATEGORIZED</button>
        <h3>Best Designs of 2021</h3>
        <p>
          {" "}
          <AccessTimeIcon style={{ fontSize: "15px" }} /> May 3, 2000
        </p>
        <p className={styles.Enlarged_cardalt_desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          debitis labore delectus dolore vitae asperiores eligendi possimus
          perspiciatis dolor odio laboriosam cupiditate, hic eveniet nostrum
          numquam quia ex, aliquam qui! Dignissimos eaque magni nostrum error
          consequuntur, quae a id excepturi. Ab dignissimos ipsa numquam fugiat
          dicta vero consequatur ad ipsam in totam illo inventore repellat
          praesentium quo voluptatibus, repellendus quos. ?
        </p>
      </div>
    </section>
  );
};

export default EnlargedCardAlt;
