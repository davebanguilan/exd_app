import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AddUserComponent,
  InlineValidationMessageComponent,
  SocialMediaAppComponent,
} from './components';
import { ButtonSpinnerDirective, ConfirmPasswordValidatorDirective, DigitsOnlyDirective, PasswordValidatorDirective } from './directives';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

export const components = [
  InlineValidationMessageComponent,
  SocialMediaAppComponent,
  AddUserComponent
];

export const directives = [
  ButtonSpinnerDirective,
  PasswordValidatorDirective,
  DigitsOnlyDirective,
  ConfirmPasswordValidatorDirective
];

export const importModules = [
  CommonModule,
  FormsModule,
  IonicModule,
  NgxQRCodeModule
];

export const exportModules = [
  CommonModule,
  FormsModule,
  IonicModule
];

@NgModule({
  declarations: [
    ...components,
    ...directives
  ],
  entryComponents: [],
  imports: [
    ...importModules
  ],
  providers: [],
  exports: [
    ...components,
    ...directives,
    ...exportModules
  ]
})
export class SharedModule { }
