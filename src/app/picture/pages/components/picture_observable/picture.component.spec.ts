import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureObservableComponent } from './picture.component';

describe('PictureObservableComponent', () => {
  let component: PictureObservableComponent;
  let fixture: ComponentFixture<PictureObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
