import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';


/** 用于模板式表单 */ 
@Directive({
  selector: '[appUsernameMatcher]',
  providers: [{provide: NG_VALIDATORS, useExisting: UsernameMatcherDirective, multi: true}]
})
export class UsernameMatcherDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    return usernameMatcher()(control);
  }
}

/** 用于响应式表单 */
export function usernameMatcher(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isVaild = /^[a-zA-Z0-9_-]{4,16}$/.test(control.value);  //4到16位（字母，数字，下划线，减号）
    return isVaild ? null : {'usernameMatcher': {value: control.value, msg: '4到16位(字母，数字，下划线，减号)'}};
  };
}

