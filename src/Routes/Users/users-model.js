const db = require("../../Data/dbConfig");

function insert(user) {
  return (
    db("users")
      .insert(user, "id")
      .then(ids => {
        const id = ids[0];
        return db("users")
          .where({ id })
          .first();
      })
  );
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("users");
}

function findById(id) {
  return null;
}

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById
  };