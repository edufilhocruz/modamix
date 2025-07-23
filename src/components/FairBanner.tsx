import bannerImage from "@/assets/feira-verao-banner.jpg";

export const FairBanner = () => {
  return (
    <div 
      className="relative rounded-lg overflow-hidden h-48 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-2xl font-bold text-center">Próxima Feira: Moda Verão 2024</h2>
        <p className="text-sm mt-2">15 a 18 de Dezembro</p>
      </div>
    </div>
  );
};