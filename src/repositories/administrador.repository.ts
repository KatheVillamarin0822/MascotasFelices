import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Administrador, AdministradorRelations, Asesor} from '../models';
import {AsesorRepository} from './asesor.repository';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.idAdmin,
  AdministradorRelations
> {

  public readonly adminAasesor: HasManyRepositoryFactory<Asesor, typeof Administrador.prototype.idAdmin>;

  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>,
  ) {
    super(Administrador, dataSource);
    this.adminAasesor = this.createHasManyRepositoryFactoryFor('adminAasesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('adminAasesor', this.adminAasesor.inclusionResolver);
  }
}
