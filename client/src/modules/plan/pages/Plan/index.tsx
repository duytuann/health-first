import PlanTable from 'modules/plan/components/PlanTable';
import Icon from 'components/Icon/Icon';
import SystemAdvanceSearch from 'modules/plan/components/SystemAdvanceSearch';
import Button from 'components/Button';
import PlanForm from 'modules/plan/components/PlanForm';
import { postGetListPlanStart, postGetListActivityStart } from 'modules/plan/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface IPlanProps {}

const Plan: React.FC<IPlanProps> = () => {
    const dispatch = useDispatch();
    const [isShowPlanForm, setIsShowPlanForm] = useState<boolean>(false);

    useEffect(() => {
        dispatch(postGetListPlanStart());
        dispatch(postGetListActivityStart());
    }, []);

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
