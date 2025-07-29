import React from "react";
import { UserProfileCard } from "../components/UserProfileCard";
import { PointsTable } from "../components/PointsTable";
import { RewardsTable } from "../components/RewardsTable";
import { LevelsSection } from "../components/LevelsSection";
import { SpecialBonuses } from "../components/SpecialBonuses";
import { OrganizerBenefits } from "../components/OrganizerBenefits";
import { SupplierBenefits } from "../components/SupplierBenefits";
import { ClientBenefits } from "../components/ClientBenefits";

/**
 * Página principal da feature de Benefícios.
 * Composição modular, pronta para integração com backend.
 */
const Beneficios = () => (
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

export default Beneficios; 