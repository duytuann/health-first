import { Page } from 'core/models/Page';
import { Role } from 'core/models/RoleGroup';

export interface RoleGroupListParams extends Page {
  RoleGroupName?: string;
  StatusID?: number;
}
export interface RoleGroup {
  ListRole: Role[];
  RoleGroupID: number;
  RoleGroupName: string;
}
export interface RoleGroupParams {
  RoleGroup: RoleGroup;
}

export interface RoleGroupListComboBox {
  DeptID?: number;
  Type?: number;
  StatusID: number;
  RoleGroupName: string;
}
