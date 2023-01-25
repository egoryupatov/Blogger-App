import { IBlogPost, IComment } from "../../types/general.types";
import { Dispatch } from "react";
import { Params } from "react-router-dom";

export interface PostPageProps {
  blogPost: IBlogPost;
  handleAddingComment: (event: any) => void;
  dispatch: Dispatch<any>;
  comments: IComment[];
  isLoginFormDisplayed: boolean;
  params: Params;
  newComment: IComment;
}
