import React, { useState, createContext} from 'react';
import FirstRow from './rows/FirstRow';
import SecondRow from './rows/SecondRow';
import data from '../data.json';
import ThirdRow from './rows/ThirdRow';
import FourthRow from './rows/FourthRow';
import FifthRow from './rows/FifthRow';
import Modal from './Modal';
import SixthRow from './rows/SixthRow';
import SeventhhRow from './rows/SeventhRow';
import Actinides from './rows/Actinides';
import Lanthanides from './rows/Lanthanides';

interface ElementData {
  elements: any;
}

interface ModalContextType {
  (element: any): void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default function Table() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ElementData | null>(null);
  
  function toggleModal(element: any) {
    setModalData(element);
    setOpen((prevState) => !prevState);
  }

  return (
    <ModalContext.Provider value={toggleModal}>
      <div className="py-4 px-4">
        <Modal 
          open={open}
          toggleModal={toggleModal}
          modalData={modalData}
        />
        
        <h2 className={`md:hidden text-white font-semibold`}>Group One</h2>
        <FirstRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Group Two</h2>
        <SecondRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Group Three</h2>
        <ThirdRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Group Four</h2>
        <FourthRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Group Five</h2>
        <FifthRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Group Six</h2>
        <SixthRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Group Seven</h2>
        <SeventhhRow data={data.elements} />

        <h2 className={`md:hidden text-white font-semibold`}>Lanthanides</h2>
        <Lanthanides data={data.elements} />
        
        <h2 className={`md:hidden text-white font-semibold`}>Actinides</h2>
        <Actinides data={data.elements} />
      </div>
    </ModalContext.Provider>
  );
}
