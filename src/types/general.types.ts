export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IBlogPost {
  user: IUser;
  comments: IComment[];
  category: ICategory;
  publishDate: Date;
  id: number;
  categoryImage: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  text: string;
}

export interface IComment {
  blogPost: IBlogPost;
  user: IUser;
  children: IComment[];
  parent: IComment;
  publishDate: Date;
  id: number;
  rating: number;
  text: string;
}

export interface IUser {
  blogPosts: IBlogPost[];
  comments: IComment[];
  hiddenBlogPosts: IBlogPost[];
  signUpDate: Date;
  id: number;
  login: string;
  avatar: string;
  rating: number;
  subscriptions: IUser[];
  subscribers: IUser[];
}
