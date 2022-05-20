export interface Role {
  IsRole: boolean;
  RoleName?: string;
  RoleValue: number;
  TabID: number;
  TabName?: string;
  OrderID?: number;
}
export interface TabRole {
  TabID: number;
  TabName: string;
  Roles: Role[];
}

export interface RoleGroupItem {
  IsDelete: boolean;
  ObjectGuid: string;
  RoleGroupID: string;
  RoleGroupName?: string;
  ListRole: Role[];
  ListRoleDescription: string[];
}

export interface RoleGroupListComboBoxResponsive {
  IsDelete: boolean;
  ObjectGuid: string;
  RoleGroupID: string;
  RoleGroupName?: string;
  ListRole: Role[];
  ListRoleDescription: string[];
  GROUPNHOMQUYEN: number;
  QUANLYF0: number;
  QUANLYDONVI: number;
  QUANLYVUNG: number;
  QUANLYPHACDO: number;
  TRACUUTIMKIEM: number;
  THONGKE: number;
  PHANQUYEN: number;
}
export interface ListComboBoxResponsive {
  Object: RoleGroupListComboBoxResponsive[];
}
export interface RoleGroupResponse {}
