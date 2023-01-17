import { Footer } from '../components/Footer';
import { Timeline } from '../components/Timeline';
import { TopSection } from '../components/TopSection';
import { useRef } from 'preact/hooks'
import Swal from 'sweetalert2';
import { RoadToSchedule } from '../components/RoadToSchedule';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

export const FrontPage = () => {
  const sectionRef = useRef();
  // const onClickNext = () => {
  //   sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  // };
  const showSchedule = () => {
    MySwal.fire('',<RoadToSchedule />);
  };
  return (
    <div className="">
      <TopSection onClickNext={showSchedule} />
      <Timeline scrollref={sectionRef} />
      <Footer />
    </div>
  );
}
