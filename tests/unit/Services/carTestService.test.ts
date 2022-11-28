import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/Car.service';
import Car from '../../../src/Domains/Car';
import { car, cars, carWithId, updatedCar, update } from './mocks/car.mock';

describe('Test /car', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Test create', async function () {
    const newCar: Car = new Car(car);
    sinon.stub(Model, 'create').resolves(newCar);

    const service = new CarService();
    const result = await service.createNewCar(car);

    expect(result).to.be.deep.equal(newCar);
  });

  it('Test findAll', async function () {
    sinon.stub(Model, 'find').resolves(cars);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(cars);
  });

  it('Test findOne', async function () {
    sinon.stub(Model, 'findOne').resolves(carWithId);

    const service = new CarService();
    const result = await service.findOne('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(carWithId);
  });

  it('Testing update cars', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);
    sinon.stub(Model, 'findOne').resolves(updatedCar);

    const service = new CarService();
    const carUpdated = await service.updateForId('634852326b35b59438fbea2f', update);
    expect(carUpdated).to.be.deep.equal(updatedCar);
  });
});