import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMobilesComponent } from './get-mobiles.component';

describe('GetMobilesComponent', () => {
  let component: GetMobilesComponent;
  let fixture: ComponentFixture<GetMobilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetMobilesComponent]
    });
    fixture = TestBed.createComponent(GetMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
