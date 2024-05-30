import React, { useState, CSSProperties } from 'react';
import { ModalContext } from './Table';

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  category: string;
}

interface ElementProps {
  elementData?: ElementData | null;
  series?: string;
  from?: string;
}

export default function Element({ elementData, series, from }: ElementProps) {
  const modalContext = React.useContext(ModalContext);
  const [isFocused, setFocus] = useState(false);

  let color = 'white';

  if (elementData && elementData.category === 'alkaline earth metal') color = '#ADADAD';
  if (elementData && elementData.category === 'alkali metal') color = '#ADADAD';
  if (elementData && elementData.category === 'transition metal') color = '#ADADAD';
  if (elementData && elementData.category === 'post-transition metal') color = '#ADADAD';
  if (elementData && elementData.category === 'polyatomic nonmetal') color = '#ADADAD';
  if (elementData && elementData.category === 'noble gas') color = '#ADADAD';
  if (elementData && elementData.category === 'diatomic nonmetal') color = '#ADADAD';
  if (elementData && elementData.category === 'metalloid') color = '#ADADAD';
  // i lazy: the gray ones
  if (elementData && elementData.category === 'diatomic-nonmetal') color = '#E6D61A';
  if (elementData && elementData.category === 'noble-gas') color = '#F5A623';
  if (elementData && elementData.category === 'alkali-metal') color = '#D0021B';
  if (elementData && elementData.category === 'alkaline-earth-metal') color = '#2B62A2';
  if (elementData && elementData.category === 'Metalloid') color = '#417505';
  if (elementData && elementData.category === 'polyatomic-nonmetal') color = '#E6D61A';
  if (elementData && elementData.category === 'lanthanide') color = '#ADADAD';
  if (elementData && elementData.category === 'actinide') color = '#ADADAD';
  if (from && series === 'Lanthanides') color = '#ADADAD';
  if (from && series === 'Actinides') color = '#ADADAD';

  const style: CSSProperties = {
    backgroundColor: color,
  };

  const hoverStyle: CSSProperties = {
    backgroundColor: '#707170',
  };

  return (
    <div
      onClick={() => elementData ? modalContext?.(elementData) : console.log('no modal will be shown')}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className={elementData ? `bg-${color}-900 cursor-pointer hover:bg-gray-100` : ''}
      style={isFocused && elementData ? hoverStyle : style}
    >
      {from && (
        <div className="border border-white py-6 px-2">
          <h1 className="font-bold text-white text-center">{from}</h1>
          <p className="text-xs tracking-tighter text-white text-center">{series}</p>
        </div>
      )}

      {elementData && (
        <div className="border py-4 px-2">
          <p className="text-xs text-white">{elementData.number}</p>
          <h1 className="font-bold text-white text-center">{elementData.symbol}</h1>
          <p className="text-xs tracking-tighter text-white text-center">{elementData.name}</p>
        </div>
      )}
    </div>
  );
}
