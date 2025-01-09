import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreamyComponent } from './creamy.component';

describe('CreamyComponent', () => {
  let component: CreamyComponent;
  let fixture: ComponentFixture<CreamyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [IonicModule.forRoot(),CreamyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
