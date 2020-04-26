import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePromisableComponent } from './picture.component';

describe('PicturePromisableComponent', () => {
  let component: PicturePromisableComponent;
  let fixture: ComponentFixture<PicturePromisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturePromisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturePromisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
