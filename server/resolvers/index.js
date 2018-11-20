'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = require('../models');
const { resolver } = require('graphql-sequelize');

let Query = {}, Mutation = {};
let User = {
  worlds: resolver(db.user.worlds)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const { Queries, Mutations } = require(`${__dirname}/${file}`);
    for (let query in Queries) {
      Query[query] = Queries[query];
    }
    for (let mutation in Mutations) {
      Mutation[mutation] = Mutations[mutation];
    }
  });

module.exports = { Query, Mutation, User };
