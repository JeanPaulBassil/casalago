import React from "react";
import Image from "next/image";
import BlurFade from "./magic-ui/BlurFade";


type Props = {};

const Header = (props: Props) => {
    return (
        <div className="flex gap-2 py-4 max-md:py-2 items-end">
            <BlurFade inView delay={0.5}>
            <Image
                src="/logo.jpeg"
                alt="Logo"
                width={887}
                height={159}
                className="w-[200px] max-sm:w-[150px] max-sm:-translate-y-[2px]"

            />
            </BlurFade>
           
        </div>
    );
};

export default Header;
