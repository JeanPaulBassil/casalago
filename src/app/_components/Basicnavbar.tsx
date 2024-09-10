'use client'

import type { NavbarProps } from '@nextui-org/react'

import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
  cn,
  Image,
} from '@nextui-org/react'
import { Icon } from '@iconify/react'
import BlurFade from './magic-ui/BlurFade'
import { Menu } from 'lucide-react'

const menuItems = [
  'Home',
  'About Us',
  'Products',
  'Contact Us',
]

const BasicNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ classNames = {}, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
      <Navbar
        ref={ref}
        {...props}
        classNames={{
          base: cn('border-default-100 bg-[#ffffff] flex items-center', {
            'bg-[#ffffff]': isMenuOpen,
          }),
          wrapper: 'w-full justify-center',
          item: 'hidden md:flex',
          ...classNames,
        }}
        height="60px"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        
      >
        {/* Left Content */}
        <BlurFade delay={0.2} className='mt-4'>
          <NavbarBrand>
            <div className="rounded-full bg-default-foreground text-background">
              <Image src="/logo.jpeg" alt="Logo" width={100} height={100} />
            </div>
          </NavbarBrand>
        </BlurFade>
        {/* Center Content */}
        <NavbarContent justify="center">
          <BlurFade delay={0.4} className="mt-4">
            <NavbarItem isActive className="data-[active='true']:font-medium[date-active='true']">
              <Link aria-current="page" className="text-default-foreground" href="/" size="sm">
                Home
              </Link>
            </NavbarItem>
          </BlurFade>
          <BlurFade delay={0.6} className="mt-4">
            <NavbarItem>
              <Link className="text-default-500" href="/products" size="sm">
                Products
              </Link>
            </NavbarItem>
          </BlurFade>
          <BlurFade delay={0.8} className="mt-4">
            <NavbarItem>
              <Link className="text-default-500" href="#" size="sm">
                Contact Us
              </Link>
            </NavbarItem>
          </BlurFade>
          <BlurFade delay={1} className="mt-4">
            <NavbarItem>
              <Link className="text-default-500" href="#" size="sm">
                About Us
              </Link>
            </NavbarItem>
          </BlurFade>
        </NavbarContent>

        <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" />

        <NavbarMenu
          className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-[#ffffff] pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: {
              ease: 'easeInOut',
              duration: 0.2,
            },
          }}
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="mb-2 w-full text-default-500" href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} size="md">
                {item}
              </Link>
              {index < menuItems.length - 1 && <Divider className="opacity-50" />}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
  }
)

BasicNavbar.displayName = 'BasicNavbar'

export default BasicNavbar
