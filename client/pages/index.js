import BodyCard from "../components/BodyCard";
import CardAlt from "../components/CardAlt";
import EnlargedCardAlt from "../components/EnlargedCardAlt";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
import Showcase from "../components/Showcase";
import ShowcaseCard from "../components/ShowcaseCard";
const Home = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Showcase />
        <div className="card-row">
          <PostCard url="https://www.cloudways.com/blog/wp-content/uploads/How-to-Convert-HTML-Website-into-WordPress-Business-Theme.jpg" />
          <PostCard url="https://c4.wallpaperflare.com/wallpaper/167/781/136/languages-programming-wallpaper-preview.jpg" />
          <PostCard url="https://i.pinimg.com/736x/d0/25/0b/d0250b7b3bef2042996d08448a5329ad.jpg" />
          <PostCard url="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          <PostCard url="https://cdna.artstation.com/p/assets/images/images/010/311/492/large/louis-charavner-programming.jpg?1523753222" />
          <PostCard url="https://image.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" />
          <PostCard url="https://magtemplates.com/wp-content/uploads/2017/06/Programming-World-Map-Wallpaper.jpg" />
        </div>
        <div className="alt-card-row">
          <div className="test-class">
            <ShowcaseCard
              height="30rem"
              style={{ width: "100%" }}
              url="https://miro.medium.com/max/6000/0*XLVH4uGdJCyEkXz1"
            />
          </div>
          <div className="alt-card-column">
            <CardAlt url="https://i.redd.it/fv7nrd8g3vm01.jpg" height="6rem" />{" "}
            <CardAlt url="https://i.redd.it/fv7nrd8g3vm01.jpg" height="6rem" />{" "}
            <CardAlt url="https://i.redd.it/fv7nrd8g3vm01.jpg" height="6rem" />
          </div>
        </div>
        <div className="card-row">
          <BodyCard height="20rem" url="https://i.redd.it/fv7nrd8g3vm01.jpg" />
          <BodyCard
            height="20rem"
            url="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />{" "}
          <BodyCard
            height="20rem"
            url="https://vistapointe.net/images/programming-4.jpg"
          />
          <BodyCard
            height="20rem"
            url="https://ncube-digest.com/wp-content/uploads/2019/11/AI-Programming.png"
          />{" "}
          <BodyCard
            height="20rem"
            url="https://thumbs.dreamstime.com/b/desktop-source-code-technology-background-developer-programer-coding-programming-wallpaper-computer-language-virus-124935260.jpg"
          />
          <BodyCard
            height="20rem"
            url="https://www.wallpapertip.com/wmimgs/134-1348233_wallpaper-code-programming-it-technology-1080p-programming-backgrounds.jpg"
          />{" "}
          <BodyCard
            height="20rem"
            url="https://cdn.hipwallpaper.com/i/14/84/7KIXqd.jpg"
          />
        </div>
        <div className="alt-card-column">
          <EnlargedCardAlt
            url="https://www.wallpapertip.com/wmimgs/43-437023_computer-engineering-science-tech-wallpapers-technology-hd-backgrounds.jpg"
            height="20rem"
          />
          <EnlargedCardAlt
            url="https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg"
            height="20rem"
          />
          <EnlargedCardAlt
            url="https://images5.alphacoders.com/430/430918.jpg"
            height="20rem"
          />
          <EnlargedCardAlt
            url="https://images.unsplash.com/photo-1517134062979-e1234be8a085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&w=1000&q=80"
            height="20rem"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
