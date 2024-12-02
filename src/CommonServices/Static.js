import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import bag from "../assests/images/bag.png";
import location from "../assests/images/location.png";

const staticServices = {
  ServiceTag: [" Service Tag 1", " Service Tag 2", " Service Tag 3"],
  WorkPageSteps: [
    {
      id: 1,
      icon: require("../assests/images/add.png"),
      title: "Select Your Role and Sign Up",
    },
    {
      id: 2,
      icon: require("../assests/images/page.png"),
      title: "Buyers Post Your Requirements",
    },
    {
      id: 3,
      icon: require("../assests/images/search.png"),
      title: "Review, Select, and Contact the Best Suppliers",
    },
    {
      id: 4,
      icon: require("../assests/images/page.png"),
      title: "Suppliers Complete Your Profile and Get Notified",
    },
    {
      id: 5,
      icon: require("../assests/images/list.png"),
      title: "Contact Buyers and Share Your Quote for the Service",
    },
    {
      id: 6,
      icon: require("../assests/images/hand.png"),
      title: "Both the Parties Can Connect and Make Business Leave a Feedback",
    },
  ],
  ContactPageBuyerList: [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ],
  ContactPageSupplier: [
    "Browse buyer requirements.",
    "Respond with your offerings.",
    "Get leads and grow your business.",
  ],
  ContactPageToggle: [
    {
      label: "Buyer",
      id: "buyer",
    },
    {
      label: "Supplier",
      id: "supplier",
    },
  ],
  HomePageInput: [
    {
      icon: bag,
      alt: "Bag Icon",
      placholder: "Search your required service here",
    },
    {
      icon: location,
      alt: "location Icon",
      placholder: "Search your desired location here",
    },
  ],
  FooterList: [
    {
      heading: "Company",
      list: [
        {
          label: "About",
          href: "/about",
        },
        {
          label: "FAQ",
          href: "/faq",
        },
      ],
    },
    {
      heading: "Terms",
      list: [
        {
          label: "Data Privacy",
          href: "/privacy",
        },
        {
          label: "Terms",
          href: "/terms",
        },
        {
          label: " Accessibility",
          href: "/accessibility",
        },
      ],
    },
    {
      heading: "Related",
      list: [
        {
          label: "Find Buyer",
          href: "/find-buyer",
        },
        {
          label: " Feedback",
          href: "/feedback",
        },
      ],
    },
  ],
  ButtonHeading: [
    {
      heading: "Abu Dhabi",
    },
    {
      heading: "Dubai",
    },
    {
      heading: "Sharjah & Ajman",
    },
    {
      heading: "Fujairah",
    },
    {
      heading: "Ras Al Khaimah",
    },
    {
      heading: "Umm Al Quwain",
    },
  ],
  SocialIcons: [
    {
      href: "https://linkedin.com",
      target: "_blank",
      rel: "noopener noreferrer",
      logo: <FaLinkedinIn />,
    },
    {
      href: "https://twitter.com",
      target: "_blank",
      rel: "noopener noreferrer",
      logo: <FaTwitter />,
    },
    {
      href: "https://facebook.com",
      target: "_blank",
      rel: "noopener noreferrer",
      logo: <FaFacebookF />,
    },
    {
      href: "https://instagram.com",
      target: "_blank",
      rel: "noopener noreferrer",
      logo: <FaInstagram />,
    },
  ],
};
export default staticServices;
