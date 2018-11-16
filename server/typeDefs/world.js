const queryType = `
  allWorlds: [World!]!
  findWorldById(id: ID!): World!
  findWorldByName(name: String!): World!
`;

const mutationType = `
  createNewWorld(name: String!, creator_id: ID!, description: String): World!`;

const modelType = `
  type World {
    id: ID!
    name: String!
    description: String!
    creator_id: ID!
  }`;
  
module.exports = { queryType, mutationType, modelType }