import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="flex gap-2 py-4 max-md:py-2 items-end">
            <Image
                src="/logo.jpeg"
                alt="Logo"
                width={887}
                height={159}
                className="w-[200px] max-sm:w-[150px] max-sm:-translate-y-[2px]"

            />
        </div>
    );
};

export default Header;
