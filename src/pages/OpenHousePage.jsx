import { Hero } from '../components/Hero';
import { Schedule } from '../components/Schedule';
import { EventSection } from '../components/EventSection';
import { Estamp } from '../components/Estamp';
import { Faq } from '../components/Faq';
import { Maps } from '../components/Maps';
import { Another } from '../components/Another';
import { OpenHouseFooter } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const OpenHousePage = () => {
  return (
    <>
      <Navbar place="openhouse" />
      <Hero />
      <Schedule />
      <EventSection />
      {/* <Estamp /> */}
      <Another />
      <Faq />
      <Maps />
      <OpenHouseFooter />
    </>
  );
}
