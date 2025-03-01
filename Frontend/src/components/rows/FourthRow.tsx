import React from 'react';
import Element, { ElementData } from '../Element';

interface FourthRowProps {
  data: ElementData[];
}

export default function FourthRow({ data }: FourthRowProps) {
  return (
    <div className="">
      <div className="flex">
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <Element elementData={data[18]} />
          <Element elementData={data[19]} />
          <Element elementData={data[20]} />
          <Element elementData={data[21]} />
          <Element elementData={data[22]} />
          <Element elementData={data[23]} />
          <Element elementData={data[24]} />
          <Element elementData={data[25]} />
          <Element elementData={data[26]} />
        </div>
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <Element elementData={data[27]} />
          <Element elementData={data[28]} />
          <Element elementData={data[29]} />
          <Element elementData={data[30]} />
          <Element elementData={data[31]} />
          <Element elementData={data[32]} />
          <Element elementData={data[33]} />
          <Element elementData={data[34]} />
          <Element elementData={data[35]} />
        </div>
      </div>
    </div>
  );
}
