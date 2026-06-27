import "./globals.css";

export const metadata = {
  title: "Builderflow - Webflow HTML website template",
  description:
    "Launch your AI SaaS in style with Builderflow, an AI App Builder Webflow Template made to convert users and showcase your product’s full potential.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-wf-domain="builderflowtemplate.webflow.io"
      data-wf-page="68cc21ec139e2486889bb96a"
      data-wf-site="68cc21ec139e2486889bb97d"
      className="w-mod-js"
    >
      <body>{children}</body>
    </html>
  );
}
