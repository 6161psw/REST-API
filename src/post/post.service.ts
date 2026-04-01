import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  private posts: CreatePostDto[] = [];
  private index: number = 0;
  createPost(post: CreatePostDto) {
    this.index = this.index + 1;
    this.posts.push({ ...post, userId: this.index });
    console.log(this.posts); //그냥 확인용
    return post;
  }

  updatePost(id: number, body: UpdatePostDto) {
    const post = this.posts.find((item) => item.userId === id);
    if (!post) {
      throw new Error('undefinded');
    }

    if (body.title !== undefined) {
      post.title = body.title;
    }

    if (body.content !== undefined) {
      post.content = body.content;
    }
    console.log(this.posts);
    return post;
  }
}
