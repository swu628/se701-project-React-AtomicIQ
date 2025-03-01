import React from 'react';
import Element, { ElementData } from '../Element';

interface SixthRowProps {
  data: ElementData[];
}

export default function SixthRow({ data }: SixthRowProps) {
  return (
    <div className="">
      <div className="flex">
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <Element elementData={data[54]} />
          <Element elementData={data[55]} />
          <Element series="Lanthanides" from="57-71" />
          <Element elementData={data[71]} />
          <Element elementData={data[72]} />
          <Element elementData={data[73]} />
          <Element elementData={data[74]} />
          <Element elementData={data[75]} />
          <Element elementData={data[76]} />
        </div>
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <Element elementData={data[77]} />
          <Element elementData={data[78]} />
          <Element elementData={data[79]} />
          <Element elementData={data[80]} />
          <Element elementData={data[81]} />
          <Element elementData={data[82]} />
          <Element elementData={data[83]} />
          <Element elementData={data[84]} />
          <Element elementData={data[85]} />
        </div>
      </div>
    </div>
  );
}
