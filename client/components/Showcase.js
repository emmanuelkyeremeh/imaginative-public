import styles from "../styles/showcase.module.css";
import ShowcaseCard from "./ShowcaseCard";
const Showcase = () => {
  return (
    <main className={styles.showcase_container}>
      <div className={styles.showcase_flexItem1}>
        <ShowcaseCard
          height="36rem"
          url="https://i.pinimg.com/originals/55/07/5f/55075fd97456a9ca1339d94f1ceacd27.jpg"
        />
      </div>
      <div className={styles.showcase_flexItem2}>
        <ShowcaseCard
          height="12rem"
          url="https://cdn.autonomous.ai/static/upload/images/new_post/which-desk-setup-is-best-for-a-developer-379-1602744788208.jpg"
        />
        <ShowcaseCard
          height="12rem"
          url="https://mayvenstudios.com/wp-content/uploads/header-1-4-1.jpg"
        />
        <ShowcaseCard
          height="12rem"
          url="https://www.squarechilli.co.uk/wp-content/uploads/2019/02/services-1024x594.jpg"
        />
      </div>
      <div className={styles.showcase_flexItem3}>
        <ShowcaseCard
          height="18rem"
          url="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/20565/image6-5a83060bece4d310324634c1e39452c2.png"
        />
        <ShowcaseCard
          height="18rem"
          url="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/02/how-to-convert-html-to-wordpress.jpg"
        />
      </div>
    </main>
  );
};

export default Showcase;
