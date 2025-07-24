import FeaturesSection from '@/components/FeaturesSection';
import Header from '@/components/Header';
import InsightsSection from '@/components/InsightsSection';
import ReviewSlider from '@/components/ReviewSlider';

export default function Home() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <ReviewSlider />
      <InsightsSection />
    </>
  );
}
