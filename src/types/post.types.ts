export type PostAuthor = {
  name: string;
  email: string;
  image: string | null;
};

export type PostLike = {
  userId: string;
};

export type PostComment = {
  id: string;
  content: string;
  createdAt: string;
  author: PostAuthor;
};

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;

  author: PostAuthor;

  likes: PostLike[];
  comments: PostComment[];

  _count: {
    likes: number;
    comments: number;
  };
};

export type PostsResponse = {
  message: string;
  success: boolean;
  data: Post[];
};

export type PostCardProps = {
  post: Post;
};
