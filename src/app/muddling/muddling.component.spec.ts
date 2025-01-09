import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuddlingComponent } from './muddling.component';

describe('MuddlingComponent', () => {
  let component: MuddlingComponent;
  let fixture: ComponentFixture<MuddlingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
     
      imports: [IonicModule.forRoot(),MuddlingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MuddlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
