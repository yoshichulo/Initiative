import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicesPage } from './dices.page';

describe('DicesPage', () => {
  let component: DicesPage;
  let fixture: ComponentFixture<DicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
