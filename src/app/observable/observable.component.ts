import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  forkJoin,
  interval,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent {
  data: string | undefined = 'kjjh';
  constructor(private http: HttpClient) {
    // var observ = new Observable<number>((observer) => {
    //   let data = Math.random() * 2;
    //   observer.next(data);
    // });
    // observ.subscribe((res) => {
    //   console.log(res, 'data1');
    // });
    // observ.subscribe((res) => {
    //   console.log(res, 'data2');
    // });

    // var behav = new Subject<number>();
    // behav.subscribe((res) => {
    //   console.log(res, 'behav1');
    // });
    // behav.subscribe((res) => {
    //   console.log(res, 'behav2');
    // });
    // behav.next(Math.random() * 2);

    // forkJoin([this.getData1(), this.getData2()]).subscribe(([user, posts]) => {
    //   console.log('User:', user);
    //   console.log('Posts:', posts);
    // });
    // combineLatest([this.getData1(), this.getData2()]).subscribe(
    //   ([user, posts]) => {
    //     console.log('User:', user);
    //     console.log('Posts:', posts);
    //   }
    // );
    console.log(this.data, 'getter');
    console.log((this.data = 'hello'), 'setter');
    console.log(this.data, 'getter');
  }

  get datalist() {
    return this.data;
  }
  set datalist(d1) {
    this.data = d1;
  }
  getData1(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  getData2(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
