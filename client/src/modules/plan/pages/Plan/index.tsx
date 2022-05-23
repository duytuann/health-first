import React from 'react';
import SystemAdvanceSearch from 'modules/plan/components/SystemAdvanceSearch';
import PlanTable from 'modules/plan/components/PlanTable';

interface IPlanProps {}

const Plan: React.FC<IPlanProps> = () => {
    return (
        <>
            <SystemAdvanceSearch />
            <PlanTable />
        </>
    );
};

export default Plan;
