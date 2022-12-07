import logo from "../public/logo.png";
import bg1 from "../public/bg1.jpg";
import bg2 from "../public/bg2.jpg";

import Header from "../components/Header";
import ContactBtn from "../components/ContactBtn";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import ServiceGrid from "../components/ServiceGrid";

const Home = () => {
  return (
    <div>
      <Header />
      <ContactBtn />
      <div className=" relative flex items-center">
        <div className="text-white absolute md:text-5xl text-3xl font-bold px-4 md:mx-40 w-full">
          <p className=" whitespace-pre leading-relaxed">
            Sydney
            <br />
            Commercial Cleaning
            <br />
            Specialists
          </p>
        </div>
        <img src={bg1.src} className="w-full h-[80vh] object-cover" />
      </div>
      <section className=" w-full max-w-7xl mx-auto">
        <h1 className="text-center py-32 text-4xl">Our Services</h1>
        <div className=" lg:grid-cols-2 grid">
          <img src={bg2.src} className="w-full h-full object-cover" />
          <div className="lg:pl-20 space-y-10 px-4">
            <h1 className="text-2xl text-[#00173D]">
              Commercial Cleaning Specialists
            </h1>
            <p>
              The cumulative cleaning experience of our management team is over
              75 years, and so the level of expertise in our business is second
              to none. We understand cleaning is not intuitive, but a learned
              process, and we train staff to follow our procedures and cleaning
              methods to the letter from the simplest tasks of vacuuming and
              mopping to do the more intricate such as floor maintenance of
              different surfaces. We can troubleshoot and design a bespoke
              approach backed up by our experience and ensure that this is
              followed consistently with the best outcomes for you. Cleantech
              Services have the depth of experience through our highly
              experienced management team to tackle any commercial cleaning
              environment. We can design a tailor-made solution for all your
              cleaning needs and just as importantly do it in the most
              economical manner possible. Talk to us and let us show you what we
              can achieve. We come in and listen to your needs and offer our
              advice. We then tailor make a cleaning proposal that will achieve
              your needs and then make it happen seamlessly. This is what sets
              us apart from our competitors that depth of knowledge. As far as
              cleaning companies go, all our cleaners are highly trained and
              experienced cleaners, and our cleaning services are of the highest
              quality. We only use environmentally sensitive cleaning supplies
              and professional-grade equipment and materials, and all our work
              is guaranteed. For a complete cleaning solution, we are the
              commercial cleaners you can rely on.
            </p>
          </div>
        </div>
      </section>
      <ServiceGrid />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Home;
