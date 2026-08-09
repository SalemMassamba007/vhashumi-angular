import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  NgZone
} from '@angular/core';

@Directive({
  selector: '[countOnEnter]',
  standalone: true
})
export class CountOnEnterDirective implements OnInit, OnDestroy {
  @Input() countOnEnter: number = 10;
  @Input() duration: number = 950;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.runCount();
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private runCount(): void {
    const target = this.countOnEnter || 10;
    const duration = this.duration;
    const start = 0;
    const el = this.el.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + (target - start) * progress);
        el.textContent = value.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toLocaleString();
        }
      };

      requestAnimationFrame(update);
    });
  }
}