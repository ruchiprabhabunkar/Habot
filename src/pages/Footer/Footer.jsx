import React from "react";
import logo from "../../assests/images/logo-white.png";
import staticServices from "../../CommonServices/Static";
import ListItem from "../../DesignComponent/ListItem/ListItem";
import SocialIcon from "../../DesignComponent/SocialIcon/SocialIcon";

const Footer = () => {
  const { FooterList, SocialIcons } = staticServices;
  return (
    <footer className="bg-[#123557] text-white py-14 px-4 sm:px-20  ">
      <div className="max-w-7xl mx-auto border-[#FFFFFF33] border-b-[1px] border-t-[1px] py-4">
        <div className="flex flex-col md:flex-row   items-center space-y-6 md:space-y-0 pb-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-2 ">
            <img src={logo} alt="Habot Logo" className="h-8 w-auto" />
            <p>© R Singhania</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center ml-12 md:justify-start space-x-6 md:space-x-8 text-sm">
            {FooterList.map((footer) => (
              <ListItem heading={footer.heading} list={footer.list} />
            ))}
          </div>

          {/* Social Media Section */}
          <div className="flex space-x-4 sm:ml-96">
            {SocialIcons.map((icon) => (
              <SocialIcon
                href={icon.href}
                rel={icon.rel}
                target={icon.target}
                logo={icon.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
