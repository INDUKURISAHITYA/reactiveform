import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  unamePattern = "^[A-z]*$";


  RegistrationForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern(this.unamePattern)]],
    Email:['',[Validators.required,Validators.email]],
    Mobile:['',[ Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]]
  })

  get username()
  {
    return this.RegistrationForm.get('username')
  }

  get Email()
  {
    return this.RegistrationForm.get('Email')
  }

  get Mobile()
  {
    return this.RegistrationForm.get('Mobile')
  }

  ngOnInit(): void {
  }

}
