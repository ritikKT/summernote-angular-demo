import { Direction } from '@angular/cdk/bidi';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private routerInfo: BehaviorSubject<Direction>;
    constructor() {
        this.routerInfo = new BehaviorSubject<Direction>("ltr");
    }
    setValue(newValue: Direction): void {
        this.routerInfo.next(newValue);
    }
    getValue(): Observable<Direction> {
        return this.routerInfo.asObservable();
    }
}