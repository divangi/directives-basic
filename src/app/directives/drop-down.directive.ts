import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostBinding('class.show') isOpen = false;
  

  // Host listener event: blur | change | click | drag | drop | focus | keydown | keypress
  //  | keyup | mouseenter | mouseover | mouseout | resize | scroll
  
 


  // will open on hover
  // @HostListener('mouseover') openDropdown() {
  //   let elref = this.el.nativeElement.querySelector('.dropdown-menu')
  //   this.isOpen = true
  //   this.renderer.addClass(elref, 'show')
   
  // }

  // @HostListener('mouseout') closeDropdown(){
  //   let elref = this.el.nativeElement.querySelector('.dropdown-menu')
  //   this.isOpen = false;
  //   this.renderer.removeClass(elref, 'show')
  // }


  // will open on click
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
    let elref = this.el.nativeElement.querySelector('.dropdown-menu')
    if(this.isOpen){
      this.renderer.addClass(elref, 'show')
    } else {
      this.renderer.removeClass(elref, 'show')
    }
  }

}
