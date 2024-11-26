import Post from "@/components/Post/Post";
import Footer from "./pages/footer/footer";
import Header from "./pages/header/page";
import HomeSection from "./pages/Home/home";
import Blog from "@/components/Blog/Blog";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HomeSection />
      <Blog />
      {/* <Footer /> */}
      <Post />
    </div>
  );
}
