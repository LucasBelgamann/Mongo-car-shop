import ICar from '../../../../src/Interfaces/ICar';

const car: ICar = {
  model: 'Uno',
  year: 1994,
  color: 'Red',
  status: true,
  buyValue: 30000,
  doorsQty: 4,
  seatsQty: 5,
};

const cars: ICar[] = [
  {
    id: '6376da92d88bd2bf7da9c932',
    model: 'Marea',
    year: 2003,
    color: 'Black',
    status: true,
    buyValue: 30000,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '6376daa4d88bd2bf7da9c933',
    model: 'Corsa',
    year: 2000,
    color: 'Black',
    buyValue: 20000,
    doorsQty: 2,
    seatsQty: 5,
    status: false,
  },
];

const carWithId: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Monza',
  year: 1992,
  color: 'Black',
  buyValue: 50000,
  doorsQty: 2,
  seatsQty: 5,
  status: false,
};

const updatedCar: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Fox',
  year: 1996,
  color: 'red',
  buyValue: 20000,
  doorsQty: 2,
  seatsQty: 5,
  status: false,
};

const update = {
  model: 'Fox',
  year: 1996,
  color: 'Yellow',
  buyValue: 50000,
  doorsQty: 2,
  seatsQty: 5,
};

export {
  car,
  cars,
  carWithId,
  updatedCar,
  update,
};