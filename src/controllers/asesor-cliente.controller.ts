import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Asesor,
  Cliente,
} from '../models';
import {AsesorRepository} from '../repositories';

export class AsesorClienteController {
  constructor(
    @repository(AsesorRepository) protected asesorRepository: AsesorRepository,
  ) { }

  @get('/asesors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Array of Asesor has many Cliente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.asesorRepository.asesorAcliente(id).find(filter);
  }

  @post('/asesors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Asesor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cliente)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Asesor.prototype.IdAsesor,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewClienteInAsesor',
            exclude: ['IdCliente'],
            optional: ['asesorId']
          }),
        },
      },
    }) cliente: Omit<Cliente, 'IdCliente'>,
  ): Promise<Cliente> {
    return this.asesorRepository.asesorAcliente(id).create(cliente);
  }

  @patch('/asesors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Asesor.Cliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Partial<Cliente>,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.asesorRepository.asesorAcliente(id).patch(cliente, where);
  }

  @del('/asesors/{id}/clientes', {
    responses: {
      '200': {
        description: 'Asesor.Cliente DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cliente)) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.asesorRepository.asesorAcliente(id).delete(where);
  }
}
