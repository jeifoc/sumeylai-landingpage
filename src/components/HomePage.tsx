import Footer from './Footer';
import HeaderHomePage from './HeaderHomePage';
import MiddleSection from './MiddleSection';
import SectionOne from './SectionOne';
import Testimonials from './Testimonials';
import Services from './Services';

export default function HomePage() {
  return (
    <div className='landing-page'>
      <HeaderHomePage></HeaderHomePage>
      <SectionOne></SectionOne>
      <MiddleSection></MiddleSection>
      <Services></Services>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}
