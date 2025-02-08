import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSectorComponent } from './sidebar-sector.component';

describe('SidebarSectorComponent', () => {
  let component: SidebarSectorComponent;
  let fixture: ComponentFixture<SidebarSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
