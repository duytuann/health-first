export const getListUrl = (query: string) => `GetList?${query}`;
export const getOneRuleGroupUrl = (id: string) => `GetOne?RoleGroupID=${id}`;
export const createUpdateRuleGroupUrl = `InsertOrUpdate`;
export const listComboBoxUrl = (query: string) => `GetListCombobox?${query}`;
export const getDeleteRuleGroupUrl = (RoleGroupID: string) => `Delete?RoleGroupID=${RoleGroupID}`;
