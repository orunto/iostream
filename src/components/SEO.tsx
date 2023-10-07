import { NextSeo } from "next-seo";

const siteUrl = "https://iostream.vercel.app";

const SEO = ()=>(
    <NextSeo
      title="IOStream"
      description="Real-time monitoring service with IoT and Nobox Cloud service"
      canonical={siteUrl}
      openGraph={{
        url: siteUrl,
        title: 'IOStream',
        description: 'Real-time monitoring service with IoT and Nobox Cloud service',
        images: [
        //   {
        //     url: `${siteUrl}/images/logo/logo.svg`,
        //     width: 800,
        //     height: 600,
        //     alt: 'IOStream Logo',
        //     type: 'image/png',
        //   },
        //   {
        //     url: 'https://www.example.com/og-image02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //     type: 'image/jpeg',
        //   },
          { url: 'https://www.example.com/og-image03.jpg' },
          { url: 'https://www.example.com/og-image04.jpg' },
        ],
        site_name: 'IOStream',
      }}
      twitter={{
        handle: '@codepraycode',
        site: '@codepraycode',
        cardType: 'summary_large_image',
      }}
    />
)


export default SEO;