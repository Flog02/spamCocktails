import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SparklingComponent } from './sparkling.component';

describe('SparklingComponent', () => {
  let component: SparklingComponent;
  let fixture: ComponentFixture<SparklingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [IonicModule.forRoot(),SparklingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SparklingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
