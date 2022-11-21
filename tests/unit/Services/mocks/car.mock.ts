import ICar from '../../../../src/Interfaces/ICar';
import Car from '../../../../src/Domains/Car';

const mockId: ICar = {
  id: '6352f8ea74092b2e6a784c51',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const car: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carResult: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'C30',
    year: 2008,
    color: 'Azul',
    buyValue: 34,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const firstCarDomain: Car = new Car(carResult[0]);

const secondCarDomain: Car = new Car(carResult[1]);

const carList: Car[] = [
  firstCarDomain,
  secondCarDomain,
];

export {
  car,
  mockId,
  carResult,
  carList,
};