import Element, { ElementData } from '../Element';

interface FirstRowProps {
  data: ElementData[];
}

export default function FirstRow({ data }: FirstRowProps) {
  return (
    <div className="">
      <div className="flex">
        <div className="md:w-1/2 w-full md:grid md:grid-cols-9">
          <Element elementData={data[0]} />
          <div className="">  </div>
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
          <div className=""> </div>
          <div className="">  </div>
          <div className="">  </div>
          <div className=""> </div>
          <div className="">  </div>
          <Element elementData={data[1]} />
        </div>
      </div>
    </div>
  );
}
