import React from "react";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";

const networkslogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  YouTube: youtubeLogo,
  Instagram: instagramLogo,
};

const networkscolors = 
{
  Facebook: "bg-[#1976d2]",
  Twitter: "bg-[#1ca0f2]",
  YouTube: "bg-[#c4032a]",
  Instagram: "bg-[#c13584]",

}

export const OverViewCard = ({ user, audienceType, audience, network }) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px]  mx-auto overflow-hidden">
      <div className={`${networkscolors[network]} h-[4px] mb-8`}></div>
      <div className="flex items-center place-content-center gap-2 mb-[28px]">
        <img
          src={networkslogos[network]}
          alt={`logo ${network}`}
          className="w-[20px] h-[20px]"
        />
        <p>{user}</p>
      </div>

      <p>{audience}</p>
      <p>{audienceType}</p>
    </article>
  );
};
