import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';

@model()
export class Administrador extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idAdmin?: string;

  @property({
    type: 'string',
    required: true,
  })
  ClaveAdmin: string;

  @property({
    type: 'string',
  })
  personaId?: string;

  @hasMany(() => Asesor)
  adminAasesor: Asesor[];

  constructor(data?: Partial<Administrador>) {
    super(data);
  }
}

export interface AdministradorRelations {
  // describe navigational properties here
}

export type AdministradorWithRelations = Administrador & AdministradorRelations;
