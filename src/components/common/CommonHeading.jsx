import React from 'react'

const CommonHeading = (props) => {
  return (
    <>
      <h2 className="text-white font-medium !leading-md text-center md:text-5xl sm:text-4xl text-3xl">
        {props.text}
      </h2>
    </>
  );
}

export default CommonHeading
