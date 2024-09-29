import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  public progress = 0;

  private step = 100 / 15;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
    this.progressTheSeconds();
  }

  private progressTheSeconds(): void {
    setInterval(() => {
      if (this.progress < 100) {
        this.progress = Math.ceil(this.progress + this.step);
        this.changeDetector.detectChanges();
      }
    }, 1000);
  }
}
