import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranslatrservPage } from './translatrserv.page';

describe('TranslatrservPage', () => {
  let component: TranslatrservPage;
  let fixture: ComponentFixture<TranslatrservPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatrservPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranslatrservPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
