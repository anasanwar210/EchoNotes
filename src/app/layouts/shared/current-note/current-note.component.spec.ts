import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNoteComponent } from './current-note.component';

describe('CurrentNoteComponent', () => {
  let component: CurrentNoteComponent;
  let fixture: ComponentFixture<CurrentNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
