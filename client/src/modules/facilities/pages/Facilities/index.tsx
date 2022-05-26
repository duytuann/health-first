import FacilitiesTable from 'modules/facilities/components/Facilities';
import { Spin } from 'antd';
import SystemAdvanceSearch from 'modules/facilities/components/SystemAdvanceSearch';
import Toolbar from 'modules/facilities/components/Toolbar';
import { postGetListProvincesStart, getGetListFacilityStart, changeSearchCondition } from 'modules/facilities/redux';
import React, { useEffect } from 'react';
import { ReduxStateType } from 'redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { FacilitiesContainer } from './styles';

interface IFacilitiesProps {}

const Facilities: React.FC<IFacilitiesProps> = () => {
    const dispatch = useDispatch();
    const {
        data: { conditionSearch },
        status,
    } = useSelector((state: RootState) => state.facilities);

    useEffect(() => {
        dispatch(postGetListProvincesStart());
        dispatch(
            changeSearchCondition({
                facilityName: null,
                businessTypeId: null,
                wardId: null,
                provinceId: null,
                districtId: null,
                facilityStateId: null,
            })
        );
    }, []);

    useEffect(() => {
        dispatch(getGetListFacilityStart(conditionSearch));
    }, [conditionSearch]);

    return (
        <Spin spinning={status === ReduxStateType.LOADING}>
            <FacilitiesContainer>
                <SystemAdvanceSearch />
                <Toolbar />
                <FacilitiesTable />
            </FacilitiesContainer>
        </Spin>
    );
};
export default Facilities;
