import {Component} from '@angular/core';
import {PostService} from '../../services/post-service';
import {FormsModule} from '@angular/forms';
import {Post} from '../../Interface/Post';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-post',
  imports: [
    FormsModule
  ],
  templateUrl: './post-c.html',
  styleUrl: './post-c.css'
})
export class PostC {
  title!: string;
  body!: string;

  constructor(private postService: PostService, private toastr: ToastrService) {
  }

  onSubmit() {
    const userId: number = 1
    const newPost: Post = {
      title: this.title,
      body: this.body,
      userId: userId
    }
    this.postService.createPost(newPost).subscribe({
      next: newPost => {
        console.log('Post Created Successfully :',
          newPost);
        this.toastr.success('Post created successfully!', 'Hi!');
      },
      error: err => console.error('Erreur lors de la création', err)
    })
  }

  deletePost() {
    this.postService.deletePost(1).subscribe({
      next: () => {
        console.log('Post Deleted Successfully');
        this.toastr.error('Post deleted successfully!', 'Hi!');
      },
      error: err => console.error('Erreur lors de la suppression', err)
    })
  }
}
