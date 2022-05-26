import { Collapse, Space, Tooltip } from 'antd';
import Button, { LinkButton } from 'components/Button';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import confirm from 'antd/lib/modal/confirm';
import { DeleteOutlined } from '@ant-design/icons';
import { certificateState } from 'helper/consts';
import CertificateForm from 'modules/certificate/components/CertificateForm';
import SystemAdvanceSearchWrapper from 'modules/certificate/components/SystemAdvanceSearch';
import {
    changeCurrentFacilityId,
    getGetListCertificateStart,
    changeFacilityId,
    postDeleteCertificateStart,
} from 'modules/certificate/redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { CertificateContainer } from './styles';

interface ICertificate {
    id: number;
    certificateNumber: string;
    publishedDate: string;
    expiredDate: string;
    certificateStateId: number;
    facilityName: string;
    facilityId: number;
}

interface ITemp {
    facilityId: number;
    facilityName: string;
    ListProductSameFacilityID: ICertificate[];
}

const Certificate: React.FC = () => {
    const dispatch = useDispatch();
    const {
        data: { certificateList },
    } = useSelector((state: RootState) => state.certificate);
    const [isShowCertificateForm, setIsShowCertificateForm] = useState<boolean>(false);
    const [isShowCertificateUpdateForm, setIsShowCertificateUpdateForm] = useState<boolean>(false);

    const columns = [
        {
            title: 'Số giấy chứng nhận',
            key: 'certificateNumber',
            width: 200,
            render: (text: string, row: any, index: number) => (
                <div className="text-center">{row.certificateNumber}</div>
            ),
        },
        {
            title: 'Ngày phát hành',
            key: 'publishedDate',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.publishedDate}</div>,
        },
        {
            title: 'Ngày hết hạn',
            key: 'expiredDate',
            width: 150,
            render: (text: string, row: any, index: number) => <div className="text-center">{row.expiredDate}</div>,
        },
        {
            title: 'Trạng thái',
            key: 'certificateStateId',
            width: 150,
            render: (text: string, row: any, index: number) => (
                <div className="text-center">
                    {certificateState.find(ele => ele.id === row.certificateStateId)?.name}
                </div>
            ),
        },
        {
            width: 150,
            title: 'Thao tác',
            key: 'action',
            render: (value: string, record: any) => (
                <div className="text-center">
                    <Space size="small">
                        <Tooltip title="Cấp mới" color="#2a2a2a">
                            <LinkButton
                                type="link"
                                size="small"
                                icon={<Icon name="redo" color="blue" size={20} className="mx-auto" />}
                                onClick={() => {
                                    // setRecord(record);
                                    // setIsUpdateFacilityForm(true);
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Chỉnh sửa" color="#2a2a2a">
                            <LinkButton
                                type="link"
                                size="small"
                                icon={<Icon name="edit" color="blue" size={20} className="mx-auto" />}
                                onClick={() => {
                                    dispatch(changeCurrentFacilityId(record));
                                    setIsShowCertificateUpdateForm(true);
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Thu hồi" color="#2a2a2a">
                            <LinkButton
                                type="link"
                                size="small"
                                icon={<Icon name="delete" color="red600" size={20} className="mx-auto" />}
                                onClick={() => {
                                    showDeleteCertificateConfirm(record);
                                }}
                            />
                        </Tooltip>
                    </Space>
                </div>
            ),
        },
    ];

    const showDeleteCertificateConfirm = (record: any) => {
        confirm({
            title: 'Xoá giấy chứng nhận',
            icon: <DeleteOutlined color="red" />,
            content: (
                <div>
                    Bạn có chắc chắn muốn xoá kế hoạch
                    <strong> {record?.certificateNumber} </strong>
                    của cơ sở
                    <strong> {record?.facilityName} </strong>
                    không?
                </div>
            ),
            okText: 'Đồng ý',
            cancelText: 'Hủy',
            onOk() {
                dispatch(
                    postDeleteCertificateStart({
                        id: record.id,
                    })
                );
            },
            onCancel() {},
        });
    };

    useEffect(() => {
        dispatch(getGetListCertificateStart());
    }, []);

    const handleApiArrayToTree = (data: ICertificate[]) => {
        const faciIdArr = data.map(item => item.facilityId);
        const setFaciId = Array.from(new Set(faciIdArr));

        const res = [];
        for (let faciId of setFaciId) {
            const temp: ITemp = {
                facilityId: faciId,
                facilityName: '',
                ListProductSameFacilityID: [],
            };
            for (let item of data) {
                if (faciId === item.facilityId) {
                    temp.facilityName = item.facilityName;
                    temp.ListProductSameFacilityID.push(item);
                }
            }
            res.push(temp);
        }
        return res;
    };

    const data = handleApiArrayToTree(certificateList);

    return (
        <>
            {isShowCertificateForm && (
                <CertificateForm
                    visible={isShowCertificateForm}
                    onCancel={() => {
                        setIsShowCertificateForm(false);
                    }}
                    onOk={() => {
                        setIsShowCertificateForm(false);
                    }}
                    isUpdate={false}
                />
            )}
            {isShowCertificateUpdateForm && (
                <CertificateForm
                    visible={isShowCertificateUpdateForm}
                    onCancel={() => {
                        setIsShowCertificateUpdateForm(false);
                    }}
                    onOk={() => {
                        setIsShowCertificateUpdateForm(false);
                    }}
                    isUpdate={true}
                />
            )}
            <CertificateContainer>
                <div style={{ color: '#2260bd', padding: '10px 0', fontSize: '22px', fontWeight: '600' }}>
                    Danh sách chứng chỉ các cơ sở mà bạn quản lý
                </div>
                <SystemAdvanceSearchWrapper />
                <div style={{ padding: '16px' }}>
                    {data.map((item: ITemp, index: number) => (
                        <Collapse key={index}>
                            <Collapse.Panel header={item.facilityName} key={index}>
                                <div style={{ display: 'flex', justifyContent: 'right' }}>
                                    <Button
                                        style={{ marginBottom: '10px' }}
                                        color="primary"
                                        $fill
                                        icon={<Icon name="add" size={16} className="mr-1" />}
                                        onClick={() => {
                                            dispatch(changeFacilityId(item.facilityId));
                                            setIsShowCertificateForm(true);
                                        }}
                                    >
                                        Thêm kế hoạch thông thanh
                                    </Button>
                                </div>
                                <Table
                                    columns={columns}
                                    dataSource={item.ListProductSameFacilityID}
                                    pagination={false}
                                />
                            </Collapse.Panel>
                        </Collapse>
                    ))}
                </div>
            </CertificateContainer>
        </>
    );
};

export default Certificate;
