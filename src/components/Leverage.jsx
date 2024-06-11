import React from 'react'
import CommonHeading from './common/CommonHeading'
import CommomPara from './common/CommomPara';
import { BtcUsd, PinkGraph } from './common/Icons';
import { LeverageCardsData } from './common/Helper';

const Leverage = () => {
  return (
    <div className="lg:pt-32 md:pt-20 pt-14 bg-darkBlack">
      <div className="container xl:pt-3 max-w-[1140px] px-6 mx-auto">
        <CommonHeading text="Leverage Trading" />
        <CommomPara text="Amplify your potential profits by taking larger market positions with smaller capital investments on over 20 different markets." />
        <div className="flex flex-wrap flex-row -mx-3">
          {LeverageCardsData.map((obj, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 w-full mb-6 px-3">
              <div className="bg-darkGrey border-lightGreyBorder rounded-[10px] p-5  border">
                <div className="flex justify-between">
                  <div className="mb-0">
                    <div className="gap-3 flex">
                      {obj.coin}
                      <div>
                        <h4 className="font-semibold text-base text-white !leading-xxs">
                          {obj.name}
                        </h4>
                        <p className="text-white opacity-50 text-base !leading-md font-normal">
                          {obj.type}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium text-2xl !leading-md mt-[26.5px] text-white">
                      {obj.value}
                    </p>
                  </div>
                  <div className="mb-0">
                    {obj.graphImg}
                    <div className="flex mt-5 mb-2 gap-4">
                      <p className=" font-normal text-sm leading-[16.8px] text-white opacity-50">
                        CHG
                      </p>
                      <p className="text-base leading-[19.2px] text-darkRed font-normal">
                        {obj.chg}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className=" font-normal text-sm leading-[16.8px] text-white opacity-50">
                        VOL
                      </p>
                      <p className="text-base leading-5 text-white opacity-90 font-normal">
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
