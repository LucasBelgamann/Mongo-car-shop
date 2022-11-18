import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
  
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
}