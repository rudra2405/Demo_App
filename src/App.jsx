import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { FeatureSection } from "./components/FeatureSection";
import { Testimonial } from "./components/Testimonial";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import { Footer } from './components/Footer'


export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workflow></Workflow>
        <Pricing></Pricing>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </>
  )
}