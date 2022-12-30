import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { User } from './app.component';

@Directive({
  selector: '[appCondicion]',
})
export class CondicionDirective implements OnInit {
  @Input() usuario!: User;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const td = this.elementRef.nativeElement;

    if (Number(this.usuario.edad < 18)) {
      td.textContent = `${this.usuario.nombre} es menor de edad`;
      td.classList.add('text-danger');
    } else {
      td.textContent = `${this.usuario.nombre} es mayor de edad`;
      td.classList.add('text-success');
    }
  }
}
