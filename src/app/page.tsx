import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { LandingPageContainer } from "@/features/landing-page/landing-page.container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pak Harda  Website",
  description: "Pak Harda",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <LandingPageContainer />
      <Footer />
    </>
  );
}
