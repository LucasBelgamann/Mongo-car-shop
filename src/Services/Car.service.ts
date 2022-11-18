import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';

export default class CarService {
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

  public async findOne(id: string) {
    const idOfCar = await this._carModel.findById(id);
    return idOfCar;
  }
}
