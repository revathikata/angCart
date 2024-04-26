import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  array: any[] = [];

  constructor() { }

  testFunction(): Observable<any[]> {
    const arr = [{
        name: 'anitha',
        gender: 'female',
        age: 20,
      },
      {
        name: 'anitha',
        gender: 'female',
        age: 20,
      }
    ];
    this.array.push(...arr); // Spread operator to push individual objects from the array
    return of(this.array); // Return observable of the array
  }
}
