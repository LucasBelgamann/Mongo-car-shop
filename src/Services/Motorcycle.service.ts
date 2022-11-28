import Motorcycle from '../Domains/Motorcycle';
import IMoto from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle.model';

export default class MotorcycleService {
  private _motorcycleModel: MotorcycleModel;

  constructor() {
    this._motorcycleModel = new MotorcycleModel();
  }

  private createMotoDomain(moto: IMoto): Motorcycle {
    return new Motorcycle(moto);
  }

  async createNewMoto(newMoto: IMoto): Promise<Motorcycle> {
    const moto = await this._motorcycleModel.create(newMoto);
    return this.createMotoDomain(moto);
  }
  
  public async findAll() {
    const all = await this._motorcycleModel.getAll();
    return all.map((e) => this.createMotoDomain(e));
  }

  public async findOne(id: string) {
    const idOfMoto = await this._motorcycleModel.findById(id);
    if (idOfMoto) return new Motorcycle(idOfMoto);
  }

  public async updateForId(id: string, moto: IMoto) {
    const upMotoForId = await this._motorcycleModel.updateForId(id, moto);
    if (upMotoForId) {
      return this.createMotoDomain(upMotoForId);
    }
  }
}
