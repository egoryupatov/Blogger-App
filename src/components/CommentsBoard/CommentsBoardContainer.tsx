import React, { useEffect, useState } from "react";
import { IComment } from "../../types/general.types";
import { SERVER_URL } from "../../constants/constants";
import { CommentsBoard } from "./CommentsBoard";

export const CommentsBoardContainer: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  return <CommentsBoard comments={comments} />;
};
