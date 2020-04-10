import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyratesPage } from './myrates.page';

describe('MyratesPage', () => {
  let component: MyratesPage;
  let fixture: ComponentFixture<MyratesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyratesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyratesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
