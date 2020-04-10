import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycvPage } from './mycv.page';

describe('MycvPage', () => {
  let component: MycvPage;
  let fixture: ComponentFixture<MycvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
