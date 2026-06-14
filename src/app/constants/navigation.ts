import {
  Home,
  Building2,
  Package,
  ShieldCheck,
  Briefcase,
  Newspaper,
  Mail,
} from "lucide-react";

import { ROUTES } from "./routes";

/* Individual Navigation Items */

export const HOME_NAV = {
  label: "Home",
  href: ROUTES.HOME,
  icon: Home,
};

export const ABOUT_NAV = {
  label: "About",
  href: ROUTES.ABOUT,
  icon: Building2,
};

export const PRODUCTS_NAV = {
  label: "Products",
  href: ROUTES.PRODUCTS,
  icon: Package,
};

export const QUALITY_NAV = {
  label: "Quality",
  href: ROUTES.QUALITY,
  icon: ShieldCheck,
};

export const CAREERS_NAV = {
  label: "Careers",
  href: ROUTES.CAREERS,
  icon: Briefcase,
};

export const BLOG_NAV = {
  label: "Blog",
  href: ROUTES.BLOG,
  icon: Newspaper,
};

export const CONTACT_NAV = {
  label: "Contact",
  href: ROUTES.CONTACT,
  icon: Mail,
};


export const HEADER_NAVIGATION = [
  HOME_NAV,  
  PRODUCTS_NAV,
  QUALITY_NAV, 
  ABOUT_NAV,
  CONTACT_NAV,
] as const;