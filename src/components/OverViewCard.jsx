import React from "react";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconup from "../assets/images/icon-up.svg";
import icondown from "../assets/images/icon-down.svg";

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

export const OverViewCard = ({ user, audienceType, audience, network, isUp }) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px]  mx-auto overflow-hidden text-center">
      <div className={`${networkscolors[network]} h-[4px] mb-8`}></div>
      <div className="flex items-center place-content-center gap-2 mb-[12px]">
        <img
          src={networkslogos[network]}
          alt={`logo ${network}`}
          className="w-[20px] h-[20px]"
        />
        <p className=" text-x text-Dark-Grayish-Blue font-bold">{user}</p>
      </div>

      <p className="text-[56px] font-bold text-Very-Dark-Blue mb-5">{audience}</p>
      <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-x font-bold">{audienceType}</p>
      <div className="flex item-center place-content-center gap-1">
        <img src={isUp} alt="icon up" className="w-[10px] h-[10px]" />
        <p>{}</p>

      </div>

    </article>
  );
};
