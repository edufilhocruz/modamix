import React from "react";
import { UserProfileCard } from "@/components/beneficios/UserProfileCard";
import { PointsTable } from "@/components/beneficios/PointsTable";
import { RewardsTable } from "@/components/beneficios/RewardsTable";
import { LevelsSection } from "@/components/beneficios/LevelsSection";
import { SpecialBonuses } from "@/components/beneficios/SpecialBonuses";
import { OrganizerBenefits } from "@/components/beneficios/OrganizerBenefits";
import { SupplierBenefits } from "@/components/beneficios/SupplierBenefits";
import { ClientBenefits } from "@/components/beneficios/ClientBenefits";

const BeneficiosModaMix = () => (
  <div className="p-4 max-w-sm mx-auto pb-24">
    <UserProfileCard />
    <PointsTable />
    <RewardsTable />
    <LevelsSection />
    <SpecialBonuses />
    <OrganizerBenefits />
    <SupplierBenefits />
    <ClientBenefits />
  </div>
);

export default BeneficiosModaMix; 