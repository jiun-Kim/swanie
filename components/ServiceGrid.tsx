import carpet from "../public/carpet.jpg";
import window from "../public/window.jpg";
import stripped from "../public/stripped.jpg";
import lease from "../public/lease.jpg";
import strata from "../public/strata.jpg";
import initial from "../public/initial.jpg";
import spring from "../public/spring.jpg";
import quarterly from "../public/quarterly.jpg";
import year from "../public/year.jpg";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const services = [
  {
    url: "carpet-steam-cleaning",
    title: "Carpet steam cleaning",
    image: carpet.src,
    description: {
      title: "We Make Your Carpet Look Like New Again!",
      text1: `A clean carpet will always maintain a hygienic environment. 
      There are so many benefits when it comes to carpet cleaning. 
      711 Carpet Cleaning can help you with quality carpet cleaning services in Sydney.`,
      text2: `Our team has all the updated cleaning techniques and equipment.
      You will receive the best carpet cleaning services from us.
      Our teams are well-trained and ready to make your carpets look new again. Hence,
      we can deal with all types of carpet problems.`,
      text3: `Also, hire us for the best carpet cleaning services in Sydney. 
      We are your standard local carpet cleaner who can help you deal with daily carpet problems.
      Our team can deliver exceptional carpet cleaning services every time. Hence,
      we make sure that our clients are happy with our professional carpet cleaner Sydney.`,
    },
  },
  {
    url: "windows-detail-cleaning",
    title: "Windows detail cleaning",
    image: window.src,
    description: {
      title: "HIGH RISE WINDOW CLEANING SYDNEY",
      text1: `Whether you need windows cleaned at 2 or 100 storeys, 
      the Abseilers United team guarantee fast work, 
      attention to detail, and sparkling results. 
      Our industrial abseiling experts wash, squeegee, 
      and buff up windows on some of the tallest and most complex buildings 
      and structures across the Sydney CBD and suburbs.`,
      text2: `Using rope access techniques and anchor points means clean windows without needing expensive 
      and unsightly scaffolding or powered machinery. 
      Just the results you are looking for, beautiful, 
      clean windows, tended to safely and professionally.`,
      text3: `Abseilers United is the abseiling contractor that delivers 
      the best high-rise window cleaning in Sydney.`,
    },
  },
  {
    url: "floor-stripped-and-sealed",
    title: "Floor stripped and sealed",
    image: stripped.src,
    description: {
      title: "Polished Concrete Floor Specialist",
      text1: `Polished concrete floors ensure a smooth, reflective surface finish.
      The design and style options for polished concrete are unlimited.
      You’ll be able to select almost any particular type of color, design variations, `,
      text2: `Some of the areas that polished concrete floor can be utilized comprise retail outlets, 
      art galleries, residential homes and commercial buildings.
      Polished concrete floors are actually in demand 
      just because they are very convenient to maintain.`,
      text3: `To maintain polished floors usually needs dirt and dust mopping      
      along with the regular application of a polished floor maintenance product.`,
    },
  },
  {
    url: "end-of-lease-cleaning",
    title: "End of lease cleaning",
    image: lease.src,
    description: {
      title: "Experienced End of Lease Cleaners You Can Trust",
      text1: `Top rated professional end of lease cleaners servicing homes across Sydney.`,
      text2: `If you have come to the end of your lease and require professional cleaning services in Sydney, Pristine Home can help you. After all, we are well versed in the area of end of lease cleaning and consistently ensure our clients meet the cleanliness requirements of their landlords.`,
      text3: `Our end of lease cleaners will leave your property just the way it was when you first moved in. They will scrub every nook and cranny, vacuum and mop every floor and dust every surface to ensure a pristine appearance.`,
    },
  },
  {
    url: "strata-common-area-regular-cleaning",
    title: "Strata common area regular cleaning",
    image: strata.src,
    description: {
      title: "Keep your strata property in first rate condition",
      text1: `Our strata cleaning services are designed to keep your strata property looking its best. We understand the importance of keeping your strata property in first rate condition. Our team of experienced and professional cleaners will work diligently to ensure that your property is clean and presentable at all times. Our management with over 30+ years direct cleaning experience ensure that the correct processes have been implemented to achieve these quality aims consistently.`,
      text2: `Our team are fully trained in the latest cleaning techniques and use safe, high quality equipment and products to achieve the best possible results. Our strata cleaners abide by our stringent WHS policies and procedures, and any site induction requirements in place, to ensure that our cleaners are safe while they are working.`,
      text3: `Strata cleaning and maintenance is what we excel at. To find out more about our strata cleaning services, office cleaning or other commercial cleaning Sydney wide services please have your strata or building management contact us today for a free quote.`,
    },
  },
  {
    url: "initial-cleaning",
    title: "Initial cleaning",
    image: initial.src,
    description: {
      title: "Pristine Home takes the hassle out of cleaning your property",
      text1: `Having a freshly cleaned home is definitely something that can help us all relax. The fresh air, spotless benchtops, and clean floors are inviting for you and your guests.`,
      text2: `If your home is looking a little worse for wear, and things a just a bit out of control, let Pristine Home help by booking one of our property cleaning services.`,
      text3: `We can take the hassle out of cleaning and work with you to create a cleaning plan to suit your home and your needs. So, whether you live in a house, apartment, unit or townhouse, our professional team of police-checked cleaners will leave your home in pristine condition!`,
    },
  },
  {
    url: "spring-cleaning",
    title: "Spring cleaning",
    image: spring.src,
    description: {
      title: "The Best In Spring Cleaning Services",
      text1: `A clean home and environment equates to a clean and healthy
      lifestyle. At Pristine Home, we’d love to help you get your personal
      space clean and orderly so that you have more time for the important
      things in life.`,
      text2: `Our friendly and reliable cleaners can cater a service for those
      people who do not require a regular clean. This is known as our
      spring-cleaning service. This service will help you get back on
      track and spruce up your home.`,
      text3: `If you’re ready to rid yourself of those winter blues and start
      fresh in spring then our cleaning services are perfect for you. 100%
      trusted and vetted cleaners who are meticulous at cleaning your
      home.`,
    },
  },
  {
    url: "quarterly-cleaning",
    title: "Quarterly cleaning",
    image: quarterly.src,
    description: {
      title: "Experienced End of Lease Cleaners You Can Trust",
      text1: `Top rated professional end of lease cleaners servicing homes across Sydney.`,
      text2: `If you have come to the end of your lease and require professional cleaning services in Sydney, Pristine Home can help you. After all, we are well versed in the area of end of lease cleaning and consistently ensure our clients meet the cleanliness requirements of their landlords.`,
      text3: `Our end of lease cleaners will leave your property just the way it was when you first moved in. They will scrub every nook and cranny, vacuum and mop every floor and dust every surface to ensure a pristine appearance.`,
    },
  },
  {
    url: "half-yearly-cleaning",
    title: "Half yearly cleaning",
    image: year.src,
    description: {
      title: "Experienced End of Lease Cleaners You Can Trust",
      text1: `Top rated professional end of lease cleaners servicing homes across Sydney.`,
      text2: `If you have come to the end of your lease and require professional cleaning services in Sydney, Pristine Home can help you. After all, we are well versed in the area of end of lease cleaning and consistently ensure our clients meet the cleanliness requirements of their landlords.`,
      text3: `Our end of lease cleaners will leave your property just the way it was when you first moved in. They will scrub every nook and cranny, vacuum and mop every floor and dust every surface to ensure a pristine appearance.`,
    },
  },
];

const ServiceGrid = () => {
  const router = useRouter();
  return (
    <main className="bg-gray-100 mt-40 pb-40 w-full">
      <div className="pt-10 pb-20 flex flex-col items-center">
        <Logo />
        <h1 className="text-center text-4xl mt-4">
          Professional Commercial Cleaning Services
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-2 lg:gap-14 place-items-center max-w-7xl mx-auto">
        {services.map((service, index) => {
          return (
            <div
              onClick={() =>
                router.push({
                  pathname: `/services/${service.url}`,
                  query: {
                    image: service.image,
                    title: service.description.title,
                    text1: service.description.text1,
                    text2: service.description.text2,
                    text3: service.description.text3,
                  },
                })
              }
              key={index}
              className="w-full h-full aspect-square overflow-hidden relative cursor-pointer flex justify-center items-center shadow-md"
            >
              <div className=" absolute text-white z-10 flex justify-center">
                <span className="text-2xl text-center">{service.title}</span>
              </div>
              <div className="w-full h-full bg-black bg-opacity-30 absolute" />
              <img
                src={service.image}
                className="w-full h-full  object-cover"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ServiceGrid;
