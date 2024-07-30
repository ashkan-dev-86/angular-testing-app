import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public isSidebarOpen = false;

  constructor(
    private router: Router
  ) { }

  private navigate(path = '/'): void {
    this.router.navigate([path], {
      skipLocationChange: true
    });

    this.toggleSidebar();
  }

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  public toRoot(): void {
    this.navigate();
  }

  public goto(path: string): void {
    this.navigate(path);
  }
}
