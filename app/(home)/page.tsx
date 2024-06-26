import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      path: "/images/home/products/BAXTER.jpg",
      title: "Baxter",
      url: "https://www.baxter.it/en/",
    },
    {
      path: "/images/home/products/cassina.jpeg",
      title: "Cassina",
      url: "https://www.cassina.com/ww/en.html",
    },
    {
      path: "/images/home/products/cc-tapis.jpg",
      title: "cc-tapis",
      url: "https://www.cc-tapis.com/",
    },
    {
      path: "/images/home/products/Edra.jpg",
      title: "Edra",
      url: "https://www.edra.com/en/home",
    },
    {
      path: "/images/home/products/flexform.jpg",
      title: "Flexform",
      url: "https://www.flexform.it/en",
    },
    {
      path: "/images/home/products/henge.jpg",
      title: "Henge",
      url: "https://www.henge07.com/",
    },
    {
      path: "/images/home/products/paoplaLengti.jpg",
      title: "Paola Lenti",
      url: "https://www.paolalenti.it/en/",
    },
    {
      path: "/images/home/products/USMModularFurniture.jpg",
      title: "USM Modular Furniture",
      url: "https://us.usm.com/",
    },
  ];
  // inspirations are 6 images of the products above
  const inspirations = [
    "/images/home/products/baxter.png",
    "/images/home/products/cassina.png",
    "/images/home/products/flexform.png",
    "/images/home/products/tapis.png",
    "/images/home/products/edra.png",
  ];
  return (
    <div className="w-full">
      <Image
        src="/images/home/banner.jpg"
        alt="banner"
        width={1920}
        height={1080}
        className="w-full"
      />
      {/* Below the banner */}
      <div className="w-full flex py-12 lg:py-24 items-center max-lg:flex-col max-lg:gap-4">
        <h1 className="lg:self-start lg:w-1/2 text-4xl max-lg:text-xl max-sm:text-lg font-bold max-lg:text-center">
          Your very own <br /> personal living space.
        </h1>
        <p className="font-medium lg:w-1/2 text-xl max-lg:text-lg max-sm:text-base max-lg:text-center">
          Casalago believes that a home is not just a place, but a reflection of
          who you are. Understanding that each home is an individual expression
          of the people who live in it. <br />
          <br />
          With our carefuly curated design furniture and accessories, we invite
          you to experience a new level of living beter at home.
        </p>
      </div>
      {/* Live Better Feel Better */}
      <div className="flex items-center max-lg:flex-col">
        <Image
          src="/images/home/liveBetter.jpg"
          alt="Live better, feel better."
          width={1920}
          height={1080}
          className="w-[48%] max-lg:w-full"
        />
        <div className="flex flex-col w-1/2 max-lg:w-full px-8 gap-4 py-12">
          <h2 className="text-4xl max-lg:text-xl max-sm:text-lg font-bold max-lg:text-center">
            Live better, feel better.
          </h2>
          <p className="font-medium text-xl max-lg:text-lg max-sm:text-base max-lg:text-center">
            We shape your environment to perfectly suit your lifestyle,
            character and individuality. <br />
            <br /> Creating beautiful living spaces that celebrate lifeí s
            precious moments, to be shared with loved ones or to be enjoyed in
            peace and quiet.
          </p>
        </div>
      </div>
      {/* Our Products */}
      <div className="lg:py-24 w-full">
        <h1 className="text-4xl max-lg:text-xl max-sm:text-lg font-bold text-center">
          Our Products
        </h1>
        <div className="w-full my-10 grid auto-cols-max grid-flow-row grid-cols-[repeat(auto-fill,minmax(408px,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:pb-6 gap-5">
          {products.map((product, index) => (
            <Link href={product.url} key={index} passHref target="_blank">
                <div className="w-[408px] h-[280px] max-sm:w-full relative">
                  <Image
                    src={product.path}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="border border-y-black border-x-white w-full">
                  <h2 className="text-2xl max-lg:text-xl max-sm:text-lg my-1 font-medium">
                    {product.title}
                  </h2>
                </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Get Inspired COMMENTED OUT*/}
      {/* <div>
                <h1 className="text-4xl max-lg:text-xl max-sm:text-lg font-bold text-center">
                    Get Inspired!
                </h1>
                <div className="py-12 grid auto-cols-max grid-flow-row grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-2xl:grid-cols-[repeat(auto-fill,minmax(330px,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] max-sm:pb-6 gap-x-12 gap-y-8">
                    {inspirations.map((inspiration, index) => (
                        <div
                            key={index}
                            className="h-[300px] w-[300px] justify-self-center"
                        >
                            <Image
                                src={inspiration}
                                alt={`Inspiration ${index + 1}`}
                                width={300}
                                height={300}
                                className="w-[300px] h-[300px] object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div> */}
    </div>
  );
}
