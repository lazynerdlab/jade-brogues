import { BaseLayout } from "@/app/_layouts";
import Hero from "./Hero";
import { Awards, Clients, Expertise } from "./ExpertiseAwardsAndClients";
import ContactCTA from "./ContactCTA";

const Services = () => {
  return (
    <BaseLayout>
      <Hero />
      <Expertise />
      <Awards />
      <Clients />
      <ContactCTA />
    </BaseLayout>
  );
};

export default Services;
