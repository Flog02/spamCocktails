import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrainingComponent } from './straining.component';

describe('StrainingComponent', () => {
  let component: StrainingComponent;
  let fixture: ComponentFixture<StrainingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    
      imports: [IonicModule.forRoot(),StrainingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
