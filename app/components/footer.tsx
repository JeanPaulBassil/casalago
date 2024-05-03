import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
    const socials = [
        "/icons/facebook.png",
        "/icons/instagram.png",
        "/icons/linkedin.png",
        "/icons/youtube.svg",
    ];
    return (
        <div className="bg-[#ABC485] 2xl:px-24 xl:px-20 lg:px-16 md:px-10 sm:px-5 px-2 text-white pt-8 py-4 flex flex-col gap-4">
            <div className="flex flex-row max-md:flex-col gap-12">
                <div>
                    <h1 className="font-medium mb-2">Our Store</h1>
                    <p>
                        40 Adetokunbo Ademola Street <br /> Victoria Island,
                        Lagos <br /> T 234-814-159 6534 <br /> info@casalago.com
                    </p>
                </div>
                <div>
                    <h1 className="font-medium mb-2">
                        Stay Up To Date With The Latest Trends
                    </h1>
                    <div className="flex items-center gap-2">
                        {socials.map((social, index) => (
                            <Link
                                href="/"
                                className="border border-white rounded-full p-1 w-12 h-12 flex items-center justify-center"
                                key={index}
                            >
                                <Image
                                    src={social}
                                    height={20}
                                    width={20}
                                    alt="Social"
                                    className="w-6 h-6"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full border  border-x-[#ABC485] border-b-[#ABC485] border-t-white py-2">
                <p>© 2024 Casalago - All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
