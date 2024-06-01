import React from "react";

type Props = {};

const Jumbotron = (props: Props) => {
  return (
    <div className="pt-0 mt-0 absolute w-full z-10 md:px-4" style={{marginTop: "-80px" }} >    
      <div className="flex superbg flex-col items-left justify-end gap-4 rounded-2xl    h-auto min-h-[70dvh]">
        <div className="flex justify-between items-start w-full">
          <div>Page Title</div>
          <div>Page Description</div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
