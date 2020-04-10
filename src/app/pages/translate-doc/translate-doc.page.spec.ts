import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranslateDocPage } from './translate-doc.page';

describe('TranslateDocPage', () => {
  let component: TranslateDocPage;
  let fixture: ComponentFixture<TranslateDocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateDocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateDocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
