import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import ActivityForm from 'modules/plan/components/ActivityForm';
import FilterActivity from 'modules/plan/components/FilterActivity';
import ActivityTable from 'modules/plan/components/ActivityTable';
import Button from 'components/Button';
import { ActivityContainer } from './styles';

interface IActivityProps {}

const Activity: React.FC<IActivityProps> = () => {
    const history = useHistory();
    const [isShowActivityForm, setIsShowActivityForm] = useState<boolean>(false);

    return (
        <ActivityContainer>
            {isShowActivityForm && (
                <ActivityForm
                    visible={isShowActivityForm}
                    onCancel={() => {
                        setIsShowActivityForm(false);
                    }}
                    onOk={() => {
                        setIsShowActivityForm(false);
                    }}
                    isUpdate={false}
                />
            )}
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
            <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="table-heading">
                    <i>Chi tiết các hoạt động của kế hoạch</i>
                </div>
                <div>
                    <Button
                        style={{ margin: '10px' }}
                        color="primary"
                        $fill
                        icon={<Icon name="add" size={16} className="mr-1" />}
                        onClick={() => {
                            setIsShowActivityForm(true);
                        }}
                    >
                        Thêm kế hoạch thông thanh
                    </Button>
                </div>
            </div>
            <ActivityTable />
        </ActivityContainer>
    );
};

export default Activity;
