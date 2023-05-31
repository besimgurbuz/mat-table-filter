import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MatTableFilterDirective', () => {
  function createComponent<T>(component: Type<T>): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [CommonModule, component],
    }).compileComponents();

    return TestBed.createComponent<T>(component);
  }

  describe('default', () => {
    let fixture: ComponentFixture<DefaultTableFilterComponent>;
    let tableInstance: DefaultTableFilterComponent;

    beforeEach(() => {
      fixture = createComponent(DefaultTableFilterComponent);
      tableInstance = fixture.componentInstance;
    });

    it('should create', () => {
      expect(fixture).toBeTruthy();
      expect(tableInstance).toBeTruthy();
    });
  });
});

@Component({
  standalone: true,
})
class DefaultTableFilterComponent {}
