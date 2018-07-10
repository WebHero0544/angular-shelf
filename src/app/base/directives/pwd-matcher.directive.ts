import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';


/** 用于模板式表单 */ 
@Directive({
  selector: '[appPwdMatcher]',
  providers: [{provide: NG_VALIDATORS, useExisting: PwdMatcherDirective, multi: true}]
})
export class PwdMatcherDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    return pwdMatcher()(control);
  }
}

/** 用于响应式表单 */
export function pwdMatcher(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const isVaild = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(control.value);  //最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    return isVaild ? null : {'pwdMatcher': {value: control.value}};
  };
}

