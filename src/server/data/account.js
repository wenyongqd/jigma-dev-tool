import { ServerError } from '../util'

const usersKey = "__jira_users__";

let users = {};

const persist = () =>
  window.localStorage.setItem(usersKey, JSON.stringify(users));
const load = () =>
  Object.assign(users, JSON.parse(window.localStorage.getItem(usersKey) || ""));

try {
  load();
} catch (error) {
  persist();
}

const validateUserForm = ({ name, password }) => {
  if (!name) {
    const error = new ServerError("Please input username");
    error.status = 400;
    throw error;
  }
  if (!password) {
    const error = new ServerError("Please input password");
    error.status = 400;
    throw error;
  }
};

function hash(str) {
  let hash = 5381,
    i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return String(hash >>> 0);
}

function sanitizeUser(user) {
  const { passwordHash, ...rest } = user;
  return rest;
}

const authenticate = ({ name, password }) => {
  validateUserForm({ name, password });
  const id = +hash(name);
  const user = users[id] || {};
  if (user.passwordHash === hash(password)) {
    return { ...sanitizeUser(user), token: btoa(user.id + "") };
  }
  const error = new ServerError("Username or password is incorrect.");
  error.status = 400;
  throw error;
};

function validateUser(id) {
  load();
  if (!users[id]) {
    const error = new ServerError(`No user with ID "${id}" was found. Please try to clear the database.`);
    error.status = 404;
    throw error;
  }
}

async function read(id) {
  validateUser(id);
  return sanitizeUser(users[id]);
}

async function update(id, updates) {
  validateUser(id);
  Object.assign(users[id], updates);
  persist();
  return read(id);
}

// this would be called `delete` except that's a reserved word in JS :-(
async function remove(id) {
  validateUser(id);
  delete users[id];
  persist();
}

async function reset() {
  users = {};
  persist();
}

async function create({ name, password }) {
  validateUserForm({ name, password });
  const id = +hash(name);
  const passwordHash = hash(password);
  if (users[id]) {
    const error = new ServerError(`User with "${name}" already existed`);
    error.status = 400;
    throw error;
  }
  users[id] = { id, name, passwordHash };
  persist();
  return read(id);
}

export { authenticate, create, read, update, remove, reset };
