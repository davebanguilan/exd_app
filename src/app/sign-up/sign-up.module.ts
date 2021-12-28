import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';

@NgModule({
  declarations: [SignUpPage],
  imports: [
    SharedModule,
    SignUpPageRoutingModule
  ]
})
export class SignUpPageModule {}
