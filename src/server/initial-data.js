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
    name: "Courier Map Implement",
    start: new Date("2020-12-10").getTime(),
    end: new Date("2021-01-11").getTime(),
  },
  {
    name: "Restaurant BOGO Promotion",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
  {
    name: "Campaign  Billing Statement",
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
    name: "Jeganath",
    organization: "Restaurant team",
  },
  {
    name: "Kyle",
    organization: "Courier team",
  },
  {
    name: "Wayne",
    organization: "Customer team",
  },
  {
    name: "David",
    organization: "Financial team",
  },
];

export const projects = [
  {
    name: "Courier Management",
    personId: 1,
    organization: "Courier team",
    created: 1604989757139,
  },
];

export const tasks = [
  {
    name: "Manage The Development of Registration Interface",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "Please finish it promptly",
  },
  {
    name: "Develop The Login Interface",
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "Using JWT",
  },
  {
    name: "Unit Tests",
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
    name: "Optimize Performance of JVM",
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
    name: "Create The Authorization Management Interface",
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
    name: "Improve Exception Handling of Ineligible BOGOs",
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
