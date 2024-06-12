import React from 'react'
import CommonHeading from './common/CommonHeading'
import CommomPara from './common/CommomPara';
import { LeverageCardsData } from './common/Helper';

const Leverage = () => {
  return (
    <div className="lg:py-32 md:py-20 z-30 relative  py-12 bg-cover bg-center overflow-x-clip bg-darkBlack bg-[url(./assets/images/webp/bgLeverage.webp)]">
      <div className="w-[285px] md:block hidden h-[285px] bg-darkPink blur-[150px] z-0 rounded-full absolute bottom-[-20%] right-[-20%]"></div>
      <div className="container xl:pt-3 max-w-[1164px] lg:px-3 px-6 mx-auto relative z-20">
        <CommonHeading text="Leverage Trading" />
        <CommomPara text="Amplify your potential profits by taking larger market positions with smaller capital investments on over 20 different markets." />
        <div className="flex flex-wrap flex-row -mx-3">
          {LeverageCardsData.map((obj, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 w-full sm:mb-6 mb-4 px-3">
              <div className="bg-darkGrey backdrop-blur-[30px] hover:border-darkPink lg:max-w-[364px] lg:max-h-[148px] duration-300 border-lightGreyBorder rounded-[10px] p-5  border">
                <div className="flex justify-between">
                  <div className="mb-0">
                    <div className="gap-3 flex">
                      {obj.coin}
                      <div>
                        <h4 className="font-semibold sm:text-base text-sm text-white !leading-xxs">
                          {obj.name}
                        </h4>
                        <p className="text-white opacity-50 sm:text-base text-sm !leading-md font-normal">
                          {obj.type}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium sm:text-2xl text-xl !leading-md md:mt-[26.5px] mt-4 text-white">
                      {obj.value}
                    </p>
                  </div>
                  <div className="mb-0">
                    <div className='flex justify-end'>{obj.graphImg}</div>
                    <div className="flex md:mt-5 items-center mt-3 mb-2 gap-4">
                      <p className=" font-normal text-sm leading-[16.8px] text-white opacity-50">
                        CHG
                      </p>
                      <p className="sm:text-base text-sm leading-[19.2px] text-darkRed font-normal">
                        {obj.chg}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className=" font-normal text-sm leading-[16.8px] text-white opacity-50">
                        VOL
                      </p>
                      <p className="sm:text-base text-sm leading-5 text-white opacity-90 font-normal">
                        {obj.vol}
                      </p>
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
}

export default Leverage
