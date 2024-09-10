'use client'
import Image from 'next/image'
import Link from 'next/link'
import BlurFade from '../_components/magic-ui/BlurFade'
import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@nextui-org/button'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import AppScreenshotSkewed from '../_components/Hero/AppScreenShotSkewed'
import FadeInImage from '../_components/Hero/FadeInImage'
import PlaceListItem from '../_components/PlaceListItem'

export default function Home() {
  const products = [
    {
      path: '/images/home/products/BAXTER.jpg',
      title: 'Baxter',
      url: 'https://www.baxter.it/en/',
      description:
        'Luxurious leather furniture with a blend of traditional craftsmanship and modern design.',
    },
    {
      path: '/images/home/products/cassina.jpeg',
      title: 'Cassina',
      url: 'https://www.cassina.com/ww/en.html',
      description:
        'Iconic Italian furniture brand known for innovative designs and architectural collaborations.',
    },
    {
      path: '/images/home/products/cc-tapis.jpg',
      title: 'cc-tapis',
      url: 'https://www.cc-tapis.com/',
      description: 'Handcrafted contemporary rugs combining traditional weaving with modern art.',
    },
    {
      path: '/images/home/products/Edra.jpg',
      title: 'Edra',
      url: 'https://www.edra.com/en/home',
      description: 'High-end furniture with innovative designs and advanced materials.',
    },
    {
      path: '/images/home/products/flexform.jpg',
      title: 'Flexform',
      url: 'https://www.flexform.it/en',
      description: 'Elegant, timeless furniture focused on comfort and quality.',
    },
    {
      path: '/images/home/products/henge.jpg',
      title: 'Henge',
      url: 'https://www.henge07.com/',
      description: 'Artisanal furniture and lighting with natural materials and unique designs.',
    },
    {
      path: '/images/home/products/paoplaLengti.jpg',
      title: 'Paola Lenti',
      url: 'https://www.paolalenti.it/en/',
      description:
        'Contemporary furniture with vibrant colors and innovative materials for indoor and outdoor use.',
    },
    {
      path: '/images/home/products/USMModularFurniture.jpg',
      title: 'USM Modular Furniture',
      url: 'https://us.usm.com/',
      description: 'Customizable modular furniture known for precision and timeless design.',
    },
  ]
  // inspirations are 6 images of the products above
  const inspirations = [
    '/images/home/products/baxter.png',
    '/images/home/products/cassina.png',
    '/images/home/products/flexform.png',
    '/images/home/products/tapis.png',
    '/images/home/products/edra.png',
  ]
  return (
    <div className="w-full">
      <main className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
        <section className="z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
          <LazyMotion features={domAnimation}>
            <m.div
              animate="kick"
              className="flex flex-col gap-6"
              exit="auto"
              initial="auto"
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
              }}
              variants={{
                auto: { width: 'auto' },
                kick: { width: 'auto' },
              }}
            >
              <AnimatePresence mode="wait">
                <m.div
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="text-start text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 2 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 10,
                    duration: 0.8 + 0.1 * 8,
                    type: 'spring',
                  }}
                >
                  <div className="bg-hero-section-title text-transparent bg-clip-text dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
                    {/* Easiest way to <br /> power global teams. */}
                    Discover Our Exclusive <br /> Collection of Luxury Furniture
                  </div>
                </m.div>

                <m.div
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="text-start font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 3 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 30,
                    duration: 0.8 + 0.1 * 9,
                    type: 'spring',
                  }}
                >
                  Casalago is a luxury furniture store that offers a wide range of high-quality
                  furniture for your home. We are a team of experts in the furniture industry and we
                  are dedicated to providing you with the best products and services.
                </m.div>

                <m.div
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 4 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 50,
                    duration: 0.8 + 0.1 * 10,
                    type: 'spring',
                  }}
                >
                  <Button
                    className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
                    radius="full"
                  >
                    Get To Know Us
                  </Button>
                  <Button
                    className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
                    endContent={
                      <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                        <Icon
                          className="text-default-500 [&>path]:stroke-[1.5]"
                          icon="solar:arrow-right-linear"
                          width={16}
                        />
                      </span>
                    }
                    radius="full"
                    variant="bordered"
                  >
                    See our Products
                  </Button>
                </m.div>
              </AnimatePresence>
            </m.div>
          </LazyMotion>
        </section>
      </main>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            className="absolute top-[40%] w-full"
            initial={{ filter: 'blur(16px)', opacity: 0, y: 300 }}
            transition={{
              bounce: 0,
              delay: 0.01 * 10,
              duration: 0.8 + 0.1 * 8,
              type: 'spring',
            }}
          >
            <AppScreenshotSkewed className="w-full" />
          </m.div>
        </AnimatePresence>
      </LazyMotion>

      <div className="z-20 mt-[140px] flex w-full items-center bg-[#ABC485] px-14 py-12 text-[#ffffff] max-lg:flex-col max-lg:gap-4 lg:py-32">
        <BlurFade
          inView
          delay={0.6}
          className="text-4xl font-bold max-lg:text-center max-lg:text-xl max-sm:text-lg lg:w-1/2 lg:self-start"
        >
          <h1>
            Your very own <br /> personal living space.
          </h1>
        </BlurFade>
        <BlurFade
          inView
          delay={0.8}
          className="text-xl font-medium max-lg:text-center max-lg:text-lg max-sm:text-base lg:w-1/2"
        >
          <p>
            Casalago believes that a home is not just a place, but a reflection of who you are.
            Understanding that each home is an individual expression of the people who live in it.{' '}
            <br />
            <br />
            With our carefuly curated design furniture and accessories, we invite you to experience
            a new level of living beter at home.
          </p>
        </BlurFade>
      </div>
      {/* Live Better Feel Better */}
      <div className="mt-20 flex items-center max-lg:flex-col">
        <BlurFade inView className="w-[48%] max-lg:w-full">
          <Image
            src="/images/home/liveBetter.jpg"
            alt="Live better, feel better."
            width={1920}
            height={1080}
          />
        </BlurFade>
        <div className="flex w-1/2 flex-col gap-4 px-8 py-12 max-lg:w-full">
          <BlurFade
            inView
            delay={0.2}
            className="text-4xl font-bold max-lg:text-center max-lg:text-xl max-sm:text-lg"
          >
            <h2>Live better, feel better.</h2>
          </BlurFade>
          <BlurFade
            inView
            delay={0.4}
            className="text-xl font-medium max-lg:text-center max-lg:text-lg max-sm:text-base"
          >
            <p>
              We shape your environment to perfectly suit your lifestyle, character and
              individuality. <br />
              <br /> Creating beautiful living spaces that celebrate lifeí s precious moments, to be
              shared with loved ones or to be enjoyed in peace and quiet.
            </p>
          </BlurFade>
        </div>
      </div>
      {/* Our Products */}
      <div className="w-full lg:py-24">
        <BlurFade
          inView
          delay={0.2}
          className="text-center text-4xl font-bold max-lg:text-xl max-sm:text-lg"
        >
          <h1>Our Products</h1>
        </BlurFade>
        <div
          className={cn(
            'mt-4 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          )}
        >
          {products.map((product, index) => (
            <BlurFade inView delay={0.1 + 0.1 * index} key={product.title} className='w-full'>
              <Link href={product.url} key={product.title} className="w-full">
                <PlaceListItem
                  key={product.title}
                  name={product.title}
                  imageSrc={product.path}
                  description={product.description}
                  id={index.toString()}
                  href={product.url}
                  price={0}
                />
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}
