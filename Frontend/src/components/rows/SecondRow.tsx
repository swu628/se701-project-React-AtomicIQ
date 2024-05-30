import React from 'react';
import Element, { ElementData } from '../Element';

interface SecondRowProps {
  data: ElementData[];
}

export default function SecondRow({ data }: SecondRowProps) {
  return (
    <div className="">
      <div className="flex">
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <Element elementData={data[2]} />
          <Element elementData={data[3]} />
          <div className=""> </div>
          <div className=""> </div>
          <div className=""> </div>
          <div className="">  </div>
          <div className="">  </div>
          <div className=""> </div>
          <div className="">  </div>
        </div>
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <div className="">  </div>
          <div className="">  </div>
          <div className="">  </div>
          <Element elementData={data[4]} />
          <Element elementData={data[5]} />
          <Element elementData={data[6]} />
          <Element elementData={data[7]} />
          <Element elementData={data[8]} />
          <Element elementData={data[9]} />
        </div>
      </div>
    </div>
  );
}
