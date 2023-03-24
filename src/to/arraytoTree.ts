interface IParams {
  arr: any[];
  idKey?: string;
  parentKey?: string;
  childrenKey?: string;
  rootId?: string | number;
}

/**
 * 数组转树结构
 * @param params
 * @returns
 */
export function arrayToTree(params: IParams) {
  const { arr, idKey = 'id', parentKey = 'pid', childrenKey = 'children', rootId = 0 } = params;
  const result: any[] = [];
  const itemMap: Record<string, any> = {};

  for (const item of arr) {
    const id = item[idKey];
    const pid = item[parentKey];

    if (!itemMap[id]) {
      itemMap[id] = {
        [childrenKey]: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id][childrenKey],
    };

    const treeItem = itemMap[id];

    if (pid === rootId) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}
