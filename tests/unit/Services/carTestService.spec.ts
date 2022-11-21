import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { car, mockId, carResult, carList } from './mocks/car.mock';

describe('Testing car Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Create a new car with the function of service', async function () {
    sinon.stub(Model, 'create').resolves(mockId);

    const carService = new CarService();

    const result = await carService.createNewCar(car);
    expect(result).to.be.deep.equal(mockId);
  });
  
  it('Testing function findAll', async function () {
    sinon.stub(Model, 'find').resolves(carResult);
  
    const carService = new CarService();

    const result = await carService.findAll();
    expect(result).to.be.deep.equal(carList);
  });
  
  it('Testing function findOne where the return a car fail', async function () {
    const id = '6352f8ea74092b2e6a784c51';
    sinon.stub(Model, 'findOne').resolves();

    try {
      const carService = new CarService();
      await carService.findOne(id);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
});