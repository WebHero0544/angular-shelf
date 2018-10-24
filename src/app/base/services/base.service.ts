import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }



  /**
   * 
   * 判断元素是否含有指定的class名
   * 
   * @param dom 元素
   * @param className class名
   */
  public hasClass(dom: HTMLElement, className: string) {
    return dom.className.indexOf(this.trim(className)) === -1 ? false : true;
  }


  /**
   * 
   * 去掉string的收尾空格
   * 
   * @param string 
   */
  public trim(string: string) {
    return string.trim ? string.trim() : string.replace(/(^\s*|\s*$)/g, '');
  }



  /**
   * 
   * 得到一个介于两数之间的随机浮点数
   * 
   * @param min 最小值
   * @param max 最大值
   * 返回值范围：[min, max)
   */
  getRandomFloat(min: number, max: number) {
    if (min >= max) return;  //如果最大值小于或等于最小值返回undefined
    return Math.random() * (max - min) + min;
  }


  /**
   * 
   * 得到一个介于两个整数之间的随机整数，返回值只包含最小数，不包含最大数
   * 
   * @param min 最小值
   * @param max 最大值
   * 返回值范围：[min, max)
   */
  getRandomInt(min: number, max: number) {
    if (!this.isInteger(min) || !this.isInteger(max)) throw 'Parameter must be an integer';
    return Math.floor(Math.random() * (max - min)) + min;
  }


  /**
   * 
   * 得到一个介于两个整数之间的随机整数，返回值即包含最小数，又包含最大数
   * 
   * @param min 最小值
   * @param max 最大值
   * 返回值范围：[min, max]
   * 
   */
  getRandomIntInclusive(min: number, max: number) {
    if (!this.isInteger(min) || !this.isInteger(max)) throw 'Parameter must be an integer';
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * 
   * 判断数字是否为整型
   * 
   * @param number 
   */
  isInteger(number: number) {
    return Math.floor(number) === number;  //如果向下取整后还等于本身证明是整数
  }


  /**
   * 
   * 在数组中寻找最接近目标值的小端值（小于等于目标值），如果有返回该值，没有返回null
   * 
   * @param target 目标值
   * @param arr 要寻找最接近目标值的数组
   * @param isHasBeyondVal 是否在目标值大于最大值返回最大值，目标值小于最小值返回最小值
   * @param cb 回调函数 用于限制目标值超出最大值或最小值的范围，一旦你超出该范围返回null ，参数解释：{sign: 'min' | 'max', target: number,  extreme: number} sign用于区分是最大致还是最小值，以做不同的逻辑回调返回不同的值
   */
  getNearestSmallValue(target: number, arr: number[], isHasBeyondVal?: boolean, cb?): number | null {

    if (arr.indexOf(target) === -1) {
      const sortedArr = arr.slice().sort((a, b) => b - a);  //从大到小排序
      const max = sortedArr[0];
      const min = sortedArr.slice(-1).pop();

      if (target < max && target > min) {  //目标值是否在数组的最大值和最小值中间
        return sortedArr.find(el => el - target < 0); //寻找最接近目标值的小端值(小于等于目标值)
      } else {
        if (isHasBeyondVal) {
          if (target > max) {
            if (typeof cb == 'function') {
              const result = cb({ sign: 'max', target, extreme: max });  //sign用于区分是最大致还是最小值，以做不同的逻辑回调返回不同的值
              if (result === true) {
                return max;
              } else {
                return null;
              }
            } else {
              return max;
            }
          } else {
            if (typeof cb == 'function') {
              const result = cb({ sign: 'min', target, extreme: min });  //sign用于区分是最大致还是最小值，以做不同的逻辑回调返回不同的值
              if (result === true) {
                return min;
              } else {
                return null;
              }
            } else {
              return min;
            }
          }
        } else {
          return null;
        }
      }
    } else {  //与数组中的某一元素相等就返回本身
      return target;
    }

  }


  /**
   * 
   * 将一位或两位的整数转化为三位字符串
   * 
   * @param num 
   */
  getThreeDigitString(num: number): string {
    let numStr = num.toString();
    let leng = numStr.length;
    if (this.isInteger(num) && leng <= 3) {
      if (leng == 1) {
        numStr = '00' + numStr;
      }
      if (leng == 2) {
        numStr = '0' + numStr;
      }
      return numStr;
    } else {
      throw 'Parameter must be one or three integer';
    }
  }


  /**
   * 
   * 获取数值数组中的最大值
   * 
   * @param arr  数值数组
   */
  max(arr: number[]) {
    return Math.max.apply(Math, arr);
  }


  /**
   * 
   * 获取数值数组中的最小值
   * 
   * @param arr  数值数组
   */
  min(arr: number[]) {
    return Math.min.apply(Math, arr);
  }


  /**
   * 
   * 判断一个对象是否为空对象，即{}
   * 
   * @param obj object
   */
  isEmptyObject(obj: any) {
    for (const key in obj) {
      return false;
    }
    return true;
  }


  /**
   * 
   * 将一维数组转化为二维数组
   * 
   * @param arr 
   * @param stepNumber 
   */
  getTwoDimensionArray(arr: any[], stepNumber?: number) {
    const arrLength = arr.length;
    stepNumber = stepNumber ? Math.floor(Math.abs(stepNumber)) : 6;  //使该数成为一个大于0的正整数
    const result = [];
    const tdArrLangth = Math.ceil(arrLength / stepNumber);
    let i = 0;
    while (i < tdArrLangth) {
      result.push(arr.slice(i * stepNumber, (i + 1) * stepNumber))  //(i + 1)*stepNumber这里可能会超出arr的长度范围
      i++;
    }
    return result;
  }


  /**
   * 
   * 判断一个字符串是否为数字
   * 
   *           [+-]?    匹配一个加或一个减或不匹配
   * (0|[1-9][0-9]*)    只匹配一个0 或 匹配以非零开始的整数
   *     (\.[0-9]+)?    要么不匹配要么匹配一个.并且后面跟有数字
   * 
   * @param str 
   */
  isNumber(str: string) {
    return /^[+-]?(0|[1-9][0-9]*)(\.[0-9]+)?$/.test(str);
  }

  /**
   * 
   * 强化isNaN函数,以判断是否为非数字
   * 
   * /^\s*$/ 匹配空字符
   * 
   * @param val 
   * 
   */
  isNaN(val: any) {
    if (/^\s*$/.test(val) || val === null) return true;
    return isNaN(val);
  }


  /**
   * 
   * 数组去重(该函数会保留原有的要素顺序)
   * 
   * @param arr 
   */
  removeRepeat(arr: any[]) {
    const result = [];
    arr.forEach(el => {
      if (result.indexOf(el) === -1) result.push(el);
    });
    return result;
  }
}
