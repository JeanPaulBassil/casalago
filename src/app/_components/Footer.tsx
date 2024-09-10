'use client'

import type { IconProps } from '@iconify/react'

import React from 'react'
import { Button, Image, Input, Link } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import { Youtube } from 'lucide-react'
import BlurFade from './magic-ui/BlurFade'

type SocialIconProps = Omit<IconProps, 'icon'>

const footerNavigation = {
  location: [
    { name: '40 Adetokunbo Ademola Street' },
    { name: 'Victoria Island, Lagos' },
    { name: 'T 234-814-159 6534' },
    { name: 'info@casalago.com' },
  ],
  aboutUs: [
    { name: 'Our Story', href: '#' },
    { name: 'Latest News', href: '#' },
    { name: 'Career Opportunities', href: '#' },
    { name: 'Media Enquiries', href: '#' },
    { name: 'Collaborations', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'User Agreement', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
    },
    {
      name: 'Youtube',
      href: '#',
      icon: (props: SocialIconProps) => <Youtube />,
    },
  ],
}

export default function Component() {
  return (
    <footer className="flex w-full flex-col bg-[#ABC485]">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <BlurFade delay={0.2} className="mt-4" inView>
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
              </BlurFade>
            </div>
            <BlurFade delay={0.4} inView>
              <p className="text-small text-[#ffffff]">© 2024 Casalago - All rights reserved.</p>
            </BlurFade>
            <BlurFade delay={0.6} inView>
              <p className="text-small text-[#ffffff]">Powered by Isolutions</p>
            </BlurFade>
            <BlurFade delay={0.8} inView>
              <p className="text-small text-[#ffffff]">Developed by Softech Solutions</p>
            </BlurFade>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item, index) => (
                <BlurFade delay={1 + index * 0.2} inView>
                  <Link key={item.name} isExternal className="text-[#ffffff]" href={item.href}>
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="w-6" />
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
          <div className="mt-16 gap-8 flex flex-col xl:mt-0">
            <BlurFade delay={0.2} inView>
              <h1 className="text-xl mt-2 text-[#000000]">Our Store</h1>
            </BlurFade>
              <div className="flex flex-col gap-8">
              {footerNavigation.location.map((item, index) => (
                <BlurFade delay={1 + index * 0.2} inView>
                  <p className="text-small text-[#ffffff]">{item.name}</p>
                </BlurFade>
                ))}
              </div>
          </div>
        </div>

        <div className="my-10 rounded-medium bg-default-200/20 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2">
          <div>
            <BlurFade delay={0.2} inView>
              <h3 className="text-small font-semibold text-default-600">
                Subscribe to our newsletter
              </h3>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <p className="mt-2 text-small text-[#ffffff]">
                Subscribe to our newsletter to get the latest news and updates.
              </p>
            </BlurFade>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <BlurFade delay={0.6} inView>
              <Input
                isRequired
              aria-label="Email"
              autoComplete="email"
              id="email-address"
              labelPlacement="outside"
              name="email-address"
              placeholder="johndoe@email.com"
              startContent={<Icon className="text-default-500" icon="solar:letter-linear" />}
                type="email"
              />
            </BlurFade>
            <BlurFade delay={0.8} inView>
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <Button color="primary" type="submit">
                  Subscribe
                </Button>
              </div>
            </BlurFade>
          </form>
        </div>
      </div>
    </footer>
  )
}
