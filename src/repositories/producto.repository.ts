import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbVetDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.CodigoProducto,
  ProductoRelations
> {
  constructor(
    @inject('datasources.mongodbVet') dataSource: MongodbVetDataSource,
  ) {
    super(Producto, dataSource);
  }
}
