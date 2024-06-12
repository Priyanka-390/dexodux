import footerLogo from "../assets/images/svg/footerLogo.svg"
import { FooterLinkData } from "./common/Helper";
import { DiscordFooterIcon, TwitterFooterIcon } from "./common/Icons";

const Footer = () => {
  return (
    <div className="bg-lightBlack lg:pt-16 md:pt-14 pt-10">
      <div className="container lg:mt-[6px]  mx-auto md:px-3 px-4 max-w-[1164px]">
        <div className="flex  lg:pb-16 md:pb-14 pb-10 flex-wrap flex-row -mx-3">
          <div className="lg:w-4/12 w-full px-3">
            <div className="flex lg:justify-start sm:justify-center justify-start">
              <a href="#">
                <img src={footerLogo} alt="logo" />
              </a>
            </div>
            <p className="mt-3 text-white lg:mx-0 sm:mx-auto lg:text-start sm:text-center text-start lg:max-w-[374px] opacity-90 lg:mb-[30px] mb-4 sm:text-base text-sm font-normal leading-md">
              Your gateway to gasless trading with stable fees, trading across
              multiple markets, copy trading, singles transactions for a
              CEX-like experience and competitive rankings.
            </p>
            <div className="flex items-center lg:justify-start sm:justify-center justify-start gap-4">
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
          <div className="lg:w-8/12 max-lg:pt-6 w-full px-3">
            <div className="flex flex-wrap flex-row -mx-3">
              <div className="sm:w-6/12 w-1/3 px-3 flex sm:justify-center">
                <ul>
                  <li className="text-white sm:mb-5 mb-3 opacity-90 sm:text-base text-sm font-semibold !leading-xxs">
                    Resources
                  </li>
                  {FooterLinkData.map((obj, i) => (
                    <li
                      key={i}
                      className="sm:mb-[14px] mb-2 lg:text-start sm:text-center"
                    >
                      <a
                        href={obj.to}
                        className="font-normal sm:text-base text-sm footerLinkHover duration-300  text-white !leading-md opacity-80 "
                      >
                        {obj.link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-6/12 w-2/3 px-3 flex lg:justify-end">
                <div>
                  <p className="text-white mb-5 lg:text-start sm:text-center opacity-90 sm:text-base text-sm font-semibold !leading-xxs">
                    Sign Up for Email Updates
                  </p>
                  <div className="flex justify-between max-w-[302px] w-full p-1 h-[52px] bg-inputColor rounded-[115px]">
                    <input
                      type="email"
                      placeholder="Your e-mail"
                      className="placeholder:text-sm w-full sm:pl-3 pl-2 placeholder:w-full placeholder:text-white placeholder:opacity-70 placeholder:font-normal bg-transparent !rounded-[115px] text-white !outline-none "
                    />
                    <button type="submit" className="text-sm  hover:scale-110 duration-300 sm:text-base text-white font-semibold sm:py-[12.5px] py-2 shadow-pinkShadow sm:px-5 px-3 bg-pinkGradient rounded-[130px] ">
                      Subscribe
                    </button>
                  </div>
                  <p className="max-w-[298px] text-sm font-normal lg:text-start sm:text-center mt-[14px] text-white opacity-70 leading-[19.6px]">
                    Sign up with your email address to receive news and updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] lg:mt-[6px] bg-white opacity-30"></div>
        <div className="flex max-sm:flex-col justify-center items-center  sm:justify-between sm:py-5 py-3">
          <p className="font-normal text-sm text-white opacity-70">
            Copyright {new Date().getFullYear()} Dexodus. All rights reserved.
          </p>
          <div>
            <a
              href="#privacy"
              className="font-normal sm:text-sm text-xs text-white opacity-70"
            >
              Privacy Policy
            </a>
            <span className="font-normal sm:text-sm text-xs sm:mx-[14px] mx-2 text-white opacity-70">
              |
            </span>
            <a
              href="#condition"
              className="font-normal sm:text-sm text-xs text-white opacity-70"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
