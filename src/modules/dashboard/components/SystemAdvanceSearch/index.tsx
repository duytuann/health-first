import { Col, Form, Input, Row, Select, Space, DatePicker } from 'antd';
import Icon from 'components/Icon/Icon';
import SelectOption from 'core/models/SelectOption';
import { ROLE_GROUP_STATUS } from 'helper/consts';
import { changeSearchCondition, ConditionSearch } from 'modules/role-group/redux';
import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { SystemAdvanceSearchWrapper } from './styles';

interface IProps {}

const SystemAdvanceSearch: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  const conditionSearch = useSelector((state: RootState) => state.roleGroup.roleGroupList.data.conditionSearch);

  const handleChange = (allValues: ConditionSearch) => {
    dispatch(changeSearchCondition(allValues));
  };

  return (
    <SystemAdvanceSearchWrapper>
      <Form
        name="basic"
        layout="vertical"
        initialValues={conditionSearch}
        onValuesChange={(changedValues, allValues) => handleChange(allValues)}
      >
        <Row justify="start" gutter={16}>
          <Col span={4}>
            <Form.Item label="Thể loại" name="TheLoai">
              <Select defaultValue={ROLE_GROUP_STATUS[0].value}>
                {ROLE_GROUP_STATUS.map((item: SelectOption) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Người được giao" name="NguoiDuocGiao">
              <Select defaultValue={0}>
                {ROLE_GROUP_STATUS.map((item: SelectOption) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <div style={{ marginBottom: '10px' }}>Thời gian phát sóng</div>
            <DatePicker picker="week" format="YYYY-wo" defaultValue={moment()} defaultPickerValue={moment()} />
          </Col>
          <Col span={4}>
            <div style={{ marginBottom: '10px' }}>Năm phát sóng</div>
            <DatePicker picker="year" format="YYYY" defaultValue={moment()} defaultPickerValue={moment()} />
          </Col>
          <Col span={4}>
            <Form.Item label="Tìm kiếm" name="RoleGroupName">
              <Input placeholder="Tìm kiếm tên, nội dung đề tài" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Space className="action action-search">
              <Icon className="search" name="search" size={34} color="primary" />
            </Space>
            <Space className="action action-filter">
              <Icon className="filter" name="filter_alt" size={34} color="primary" />
            </Space>
          </Col>
        </Row>
      </Form>
    </SystemAdvanceSearchWrapper>
  );
};
export default SystemAdvanceSearch;
