import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotoService from '../../../src/Services/Motorcycle.service';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { motorcycle, motorcycles, motorId } from './mocks/motor.mock';

describe('Test /motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Test create', async function () {
    const newMotorcycle = new Motorcycle(motorcycle);
    sinon.stub(Model, 'create').resolves(newMotorcycle);

    const service = new MotoService();
    const result = await service.createNewMoto(motorcycle);

    expect(result).to.be.deep.equal(newMotorcycle);
  });

  it('Test findAll', async function () {
    sinon.stub(Model, 'find').resolves(motorcycles);

    const service = new MotoService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(motorcycles);
  });

  it('Test findOne', async function () {
    sinon.stub(Model, 'findOne').resolves(motorId);

    const service = new MotoService();
    const result = await service.findOne('634852326b35b59438fbea31');

    expect(result).to.be.deep.equal(motorId);
  });
});