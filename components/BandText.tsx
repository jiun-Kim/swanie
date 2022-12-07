const BandText = ({ text }: { text: string }) => {
  const trimText = text.split("-").join(" ");
  const uppercaseText = trimText.charAt(0).toUpperCase() + trimText.slice(1);
  return (
    <div className="w-full  h-32 flex justify-center items-center bg-gradient-to-r from-[#00173D] to-gray-600">
      <h1 className="text-white text-4xl font-bold">{uppercaseText}</h1>
    </div>
  );
};

export default BandText;
