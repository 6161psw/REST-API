export class CreatePostDto {
  title: string;
  content: string;
  userId: number;
}

export class UpdatePostDto {
  title?: string;
  content?: string;
}

// export class PostDto {
//   id: number;
//   title: string;
//   content: string;
//   userId: number;
// }
