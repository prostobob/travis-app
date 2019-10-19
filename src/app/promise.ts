import { Observable } from 'rxjs';

function reactify(pr): Observable<string> {
    return new Observable((observer) => {
        pr.then((value) => {
            observer.next(value);
        });
    });
}

const promise = new Promise((res, rej) => {
    res('boom');
});

const stream$ = reactify(promise);

stream$.subscribe((value) => {
    console.log(value);
});
