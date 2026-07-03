// Site configuration
export {
  SITE_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  GA_ID,
  NAV_LINKS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
  RESOURCE_CARDS,
  HOME_PERKS,
  TEAM_MEMBERS,
  getOwner,
} from "./site-config";

// Metadata helpers
export { createMetadata, createPageMetadata } from "./metadata";

// Data exports
export { ADVICE_TOPICS } from "./advice-data";
export { CREDIT_GROUPS } from "./credits-data";

// Constants
export { THUMB_COUNT, THUMB_INDICES, ANIMATION_DURATION, BREAKPOINTS } from "./constants";

// Utilities
export { cn, formatDate, slugify, truncate } from "./utils";

// Hooks
export { useIntersectionObserver, useAnimatedCounter } from "./hooks";
