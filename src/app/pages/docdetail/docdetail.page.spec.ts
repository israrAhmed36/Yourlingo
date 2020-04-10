import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocdetailPage } from './docdetail.page';

describe('DocdetailPage', () => {
  let component: DocdetailPage;
  let fixture: ComponentFixture<DocdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
