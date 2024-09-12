import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectServerPageComponent } from './connect-server-page.component';

describe('ConnectServerPageComponent', () => {
  let component: ConnectServerPageComponent;
  let fixture: ComponentFixture<ConnectServerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectServerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectServerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
