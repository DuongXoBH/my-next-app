import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
// import "@/messages/en.json";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./src/messages/en.json"
  }
});

const config: NextConfig = {images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: "",
      pathname: "/**",
    },
  ],
},}

export default withNextIntl(config);