import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

public title1 : any = 'please enter your details here ! '
constructor(private rout: Router , private updateser: UpdateService){

}

onSubmit(form: any) {
  if (form.valid) {
    const formData = form.value
    // formData.id = this.count++
    this.updateser.setUpdateData(formData)
    console.log('Form Submitted!', form.value);
    this.rout.navigate(['/products'])
  } else {
    console.log('Form is invalid!');
  }
}

}
