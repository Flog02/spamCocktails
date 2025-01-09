import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassicsComponent } from './classics.component';

describe('ClassicsComponent', () => {
  let component: ClassicsComponent;
  let fixture: ComponentFixture<ClassicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [IonicModule.forRoot(),ClassicsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
