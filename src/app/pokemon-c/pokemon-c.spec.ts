import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonC } from './pokemon-c';

describe('PokemonC', () => {
  let component: PokemonC;
  let fixture: ComponentFixture<PokemonC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
