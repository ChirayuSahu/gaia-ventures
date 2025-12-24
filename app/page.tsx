import Slider from "@/components/sections/slider";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <div className='w-full bg-orange-600 h-20'/>
      <Slider />
      <ServicesSection />
    </div>
  );
}
