import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShakingComponent } from './shaking.component';

describe('ShakingComponent', () => {
  let component: ShakingComponent;
  let fixture: ComponentFixture<ShakingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    
      imports: [IonicModule.forRoot(),ShakingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ShakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
