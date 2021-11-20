import {Entity, model, property, hasMany} from '@loopback/repository';
import {Administrador} from './administrador.model';
import {Asesor} from './asesor.model';
import {Cliente} from './cliente.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  IdPersona?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @hasMany(() => Administrador)
  personaAadmin: Administrador[];

  @hasMany(() => Asesor)
  personaAasesor: Asesor[];

  @hasMany(() => Cliente)
  personaAcliente: Cliente[];

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
