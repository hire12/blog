import Post from "@/components/Post/Post";
import Footer from "@/components/Footer/Footer";
import Header from "./pages/header/page";
import HomeSection from "./pages/Home/home";
import Blog from "@/components/Blog/Blog";
import Subscribe from "@/components/Subscribe/Subscribe";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HomeSection />
      <Blog />
      <Post />
      <Subscribe />
      <Footer />
    </div>
  );
}
