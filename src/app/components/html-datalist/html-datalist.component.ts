import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-html-datalist',
  templateUrl: './html-datalist.component.html',
  styleUrls: ['./html-datalist.component.scss'],
})
export class HtmlDatalistComponent {
  public datalist: string[] = [
    'Edge',
    'Chrome',
    'Firefox',
    'Safari',
    'Opera',
    'Internet Explorer'
  ];

  public datalistChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    alert(`You have selected ${element.value}`);
  }
}
