export const taskTypes = [
  {
    name: "task",
  },
  {
    name: "bug",
  },
];

export const tags = [
  {
    name: "Unassigned",
  },
  {
    name: "In development",
  },
  {
    name: "Closed",
  },
];

export const epics = [
  {
    name: "Courier Map Implementation",
    start: new Date("2020-12-10").getTime(),
    end: new Date("2021-01-11").getTime(),
  },
  {
    name: "Courier Map Implementation",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
  {
    name: "Courier Map Implementation",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
];

export const kanbans = [
  {
    name: "Unassigned",
  },
  {
    name: "In development",
  },
  {
    name: "Closed",
  },
];

export const users = [
  {
    name: "高修文",
    organization: "外卖组",
  },
  {
    name: "熊天成",
    organization: "外卖组",
  },
  {
    name: "郑华",
    organization: "总部组",
  },
  {
    name: "王文静",
    organization: "中台组",
  },
];

export const projects = [
  {
    name: "Delivery Management",
    personId: 1,
    organization: "Delivery team",
    created: 1604989757139,
  },
];

export const tasks = [
  {
    name: "管理注册界面开发",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "请尽快完成",
  },
  {
    name: "管理登录界面开发",
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "请使用JWT完成",
  },
  {
    name: "单元测试",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "性能优化",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "权限管理界面开发",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "UI Development",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "Unit Test",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
];
