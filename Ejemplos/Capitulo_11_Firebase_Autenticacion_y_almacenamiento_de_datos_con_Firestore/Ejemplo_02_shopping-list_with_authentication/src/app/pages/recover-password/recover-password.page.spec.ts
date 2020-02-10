import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecoverPasswordPage } from './recover-password.page';

describe('RecoverPasswordPage', () => {
  let component: RecoverPasswordPage;
  let fixture: ComponentFixture<RecoverPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
