import footerLogo from "../assets/images/svg/footerLogo.svg"
import { FooterLinkData } from "./common/Helper";
import { DiscordFooterIcon, TwitterFooterIcon } from "./common/Icons";

const Footer = () => {
  return (
    <div className="bg-lightBlack pt-16">
      <div className="container mt-[6px]  mx-auto px-3 max-w-[1140px]">
        <div className="flex  pb-16 flex-wrap flex-row -mx-3">
          <div className="w-5/12 px-3">
            <a href="#">
              <img src={footerLogo} alt="logo" />
            </a>
            <p className="mt-3 text-white max-w-[374px] opacity-90 mb-[30px] text-base font-normal leading-md">
              Your gateway to gasless trading with stable fees, trading across
              multiple markets, copy trading, singles transactions for a
              CEX-like experience and competitive rankings.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/home"
                className="transition-all duration-300 ease-in-out hover:translate-y-[-7px]"
              >
                {" "}
                <TwitterFooterIcon />
              </a>
              <a
                href="https://discord.com"
                className="transition-all duration-300 ease-in-out hover:translate-y-[-7px]"
              >
                <DiscordFooterIcon />
              </a>
            </div>
          </div>
          <div className="w-7/12 px-3">
            <div className="flex flex-wrap flex-row -mx-3">
              <div className="w-1/2 px-3 flex justify-center">
                <ul>
                  <li className="text-white mb-5 opacity-90 text-base font-semibold !leading-xxs">
                    Resources
                  </li>
                  {FooterLinkData.map((obj, i) => (
                    <li key={i} className="mb-[14px]">
                      <a
                        href={obj.to}
                        className="font-normal text-base text-white !leading-md opacity-80 "
                      >
                       {obj.link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer

// import React from 'react'
// import Image from "next/image";
// import CommonBtn from './common/CommonBtn';
// import { DiscordIcon, LogoIcon, TwitterdIcon } from './common/Icons';

// const Footer = () => {
//   return (
//     <div className='bg-[#111111] mt-[-2px] pt-[48px] sm:pt-[58px] md:pt-[70px]'>
//     <div className="container mx-auto px-3 max-w-[1164px]">
//         <div className="flex flex-wrap justify-center">
//             <div className="w-full lg:w-[40%]">
//           <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
//           <a href=""> <span className='w-[95px] h-[95px]'><LogoIcon/> </span></a>
//                 <p className='font-syne text-base mt-4 leading-[137%] text-white opacity-90 font-normal max-w-[374px] text-center lg:text-start'>Your gateway to gasless trading with stable fees, trading across multiple markets, copy trading, singles transactions for a CEX-like experience and competitive rankings.</p>
//                <div className="mt-5  sm:mt-[30px] mb-[30px] sm:mb-[70px] flex items-center gap-4">
//                 <a href="https://x.com/home" className='transition-all duration-300 ease-in-out hover:translate-y-[-7px]'> <DiscordIcon/></a>
//                 <a href="https://discord.com" className='transition-all duration-300 ease-in-out hover:translate-y-[-7px]'><TwitterdIcon/></a>
              
//                </div>
//           </div>
//             </div>
//             <div className="  w-[20%] sm:w-[50%] lg:w-[20%] flex justify-center">
//                 <ul className='ps-4 md:ps-0'>
//                     <li className='mb-3 sm:mb-[20px] font-syne text-base leading-[137%] text-white opacity-90 font-semibold'>Resources</li>
//                     <li className='mb-3 sm:mb-[14px]'><a href="" className='font-syne text-sm sm:text-base leading-[137%] text-white opacity-80 hover:text-[#c5215e] transition-all duration-200 ease-in-out font-normal'>Home</a></li>
//                     <li className='mb-3 sm:mb-[14px]'><a href="" className='font-syne text-sm sm:text-base leading-[137%] text-white opacity-80 hover:text-[#c5215e] transition-all duration-200 ease-in-out font-normal'>Top-features</a></li>
//                     <li className='mb-3 sm:mb-[14px]'><a href="" className='font-syne text-sm sm:text-base leading-[137%] text-white opacity-80 hover:text-[#c5215e] transition-all duration-200 ease-in-out font-normal'>Roadmap</a></li>
//                     <li className='mb-3 sm:mb-[14px]'><a href="" className='font-syne text-sm sm:text-base leading-[137%] text-white opacity-80 hover:text-[#c5215e] transition-all duration-200 ease-in-out font-normal'>Tokenomics</a></li>
//                     <li className='mb-3 sm:mb-[14px]'><a href="" className='font-syne text-sm sm:text-base leading-[137%] text-white opacity-80 hover:text-[#c5215e] transition-all duration-200 ease-in-out font-normal'>FAQ</a></li>
          
//                 </ul>
//             </div>
//             <div className=" w-[80%] sm:w-[50%] lg:w-[40%] flex justify-end min-[445px]:justify-center lg:justify-end">
//               <div className="max-w-[230px] sm:max-w-[302px]">
//               <p className='mb-[20px] font-syne text-base leading-[137%] text-[#e7e7e7] font-semibold'>Sign Up for Email Updates</p>
//               <div className="flex items-center pr-2 h-[52px]  bg-[#242424]  !rounded-[115px]">
//                 <input id='fotter_input' type="email"  placeholder='Your e-mail' className='p-3 h-[52px] sm:p-4 pr-2 placeholder:text-sm placeholder:text-[#bdbdbd] placeholder:font-normal  bg-[#242424] max-w-[130px] sm:max-w-[175px] !rounded-[115px] text-white !outline-none '/>
//                   <button className='text-sm sm:text-base font-syne text-white font-semibold py-[6px] h-[34px] sm:h-[44px] shadow-[0px_8px_20px_0px_#D0215D66] px-3 sm:px-[20.1px] button-gradient rounded-[130px] '>Subscribe</button>
//               </div>
//               <p className='mt-[14px] font-syne text-sm  leading-[137%] text-white opacity-70 font-normal max-w-[298px]'>Sign up with your email address to receive news and updates</p>
          
//           </div>       
//                </div>
//             </div>
//             <div className="py-3 sm:py-5 border-t-[#414141] border-t-[1px] flex flex-col sm:flex-row items-center justify-between">
//                 <p className='font-syne text-white opacity-70 font-normal text-xs leading-[135%] hover:opacity-100 transition-all duration-200 ease-in-out'>Copyright Â©2024 Dexodus. All rights reserved.</p>
//                 <p className='font-syne text-white opacity-70 font-normal text-xs leading-[135%] mt-2 sm:mt-0 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer'>Privacy Policy<span className='px-[14px]'>|</span>Terms and Conditions</p>
         
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer
