import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import PlanForm from 'modules/plan/components/PlanForm';
import SystemAdvanceSearch from 'modules/plan/components/PlanSearch';
import PlanTable from 'modules/plan/components/PlanTable';
import { getGetListFacilityStart } from 'modules/facilities/redux';
import { changeSearchPlan, postGetListPlanStart } from 'modules/plan/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface IPlanProps {}

const Plan: React.FC<IPlanProps> = () => {
    const dispatch = useDispatch();
    const [isShowPlanForm, setIsShowPlanForm] = useState<boolean>(false);
    const {
        data: { searchPlan },
    } = useSelector((state: RootState) => state.plan);

    useEffect(() => {
        dispatch(
            changeSearchPlan({
                planName: null,
                planStateId: null,
            })
        );
        dispatch(
            getGetListFacilityStart({
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
        dispatch(postGetListPlanStart(searchPlan));
    }, [searchPlan]);

    return (
        <>
            <SystemAdvanceSearch />
            <div style={{ display: 'flex', justifyContent: 'right' }}>
                <Button
                    style={{ margin: '10px' }}
                    color="primary"
                    $fill
                    icon={<Icon name="add" size={16} className="mr-1" />}
                    onClick={() => {
                        setIsShowPlanForm(true);
                    }}
                >
                    Thêm kế hoạch thông thanh
                </Button>
            </div>
            <PlanTable />
            {isShowPlanForm && (
                <PlanForm
                    visible={isShowPlanForm}
                    onCancel={() => {
                        setIsShowPlanForm(false);
                    }}
                    onOk={() => {
                        setIsShowPlanForm(false);
                    }}
                    isUpdate={false}
                />
            )}
        </>
    );
};

export default Plan;
