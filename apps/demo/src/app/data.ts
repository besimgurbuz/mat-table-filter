export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  learned: boolean;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    learned: false,
  },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', learned: true},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', learned: false},
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    learned: false,
  },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', learned: false},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', learned: false},
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    learned: true,
  },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', learned: false},
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    learned: false,
  },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', learned: false},
];
