import {Entity, model, property, hasMany} from '@loopback/repository';
import {Mascota} from './mascota.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdCliente?: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  Clave: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @hasMany(() => Mascota)
  clienteAmascota: Mascota[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
