import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category = 'Street' || 'Custom' || 'Trail';
  private engineCapacity: number;

  constructor(motocycle: IMotorcycle) {
    super(motocycle);
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
  
  public setCategory(category: string) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
  
  public getEngineCapacity() {
    return this.engineCapacity;
  }
}
