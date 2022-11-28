import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const motorcycle: IMotorcycle = {
  model: 'Kawasaki Ninja',
  year: 1995,
  color: 'Black',
  status: true,
  buyValue: 30000,
  category: 'Street',
  engineCapacity: 1000,
};

const motorcycles: IMotorcycle[] = [
  {
    id: '624832326b35b59438fbea1c',
    model: 'Honda',
    year: 2004,
    color: 'Black',
    status: true,
    buyValue: 20000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852325b35b59438fbea32',
    model: 'Kawasaki Z400',
    year: 2022,
    color: 'Orange',
    status: true,
    buyValue: 20000,
    category: 'Street',
    engineCapacity: 600,
  },
];

const motorId: IMotorcycle = {
  id: '634852326b35b59438fbea31',
  model: 'harley davidson',
  year: 1980,
  color: 'Black',
  status: true,
  buyValue: 30000,
  category: 'Street',
  engineCapacity: 1000,
};

export { 
  motorcycle,
  motorcycles,
  motorId,
};