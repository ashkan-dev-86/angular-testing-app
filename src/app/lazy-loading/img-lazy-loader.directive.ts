import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[lazyLoad]',
})
export class ImgLazyLoaderDirective implements AfterViewInit, OnDestroy {
  @Input('lazyLoad') imageSrc: string = '';
  @HostBinding('attr.src') srcAttr = '';
  @HostBinding('class') className = 'lazy-image';

  private observer: IntersectionObserver;

  constructor(
    private el: ElementRef,
  ) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });
  }

  ngAfterViewInit() {
    this.srcAttr = ''; // Clear src to prevent auto loading
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private loadImage() {
    this.srcAttr = this.imageSrc;
    this.el.nativeElement.classList.add('loaded');
  }
}
