export type UserProfile = {
id:string;
name:string;
username:string;
avatarUrl?:string;
bio?:string;
location?:string;
followerCount:number;
followingCount:number;
isCurrentUser?:boolean;
};