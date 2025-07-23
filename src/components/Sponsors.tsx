import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const sponsorsData = [
  { name: "Marca1", logo: "🏪" },
  { name: "Marca2", logo: "👔" },
  { name: "Marca3", logo: "👗" },
  { name: "Marca4", logo: "💎" },
  { name: "Marca5", logo: "👜" },
  { name: "Marca6", logo: "👠" }
];

export const Sponsors = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-modamix-dark mb-4">Patrocinadores</h3>
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full"
      >
        <CarouselContent>
          {sponsorsData.map((sponsor, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="bg-secondary p-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-secondary/80 transition-colors cursor-pointer h-24">
                <span className="text-3xl mb-2">{sponsor.logo}</span>
                <span className="text-sm font-medium text-modamix-dark">{sponsor.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};