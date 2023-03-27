import http from "./httpService";

const getAllComments = () => {
  return http.get("/comments");
};
const getComment = async (selectedId) => {
  return await http.get(`/comments/${selectedId}`);
};
const deleteComment = async (selectedId) => {
  return await http.delete(`/comments/${selectedId}`);
};
const postComment = async (newComment) => {
  await http.post("/comments", newComment);
};
export { getAllComments, getComment, deleteComment, postComment };
