import './style.css';

import {
  of,
  map,
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

/* let myObservable = new Observable((observer) => {
  setTimeout(() => {
    observer.next(42);
  }, 1000);

  setTimeout(() => {
    observer.next(43);
  }, 2000);

  setTimeout(() => {
    observer.error('error');
  }, 2500);

  setTimeout(() => {
    observer.next(44);
  }, 3000);

  setTimeout(() => {
    observer.complete();
  }, 4000);
});

myObservable.subscribe({
  next: (next) => console.log(next),
  error: (error) => console.error(error),
  complete: () => console.info('finished')
});

var subject = new Subject();
subject.next(1);

const subA = subject.subscribe({
  next: (v) => console.log('observerA: ' + v),
});

subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v),
});

subject.next(3);

subA.unsubscribe();

subject.next(4);
*/

/* var behaviorSubject = new BehaviorSubject(0); // 0 is the initial value

behaviorSubject.subscribe({
  next: (v) => console.log('BehaviorSubject observerA: ' + v)
});

behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.next(3);
behaviorSubject.next(4);

behaviorSubject.subscribe({
  next: (v) => console.log('BehaviorSubject observerB: ' + v)
});

behaviorSubject.next(5);
*/

/* var replaySubject = new ReplaySubject(0); // buffer 3 values for new subscribers
replaySubject.next(0);

replaySubject.subscribe({
  next: (v) => console.log('ReplaySubject observerA: ' + v),
});
console.info('start send data');
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

replaySubject.subscribe({
  next: (v) => console.log('ReplaySubject observerB: ' + v),
});

replaySubject.next(5);
*/

/* var asyncSubject = new AsyncSubject();

asyncSubject.subscribe({
  next: (v) => console.log('AsyncSubject observerA: ' + v),
});

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.next(4);

asyncSubject.subscribe({
  next: (v) => console.log('AsyncSubject observerB: ' + v),
});

asyncSubject.next(9);
asyncSubject.complete();
*/
