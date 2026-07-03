"use client";

import { useEffect } from "react";
import { TUTORIALS_BODY, TUTORIALS_STYLES } from "@/content/tutorials-content";

export default function TutorialsLegacyContent() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/tutorials.min.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TUTORIALS_STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: TUTORIALS_BODY }} />
    </>
  );
}
