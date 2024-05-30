import React from 'react';
import elementData from '../data/elementData';
import react from '@vitejs/plugin-react';

interface ModalProps {
  open: boolean;
  toggleModal: () => void;
  modalData: {
    name: string;
    appearance: string;
    atomic_mass: string;
    boil : string;
    category: string;
    density: string;
    discovered_by: string;
    melt: string;
    molar_heat: string;
    named_by: string;
    number: string;
    period: string;
    group: string;
    phase: string;
    source: string;
    bohr_model_3d: string;
    summary: string;
    symbol: string;
    electron_configuration: string;
    electron_configuration_semantic: string;
    electron_affinity: string;
    electronegativity_pauling: string;
    block: string;
    reactivity: string;
    atomic_radius: string;
    ionic_radius: string;
    standard_elctrode_potential: string;
    isotopes: string;
    half_life: string;
    magnetic_properties: string;
    crystal_structure: string;
    chemical_bonding_and_molecular_geometry: string;
    enthalpy_of_formation: string;
    entropy: string;
  } | null;
}

export default function Modal({ open, toggleModal, modalData }: ModalProps) {
  const modalOpen = open ? '' : 'hidden';

  if (!modalData) return null;

  const {name, appearance, atomic_mass, boil, category, density, discovered_by, melt, molar_heat, named_by, number, period, group, phase, source, bohr_model_3d, summary, symbol, electron_configuration, electron_configuration_semantic, electron_affinity, electronegativity_pauling, block, reactivity, atomic_radius, standard_elctrode_potential, isotopes, half_life, magnetic_properties, crystal_structure, chemical_bonding_and_molecular_geometry, enthalpy_of_formation, entropy} = modalData;

  return (
    <div id="defaultModal" tabIndex={-1} aria-hidden="true" className={`fixed flex items-center justify-center ${modalOpen} z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`} style={{ backdropFilter: 'brightness(0.7)', top: 0, bottom: 0, left: 0, right: 0, height: '100vh' }}>
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold pl-4 text-gray-900">
              {name} ({symbol})
            </h3>
            <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-0">
            <p className="text-base leading-relaxed text-gray-900">
              {summary}
            </p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Number: ${number}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Appearance: ${appearance}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Atomic Mass: ${atomic_mass}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Group: ${group}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Electron Configuration: ${electron_configuration}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Block: ${block}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Period: ${period}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Category: ${category}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Phase: ${phase}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Density: ${density}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Boil: ${boil}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Melt: ${melt}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Molar Heat: ${molar_heat}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Reactivity: ${reactivity}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Atomic Radius: ${atomic_radius}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Standard Electrode Potential: ${standard_elctrode_potential}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Isotopes: ${isotopes}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Half Life: ${half_life}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Magnetic Properties: ${magnetic_properties}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Crystal Structure: ${crystal_structure}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Chemical Bonding and Molecular Geometry: ${chemical_bonding_and_molecular_geometry}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Enthalpy of Formation: ${enthalpy_of_formation}`}</p>
              <p className="px-0 py-2 ml-3 text-gray-900">{`Entropy: ${entropy}`}</p>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            Source: <a href={source} className="pl-2 underline" target="_blank" rel="noopener noreferrer">{source}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
