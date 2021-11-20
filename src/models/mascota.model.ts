import {Entity, model, property} from '@loopback/repository';

@model()
export class Mascota extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  IdCliente: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdMascota?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Raza: string;

  @property({
    type: 'string',
    required: true,
  })
  Especie: string;

  @property({
    type: 'string',
    required: true,
  })
  Vacunas: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
