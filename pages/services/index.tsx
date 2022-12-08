import BandText from "../../components/BandText";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadTitle from "../../components/HeadTitle";
import ServiceGrid from "../../components/ServiceGrid";

const services = () => {
  return (
    <div>
      <HeadTitle title="Services" />
      <Header />
      <BandText text="Services" />
      <div className="pb-20 px-4">
        <h1 className="text-3xl text-center py-20">
          Professional Commercial Office Cleaning Services
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className=" whitespace-pre-line">
            {`Our commercial cleaning services can cater for your needs no matter what they are.

We can provide cleaning to a schedule that works for you. This includes day to day cleaning or more periodic weekly, or fortnightly requirements. We understand that first impressions count for business, so we go above and beyond to make sure your premises are sparkling clean. Deep cleans are also available when you need that extra bit of attention.

Our cleaning teams are professional, reliable and hardworking. They will make sure your workplace is clean and presentable at all times.

We can work in any commercial environment or industry, including office Cleaning, gyms, aged care, retail, schools and many more.

First impressions count, and a clean, well-presented office or commercial space can make all the difference making and not making a sale. Our team of experienced cleaners will work to ensure your premises are always looking their best so that your business can prosper.

Whatever your requirements, get in touch.`}
          </p>
        </div>
      </div>
      <ServiceGrid />
      <Footer />
    </div>
  );
};

export default services;
