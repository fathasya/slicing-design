import React from "react";
import Logo from "../../molecules/Logo";
import Sosmed from "../../molecules/Sosmed";

const Footer = () => {
    return(
        <>
        <div className="px-20 py-10 bg-gray-200 grid grid-cols-2">

            <div className="px-20 py-5">
                <Logo/>
                <p className="leading-6 my-5 mr-20">
                    LaslesVPN is a private virtual network that has a unique features and has high security.
                </p>
                <Sosmed/>
                <p className="text-gray-500 text-sm">
                    &copy;2020LaslesVPN
                </p>
            </div>
            
            <div className="grid grid-cols-3">
            <div>
                <p>
                    <b className="leading-10 text-lg">Product</b>
                    <ul className="leading-8 text-base">
                        <li>Download</li>
                        <li>Pricing</li>
                        <li>Locations</li>
                        <li>Server</li>
                        <li>Countries</li>
                        <li>Blog</li>
                    </ul>
                </p>
            </div>
            
            <div>
            <p>
                <b className="leading-10 text-lg">Engage</b>
                <ul className="leading-8 text-base">
                    <li>LaslesVPN ?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
                </p>
            </div>
            
            <div>
            <p>
                <b className="leading-10 text-lg">Earn Money</b>
                <ul className="leading-8 text-base">
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                </ul>
                </p>
            </div>
            </div>

        </div>
        </>
    )
}

export default Footer;