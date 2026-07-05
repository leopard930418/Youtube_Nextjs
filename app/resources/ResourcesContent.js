'use client';

import { useState, useEffect } from 'react';
import { HeroBanner, ResourceCards } from "@/components/ui";
import { RESOURCE_CARDS } from "@/lib/site-config";

export default function ResourcesContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      <HeroBanner
        title="Get The Best Resources"
        subtitle="Access the highest-quality YouTube advice for free to help you reach your goals."
      />
      <ResourceCards items={RESOURCE_CARDS} />
    </div>
  );
}
