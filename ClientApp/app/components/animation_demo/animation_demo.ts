 import {CssAnimator} from 'aurelia-animator-css';
 import {inject} from 'aurelia-framework';

 @inject(CssAnimator, Element)
export class animation_demo {
    animator: CssAnimator;
    element: Element;
    applied_class: string;

   constructor(animator: CssAnimator, element: Element,applied_class: string) {
      this.animator = animator;
      this.element = element;
      this.applied_class = applied_class;
   }

   animateElementRight() {
      let myElement = <HTMLElement> this.element.querySelector('.myElement');
      this.animator.animate(myElement, 'myAnimation');
      this.applied_class = 'mytransitionRight'; 
   }
   animateElementLeft() {
    let myElement = <HTMLElement>this.element.querySelector('.myElement');
    this.animator.animate(myElement, 'myAnimation');
    this.applied_class = 'mytransitionleft'; 
 }
 animateElementTop() {
    let myElement = <HTMLElement>this.element.querySelector('.myElement');
    this.animator.animate(myElement, 'myAnimation');
    this.applied_class = 'mytransitionTop'; 
 }
 animateElementBottom() {
    let myElement = <HTMLElement>this.element.querySelector('.myElement');
    this.animator.animate(myElement, 'myAnimation');
    this.applied_class = 'mytransitionBottom'; 
 }
 Bounce() {
    let myElement = <HTMLElement>this.element.querySelector('.myElement');
    this.animator.animate(myElement, 'bounce');
 }

}