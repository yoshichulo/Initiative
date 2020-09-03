import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitiativePage } from './initiative.page';

describe('InitiativePage', () => {
  let component: InitiativePage;
  let fixture: ComponentFixture<InitiativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitiativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
