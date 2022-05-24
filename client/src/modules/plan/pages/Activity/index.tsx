import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import FilterActivity from 'modules/plan/components/FilterActivity';
import ActivityTable from 'modules/plan/components/ActivityTable';
import Button from 'components/Button';
import { ActivityContainer } from './styles';

interface IPlanProps {}

const Activity: React.FC<IPlanProps> = () => {
    const history = useHistory();

    return (
        <ActivityContainer>
            <div>
                <Button
                    style={{ margin: '10px 0' }}
                    color="primary"
                    $fill
                    icon={<Icon name="double-arrow" size={16} className="mr-1" />}
                    onClick={() => {
                        history.push('/plan');
                    }}
                >
                    Quay lại danh sách kế hoạch
                </Button>
            </div>
            <FilterActivity />
            <div style={{ padding: '10px 0' }}>
                <div className="table-heading">
                    <i>Chi tiết các hoạt động của kế hoạch</i>
                </div>
            </div>
            <ActivityTable />
        </ActivityContainer>
    );
};

export default Activity;
