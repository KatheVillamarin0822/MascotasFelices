import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Servicios, ServiciosRelations} from '../models';

export class ServiciosRepository extends DefaultCrudRepository<
  Servicios,
  typeof Servicios.prototype.CodigoServicio,
  ServiciosRelations
> {
  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource,
  ) {
    super(Servicios, dataSource);
  }
}
