import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMobileComponent } from './post-mobile.component';

describe('PostMobileComponent', () => {
  let component: PostMobileComponent;
  let fixture: ComponentFixture<PostMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostMobileComponent]
    });
    fixture = TestBed.createComponent(PostMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
