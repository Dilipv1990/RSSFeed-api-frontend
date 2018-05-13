import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../../classes/error-state-matcher';
// import {Router} from '@angular/router'
declare var FB: any
declare var window: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  passRegex: any = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$'

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(this.passRegex)])]
    })
  }


  public matcher = new CustomErrorStateMatcher();

  login() {
    if (this.loginForm.valid) {
      console.log("login called")
    }
  }
}
