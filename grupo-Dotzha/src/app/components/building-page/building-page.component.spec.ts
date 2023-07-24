import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingPageComponent } from './building-page.component';

describe('BuildingPageComponent', () => {
  let component: BuildingPageComponent;
  let fixture: ComponentFixture<BuildingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingPageComponent]
    });
    fixture = TestBed.createComponent(BuildingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
