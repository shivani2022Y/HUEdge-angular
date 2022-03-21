import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlishtComponent } from './wishlisht.component';

describe('WishlishtComponent', () => {
  let component: WishlishtComponent;
  let fixture: ComponentFixture<WishlishtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlishtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlishtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
