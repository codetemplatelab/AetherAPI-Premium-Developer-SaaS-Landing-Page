import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { Features } from '../components/sections/Features';
import { APISetupFlow } from '../components/sections/APISetupFlow';
import { Infrastructure } from '../components/sections/Infrastructure';
import { DashboardPreview } from '../components/sections/DashboardPreview';
import { DeveloperResources } from '../components/sections/DeveloperResources';
import { SDKShowcase } from '../components/sections/SDKShowcase';
import { APIExample } from '../components/sections/APIExample';
import { Integrations } from '../components/sections/Integrations';
import { Pricing } from '../components/sections/Pricing';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { usePageMeta } from '../utils/seo';

export const Home = () => {
  usePageMeta({
    title: 'AetherAPI | Global API Infrastructure for Developers',
    description:
      'Deploy, secure, and scale APIs on a globally distributed edge platform with real-time analytics, auto-generated docs, and developer-first tooling.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <APISetupFlow />
      <Infrastructure />
      <DashboardPreview />
      <DeveloperResources />
      <SDKShowcase />
      <APIExample />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};
