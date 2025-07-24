import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
  <section className="mb-6">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <div>{children}</div>
  </section>
); 