export interface EditPostPageProps {
  onCategorySelect: (event: any) => void;
  editedPost: IEditedPost;
  onTitleChange: (event: any) => void;
  onDescriptionChange: (event: any) => void;
  onUpdatePostClick: () => void;
  onDeletePostClick: () => void;
}

export interface IEditedPost {
  user: number;
  category: number;
  time: Date;
  title: string;
  description: string;
  text: string;
}
