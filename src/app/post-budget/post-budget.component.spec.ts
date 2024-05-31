import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBudgetComponent } from './post-budget.component';

describe('PostBudgetComponent', () => {
  let component: PostBudgetComponent;
  let fixture: ComponentFixture<PostBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBudgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
