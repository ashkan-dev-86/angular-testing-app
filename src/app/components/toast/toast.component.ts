import { Component } from '@angular/core';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent { 
  public message!: string;
  public visible: boolean = false;
}
