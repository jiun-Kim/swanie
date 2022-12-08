import { useRouter } from "next/router";
import BandText from "../../components/BandText";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadTitle from "../../components/HeadTitle";

const CarpetSteamCleaning = () => {
  const router = useRouter();
  return (
    <div>
      <HeadTitle title="Service" />
      <Header />
      <BandText text={router.query.id + ""} />
      <div className=" relative flex items-center overflow-scroll py-10">
        {router.query.image ? (
          <img src={router.query.image + ""} className="w-full h-[100vh]" />
        ) : null}
        <div className="bg-black w-full h-full absolute z-10  bg-opacity-30" />
        <div className="max-w-2xl mx-auto space-y-14 absolute px-4 text-center z-20 text-white">
          <h1 className="text-4xl">{router.query.title}</h1>
          <p className=" whitespace-pre-line">
            {router.query.text1}
            <br />
            <br />
            {router.query.text2}
            <br />
            <br />
            {router.query.text3}
          </p>
        </div>
      </div>
      <ContactCard />
      <Footer />
    </div>
  );
};

export default CarpetSteamCleaning;
