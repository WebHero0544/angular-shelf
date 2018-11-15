import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


//触发器名称，附加这个动画到元素上使用[@triggerName]语法
export const expand = trigger('expand', [   
    state('expand', style({
        height: '*',
        overflow: 'hidden'
    })),
    state('noexpand', style({
        height: 0,
        overflow: 'hidden'
    })),
    transition('expand <=> noexpand', animate('200ms ease'))
]);



// 在上面的代码中，定义了一个折叠动画 expand，当元素添加上样式类active时，高度展开为*，在这里可以看作是元素的offsetHeight；当元素添加上样式类inactive时，元素的高度折叠为0.
// 注意：*会自动计算。

// 回调函数
// 类似原生JavaScript的transitionStart和transitionEnd动画事件，Angular也为动画提供了两个动画事件。 @triggerName.start动画开始事件，@triggerName.done动画结束事件。

//例:
// <div [@expand]="expandClass2" (@expand.start)="transitionStart($event)" (@expand.done)="transitionEnd($event)">   
//   <div style="padding: 20px">我是自动属性</div>   
// </div>
