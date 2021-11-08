export const add = (text) => {
  return {
    type: "ADD",
    payload: text
  };
};
export const done = (id) => {
  return {
    type: "DONE",
    payload: id
  };
};
export const deete = (id) => {
  return {
    type: "DELETE",
    payload: id
  };
};

export const edit = (id, neww) => {
  return {
    type: "EDIT",
    payload: { id, neww }
  };
};

export const filtreTask = (statutdone) => {
  return {
    type: "FILTRETASK",
    payload: statutdone
  };
};
