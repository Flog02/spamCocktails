import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TropicalComponent } from './tropical.component';

describe('TropicalComponent', () => {
  let component: TropicalComponent;
  let fixture: ComponentFixture<TropicalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [IonicModule.forRoot(),TropicalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TropicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
