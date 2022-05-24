import PlanTable from 'modules/plan/components/PlanTable';
import SystemAdvanceSearch from 'modules/plan/components/SystemAdvanceSearch';
import { postGetListPlanStart } from 'modules/plan/redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface IPlanProps {}

const Plan: React.FC<IPlanProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postGetListPlanStart());
    }, []);

    return (
        <>
            <SystemAdvanceSearch />
            <PlanTable />
        </>
    );
};

export default Plan;
