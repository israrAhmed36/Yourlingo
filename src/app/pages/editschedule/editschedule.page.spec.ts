import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditschedulePage } from './editschedule.page';

describe('EditschedulePage', () => {
  let component: EditschedulePage;
  let fixture: ComponentFixture<EditschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditschedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
