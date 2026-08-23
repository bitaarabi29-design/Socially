export type PostCardProps = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    email: string;
    image: string | null;
  };
  likes: any[];
  comments: any[];
  _count: {
    likes: number;
    comments: number;
  };
};