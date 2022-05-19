import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCodeListComponent } from './budget-code-list.component';

describe('BudgetCodeListComponent', () => {
  let component: BudgetCodeListComponent;
  let fixture: ComponentFixture<BudgetCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetCodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
