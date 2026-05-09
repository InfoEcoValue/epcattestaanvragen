import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/epc-attest-prijs", destination: "/epc-keuring-prijs", permanent: true },
      { source: "/epc-attest-prijs/", destination: "/epc-keuring-prijs", permanent: true },
      { source: "/epc-waarde-epc-attest", destination: "/epc-attest", permanent: true },
      { source: "/epc-waarde-epc-attest/", destination: "/epc-attest", permanent: true },
      { source: "/epc-waarde-berekenen", destination: "/epc-waarden-tabel", permanent: true },
      { source: "/epc-waarde-berekenen/", destination: "/epc-waarden-tabel", permanent: true },
      { source: "/epc-waarde-berekening", destination: "/epc-waarden-tabel", permanent: true },
      { source: "/epc-waarde-berekening/", destination: "/epc-waarden-tabel", permanent: true },
      { source: "/epc-attest-veelgestelde-vragen", destination: "/veelgestelde-vragen", permanent: true },
      { source: "/epc-attest-veelgestelde-vragen/", destination: "/veelgestelde-vragen", permanent: true },
      { source: "/wat-is-nodig-voor-een-epc-attest", destination: "/veelgestelde-vragen", permanent: true },
      { source: "/wat-is-nodig-voor-een-epc-attest/", destination: "/veelgestelde-vragen", permanent: true },
      { source: "/erkende-epc-deskundige-diensten", destination: "/diensten", permanent: true },
      { source: "/erkende-epc-deskundige-diensten/", destination: "/diensten", permanent: true },
      { source: "/diensten-erkende-epc-deskundige", destination: "/diensten", permanent: true },
      { source: "/diensten-erkende-epc-deskundige/", destination: "/diensten", permanent: true },
      { source: "/renovatieplicht-residentiele-gebouwen", destination: "/renovatieplicht", permanent: true },
      { source: "/renovatieplicht-residentiele-gebouwen/", destination: "/renovatieplicht", permanent: true },
      { source: "/renovatieplicht-residentiele-gebouwen-kort-samengevat", destination: "/renovatieplicht", permanent: true },
      { source: "/renovatieplicht-residentiele-gebouwen-kort-samengevat/", destination: "/renovatieplicht", permanent: true },
      { source: "/elementor-5108", destination: "/algemene-voorwaarden", permanent: true },
      { source: "/elementor-5108/", destination: "/algemene-voorwaarden", permanent: true },
      { source: "/epc-attest-aanvraag-ingediend", destination: "/bedankt", permanent: true },
      { source: "/epc-attest-aanvraag-ingediend/", destination: "/bedankt", permanent: true },
      { source: "/contact-erkende-epc-deskundige", destination: "/contact", permanent: true },
      { source: "/contact-erkende-epc-deskundige/", destination: "/contact", permanent: true },
      { source: "/veelgestelde-vragen-wat-is-een-epc-keuring", destination: "/veelgestelde-vragen", permanent: true },
      { source: "/veelgestelde-vragen-wat-is-een-epc-keuring/", destination: "/veelgestelde-vragen", permanent: true },
    ];
  },
};

export default nextConfig;
