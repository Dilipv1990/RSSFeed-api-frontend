import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comment: string
  commentForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.compose([Validators.max(200)])]  //TODO - ,Validators.pattern("")
    })
  }

  addComment() {
    if (this.commentForm.valid) {
      console.log("comment added : ", this.commentForm.controls.comment.value)
    }
  }
}
