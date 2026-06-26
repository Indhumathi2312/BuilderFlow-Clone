import headerLogoTechvoiceWebflowTemplate from "@/assets/images/682bc04f41e0c4bda013703c_header-logo-techvoice-webflow-template.svg";
import logoWhiteCloudwhisperWebflowTemplate from "@/assets/images/682ce90bbf576e17a577bd28_logo-white-cloudwhisper-webflow-template.svg";
import webflowIconCloudwhisperWebflowTemplate from "@/assets/images/682cbd25a8a6ff7ebab8a0d1_webflow-icon-cloudwhisper-webflow-template.svg";

const img = (asset) => asset.src ?? asset;

export const LOGO_LIGHT = img(headerLogoTechvoiceWebflowTemplate);
export const LOGO_DARK = img(logoWhiteCloudwhisperWebflowTemplate);
export const WEBFLOW_ICON = img(webflowIconCloudwhisperWebflowTemplate);

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

export const MAIN_PAGES = [
  ["Preview", "#"],
  ["Home V1", "#home"],
  ["Home V2", "#home"],
  ["Home V3", "#home"],
  ["About us", "#about"],
  ["Blog V1", "#blog"],
  ["Blog V2", "#blog"],
  ["Blog V3", "#blog"],
  ["Blog post", "#blog"],
  ["Contact V1", "#"],
  ["Contact V2", "#"],
  ["Contact V3", "#"],
  ["Features", "#"],
  ["Careers", "#"],
  ["Career single", "#"],
  ["Integrations", "#"],
  ["Integration single", "#"],
  ["Sign in", "#"],
  ["Sign up", "#"],
  ["Request a demo", "#"],
  ["Coming soon", "#"],
];

export const UTILITY_PAGES = [
  "Start here",
  "Styleguide",
  "404 not found",
  "Password protected",
  "Licenses",
  "Changelog",
];
