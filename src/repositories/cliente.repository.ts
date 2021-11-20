import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Cliente, ClienteRelations, Mascota} from '../models';
import {MascotaRepository} from './mascota.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.IdCliente,
  ClienteRelations
> {

  public readonly clienteAmascota: HasManyRepositoryFactory<Mascota, typeof Cliente.prototype.IdCliente>;

  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>,
  ) {
    super(Cliente, dataSource);
    this.clienteAmascota = this.createHasManyRepositoryFactoryFor('clienteAmascota', mascotaRepositoryGetter,);
    this.registerInclusionResolver('clienteAmascota', this.clienteAmascota.inclusionResolver);
  }
}
