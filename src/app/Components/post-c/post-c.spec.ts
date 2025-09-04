import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostC } from './post-c';

describe('PostC', () => {
  let component: PostC;
  let fixture: ComponentFixture<PostC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
