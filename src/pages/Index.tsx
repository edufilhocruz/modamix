import { ModaMixHeader } from "@/components/ModaMixHeader";
import { FairBanner } from "@/components/FairBanner";
import { FutureFairs } from "@/components/FutureFairs";
import { Sponsors } from "@/components/Sponsors";
import { QuickActions } from "@/components/QuickActions";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-sm mx-auto">
        <ModaMixHeader />
        
        <main className="p-4 space-y-6 pb-20">
          <FairBanner />
          <FutureFairs />
          <Sponsors />
          <QuickActions />
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
