// Incrementing
export function increment(index) {
  return {
    type : 'INCREMENT_LIKES',
    index
  }
}
// Adding comments
export function addComment(postId, author, comment) {
  return {
    type : 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// Removing comments
export function removeComment(postId, i) {
  return {
    type : 'REMOVE_COMMENT',
    i,
    postId
  }
}
