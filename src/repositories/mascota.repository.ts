import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Mascota, MascotaRelations} from '../models';

export class MascotaRepository extends DefaultCrudRepository<
  Mascota,
  typeof Mascota.prototype.IdMascota,
  MascotaRelations
> {
  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource,
  ) {
    super(Mascota, dataSource);
  }
}
