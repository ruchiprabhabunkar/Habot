import React from "react";

function SocialIcon({ href, target, rel, logo, heading }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="w-10 h-10 md:w-12 md:h-12 border border-[rgba(255,255,255,0.20)] 
      rounded-full flex items-center justify-center hover:bg-[rgba(255,255,255,0.20)]"
    >
      {logo}
      <h1>{heading}</h1>
    </a>
  );
}

export default SocialIcon;
