// This is not a real datastore, but it can be if you make it one :)

let messages = {};
let users = {};
let me = undefined;
let defaultChannel = undefined;

export function getMessages(){
  return messages;
};

export function addUser(user){
  users[user.user] = user;
};

export function getUser(id){
  return users[id];
};

export function setChannel(channel){
  defaultChannel = channel;
};

export function getChannel(){
  return defaultChannel;
};

export function setMe(id){
  me = id;
};

export function getMe(){
  return me;
};
