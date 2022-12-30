import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCondicion]',
})
export class CondicionDirective implements OnInit {
  @Input() edad!: string | number;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const td = this.elementRef.nativeElement;
    console.log(td);
    console.log(this.edad);
    console.log(typeof this.edad);
  }
}
