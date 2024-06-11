import React from 'react'

const CommomPara = (props) => {
  return (
    <>
      <p className="md:mt-4 mt-2 text-white lg:mb-14 sm:mb-10 mb-6 opacity-90 font-normal sm:text-base text-sm !leading-xs text-center mx-auto max-w-[640px]">
       {props.text}
      </p>
    </>
  );
}

export default CommomPara
