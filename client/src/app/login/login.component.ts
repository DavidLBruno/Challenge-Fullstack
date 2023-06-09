import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  logged: boolean = false;
  formLogin!: FormGroup;

  constructor(private loginService: loginService, private router: Router) {
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
    this.loginService.login(value).subscribe((arg) => {
      this.logged = arg.logged;
      this.router.navigate(['/home']);
    });
  }
}
