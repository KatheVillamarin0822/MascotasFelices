import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class Asesor extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  CodigoAsesor: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdAsesor?: string;

  @property({
    type: 'string',
    required: true,
  })
  ClaveAsesor: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @property({
    type: 'string',
  })
  administradorId?: string;

  @hasMany(() => Cliente)
  asesorAcliente: Cliente[];

  constructor(data?: Partial<Asesor>) {
    super(data);
  }
}

export interface AsesorRelations {
  // describe navigational properties here
}

export type AsesorWithRelations = Asesor & AsesorRelations;
