import { Countdown } from "../../components/countdown";
import { Footer } from "../../components/footer";
import { Gallery } from "../../components/gallery";
import { NavBar } from "../../components/navbar";
Countdown

export default function MainPage() {
    return (
      <div className="min-h-screen">
      <NavBar/>
      <Countdown/>
      <Gallery/>
      <Footer className="sticky top-[100vh]"/>
      </div>
    );
  }