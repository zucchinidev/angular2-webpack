import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('App', () => {
  let fixture;
  let component;
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent]});
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should work', () => {
    const expectationFailOutput = 'should create AppComponent';
    expect(component instanceof AppComponent).toBe(true, expectationFailOutput);
  });

  it('should display original title', () => {
    // trigger change detection to update the view
    fixture.detectChanges();
    const dom: DebugElement = fixture.debugElement.query(By.css('h1'));
    expect(dom.nativeElement.textContent).toContain(component.title);
  });
});
