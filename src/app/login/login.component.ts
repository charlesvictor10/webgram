import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(/*private _formBuilder: FormBuilder,
              private service: ServiceService,
              private tokenService: TokenService,*/
              private router: Router) { }

  ngOnInit(): void {
    /*this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });*/
  }

  onSubmit() {

  }

}
