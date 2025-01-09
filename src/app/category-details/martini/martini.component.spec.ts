import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MartiniComponent } from './martini.component';

describe('MartiniComponent', () => {
  let component: MartiniComponent;
  let fixture: ComponentFixture<MartiniComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
     
      imports: [IonicModule.forRoot(),MartiniComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MartiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
