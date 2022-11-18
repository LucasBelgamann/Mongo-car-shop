import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarModel from '../Models/Car.model';

class CarService {
  private _carModel: CarModel;

  constructor() {
    this._carModel = new CarModel();
  }

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  async createNewCar(newCar: ICar): Promise<Car> {
    const car = await this._carModel.create(newCar);
    return this.createCarDomain(car);
  }
}

export default CarService;
