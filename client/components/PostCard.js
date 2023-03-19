import styles from "../styles/postCard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const PostCard = ({ url }) => {
  const style = {
    backgroundImage: `url(${url})`,
  };
  return (
    <section className={styles.postcard_container}>
      <div className={styles.postcard_banner} style={style}>
        <button className="ShowcaseCard_button">UNCATEGORIZED</button>
      </div>
      <div className={styles.postcard_info}>
        <h3>Why Choose React?</h3>
        <p>
          <span>Emmanuel Kyeremeh </span>{" "}
          <AccessTimeIcon style={{ fontSize: "15px" }} /> June 6, 2011
        </p>
      </div>
    </section>
  );
};

export default PostCard;
