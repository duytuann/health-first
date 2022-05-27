import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import ActivityForm from 'modules/plan/components/ActivityForm';
import ActivityTable from 'modules/plan/components/ActivityTable';
import ActivitySearch from 'modules/plan/components/ActivitySearch';
import { postGetListActivityStart, changeSearchActivity } from 'modules/plan/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { ActivityContainer } from './styles';

interface IActivityProps {}

const Activity: React.FC<IActivityProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isShowActivityForm, setIsShowActivityForm] = useState<boolean>(false);
    const {
        data: { searchActivity },
    } = useSelector((state: RootState) => state.plan);

    useEffect(() => {
        changeSearchActivity({
            activityName: null,
            activityStateId: null,
            activityResultId: null,
        });
    }, []);

    useEffect(() => {
        dispatch(postGetListActivityStart(searchActivity));
    }, [searchActivity]);

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
                    Quay lại danh sách các kế hoạch
                </Button>
            </div>
            <ActivitySearch />
            <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="table-heading">
                    <i>Chi tiết các hoạt động</i>
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
                        Thêm hoạt động thông thanh
                    </Button>
                </div>
            </div>
            <ActivityTable />
        </ActivityContainer>
    );
};

export default Activity;
