import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaliComponent } from './regali.component';

describe('RegaliComponent', () => {
  let component: RegaliComponent;
  let fixture: ComponentFixture<RegaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
