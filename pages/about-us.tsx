import Footer from "../components/Footer";
import Header from "../components/Header";
import initial from "../public/initial.jpg";

import BandText from "../components/BandText";
import ContactCard from "../components/ContactCard";
import HeadTitle from "../components/HeadTitle";

const AboutUs = () => {
  return (
    <div>
      <HeadTitle title="About Us" />
      <Header />
      <BandText text="About Us" />
      <section className=" w-full max-w-7xl mx-auto py-40">
        <div className=" lg:grid-cols-2 grid">
          <img src={initial.src} className="w-full h-full object-cover" />
          <div className="lg:pl-20 px-4 space-y-10">
            <h1 className="text-4xl text-[#00173D]">
              A Professional and Reliable Service
            </h1>
            <p>
              We’re a professional commercial cleaning service provider that
              specialises in delivering quality cleaning services to a wide
              variety of commercial cleaning sectors. Australian owned and
              operated Cleantech Services was founded with a vision for best
              practise in all areas of our business. Our combined management
              team have over 75 years of real-world cleaning experience. This
              enables us to tailor make a bespoke cleaning solution for your
              property. We enjoy the challenges that the commercial cleaning
              industry entails and strive to achieve outcomes that exceed
              client’s expectations. Cleantech would not be able to achieve
              these fantastic results without our ambitious team. Our
              professional cleaning team is meticulous in their cleaning
              process. They pay attention to every inch of your space while
              cleaning and sanitising – and when performing the quality check.
              Whatever you’re looking for, Cleantech have the full services team
              to take care of it. Put us to the test – we’ve got what it takes!
              We offer competitive prices that fit any budget; plus, great
              service with super-friendly staff members ready to always go above
              and beyond so don’t hesitate to call us today! With a partnering
              style we tailor each proposal towards meeting every situation to
              exceed your workspace requirements – regardless of floor types ,
              surface materials etc. Our trained cleaners always arrive on time
              too which sounds like something worth mentioning considering how
              easily these small details slip through the cracks in a hectic
              workday and the current employment market stresses. We offer
              flexible contracts so that so you can choose the options that best
              fit your business’ needs. With all these benefits, why leave
              things to chance. If you want the best commercial cleaning service
              then call us and we will show why we are the best.
            </p>
          </div>
        </div>
      </section>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default AboutUs;
