import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  imports:[],
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
  
  @Input() ismodalOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
}