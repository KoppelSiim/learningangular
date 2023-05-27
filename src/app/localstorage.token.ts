import { InjectionToken } from "@angular/core";


export const localStroageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});
