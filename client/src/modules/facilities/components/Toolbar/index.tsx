import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import FacilitiesForm from 'modules/facilities/components/FacilitiesForm';
import React, { useState } from 'react';
import { RightTool, ToolbarContainer } from './styles';

interface IToolbarProps {}

const Toolbar: React.FC<IToolbarProps> = () => {
  const [isShowAddFacilityForm, setIsShowAddFacilityForm] = useState<boolean>(false);

  return (
    <ToolbarContainer>
      <div>
        <Button
          style={{ margin: '10px 0' }}
          color="primary"
          $fill
          icon={<Icon name="sort" size={16} className="mr-1" />}
          onClick={() => {}}
        >
          Sắp xếp
        </Button>
      </div>
      <RightTool>
        <Button
          style={{ margin: '10px' }}
          color="primary"
          $fill
          icon={<Icon name="add" size={16} className="mr-1" />}
          onClick={() => {
            setIsShowAddFacilityForm(true);
          }}
        >
          Thêm cơ sở
        </Button>
        {isShowAddFacilityForm && (
          <FacilitiesForm
            visible={isShowAddFacilityForm}
            onCancel={() => setIsShowAddFacilityForm(false)}
            onOk={() => {
              setIsShowAddFacilityForm(false);
            }}
            isUpdate={false}
          />
        )}
      </RightTool>
    </ToolbarContainer>
  );
};

export default Toolbar;
