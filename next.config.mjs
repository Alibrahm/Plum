import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/homepage/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["s3-alpha-sig.figma.com", "www.color-meanings.com"],
  },
};

const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      pwa: {
        dest: "public",
        cacheOnFrontEndNav: true,
        regressiveFrontEndNavCaching: true,
        reloadOnline:true,
        swcMinify: true,
        disable:false,
        workboxOptions: {
          disableDevlogs:true,
        }
      },
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfigFunction;
