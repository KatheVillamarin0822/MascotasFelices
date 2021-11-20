import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Persona, PersonaRelations, Administrador, Asesor, Cliente} from '../models';
import {AdministradorRepository} from './administrador.repository';
import {AsesorRepository} from './asesor.repository';
import {ClienteRepository} from './cliente.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.IdPersona,
  PersonaRelations
> {

  public readonly personaAadmin: HasManyRepositoryFactory<Administrador, typeof Persona.prototype.IdPersona>;

  public readonly personaAasesor: HasManyRepositoryFactory<Asesor, typeof Persona.prototype.IdPersona>;

  public readonly personaAcliente: HasManyRepositoryFactory<Cliente, typeof Persona.prototype.IdPersona>;

  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource, @repository.getter('AdministradorRepository') protected administradorRepositoryGetter: Getter<AdministradorRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Persona, dataSource);
    this.personaAcliente = this.createHasManyRepositoryFactoryFor('personaAcliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('personaAcliente', this.personaAcliente.inclusionResolver);
    this.personaAasesor = this.createHasManyRepositoryFactoryFor('personaAasesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('personaAasesor', this.personaAasesor.inclusionResolver);
    this.personaAadmin = this.createHasManyRepositoryFactoryFor('personaAadmin', administradorRepositoryGetter,);
    this.registerInclusionResolver('personaAadmin', this.personaAadmin.inclusionResolver);
  }
}
