import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureFooter from '@/components/FeatureFooter';
import InfoSection from '@/components/InfoSection';
import WhyYatriSection from '@/components/WhyYatriSection';
import FareTableSection from '@/components/FareTableSection';
import ChooseUsSection from '@/components/ChooseUsSection';
import CarRentalInfoBox from '@/components/CarRentalInfoBox';
import WhyChooseOneWayCab from '@/components/WhyChooseOneWayCab';
import RoadTripInfoBox from '@/components/RoadTripInfoBox';
import WhyChoosePillars from '@/components/WhyChoosePillars';
import WhyChooseYatri from '@/components/WhyChooseYatri';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import AppDownloadPromo from '@/components/AppDownloadPromo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      <FeatureFooter />
      <InfoSection />
      <WhyYatriSection />
      <FareTableSection />
      <ChooseUsSection />
      <CarRentalInfoBox />
      <WhyChooseOneWayCab />
      <RoadTripInfoBox />
      <WhyChoosePillars />
      <WhyChooseYatri />
      <CustomerTestimonials />
      <AppDownloadPromo />
      <Footer />
    </div>
  );
}
