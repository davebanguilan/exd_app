import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  InlineValidationMessageComponent,
} from './components';
import { ButtonSpinnerDirective, ConfirmPasswordValidatorDirective, DigitsOnlyDirective, PasswordValidatorDirective } from './directives';
import { SocialMediaAppComponent } from './components/social-media-app/social-media-app.component';

export const components = [
  InlineValidationMessageComponent,
  SocialMediaAppComponent
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
