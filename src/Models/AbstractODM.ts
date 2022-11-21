import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
  isValidObjectId,
} from 'mongoose';
import CatchError from '../utils/CatchE';
  
export default abstract class AbstractODM<T> {
  protected schema: Schema; 
  protected model: Model<T>; 
  protected modelName: string;

  constructor(modelSchema: Schema, modelName: string) {
    this.schema = modelSchema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);  
  }
  
  public async create(newCar: T): Promise<T> {
    return this.model.create({ ...newCar });
  }
  
  public async getAll(): Promise<T[]> {
    return this.model.find();
  }
  
  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CatchError('Invalid mongo id', 422);
    return this.model.findOne({ _id: id });
  }

  public async updateForId(id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CatchError('Invalid mongo id', 422);
    return this.model.findByIdAndUpdate({ id }, { ...obj } as UpdateQuery<T>, { new: true });
  }
}