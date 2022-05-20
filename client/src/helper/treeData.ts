import { TreeNode } from 'core/models/TreeNode';

export const convertTreeData = (listData: any[]): TreeNode[] => {
  if (!listData || !listData.length) return [];
  const listRoot = listData.filter((i: any) => i.DeptIDParent === 1);
  const listOther = listData.filter((i: any) => i.DeptIDParent !== 1);
  const treeDataConvert = convertChildrent(listRoot, listOther);
  return treeDataConvert;
};

const convertChildrent = (listRoot: any, listOther: any) => {
  const newList = listRoot.map((root: any) => {
    const newItem = {
      ...root,
      name: root.DeptName,
      label: root.DeptName,
      title: root.DeptName,
      key: root.DeptID,
      value: root.DeptID,
      id: root.DeptID,
    };
    const listChild = listOther.filter((i: any) => i.DeptIDParent === root.DeptID);
    const listOtherChild = listOther.filter((i: any) => i.DeptIDParent !== root.DeptID);
    if (listChild && listChild.length)
      return {
        ...newItem,
        children: convertChildrent(listChild, listOtherChild),
      };
    return newItem;
  });
  return newList;
};
