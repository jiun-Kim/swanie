import BandText from "../components/BandText";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <BandText text="Contact Us" />
      <div className="py-20">
        <ContactCard />
      </div>
      <div className="bg-gray-200">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
