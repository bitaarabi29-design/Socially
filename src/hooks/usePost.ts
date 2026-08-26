import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createComment,
  createPost,
  deletePost,
  getAllPosts,
  toggleLikePost,
} from "../api/postApi";

import { getUserPosts } from "../api/socialApi";

export function useAllPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });
}

export function useUserPosts(userId: string) {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getUserPosts(userId),
    enabled: Boolean(userId),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}

export function useToggleLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleLikePost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      queryClient.invalidateQueries({
        queryKey: ["likes"],
      });
    },
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}
