import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LongdrinkComponent } from './longdrink.component';

describe('LongdrinkComponent', () => {
  let component: LongdrinkComponent;
  let fixture: ComponentFixture<LongdrinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [IonicModule.forRoot(),LongdrinkComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LongdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
