import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StirringComponent } from './stirring.component';

describe('StirringComponent', () => {
  let component: StirringComponent;
  let fixture: ComponentFixture<StirringComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [IonicModule.forRoot(),StirringComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StirringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
