import Footer from "@/components/Footer/Footer";
import Header from "./pages/header/page";
import HomeSection from "./pages/Home/home";
import Latest from "@/components/Latest/Latest";
import Subscribe from "@/components/Subscribe/Subscribe";
import './globals.css'
import UserArticle from "@/components/Read/Read";

export default function Home() {
  return (
    <div className="bg-[#E2E2E2]">
      <Header />
      <HomeSection />
      <Latest />
      <UserArticle />
      <Subscribe />
      <Footer />
    </div>
  );
}
