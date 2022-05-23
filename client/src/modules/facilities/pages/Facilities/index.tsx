import FacilitiesTable from 'modules/facilities/components/Facilities';
import SystemAdvanceSearch from 'modules/facilities/components/SystemAdvanceSearch';
import Toolbar from 'modules/facilities/components/Toolbar';
import { postGetListProvincesStart } from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FacilitiesContainer } from './styles';

interface IFacilitiesProps {}

const Facilities: React.FC<IFacilitiesProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postGetListProvincesStart());
    }, []);

    return (
        <FacilitiesContainer>
            <SystemAdvanceSearch />
            <Toolbar />
            <FacilitiesTable />
        </FacilitiesContainer>
    );
};
export default Facilities;
