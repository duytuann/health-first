import FacilitiesTable from 'modules/facilities/components/Facilities';
import SystemAdvanceSearch from 'modules/facilities/components/SystemAdvanceSearch';
import Toolbar from 'modules/facilities/components/Toolbar';
import React from 'react';
import { FacilitiesContainer } from './styles';

interface IFacilitiesProps {}

const Facilities: React.FC<IFacilitiesProps> = () => {
  return (
    <FacilitiesContainer>
      <SystemAdvanceSearch />
      <Toolbar />
      <FacilitiesTable />
    </FacilitiesContainer>
  );
};
export default Facilities;
