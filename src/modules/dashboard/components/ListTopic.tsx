import { CaretRightOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Row, Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Icon from 'components/Icon/Icon';
import Table from 'components/Table';
import React from 'react';

interface IListTopicProps {}

const ListTopic: React.FunctionComponent<IListTopicProps> = props => {
  const { Panel } = Collapse;

  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      dataIndex: 'index',
      render: (text: string, row: any, index: number) => <div className="text-center">{index + 1}</div>,
      align: 'center',
      width: 60,
    },
    {
      title: 'Thể loại',
      width: 120,
    },
    {
      title: 'Tên đề tài',
      width: 250,
    },
    {
      title: 'Giờ phát sóng',
      width: 150,
      align: 'center',
    },
    {
      title: 'Tên người đăng ký',
      width: 200,
      align: 'center',
    },
    {
      title: 'Ghi chú',
      width: 200,
      align: 'center',
    },
    {
      title: 'Thao tác',
      align: 'center',
      render: (value: string, record: any) => (
        <div className="text-center">
          <Space size="small">
            <Tooltip title="Chỉnh sửa" color="#2a2a2a">
              <Button
                type="link"
                size="small"
                icon={<Icon name="edit" color="primary" size={20} className="mx-auto" />}
              />
            </Tooltip>

            <Tooltip title="Xem lịch sử" color="#2a2a2a">
              <Button
                type="link"
                size="small"
                icon={<Icon name="history" color="primary" size={20} className="mx-auto" />}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      className="site-collapse-custom-collapse"
    >
      <Panel header="Thứ 2" key="1" className="site-collapse-custom-panel">
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={[1]} rowKey="ObjectGuid" pagination={false} />
          </Col>
        </Row>
      </Panel>
      <Panel header="Thứ 3" key="2" className="site-collapse-custom-panel">
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={[2]} rowKey="ObjectGuid" pagination={false} />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default ListTopic;
