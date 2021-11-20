import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Asesor, AsesorRelations, Cliente} from '../models';
import {ClienteRepository} from './cliente.repository';

export class AsesorRepository extends DefaultCrudRepository<
  Asesor,
  typeof Asesor.prototype.IdAsesor,
  AsesorRelations
> {

  public readonly asesorAcliente: HasManyRepositoryFactory<Cliente, typeof Asesor.prototype.IdAsesor>;

  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Asesor, dataSource);
    this.asesorAcliente = this.createHasManyRepositoryFactoryFor('asesorAcliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('asesorAcliente', this.asesorAcliente.inclusionResolver);
  }
}
