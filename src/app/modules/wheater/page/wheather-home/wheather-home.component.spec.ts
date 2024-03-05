import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherHomeComponent } from './wheather-home.component';

describe('WheatherHomeComponent', () => {
  let component: WheatherHomeComponent;
  let fixture: ComponentFixture<WheatherHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatherHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheatherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
