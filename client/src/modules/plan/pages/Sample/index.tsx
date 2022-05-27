import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import ActivityForm from 'modules/plan/components/ActivityForm';
import SampleTable from 'modules/plan/components/SampleTable';
import SampleSearch from 'modules/plan/components/SampleSearch';
import { postGetListSampleStart, postGetListFoodStart, postGetListInspectionUnitStart } from 'modules/plan/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { ActivityContainer } from './styles';

interface ISampleProps {}

const Sample: React.FC<ISampleProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isShowActivityForm, setIsShowActivityForm] = useState<boolean>(false);
    const {
        data: { searchSample, currentPlanId },
    } = useSelector((state: RootState) => state.plan);

    //serchSample :D
    useEffect(() => {
        dispatch(postGetListSampleStart(searchSample));
    }, [searchSample]);

    useEffect(() => {
        dispatch(postGetListFoodStart());
        dispatch(postGetListInspectionUnitStart());
    }, []);

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
                        history.push(`/plan/${currentPlanId}`);
                    }}
                >
                    Quay lại danh sách các hoạt động
                </Button>
            </div>
            <SampleSearch />
            <div style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="table-heading">
                    <i>Chi tiết các mẫu giám định</i>
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
                        Thêm mẫu giám định
                    </Button>
                </div>
            </div>
            <SampleTable />
        </ActivityContainer>
    );
};

export default Sample;
