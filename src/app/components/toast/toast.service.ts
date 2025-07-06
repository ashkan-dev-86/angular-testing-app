import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToast } from './toast.model';

@Injectable()
export class ToastService {
  private toastSubject$ = new BehaviorSubject<IToast | null>(null);
  
  public toast$ = this.toastSubject$.asObservable();

  public showToast(toast: IToast): void {
    toast.duration = toast.duration ?? 5;
    this.toastSubject$.next(toast);
  }
}
