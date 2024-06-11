import React from "react";
import CommonHeading from "./common/CommonHeading";
import CommomPara from "./common/CommomPara";
import rightEllipse from "../assets/images/svg/teamEllipse.svg"
import { GitHub, Telegram, Twitter } from "./common/Icons";
import { TeamData } from "./common/Helper";

const Team = () => {
  return (
    <div className="lg:py-32 md:py-20 py-14 bg-darkBlack relative z-[1]">
      <img src={rightEllipse} alt="right" className="xl:top-0 sm:top-[-20%] top-[-10%] max-sm:w-[120px] right-0 absolute z-[-1]" />
      <div className="bg-lightPurple lg:w-[285px] w-[150px] h-[150px] lg:h-[285px] rounded-full z-[-1] absolute left-[-16%] top-0 lg:top-[28%] blur-[150px]"></div>
      <div className="container xl:py-3 max-w-[1140px] px-6 mx-auto">
        <div className="flex justify-center mb-[10px]">
          <span className="border-darkPink rounded-[150px] inline-block border px-5 py-[6px]">
            <p className="text-base font-syne text-white font-normal leading-[22.4px]">
              Team
            </p>
          </span>
        </div>
        <CommonHeading text="Meet Our Team" />
        <CommomPara
          text="Maximize your potential gains by leveraging smaller capital
          investments to take larger positions in over 20 diverse markets."
        />
        <div className="flex flex-row mt-1 flex-wrap -mx-3">
          {TeamData.map((obj, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 w-full flex justify-center lg:pb-6 pb-4  lg:px-3 px-2">
              <div className=" xl:p-[30px_0_30px_30.5px] sm:p-[25px_0_25px_20px] p-5 lg:max-w-[364px] w-full rounded-[10px] bg-greygradient border border-greyBorder">
                <div className="flex xl:gap-6  items-center gap-5">
                  <img
                    src={obj.profile}
                    alt="1"
                    className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px]"
                  /> 
                  <div>
                    <p className=" font-syne font-medium sm:text-2xl text-xl !leading-sm mb-[6px] text-white">
                      {obj.name}
                    </p>
                    <p className="opacity-90  text-white font-syne sm:text-base text-sm leading-[140%] font-normal pb-2.5">
                      {obj.post}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        rel="noopener noreferrer"
                        href="https://x.com/i/flow/login"
                        target="blank"
                      >
                        <Twitter />
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://core.telegram.org/blackberry/login"
                        target="blank"
                      >
                        <Telegram />
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="blank"
                        href="https://github.com/topics/login"
                      >
                        <GitHub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

//  <div className="w-full rounded-[10px] border border-solid border-[#FFFFFF1A] hover:border-pink  duration-500 bg-gradient-to-b from-[#99999900] to-[#FFFFFF1A] p-[30px_0_30px_30.5px] max-w-[364px]">
//               <div className="flex gap-6 items-center">
//                 <Image
//                   src={data.profile}
//                   alt="team1"
//                   width={100}
//                   height={100}
//                 />
//                 <div>
//                   <h5 className="text-white font-syne font-medium text-2xl leading-[140%] pb-[6px]">
//                     {data.name}
//                   </h5>
//                   <p className=" text-white font-syne text-base leading-[140%] font-normal pb-2.5">
//                     {data.post}
//                   </p>
//                   <div className="flex gap-3">
//                     <a
//                       href="https://x.com/?lang=en"
//                       target="_blank"
//                       className=" hover:scale-110 duration-300"
//                     >
//                       <Twittericon />
//                     </a>
//                     <a
//                       href="https://telegram.org/"
//                       target="_blank"
//                       className=" hover:scale-110 duration-300"
//                     >
//                       <Telegram />
//                     </a>
//                     <a
//                       href="https://github.com/"
//                       target="_blank"
//                       className=" hover:scale-110 duration-300"
//                     >
//                       <Github />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>