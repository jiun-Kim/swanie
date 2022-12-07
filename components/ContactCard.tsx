import carpet from "../public/carpet.jpg";

const ContactCard = () => {
  return (
    <div className=" relative flex justify-center items-center">
      <div className="flex absolute px-4 py-2 rounded-md space-x-10 z-10 text-white">
        <div className=" space-y-1">
          <span>Get a Free Quote</span>
          <h1 className="text-2xl">Contact for Services</h1>
          <h1 className="md:text-4xl text-3xl">swaniegroup@gmail.com</h1>
        </div>
      </div>
      <div className="w-full h-full absolute bg-black bg-opacity-50" />
      <img src={carpet.src} className="h-[50vh] w-full object-cover" />
    </div>
  );
};

export default ContactCard;
