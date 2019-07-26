// eslint-disable
// this is an auto generated file. This will be overwritten

export const getMyModel = `query GetMyModel($id: ID!) {
  getMyModel(id: $id) {
    id
    title
    content
    price
    rating
  }
}
`;
export const listMyModels = `query ListMyModels(
  $filter: ModelMyModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      price
      rating
    }
    nextToken
  }
}
`;
