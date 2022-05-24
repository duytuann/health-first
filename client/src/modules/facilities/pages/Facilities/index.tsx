import FacilitiesTable from 'modules/facilities/components/Facilities';
import SystemAdvanceSearch from 'modules/facilities/components/SystemAdvanceSearch';
import Toolbar from 'modules/facilities/components/Toolbar';
import { postGetListProvincesStart, getGetListFacilityStart } from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FacilitiesContainer } from './styles';

interface IFacilitiesProps {}

const Facilities: React.FC<IFacilitiesProps> = () => {
    const dispatch = useDispatch();
    const {
        data: { conditionSearch },
    } = useSelector((state: RootState) => state.facilities);

    useEffect(() => {
        dispatch(postGetListProvincesStart());
    }, []);

    useEffect(() => {
        dispatch(getGetListFacilityStart());
        // depen
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
