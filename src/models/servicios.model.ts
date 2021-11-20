import {Entity, model, property} from '@loopback/repository';

@model()
export class Servicios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  CodigoServicio?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Valor: number;


  constructor(data?: Partial<Servicios>) {
    super(data);
  }
}

export interface ServiciosRelations {
  // describe navigational properties here
}

export type ServiciosWithRelations = Servicios & ServiciosRelations;
