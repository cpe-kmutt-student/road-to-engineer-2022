import { Footer } from '../components/Footer';
import { Timeline } from '../components/Timeline';
import { TopSection } from '../components/TopSection';
import { useRef } from 'preact/hooks'

export const FrontPage = () => {
  const sectionRef = useRef();
  const onClickNext = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="">
      <TopSection onClickNext={onClickNext} />
      <Timeline scrollref={sectionRef} />
      <Footer />
    </div>
  );
}
