import { Col, Form, Input, Row, Select } from 'antd';
import SelectOption from 'core/models/SelectOption';
import { ROLE_GROUP_STATUS } from 'helper/consts';
import { changeSearchCondition, ConditionSearch } from 'modules/role-group/redux';
import React from 'react';
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
          <Col span={18}>
            <Form.Item label="Tên nhóm quyền" name="RoleGroupName">
              <Input placeholder="Nhập nhóm quyền" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Trạng thái" name="StatusID">
              <Select defaultValue={0}>
                {ROLE_GROUP_STATUS.map((item: SelectOption) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </SystemAdvanceSearchWrapper>
  );
};
export default SystemAdvanceSearch;
