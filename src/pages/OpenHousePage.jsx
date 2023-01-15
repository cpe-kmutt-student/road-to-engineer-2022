<<<<<<< HEAD
import EventSection from "../components/EventSection";

export const OpenHousePage = () => {
  return (
    <div>
        <EventSection/>
    </div>
=======
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
>>>>>>> 5d62a81767402c4118c5718e6003de5fa8c91cfb
  );
}
