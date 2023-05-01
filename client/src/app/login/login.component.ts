import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logged: boolean = false;
  formLogin!: FormGroup;

  constructor(private loginService: loginService) {
    this.buildForm();
  }

  ngOnInit() {}

  private buildForm() {
    this.formLogin = new FormGroup({
      tipDoc: new FormControl('', [Validators.required]),
      numDoc: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.formLogin.value;
    this.loginService
      .login(value)
      .subscribe((arg) => ((this.logged = arg), console.log(this.logged)));
  }
}
