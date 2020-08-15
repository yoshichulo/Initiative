import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpellscontrolPage } from './spellscontrol.page';

describe('SpellscontrolPage', () => {
  let component: SpellscontrolPage;
  let fixture: ComponentFixture<SpellscontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellscontrolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpellscontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
