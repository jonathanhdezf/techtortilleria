
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model Distributor
 * 
 */
export type Distributor = $Result.DefaultSelection<Prisma.$DistributorPayload>
/**
 * Model DistributorOrder
 * 
 */
export type DistributorOrder = $Result.DefaultSelection<Prisma.$DistributorOrderPayload>
/**
 * Model DistributorOrderItem
 * 
 */
export type DistributorOrderItem = $Result.DefaultSelection<Prisma.$DistributorOrderItemPayload>
/**
 * Model InventoryMovement
 * 
 */
export type InventoryMovement = $Result.DefaultSelection<Prisma.$InventoryMovementPayload>
/**
 * Model CashRegister
 * 
 */
export type CashRegister = $Result.DefaultSelection<Prisma.$CashRegisterPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model DailyMetric
 * 
 */
export type DailyMetric = $Result.DefaultSelection<Prisma.$DailyMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CAJERO: 'CAJERO',
  DISTRIBUIDOR: 'DISTRIBUIDOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDIENTE: 'PENDIENTE',
  APROBADO: 'APROBADO',
  EN_PREPARACION: 'EN_PREPARACION',
  EN_RUTA: 'EN_RUTA',
  ENTREGADO: 'ENTREGADO',
  CANCELADO: 'CANCELADO'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distributor`: Exposes CRUD operations for the **Distributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distributors
    * const distributors = await prisma.distributor.findMany()
    * ```
    */
  get distributor(): Prisma.DistributorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distributorOrder`: Exposes CRUD operations for the **DistributorOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistributorOrders
    * const distributorOrders = await prisma.distributorOrder.findMany()
    * ```
    */
  get distributorOrder(): Prisma.DistributorOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distributorOrderItem`: Exposes CRUD operations for the **DistributorOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistributorOrderItems
    * const distributorOrderItems = await prisma.distributorOrderItem.findMany()
    * ```
    */
  get distributorOrderItem(): Prisma.DistributorOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryMovement`: Exposes CRUD operations for the **InventoryMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryMovements
    * const inventoryMovements = await prisma.inventoryMovement.findMany()
    * ```
    */
  get inventoryMovement(): Prisma.InventoryMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashRegister`: Exposes CRUD operations for the **CashRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashRegisters
    * const cashRegisters = await prisma.cashRegister.findMany()
    * ```
    */
  get cashRegister(): Prisma.CashRegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyMetric`: Exposes CRUD operations for the **DailyMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyMetrics
    * const dailyMetrics = await prisma.dailyMetric.findMany()
    * ```
    */
  get dailyMetric(): Prisma.DailyMetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Business: 'Business',
    User: 'User',
    Product: 'Product',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    Distributor: 'Distributor',
    DistributorOrder: 'DistributorOrder',
    DistributorOrderItem: 'DistributorOrderItem',
    InventoryMovement: 'InventoryMovement',
    CashRegister: 'CashRegister',
    Expense: 'Expense',
    DailyMetric: 'DailyMetric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "business" | "user" | "product" | "sale" | "saleItem" | "distributor" | "distributorOrder" | "distributorOrderItem" | "inventoryMovement" | "cashRegister" | "expense" | "dailyMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      Distributor: {
        payload: Prisma.$DistributorPayload<ExtArgs>
        fields: Prisma.DistributorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          findFirst: {
            args: Prisma.DistributorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          findMany: {
            args: Prisma.DistributorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          create: {
            args: Prisma.DistributorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          createMany: {
            args: Prisma.DistributorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          delete: {
            args: Prisma.DistributorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          update: {
            args: Prisma.DistributorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          deleteMany: {
            args: Prisma.DistributorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          upsert: {
            args: Prisma.DistributorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          aggregate: {
            args: Prisma.DistributorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributor>
          }
          groupBy: {
            args: Prisma.DistributorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorCountAggregateOutputType> | number
          }
        }
      }
      DistributorOrder: {
        payload: Prisma.$DistributorOrderPayload<ExtArgs>
        fields: Prisma.DistributorOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>
          }
          findFirst: {
            args: Prisma.DistributorOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>
          }
          findMany: {
            args: Prisma.DistributorOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>[]
          }
          create: {
            args: Prisma.DistributorOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>
          }
          createMany: {
            args: Prisma.DistributorOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>[]
          }
          delete: {
            args: Prisma.DistributorOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>
          }
          update: {
            args: Prisma.DistributorOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>
          }
          deleteMany: {
            args: Prisma.DistributorOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>[]
          }
          upsert: {
            args: Prisma.DistributorOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderPayload>
          }
          aggregate: {
            args: Prisma.DistributorOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributorOrder>
          }
          groupBy: {
            args: Prisma.DistributorOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorOrderCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorOrderCountAggregateOutputType> | number
          }
        }
      }
      DistributorOrderItem: {
        payload: Prisma.$DistributorOrderItemPayload<ExtArgs>
        fields: Prisma.DistributorOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>
          }
          findFirst: {
            args: Prisma.DistributorOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>
          }
          findMany: {
            args: Prisma.DistributorOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>[]
          }
          create: {
            args: Prisma.DistributorOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>
          }
          createMany: {
            args: Prisma.DistributorOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>[]
          }
          delete: {
            args: Prisma.DistributorOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>
          }
          update: {
            args: Prisma.DistributorOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.DistributorOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.DistributorOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorOrderItemPayload>
          }
          aggregate: {
            args: Prisma.DistributorOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributorOrderItem>
          }
          groupBy: {
            args: Prisma.DistributorOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorOrderItemCountAggregateOutputType> | number
          }
        }
      }
      InventoryMovement: {
        payload: Prisma.$InventoryMovementPayload<ExtArgs>
        fields: Prisma.InventoryMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findFirst: {
            args: Prisma.InventoryMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findMany: {
            args: Prisma.InventoryMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          create: {
            args: Prisma.InventoryMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          createMany: {
            args: Prisma.InventoryMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          delete: {
            args: Prisma.InventoryMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          update: {
            args: Prisma.InventoryMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          deleteMany: {
            args: Prisma.InventoryMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          upsert: {
            args: Prisma.InventoryMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          aggregate: {
            args: Prisma.InventoryMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryMovement>
          }
          groupBy: {
            args: Prisma.InventoryMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryMovementCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementCountAggregateOutputType> | number
          }
        }
      }
      CashRegister: {
        payload: Prisma.$CashRegisterPayload<ExtArgs>
        fields: Prisma.CashRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashRegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashRegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          findFirst: {
            args: Prisma.CashRegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashRegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          findMany: {
            args: Prisma.CashRegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>[]
          }
          create: {
            args: Prisma.CashRegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          createMany: {
            args: Prisma.CashRegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashRegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>[]
          }
          delete: {
            args: Prisma.CashRegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          update: {
            args: Prisma.CashRegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          deleteMany: {
            args: Prisma.CashRegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashRegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashRegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>[]
          }
          upsert: {
            args: Prisma.CashRegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashRegisterPayload>
          }
          aggregate: {
            args: Prisma.CashRegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashRegister>
          }
          groupBy: {
            args: Prisma.CashRegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashRegisterCountArgs<ExtArgs>
            result: $Utils.Optional<CashRegisterCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      DailyMetric: {
        payload: Prisma.$DailyMetricPayload<ExtArgs>
        fields: Prisma.DailyMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          findFirst: {
            args: Prisma.DailyMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          findMany: {
            args: Prisma.DailyMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>[]
          }
          create: {
            args: Prisma.DailyMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          createMany: {
            args: Prisma.DailyMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>[]
          }
          delete: {
            args: Prisma.DailyMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          update: {
            args: Prisma.DailyMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          deleteMany: {
            args: Prisma.DailyMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>[]
          }
          upsert: {
            args: Prisma.DailyMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMetricPayload>
          }
          aggregate: {
            args: Prisma.DailyMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyMetric>
          }
          groupBy: {
            args: Prisma.DailyMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyMetricCountArgs<ExtArgs>
            result: $Utils.Optional<DailyMetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    business?: BusinessOmit
    user?: UserOmit
    product?: ProductOmit
    sale?: SaleOmit
    saleItem?: SaleItemOmit
    distributor?: DistributorOmit
    distributorOrder?: DistributorOrderOmit
    distributorOrderItem?: DistributorOrderItemOmit
    inventoryMovement?: InventoryMovementOmit
    cashRegister?: CashRegisterOmit
    expense?: ExpenseOmit
    dailyMetric?: DailyMetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    users: number
    products: number
    sales: number
    distributors: number
    distributorOrders: number
    inventoryMovements: number
    cashRegisters: number
    expenses: number
    dailyMetrics: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BusinessCountOutputTypeCountUsersArgs
    products?: boolean | BusinessCountOutputTypeCountProductsArgs
    sales?: boolean | BusinessCountOutputTypeCountSalesArgs
    distributors?: boolean | BusinessCountOutputTypeCountDistributorsArgs
    distributorOrders?: boolean | BusinessCountOutputTypeCountDistributorOrdersArgs
    inventoryMovements?: boolean | BusinessCountOutputTypeCountInventoryMovementsArgs
    cashRegisters?: boolean | BusinessCountOutputTypeCountCashRegistersArgs
    expenses?: boolean | BusinessCountOutputTypeCountExpensesArgs
    dailyMetrics?: boolean | BusinessCountOutputTypeCountDailyMetricsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountDistributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountDistributorOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountInventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountCashRegistersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashRegisterWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountDailyMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMetricWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sales: number
    openedCash: number
    closedCash: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | UserCountOutputTypeCountSalesArgs
    openedCash?: boolean | UserCountOutputTypeCountOpenedCashArgs
    closedCash?: boolean | UserCountOutputTypeCountClosedCashArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOpenedCashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashRegisterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClosedCashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashRegisterWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    saleItems: number
    orderItems: number
    inventoryMovements: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | ProductCountOutputTypeCountSaleItemsArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
    inventoryMovements?: boolean | ProductCountOutputTypeCountInventoryMovementsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    saleItems: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | SaleCountOutputTypeCountSaleItemsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }


  /**
   * Count Type DistributorCountOutputType
   */

  export type DistributorCountOutputType = {
    orders: number
  }

  export type DistributorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | DistributorCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorCountOutputType
     */
    select?: DistributorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderWhereInput
  }


  /**
   * Count Type DistributorOrderCountOutputType
   */

  export type DistributorOrderCountOutputType = {
    orderItems: number
  }

  export type DistributorOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | DistributorOrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * DistributorOrderCountOutputType without action
   */
  export type DistributorOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderCountOutputType
     */
    select?: DistributorOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistributorOrderCountOutputType without action
   */
  export type DistributorOrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderItemWhereInput
  }


  /**
   * Count Type CashRegisterCountOutputType
   */

  export type CashRegisterCountOutputType = {
    expenses: number
  }

  export type CashRegisterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CashRegisterCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * CashRegisterCountOutputType without action
   */
  export type CashRegisterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegisterCountOutputType
     */
    select?: CashRegisterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CashRegisterCountOutputType without action
   */
  export type CashRegisterCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    name: string | null
    logoUrl: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logoUrl: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    logoUrl: number
    phone: number
    email: number
    address: number
    createdAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    name: string
    logoUrl: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    users?: boolean | Business$usersArgs<ExtArgs>
    products?: boolean | Business$productsArgs<ExtArgs>
    sales?: boolean | Business$salesArgs<ExtArgs>
    distributors?: boolean | Business$distributorsArgs<ExtArgs>
    distributorOrders?: boolean | Business$distributorOrdersArgs<ExtArgs>
    inventoryMovements?: boolean | Business$inventoryMovementsArgs<ExtArgs>
    cashRegisters?: boolean | Business$cashRegistersArgs<ExtArgs>
    expenses?: boolean | Business$expensesArgs<ExtArgs>
    dailyMetrics?: boolean | Business$dailyMetricsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logoUrl" | "phone" | "email" | "address" | "createdAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Business$usersArgs<ExtArgs>
    products?: boolean | Business$productsArgs<ExtArgs>
    sales?: boolean | Business$salesArgs<ExtArgs>
    distributors?: boolean | Business$distributorsArgs<ExtArgs>
    distributorOrders?: boolean | Business$distributorOrdersArgs<ExtArgs>
    inventoryMovements?: boolean | Business$inventoryMovementsArgs<ExtArgs>
    cashRegisters?: boolean | Business$cashRegistersArgs<ExtArgs>
    expenses?: boolean | Business$expensesArgs<ExtArgs>
    dailyMetrics?: boolean | Business$dailyMetricsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
      distributors: Prisma.$DistributorPayload<ExtArgs>[]
      distributorOrders: Prisma.$DistributorOrderPayload<ExtArgs>[]
      inventoryMovements: Prisma.$InventoryMovementPayload<ExtArgs>[]
      cashRegisters: Prisma.$CashRegisterPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      dailyMetrics: Prisma.$DailyMetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logoUrl: string | null
      phone: string | null
      email: string | null
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Business$usersArgs<ExtArgs> = {}>(args?: Subset<T, Business$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Business$productsArgs<ExtArgs> = {}>(args?: Subset<T, Business$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Business$salesArgs<ExtArgs> = {}>(args?: Subset<T, Business$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    distributors<T extends Business$distributorsArgs<ExtArgs> = {}>(args?: Subset<T, Business$distributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    distributorOrders<T extends Business$distributorOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Business$distributorOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryMovements<T extends Business$inventoryMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Business$inventoryMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cashRegisters<T extends Business$cashRegistersArgs<ExtArgs> = {}>(args?: Subset<T, Business$cashRegistersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Business$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Business$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyMetrics<T extends Business$dailyMetricsArgs<ExtArgs> = {}>(args?: Subset<T, Business$dailyMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly logoUrl: FieldRef<"Business", 'String'>
    readonly phone: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.users
   */
  export type Business$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Business.products
   */
  export type Business$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Business.sales
   */
  export type Business$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Business.distributors
   */
  export type Business$distributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    cursor?: DistributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Business.distributorOrders
   */
  export type Business$distributorOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    where?: DistributorOrderWhereInput
    orderBy?: DistributorOrderOrderByWithRelationInput | DistributorOrderOrderByWithRelationInput[]
    cursor?: DistributorOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorOrderScalarFieldEnum | DistributorOrderScalarFieldEnum[]
  }

  /**
   * Business.inventoryMovements
   */
  export type Business$inventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * Business.cashRegisters
   */
  export type Business$cashRegistersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    where?: CashRegisterWhereInput
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    cursor?: CashRegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * Business.expenses
   */
  export type Business$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Business.dailyMetrics
   */
  export type Business$dailyMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    where?: DailyMetricWhereInput
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    cursor?: DailyMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    active: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    businessId: number
    name: number
    email: number
    passwordHash: number
    role: number
    active: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    active?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    active?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    businessId: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    active: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    openedCash?: boolean | User$openedCashArgs<ExtArgs>
    closedCash?: boolean | User$closedCashArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    businessId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "name" | "email" | "passwordHash" | "role" | "active" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    sales?: boolean | User$salesArgs<ExtArgs>
    openedCash?: boolean | User$openedCashArgs<ExtArgs>
    closedCash?: boolean | User$closedCashArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      sales: Prisma.$SalePayload<ExtArgs>[]
      openedCash: Prisma.$CashRegisterPayload<ExtArgs>[]
      closedCash: Prisma.$CashRegisterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    openedCash<T extends User$openedCashArgs<ExtArgs> = {}>(args?: Subset<T, User$openedCashArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    closedCash<T extends User$closedCashArgs<ExtArgs> = {}>(args?: Subset<T, User$closedCashArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly businessId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.openedCash
   */
  export type User$openedCashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    where?: CashRegisterWhereInput
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    cursor?: CashRegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * User.closedCash
   */
  export type User$closedCashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    where?: CashRegisterWhereInput
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    cursor?: CashRegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    pricePublic: Decimal | null
    priceDistributor: Decimal | null
    stockQuantity: Decimal | null
    minimumStockAlert: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    pricePublic: Decimal | null
    priceDistributor: Decimal | null
    stockQuantity: Decimal | null
    minimumStockAlert: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    description: string | null
    pricePublic: Decimal | null
    priceDistributor: Decimal | null
    unitType: string | null
    stockQuantity: Decimal | null
    minimumStockAlert: Decimal | null
    active: boolean | null
    category: string | null
    createdAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    description: string | null
    pricePublic: Decimal | null
    priceDistributor: Decimal | null
    unitType: string | null
    stockQuantity: Decimal | null
    minimumStockAlert: Decimal | null
    active: boolean | null
    category: string | null
    createdAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    businessId: number
    name: number
    description: number
    pricePublic: number
    priceDistributor: number
    unitType: number
    stockQuantity: number
    minimumStockAlert: number
    active: number
    category: number
    createdAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    pricePublic?: true
    priceDistributor?: true
    stockQuantity?: true
    minimumStockAlert?: true
  }

  export type ProductSumAggregateInputType = {
    pricePublic?: true
    priceDistributor?: true
    stockQuantity?: true
    minimumStockAlert?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    description?: true
    pricePublic?: true
    priceDistributor?: true
    unitType?: true
    stockQuantity?: true
    minimumStockAlert?: true
    active?: true
    category?: true
    createdAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    description?: true
    pricePublic?: true
    priceDistributor?: true
    unitType?: true
    stockQuantity?: true
    minimumStockAlert?: true
    active?: true
    category?: true
    createdAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    description?: true
    pricePublic?: true
    priceDistributor?: true
    unitType?: true
    stockQuantity?: true
    minimumStockAlert?: true
    active?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    businessId: string
    name: string
    description: string | null
    pricePublic: Decimal
    priceDistributor: Decimal
    unitType: string
    stockQuantity: Decimal
    minimumStockAlert: Decimal
    active: boolean
    category: string | null
    createdAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    description?: boolean
    pricePublic?: boolean
    priceDistributor?: boolean
    unitType?: boolean
    stockQuantity?: boolean
    minimumStockAlert?: boolean
    active?: boolean
    category?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    inventoryMovements?: boolean | Product$inventoryMovementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    description?: boolean
    pricePublic?: boolean
    priceDistributor?: boolean
    unitType?: boolean
    stockQuantity?: boolean
    minimumStockAlert?: boolean
    active?: boolean
    category?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    description?: boolean
    pricePublic?: boolean
    priceDistributor?: boolean
    unitType?: boolean
    stockQuantity?: boolean
    minimumStockAlert?: boolean
    active?: boolean
    category?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    businessId?: boolean
    name?: boolean
    description?: boolean
    pricePublic?: boolean
    priceDistributor?: boolean
    unitType?: boolean
    stockQuantity?: boolean
    minimumStockAlert?: boolean
    active?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "name" | "description" | "pricePublic" | "priceDistributor" | "unitType" | "stockQuantity" | "minimumStockAlert" | "active" | "category" | "createdAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    inventoryMovements?: boolean | Product$inventoryMovementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
      orderItems: Prisma.$DistributorOrderItemPayload<ExtArgs>[]
      inventoryMovements: Prisma.$InventoryMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      name: string
      description: string | null
      pricePublic: Prisma.Decimal
      priceDistributor: Prisma.Decimal
      unitType: string
      stockQuantity: Prisma.Decimal
      minimumStockAlert: Prisma.Decimal
      active: boolean
      category: string | null
      createdAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saleItems<T extends Product$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryMovements<T extends Product$inventoryMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoryMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly businessId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly pricePublic: FieldRef<"Product", 'Decimal'>
    readonly priceDistributor: FieldRef<"Product", 'Decimal'>
    readonly unitType: FieldRef<"Product", 'String'>
    readonly stockQuantity: FieldRef<"Product", 'Decimal'>
    readonly minimumStockAlert: FieldRef<"Product", 'Decimal'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly category: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.saleItems
   */
  export type Product$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    where?: DistributorOrderItemWhereInput
    orderBy?: DistributorOrderItemOrderByWithRelationInput | DistributorOrderItemOrderByWithRelationInput[]
    cursor?: DistributorOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorOrderItemScalarFieldEnum | DistributorOrderItemScalarFieldEnum[]
  }

  /**
   * Product.inventoryMovements
   */
  export type Product$inventoryMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type SaleSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    userId: string | null
    totalAmount: Decimal | null
    paymentMethod: string | null
    createdAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    userId: string | null
    totalAmount: Decimal | null
    paymentMethod: string | null
    createdAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    businessId: number
    userId: number
    totalAmount: number
    paymentMethod: number
    createdAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    totalAmount?: true
  }

  export type SaleSumAggregateInputType = {
    totalAmount?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    totalAmount?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    totalAmount?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    totalAmount?: true
    paymentMethod?: true
    createdAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    businessId: string
    userId: string
    totalAmount: Decimal
    paymentMethod: string
    createdAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    saleItems?: boolean | Sale$saleItemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    businessId?: boolean
    userId?: boolean
    totalAmount?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "userId" | "totalAmount" | "paymentMethod" | "createdAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    saleItems?: boolean | Sale$saleItemsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      userId: string
      totalAmount: Prisma.Decimal
      paymentMethod: string
      createdAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    saleItems<T extends Sale$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly businessId: FieldRef<"Sale", 'String'>
    readonly userId: FieldRef<"Sale", 'String'>
    readonly totalAmount: FieldRef<"Sale", 'Decimal'>
    readonly paymentMethod: FieldRef<"Sale", 'String'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.saleItems
   */
  export type Sale$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type SaleItemSumAggregateOutputType = {
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: string | null
    saleId: string | null
    productId: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    productId: number
    quantity: number
    unitPrice: number
    subtotal: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type SaleItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: string
    saleId: string
    productId: string
    quantity: Decimal
    unitPrice: Decimal
    subtotal: Decimal
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
  }

  export type SaleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "productId" | "quantity" | "unitPrice" | "subtotal", ExtArgs["result"]["saleItem"]>
  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: string
      productId: string
      quantity: Prisma.Decimal
      unitPrice: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems and returns the data updated in the database.
     * @param {SaleItemUpdateManyAndReturnArgs} args - Arguments to update many SaleItems.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SaleItem model
   */
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'String'>
    readonly saleId: FieldRef<"SaleItem", 'String'>
    readonly productId: FieldRef<"SaleItem", 'String'>
    readonly quantity: FieldRef<"SaleItem", 'Decimal'>
    readonly unitPrice: FieldRef<"SaleItem", 'Decimal'>
    readonly subtotal: FieldRef<"SaleItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
  }

  /**
   * SaleItem updateManyAndReturn
   */
  export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to delete.
     */
    limit?: number
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model Distributor
   */

  export type AggregateDistributor = {
    _count: DistributorCountAggregateOutputType | null
    _avg: DistributorAvgAggregateOutputType | null
    _sum: DistributorSumAggregateOutputType | null
    _min: DistributorMinAggregateOutputType | null
    _max: DistributorMaxAggregateOutputType | null
  }

  export type DistributorAvgAggregateOutputType = {
    creditLimit: Decimal | null
  }

  export type DistributorSumAggregateOutputType = {
    creditLimit: Decimal | null
  }

  export type DistributorMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    contactName: string | null
    phone: string | null
    email: string | null
    address: string | null
    creditLimit: Decimal | null
    active: boolean | null
    createdAt: Date | null
  }

  export type DistributorMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    contactName: string | null
    phone: string | null
    email: string | null
    address: string | null
    creditLimit: Decimal | null
    active: boolean | null
    createdAt: Date | null
  }

  export type DistributorCountAggregateOutputType = {
    id: number
    businessId: number
    name: number
    contactName: number
    phone: number
    email: number
    address: number
    creditLimit: number
    active: number
    createdAt: number
    _all: number
  }


  export type DistributorAvgAggregateInputType = {
    creditLimit?: true
  }

  export type DistributorSumAggregateInputType = {
    creditLimit?: true
  }

  export type DistributorMinAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    contactName?: true
    phone?: true
    email?: true
    address?: true
    creditLimit?: true
    active?: true
    createdAt?: true
  }

  export type DistributorMaxAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    contactName?: true
    phone?: true
    email?: true
    address?: true
    creditLimit?: true
    active?: true
    createdAt?: true
  }

  export type DistributorCountAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    contactName?: true
    phone?: true
    email?: true
    address?: true
    creditLimit?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type DistributorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributor to aggregate.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distributors
    **/
    _count?: true | DistributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorMaxAggregateInputType
  }

  export type GetDistributorAggregateType<T extends DistributorAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributor[P]>
      : GetScalarType<T[P], AggregateDistributor[P]>
  }




  export type DistributorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorWhereInput
    orderBy?: DistributorOrderByWithAggregationInput | DistributorOrderByWithAggregationInput[]
    by: DistributorScalarFieldEnum[] | DistributorScalarFieldEnum
    having?: DistributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorCountAggregateInputType | true
    _avg?: DistributorAvgAggregateInputType
    _sum?: DistributorSumAggregateInputType
    _min?: DistributorMinAggregateInputType
    _max?: DistributorMaxAggregateInputType
  }

  export type DistributorGroupByOutputType = {
    id: string
    businessId: string
    name: string
    contactName: string | null
    phone: string | null
    email: string | null
    address: string | null
    creditLimit: Decimal
    active: boolean
    createdAt: Date
    _count: DistributorCountAggregateOutputType | null
    _avg: DistributorAvgAggregateOutputType | null
    _sum: DistributorSumAggregateOutputType | null
    _min: DistributorMinAggregateOutputType | null
    _max: DistributorMaxAggregateOutputType | null
  }

  type GetDistributorGroupByPayload<T extends DistributorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorGroupByOutputType[P]>
        }
      >
    >


  export type DistributorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    creditLimit?: boolean
    active?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    orders?: boolean | Distributor$ordersArgs<ExtArgs>
    _count?: boolean | DistributorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    creditLimit?: boolean
    active?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    creditLimit?: boolean
    active?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectScalar = {
    id?: boolean
    businessId?: boolean
    name?: boolean
    contactName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    creditLimit?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type DistributorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "name" | "contactName" | "phone" | "email" | "address" | "creditLimit" | "active" | "createdAt", ExtArgs["result"]["distributor"]>
  export type DistributorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    orders?: boolean | Distributor$ordersArgs<ExtArgs>
    _count?: boolean | DistributorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistributorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type DistributorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $DistributorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distributor"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      orders: Prisma.$DistributorOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      name: string
      contactName: string | null
      phone: string | null
      email: string | null
      address: string | null
      creditLimit: Prisma.Decimal
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["distributor"]>
    composites: {}
  }

  type DistributorGetPayload<S extends boolean | null | undefined | DistributorDefaultArgs> = $Result.GetResult<Prisma.$DistributorPayload, S>

  type DistributorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributorCountAggregateInputType | true
    }

  export interface DistributorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distributor'], meta: { name: 'Distributor' } }
    /**
     * Find zero or one Distributor that matches the filter.
     * @param {DistributorFindUniqueArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorFindUniqueArgs>(args: SelectSubset<T, DistributorFindUniqueArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distributor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorFindUniqueOrThrowArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindFirstArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorFindFirstArgs>(args?: SelectSubset<T, DistributorFindFirstArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distributor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindFirstOrThrowArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distributors
     * const distributors = await prisma.distributor.findMany()
     * 
     * // Get first 10 Distributors
     * const distributors = await prisma.distributor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorWithIdOnly = await prisma.distributor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorFindManyArgs>(args?: SelectSubset<T, DistributorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distributor.
     * @param {DistributorCreateArgs} args - Arguments to create a Distributor.
     * @example
     * // Create one Distributor
     * const Distributor = await prisma.distributor.create({
     *   data: {
     *     // ... data to create a Distributor
     *   }
     * })
     * 
     */
    create<T extends DistributorCreateArgs>(args: SelectSubset<T, DistributorCreateArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distributors.
     * @param {DistributorCreateManyArgs} args - Arguments to create many Distributors.
     * @example
     * // Create many Distributors
     * const distributor = await prisma.distributor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorCreateManyArgs>(args?: SelectSubset<T, DistributorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distributors and returns the data saved in the database.
     * @param {DistributorCreateManyAndReturnArgs} args - Arguments to create many Distributors.
     * @example
     * // Create many Distributors
     * const distributor = await prisma.distributor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distributors and only return the `id`
     * const distributorWithIdOnly = await prisma.distributor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distributor.
     * @param {DistributorDeleteArgs} args - Arguments to delete one Distributor.
     * @example
     * // Delete one Distributor
     * const Distributor = await prisma.distributor.delete({
     *   where: {
     *     // ... filter to delete one Distributor
     *   }
     * })
     * 
     */
    delete<T extends DistributorDeleteArgs>(args: SelectSubset<T, DistributorDeleteArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distributor.
     * @param {DistributorUpdateArgs} args - Arguments to update one Distributor.
     * @example
     * // Update one Distributor
     * const distributor = await prisma.distributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorUpdateArgs>(args: SelectSubset<T, DistributorUpdateArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distributors.
     * @param {DistributorDeleteManyArgs} args - Arguments to filter Distributors to delete.
     * @example
     * // Delete a few Distributors
     * const { count } = await prisma.distributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorDeleteManyArgs>(args?: SelectSubset<T, DistributorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distributors
     * const distributor = await prisma.distributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorUpdateManyArgs>(args: SelectSubset<T, DistributorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributors and returns the data updated in the database.
     * @param {DistributorUpdateManyAndReturnArgs} args - Arguments to update many Distributors.
     * @example
     * // Update many Distributors
     * const distributor = await prisma.distributor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distributors and only return the `id`
     * const distributorWithIdOnly = await prisma.distributor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distributor.
     * @param {DistributorUpsertArgs} args - Arguments to update or create a Distributor.
     * @example
     * // Update or create a Distributor
     * const distributor = await prisma.distributor.upsert({
     *   create: {
     *     // ... data to create a Distributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distributor we want to update
     *   }
     * })
     */
    upsert<T extends DistributorUpsertArgs>(args: SelectSubset<T, DistributorUpsertArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorCountArgs} args - Arguments to filter Distributors to count.
     * @example
     * // Count the number of Distributors
     * const count = await prisma.distributor.count({
     *   where: {
     *     // ... the filter for the Distributors we want to count
     *   }
     * })
    **/
    count<T extends DistributorCountArgs>(
      args?: Subset<T, DistributorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorAggregateArgs>(args: Subset<T, DistributorAggregateArgs>): Prisma.PrismaPromise<GetDistributorAggregateType<T>>

    /**
     * Group by Distributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorGroupByArgs['orderBy'] }
        : { orderBy?: DistributorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distributor model
   */
  readonly fields: DistributorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Distributor$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Distributor$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Distributor model
   */
  interface DistributorFieldRefs {
    readonly id: FieldRef<"Distributor", 'String'>
    readonly businessId: FieldRef<"Distributor", 'String'>
    readonly name: FieldRef<"Distributor", 'String'>
    readonly contactName: FieldRef<"Distributor", 'String'>
    readonly phone: FieldRef<"Distributor", 'String'>
    readonly email: FieldRef<"Distributor", 'String'>
    readonly address: FieldRef<"Distributor", 'String'>
    readonly creditLimit: FieldRef<"Distributor", 'Decimal'>
    readonly active: FieldRef<"Distributor", 'Boolean'>
    readonly createdAt: FieldRef<"Distributor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Distributor findUnique
   */
  export type DistributorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor findUniqueOrThrow
   */
  export type DistributorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor findFirst
   */
  export type DistributorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor findFirstOrThrow
   */
  export type DistributorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor findMany
   */
  export type DistributorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributors to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor create
   */
  export type DistributorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The data needed to create a Distributor.
     */
    data: XOR<DistributorCreateInput, DistributorUncheckedCreateInput>
  }

  /**
   * Distributor createMany
   */
  export type DistributorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distributors.
     */
    data: DistributorCreateManyInput | DistributorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distributor createManyAndReturn
   */
  export type DistributorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * The data used to create many Distributors.
     */
    data: DistributorCreateManyInput | DistributorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distributor update
   */
  export type DistributorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The data needed to update a Distributor.
     */
    data: XOR<DistributorUpdateInput, DistributorUncheckedUpdateInput>
    /**
     * Choose, which Distributor to update.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor updateMany
   */
  export type DistributorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distributors.
     */
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyInput>
    /**
     * Filter which Distributors to update
     */
    where?: DistributorWhereInput
    /**
     * Limit how many Distributors to update.
     */
    limit?: number
  }

  /**
   * Distributor updateManyAndReturn
   */
  export type DistributorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * The data used to update Distributors.
     */
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyInput>
    /**
     * Filter which Distributors to update
     */
    where?: DistributorWhereInput
    /**
     * Limit how many Distributors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distributor upsert
   */
  export type DistributorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The filter to search for the Distributor to update in case it exists.
     */
    where: DistributorWhereUniqueInput
    /**
     * In case the Distributor found by the `where` argument doesn't exist, create a new Distributor with this data.
     */
    create: XOR<DistributorCreateInput, DistributorUncheckedCreateInput>
    /**
     * In case the Distributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorUpdateInput, DistributorUncheckedUpdateInput>
  }

  /**
   * Distributor delete
   */
  export type DistributorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter which Distributor to delete.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor deleteMany
   */
  export type DistributorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributors to delete
     */
    where?: DistributorWhereInput
    /**
     * Limit how many Distributors to delete.
     */
    limit?: number
  }

  /**
   * Distributor.orders
   */
  export type Distributor$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    where?: DistributorOrderWhereInput
    orderBy?: DistributorOrderOrderByWithRelationInput | DistributorOrderOrderByWithRelationInput[]
    cursor?: DistributorOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorOrderScalarFieldEnum | DistributorOrderScalarFieldEnum[]
  }

  /**
   * Distributor without action
   */
  export type DistributorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
  }


  /**
   * Model DistributorOrder
   */

  export type AggregateDistributorOrder = {
    _count: DistributorOrderCountAggregateOutputType | null
    _avg: DistributorOrderAvgAggregateOutputType | null
    _sum: DistributorOrderSumAggregateOutputType | null
    _min: DistributorOrderMinAggregateOutputType | null
    _max: DistributorOrderMaxAggregateOutputType | null
  }

  export type DistributorOrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type DistributorOrderSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type DistributorOrderMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    distributorId: string | null
    status: $Enums.OrderStatus | null
    isPaid: boolean | null
    paymentMethod: string | null
    totalAmount: Decimal | null
    createdAt: Date | null
    deliveredAt: Date | null
  }

  export type DistributorOrderMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    distributorId: string | null
    status: $Enums.OrderStatus | null
    isPaid: boolean | null
    paymentMethod: string | null
    totalAmount: Decimal | null
    createdAt: Date | null
    deliveredAt: Date | null
  }

  export type DistributorOrderCountAggregateOutputType = {
    id: number
    businessId: number
    distributorId: number
    status: number
    isPaid: number
    paymentMethod: number
    totalAmount: number
    createdAt: number
    deliveredAt: number
    _all: number
  }


  export type DistributorOrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type DistributorOrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type DistributorOrderMinAggregateInputType = {
    id?: true
    businessId?: true
    distributorId?: true
    status?: true
    isPaid?: true
    paymentMethod?: true
    totalAmount?: true
    createdAt?: true
    deliveredAt?: true
  }

  export type DistributorOrderMaxAggregateInputType = {
    id?: true
    businessId?: true
    distributorId?: true
    status?: true
    isPaid?: true
    paymentMethod?: true
    totalAmount?: true
    createdAt?: true
    deliveredAt?: true
  }

  export type DistributorOrderCountAggregateInputType = {
    id?: true
    businessId?: true
    distributorId?: true
    status?: true
    isPaid?: true
    paymentMethod?: true
    totalAmount?: true
    createdAt?: true
    deliveredAt?: true
    _all?: true
  }

  export type DistributorOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorOrder to aggregate.
     */
    where?: DistributorOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrders to fetch.
     */
    orderBy?: DistributorOrderOrderByWithRelationInput | DistributorOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistributorOrders
    **/
    _count?: true | DistributorOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributorOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributorOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorOrderMaxAggregateInputType
  }

  export type GetDistributorOrderAggregateType<T extends DistributorOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributorOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributorOrder[P]>
      : GetScalarType<T[P], AggregateDistributorOrder[P]>
  }




  export type DistributorOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderWhereInput
    orderBy?: DistributorOrderOrderByWithAggregationInput | DistributorOrderOrderByWithAggregationInput[]
    by: DistributorOrderScalarFieldEnum[] | DistributorOrderScalarFieldEnum
    having?: DistributorOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorOrderCountAggregateInputType | true
    _avg?: DistributorOrderAvgAggregateInputType
    _sum?: DistributorOrderSumAggregateInputType
    _min?: DistributorOrderMinAggregateInputType
    _max?: DistributorOrderMaxAggregateInputType
  }

  export type DistributorOrderGroupByOutputType = {
    id: string
    businessId: string
    distributorId: string
    status: $Enums.OrderStatus
    isPaid: boolean
    paymentMethod: string | null
    totalAmount: Decimal
    createdAt: Date
    deliveredAt: Date | null
    _count: DistributorOrderCountAggregateOutputType | null
    _avg: DistributorOrderAvgAggregateOutputType | null
    _sum: DistributorOrderSumAggregateOutputType | null
    _min: DistributorOrderMinAggregateOutputType | null
    _max: DistributorOrderMaxAggregateOutputType | null
  }

  type GetDistributorOrderGroupByPayload<T extends DistributorOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorOrderGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorOrderGroupByOutputType[P]>
        }
      >
    >


  export type DistributorOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    distributorId?: boolean
    status?: boolean
    isPaid?: boolean
    paymentMethod?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    deliveredAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
    orderItems?: boolean | DistributorOrder$orderItemsArgs<ExtArgs>
    _count?: boolean | DistributorOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorOrder"]>

  export type DistributorOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    distributorId?: boolean
    status?: boolean
    isPaid?: boolean
    paymentMethod?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    deliveredAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorOrder"]>

  export type DistributorOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    distributorId?: boolean
    status?: boolean
    isPaid?: boolean
    paymentMethod?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    deliveredAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorOrder"]>

  export type DistributorOrderSelectScalar = {
    id?: boolean
    businessId?: boolean
    distributorId?: boolean
    status?: boolean
    isPaid?: boolean
    paymentMethod?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    deliveredAt?: boolean
  }

  export type DistributorOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "distributorId" | "status" | "isPaid" | "paymentMethod" | "totalAmount" | "createdAt" | "deliveredAt", ExtArgs["result"]["distributorOrder"]>
  export type DistributorOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
    orderItems?: boolean | DistributorOrder$orderItemsArgs<ExtArgs>
    _count?: boolean | DistributorOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistributorOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }
  export type DistributorOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }

  export type $DistributorOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistributorOrder"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      distributor: Prisma.$DistributorPayload<ExtArgs>
      orderItems: Prisma.$DistributorOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      distributorId: string
      status: $Enums.OrderStatus
      isPaid: boolean
      paymentMethod: string | null
      totalAmount: Prisma.Decimal
      createdAt: Date
      deliveredAt: Date | null
    }, ExtArgs["result"]["distributorOrder"]>
    composites: {}
  }

  type DistributorOrderGetPayload<S extends boolean | null | undefined | DistributorOrderDefaultArgs> = $Result.GetResult<Prisma.$DistributorOrderPayload, S>

  type DistributorOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributorOrderCountAggregateInputType | true
    }

  export interface DistributorOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistributorOrder'], meta: { name: 'DistributorOrder' } }
    /**
     * Find zero or one DistributorOrder that matches the filter.
     * @param {DistributorOrderFindUniqueArgs} args - Arguments to find a DistributorOrder
     * @example
     * // Get one DistributorOrder
     * const distributorOrder = await prisma.distributorOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorOrderFindUniqueArgs>(args: SelectSubset<T, DistributorOrderFindUniqueArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistributorOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorOrderFindUniqueOrThrowArgs} args - Arguments to find a DistributorOrder
     * @example
     * // Get one DistributorOrder
     * const distributorOrder = await prisma.distributorOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderFindFirstArgs} args - Arguments to find a DistributorOrder
     * @example
     * // Get one DistributorOrder
     * const distributorOrder = await prisma.distributorOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorOrderFindFirstArgs>(args?: SelectSubset<T, DistributorOrderFindFirstArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderFindFirstOrThrowArgs} args - Arguments to find a DistributorOrder
     * @example
     * // Get one DistributorOrder
     * const distributorOrder = await prisma.distributorOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistributorOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistributorOrders
     * const distributorOrders = await prisma.distributorOrder.findMany()
     * 
     * // Get first 10 DistributorOrders
     * const distributorOrders = await prisma.distributorOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorOrderWithIdOnly = await prisma.distributorOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorOrderFindManyArgs>(args?: SelectSubset<T, DistributorOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistributorOrder.
     * @param {DistributorOrderCreateArgs} args - Arguments to create a DistributorOrder.
     * @example
     * // Create one DistributorOrder
     * const DistributorOrder = await prisma.distributorOrder.create({
     *   data: {
     *     // ... data to create a DistributorOrder
     *   }
     * })
     * 
     */
    create<T extends DistributorOrderCreateArgs>(args: SelectSubset<T, DistributorOrderCreateArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistributorOrders.
     * @param {DistributorOrderCreateManyArgs} args - Arguments to create many DistributorOrders.
     * @example
     * // Create many DistributorOrders
     * const distributorOrder = await prisma.distributorOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorOrderCreateManyArgs>(args?: SelectSubset<T, DistributorOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistributorOrders and returns the data saved in the database.
     * @param {DistributorOrderCreateManyAndReturnArgs} args - Arguments to create many DistributorOrders.
     * @example
     * // Create many DistributorOrders
     * const distributorOrder = await prisma.distributorOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistributorOrders and only return the `id`
     * const distributorOrderWithIdOnly = await prisma.distributorOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DistributorOrder.
     * @param {DistributorOrderDeleteArgs} args - Arguments to delete one DistributorOrder.
     * @example
     * // Delete one DistributorOrder
     * const DistributorOrder = await prisma.distributorOrder.delete({
     *   where: {
     *     // ... filter to delete one DistributorOrder
     *   }
     * })
     * 
     */
    delete<T extends DistributorOrderDeleteArgs>(args: SelectSubset<T, DistributorOrderDeleteArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistributorOrder.
     * @param {DistributorOrderUpdateArgs} args - Arguments to update one DistributorOrder.
     * @example
     * // Update one DistributorOrder
     * const distributorOrder = await prisma.distributorOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorOrderUpdateArgs>(args: SelectSubset<T, DistributorOrderUpdateArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistributorOrders.
     * @param {DistributorOrderDeleteManyArgs} args - Arguments to filter DistributorOrders to delete.
     * @example
     * // Delete a few DistributorOrders
     * const { count } = await prisma.distributorOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorOrderDeleteManyArgs>(args?: SelectSubset<T, DistributorOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistributorOrders
     * const distributorOrder = await prisma.distributorOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorOrderUpdateManyArgs>(args: SelectSubset<T, DistributorOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorOrders and returns the data updated in the database.
     * @param {DistributorOrderUpdateManyAndReturnArgs} args - Arguments to update many DistributorOrders.
     * @example
     * // Update many DistributorOrders
     * const distributorOrder = await prisma.distributorOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistributorOrders and only return the `id`
     * const distributorOrderWithIdOnly = await prisma.distributorOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DistributorOrder.
     * @param {DistributorOrderUpsertArgs} args - Arguments to update or create a DistributorOrder.
     * @example
     * // Update or create a DistributorOrder
     * const distributorOrder = await prisma.distributorOrder.upsert({
     *   create: {
     *     // ... data to create a DistributorOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistributorOrder we want to update
     *   }
     * })
     */
    upsert<T extends DistributorOrderUpsertArgs>(args: SelectSubset<T, DistributorOrderUpsertArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DistributorOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderCountArgs} args - Arguments to filter DistributorOrders to count.
     * @example
     * // Count the number of DistributorOrders
     * const count = await prisma.distributorOrder.count({
     *   where: {
     *     // ... the filter for the DistributorOrders we want to count
     *   }
     * })
    **/
    count<T extends DistributorOrderCountArgs>(
      args?: Subset<T, DistributorOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistributorOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorOrderAggregateArgs>(args: Subset<T, DistributorOrderAggregateArgs>): Prisma.PrismaPromise<GetDistributorOrderAggregateType<T>>

    /**
     * Group by DistributorOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorOrderGroupByArgs['orderBy'] }
        : { orderBy?: DistributorOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistributorOrder model
   */
  readonly fields: DistributorOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistributorOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    distributor<T extends DistributorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistributorDefaultArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends DistributorOrder$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, DistributorOrder$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DistributorOrder model
   */
  interface DistributorOrderFieldRefs {
    readonly id: FieldRef<"DistributorOrder", 'String'>
    readonly businessId: FieldRef<"DistributorOrder", 'String'>
    readonly distributorId: FieldRef<"DistributorOrder", 'String'>
    readonly status: FieldRef<"DistributorOrder", 'OrderStatus'>
    readonly isPaid: FieldRef<"DistributorOrder", 'Boolean'>
    readonly paymentMethod: FieldRef<"DistributorOrder", 'String'>
    readonly totalAmount: FieldRef<"DistributorOrder", 'Decimal'>
    readonly createdAt: FieldRef<"DistributorOrder", 'DateTime'>
    readonly deliveredAt: FieldRef<"DistributorOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DistributorOrder findUnique
   */
  export type DistributorOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrder to fetch.
     */
    where: DistributorOrderWhereUniqueInput
  }

  /**
   * DistributorOrder findUniqueOrThrow
   */
  export type DistributorOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrder to fetch.
     */
    where: DistributorOrderWhereUniqueInput
  }

  /**
   * DistributorOrder findFirst
   */
  export type DistributorOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrder to fetch.
     */
    where?: DistributorOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrders to fetch.
     */
    orderBy?: DistributorOrderOrderByWithRelationInput | DistributorOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorOrders.
     */
    cursor?: DistributorOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrders.
     */
    distinct?: DistributorOrderScalarFieldEnum | DistributorOrderScalarFieldEnum[]
  }

  /**
   * DistributorOrder findFirstOrThrow
   */
  export type DistributorOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrder to fetch.
     */
    where?: DistributorOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrders to fetch.
     */
    orderBy?: DistributorOrderOrderByWithRelationInput | DistributorOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorOrders.
     */
    cursor?: DistributorOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrders.
     */
    distinct?: DistributorOrderScalarFieldEnum | DistributorOrderScalarFieldEnum[]
  }

  /**
   * DistributorOrder findMany
   */
  export type DistributorOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrders to fetch.
     */
    where?: DistributorOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrders to fetch.
     */
    orderBy?: DistributorOrderOrderByWithRelationInput | DistributorOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistributorOrders.
     */
    cursor?: DistributorOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrders.
     */
    skip?: number
    distinct?: DistributorOrderScalarFieldEnum | DistributorOrderScalarFieldEnum[]
  }

  /**
   * DistributorOrder create
   */
  export type DistributorOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a DistributorOrder.
     */
    data: XOR<DistributorOrderCreateInput, DistributorOrderUncheckedCreateInput>
  }

  /**
   * DistributorOrder createMany
   */
  export type DistributorOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistributorOrders.
     */
    data: DistributorOrderCreateManyInput | DistributorOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistributorOrder createManyAndReturn
   */
  export type DistributorOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * The data used to create many DistributorOrders.
     */
    data: DistributorOrderCreateManyInput | DistributorOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistributorOrder update
   */
  export type DistributorOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a DistributorOrder.
     */
    data: XOR<DistributorOrderUpdateInput, DistributorOrderUncheckedUpdateInput>
    /**
     * Choose, which DistributorOrder to update.
     */
    where: DistributorOrderWhereUniqueInput
  }

  /**
   * DistributorOrder updateMany
   */
  export type DistributorOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistributorOrders.
     */
    data: XOR<DistributorOrderUpdateManyMutationInput, DistributorOrderUncheckedUpdateManyInput>
    /**
     * Filter which DistributorOrders to update
     */
    where?: DistributorOrderWhereInput
    /**
     * Limit how many DistributorOrders to update.
     */
    limit?: number
  }

  /**
   * DistributorOrder updateManyAndReturn
   */
  export type DistributorOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * The data used to update DistributorOrders.
     */
    data: XOR<DistributorOrderUpdateManyMutationInput, DistributorOrderUncheckedUpdateManyInput>
    /**
     * Filter which DistributorOrders to update
     */
    where?: DistributorOrderWhereInput
    /**
     * Limit how many DistributorOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistributorOrder upsert
   */
  export type DistributorOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the DistributorOrder to update in case it exists.
     */
    where: DistributorOrderWhereUniqueInput
    /**
     * In case the DistributorOrder found by the `where` argument doesn't exist, create a new DistributorOrder with this data.
     */
    create: XOR<DistributorOrderCreateInput, DistributorOrderUncheckedCreateInput>
    /**
     * In case the DistributorOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorOrderUpdateInput, DistributorOrderUncheckedUpdateInput>
  }

  /**
   * DistributorOrder delete
   */
  export type DistributorOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
    /**
     * Filter which DistributorOrder to delete.
     */
    where: DistributorOrderWhereUniqueInput
  }

  /**
   * DistributorOrder deleteMany
   */
  export type DistributorOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorOrders to delete
     */
    where?: DistributorOrderWhereInput
    /**
     * Limit how many DistributorOrders to delete.
     */
    limit?: number
  }

  /**
   * DistributorOrder.orderItems
   */
  export type DistributorOrder$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    where?: DistributorOrderItemWhereInput
    orderBy?: DistributorOrderItemOrderByWithRelationInput | DistributorOrderItemOrderByWithRelationInput[]
    cursor?: DistributorOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorOrderItemScalarFieldEnum | DistributorOrderItemScalarFieldEnum[]
  }

  /**
   * DistributorOrder without action
   */
  export type DistributorOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrder
     */
    select?: DistributorOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrder
     */
    omit?: DistributorOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderInclude<ExtArgs> | null
  }


  /**
   * Model DistributorOrderItem
   */

  export type AggregateDistributorOrderItem = {
    _count: DistributorOrderItemCountAggregateOutputType | null
    _avg: DistributorOrderItemAvgAggregateOutputType | null
    _sum: DistributorOrderItemSumAggregateOutputType | null
    _min: DistributorOrderItemMinAggregateOutputType | null
    _max: DistributorOrderItemMaxAggregateOutputType | null
  }

  export type DistributorOrderItemAvgAggregateOutputType = {
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type DistributorOrderItemSumAggregateOutputType = {
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type DistributorOrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type DistributorOrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: Decimal | null
    unitPrice: Decimal | null
    subtotal: Decimal | null
  }

  export type DistributorOrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    unitPrice: number
    subtotal: number
    _all: number
  }


  export type DistributorOrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type DistributorOrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type DistributorOrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type DistributorOrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type DistributorOrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    _all?: true
  }

  export type DistributorOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorOrderItem to aggregate.
     */
    where?: DistributorOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderItems to fetch.
     */
    orderBy?: DistributorOrderItemOrderByWithRelationInput | DistributorOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistributorOrderItems
    **/
    _count?: true | DistributorOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributorOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributorOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorOrderItemMaxAggregateInputType
  }

  export type GetDistributorOrderItemAggregateType<T extends DistributorOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributorOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributorOrderItem[P]>
      : GetScalarType<T[P], AggregateDistributorOrderItem[P]>
  }




  export type DistributorOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorOrderItemWhereInput
    orderBy?: DistributorOrderItemOrderByWithAggregationInput | DistributorOrderItemOrderByWithAggregationInput[]
    by: DistributorOrderItemScalarFieldEnum[] | DistributorOrderItemScalarFieldEnum
    having?: DistributorOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorOrderItemCountAggregateInputType | true
    _avg?: DistributorOrderItemAvgAggregateInputType
    _sum?: DistributorOrderItemSumAggregateInputType
    _min?: DistributorOrderItemMinAggregateInputType
    _max?: DistributorOrderItemMaxAggregateInputType
  }

  export type DistributorOrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    quantity: Decimal
    unitPrice: Decimal
    subtotal: Decimal
    _count: DistributorOrderItemCountAggregateOutputType | null
    _avg: DistributorOrderItemAvgAggregateOutputType | null
    _sum: DistributorOrderItemSumAggregateOutputType | null
    _min: DistributorOrderItemMinAggregateOutputType | null
    _max: DistributorOrderItemMaxAggregateOutputType | null
  }

  type GetDistributorOrderItemGroupByPayload<T extends DistributorOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type DistributorOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    order?: boolean | DistributorOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorOrderItem"]>

  export type DistributorOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    order?: boolean | DistributorOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorOrderItem"]>

  export type DistributorOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    order?: boolean | DistributorOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorOrderItem"]>

  export type DistributorOrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
  }

  export type DistributorOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity" | "unitPrice" | "subtotal", ExtArgs["result"]["distributorOrderItem"]>
  export type DistributorOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | DistributorOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DistributorOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | DistributorOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DistributorOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | DistributorOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DistributorOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistributorOrderItem"
    objects: {
      order: Prisma.$DistributorOrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      quantity: Prisma.Decimal
      unitPrice: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["distributorOrderItem"]>
    composites: {}
  }

  type DistributorOrderItemGetPayload<S extends boolean | null | undefined | DistributorOrderItemDefaultArgs> = $Result.GetResult<Prisma.$DistributorOrderItemPayload, S>

  type DistributorOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributorOrderItemCountAggregateInputType | true
    }

  export interface DistributorOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistributorOrderItem'], meta: { name: 'DistributorOrderItem' } }
    /**
     * Find zero or one DistributorOrderItem that matches the filter.
     * @param {DistributorOrderItemFindUniqueArgs} args - Arguments to find a DistributorOrderItem
     * @example
     * // Get one DistributorOrderItem
     * const distributorOrderItem = await prisma.distributorOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorOrderItemFindUniqueArgs>(args: SelectSubset<T, DistributorOrderItemFindUniqueArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DistributorOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorOrderItemFindUniqueOrThrowArgs} args - Arguments to find a DistributorOrderItem
     * @example
     * // Get one DistributorOrderItem
     * const distributorOrderItem = await prisma.distributorOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemFindFirstArgs} args - Arguments to find a DistributorOrderItem
     * @example
     * // Get one DistributorOrderItem
     * const distributorOrderItem = await prisma.distributorOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorOrderItemFindFirstArgs>(args?: SelectSubset<T, DistributorOrderItemFindFirstArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DistributorOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemFindFirstOrThrowArgs} args - Arguments to find a DistributorOrderItem
     * @example
     * // Get one DistributorOrderItem
     * const distributorOrderItem = await prisma.distributorOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DistributorOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistributorOrderItems
     * const distributorOrderItems = await prisma.distributorOrderItem.findMany()
     * 
     * // Get first 10 DistributorOrderItems
     * const distributorOrderItems = await prisma.distributorOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorOrderItemWithIdOnly = await prisma.distributorOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorOrderItemFindManyArgs>(args?: SelectSubset<T, DistributorOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DistributorOrderItem.
     * @param {DistributorOrderItemCreateArgs} args - Arguments to create a DistributorOrderItem.
     * @example
     * // Create one DistributorOrderItem
     * const DistributorOrderItem = await prisma.distributorOrderItem.create({
     *   data: {
     *     // ... data to create a DistributorOrderItem
     *   }
     * })
     * 
     */
    create<T extends DistributorOrderItemCreateArgs>(args: SelectSubset<T, DistributorOrderItemCreateArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DistributorOrderItems.
     * @param {DistributorOrderItemCreateManyArgs} args - Arguments to create many DistributorOrderItems.
     * @example
     * // Create many DistributorOrderItems
     * const distributorOrderItem = await prisma.distributorOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorOrderItemCreateManyArgs>(args?: SelectSubset<T, DistributorOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DistributorOrderItems and returns the data saved in the database.
     * @param {DistributorOrderItemCreateManyAndReturnArgs} args - Arguments to create many DistributorOrderItems.
     * @example
     * // Create many DistributorOrderItems
     * const distributorOrderItem = await prisma.distributorOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DistributorOrderItems and only return the `id`
     * const distributorOrderItemWithIdOnly = await prisma.distributorOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DistributorOrderItem.
     * @param {DistributorOrderItemDeleteArgs} args - Arguments to delete one DistributorOrderItem.
     * @example
     * // Delete one DistributorOrderItem
     * const DistributorOrderItem = await prisma.distributorOrderItem.delete({
     *   where: {
     *     // ... filter to delete one DistributorOrderItem
     *   }
     * })
     * 
     */
    delete<T extends DistributorOrderItemDeleteArgs>(args: SelectSubset<T, DistributorOrderItemDeleteArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DistributorOrderItem.
     * @param {DistributorOrderItemUpdateArgs} args - Arguments to update one DistributorOrderItem.
     * @example
     * // Update one DistributorOrderItem
     * const distributorOrderItem = await prisma.distributorOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorOrderItemUpdateArgs>(args: SelectSubset<T, DistributorOrderItemUpdateArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DistributorOrderItems.
     * @param {DistributorOrderItemDeleteManyArgs} args - Arguments to filter DistributorOrderItems to delete.
     * @example
     * // Delete a few DistributorOrderItems
     * const { count } = await prisma.distributorOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorOrderItemDeleteManyArgs>(args?: SelectSubset<T, DistributorOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistributorOrderItems
     * const distributorOrderItem = await prisma.distributorOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorOrderItemUpdateManyArgs>(args: SelectSubset<T, DistributorOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorOrderItems and returns the data updated in the database.
     * @param {DistributorOrderItemUpdateManyAndReturnArgs} args - Arguments to update many DistributorOrderItems.
     * @example
     * // Update many DistributorOrderItems
     * const distributorOrderItem = await prisma.distributorOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DistributorOrderItems and only return the `id`
     * const distributorOrderItemWithIdOnly = await prisma.distributorOrderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DistributorOrderItem.
     * @param {DistributorOrderItemUpsertArgs} args - Arguments to update or create a DistributorOrderItem.
     * @example
     * // Update or create a DistributorOrderItem
     * const distributorOrderItem = await prisma.distributorOrderItem.upsert({
     *   create: {
     *     // ... data to create a DistributorOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistributorOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends DistributorOrderItemUpsertArgs>(args: SelectSubset<T, DistributorOrderItemUpsertArgs<ExtArgs>>): Prisma__DistributorOrderItemClient<$Result.GetResult<Prisma.$DistributorOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DistributorOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemCountArgs} args - Arguments to filter DistributorOrderItems to count.
     * @example
     * // Count the number of DistributorOrderItems
     * const count = await prisma.distributorOrderItem.count({
     *   where: {
     *     // ... the filter for the DistributorOrderItems we want to count
     *   }
     * })
    **/
    count<T extends DistributorOrderItemCountArgs>(
      args?: Subset<T, DistributorOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistributorOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorOrderItemAggregateArgs>(args: Subset<T, DistributorOrderItemAggregateArgs>): Prisma.PrismaPromise<GetDistributorOrderItemAggregateType<T>>

    /**
     * Group by DistributorOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: DistributorOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistributorOrderItem model
   */
  readonly fields: DistributorOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistributorOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends DistributorOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistributorOrderDefaultArgs<ExtArgs>>): Prisma__DistributorOrderClient<$Result.GetResult<Prisma.$DistributorOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DistributorOrderItem model
   */
  interface DistributorOrderItemFieldRefs {
    readonly id: FieldRef<"DistributorOrderItem", 'String'>
    readonly orderId: FieldRef<"DistributorOrderItem", 'String'>
    readonly productId: FieldRef<"DistributorOrderItem", 'String'>
    readonly quantity: FieldRef<"DistributorOrderItem", 'Decimal'>
    readonly unitPrice: FieldRef<"DistributorOrderItem", 'Decimal'>
    readonly subtotal: FieldRef<"DistributorOrderItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DistributorOrderItem findUnique
   */
  export type DistributorOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrderItem to fetch.
     */
    where: DistributorOrderItemWhereUniqueInput
  }

  /**
   * DistributorOrderItem findUniqueOrThrow
   */
  export type DistributorOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrderItem to fetch.
     */
    where: DistributorOrderItemWhereUniqueInput
  }

  /**
   * DistributorOrderItem findFirst
   */
  export type DistributorOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrderItem to fetch.
     */
    where?: DistributorOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderItems to fetch.
     */
    orderBy?: DistributorOrderItemOrderByWithRelationInput | DistributorOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorOrderItems.
     */
    cursor?: DistributorOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrderItems.
     */
    distinct?: DistributorOrderItemScalarFieldEnum | DistributorOrderItemScalarFieldEnum[]
  }

  /**
   * DistributorOrderItem findFirstOrThrow
   */
  export type DistributorOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrderItem to fetch.
     */
    where?: DistributorOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderItems to fetch.
     */
    orderBy?: DistributorOrderItemOrderByWithRelationInput | DistributorOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorOrderItems.
     */
    cursor?: DistributorOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorOrderItems.
     */
    distinct?: DistributorOrderItemScalarFieldEnum | DistributorOrderItemScalarFieldEnum[]
  }

  /**
   * DistributorOrderItem findMany
   */
  export type DistributorOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which DistributorOrderItems to fetch.
     */
    where?: DistributorOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorOrderItems to fetch.
     */
    orderBy?: DistributorOrderItemOrderByWithRelationInput | DistributorOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistributorOrderItems.
     */
    cursor?: DistributorOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorOrderItems.
     */
    skip?: number
    distinct?: DistributorOrderItemScalarFieldEnum | DistributorOrderItemScalarFieldEnum[]
  }

  /**
   * DistributorOrderItem create
   */
  export type DistributorOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DistributorOrderItem.
     */
    data: XOR<DistributorOrderItemCreateInput, DistributorOrderItemUncheckedCreateInput>
  }

  /**
   * DistributorOrderItem createMany
   */
  export type DistributorOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistributorOrderItems.
     */
    data: DistributorOrderItemCreateManyInput | DistributorOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DistributorOrderItem createManyAndReturn
   */
  export type DistributorOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many DistributorOrderItems.
     */
    data: DistributorOrderItemCreateManyInput | DistributorOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistributorOrderItem update
   */
  export type DistributorOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DistributorOrderItem.
     */
    data: XOR<DistributorOrderItemUpdateInput, DistributorOrderItemUncheckedUpdateInput>
    /**
     * Choose, which DistributorOrderItem to update.
     */
    where: DistributorOrderItemWhereUniqueInput
  }

  /**
   * DistributorOrderItem updateMany
   */
  export type DistributorOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistributorOrderItems.
     */
    data: XOR<DistributorOrderItemUpdateManyMutationInput, DistributorOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which DistributorOrderItems to update
     */
    where?: DistributorOrderItemWhereInput
    /**
     * Limit how many DistributorOrderItems to update.
     */
    limit?: number
  }

  /**
   * DistributorOrderItem updateManyAndReturn
   */
  export type DistributorOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update DistributorOrderItems.
     */
    data: XOR<DistributorOrderItemUpdateManyMutationInput, DistributorOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which DistributorOrderItems to update
     */
    where?: DistributorOrderItemWhereInput
    /**
     * Limit how many DistributorOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DistributorOrderItem upsert
   */
  export type DistributorOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DistributorOrderItem to update in case it exists.
     */
    where: DistributorOrderItemWhereUniqueInput
    /**
     * In case the DistributorOrderItem found by the `where` argument doesn't exist, create a new DistributorOrderItem with this data.
     */
    create: XOR<DistributorOrderItemCreateInput, DistributorOrderItemUncheckedCreateInput>
    /**
     * In case the DistributorOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorOrderItemUpdateInput, DistributorOrderItemUncheckedUpdateInput>
  }

  /**
   * DistributorOrderItem delete
   */
  export type DistributorOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
    /**
     * Filter which DistributorOrderItem to delete.
     */
    where: DistributorOrderItemWhereUniqueInput
  }

  /**
   * DistributorOrderItem deleteMany
   */
  export type DistributorOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorOrderItems to delete
     */
    where?: DistributorOrderItemWhereInput
    /**
     * Limit how many DistributorOrderItems to delete.
     */
    limit?: number
  }

  /**
   * DistributorOrderItem without action
   */
  export type DistributorOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorOrderItem
     */
    select?: DistributorOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DistributorOrderItem
     */
    omit?: DistributorOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model InventoryMovement
   */

  export type AggregateInventoryMovement = {
    _count: InventoryMovementCountAggregateOutputType | null
    _avg: InventoryMovementAvgAggregateOutputType | null
    _sum: InventoryMovementSumAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  export type InventoryMovementAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type InventoryMovementSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type InventoryMovementMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    productId: string | null
    movementType: string | null
    quantity: Decimal | null
    referenceId: string | null
    createdAt: Date | null
  }

  export type InventoryMovementMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    productId: string | null
    movementType: string | null
    quantity: Decimal | null
    referenceId: string | null
    createdAt: Date | null
  }

  export type InventoryMovementCountAggregateOutputType = {
    id: number
    businessId: number
    productId: number
    movementType: number
    quantity: number
    referenceId: number
    createdAt: number
    _all: number
  }


  export type InventoryMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryMovementSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMovementMinAggregateInputType = {
    id?: true
    businessId?: true
    productId?: true
    movementType?: true
    quantity?: true
    referenceId?: true
    createdAt?: true
  }

  export type InventoryMovementMaxAggregateInputType = {
    id?: true
    businessId?: true
    productId?: true
    movementType?: true
    quantity?: true
    referenceId?: true
    createdAt?: true
  }

  export type InventoryMovementCountAggregateInputType = {
    id?: true
    businessId?: true
    productId?: true
    movementType?: true
    quantity?: true
    referenceId?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovement to aggregate.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryMovements
    **/
    _count?: true | InventoryMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type GetInventoryMovementAggregateType<T extends InventoryMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryMovement[P]>
      : GetScalarType<T[P], AggregateInventoryMovement[P]>
  }




  export type InventoryMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithAggregationInput | InventoryMovementOrderByWithAggregationInput[]
    by: InventoryMovementScalarFieldEnum[] | InventoryMovementScalarFieldEnum
    having?: InventoryMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryMovementCountAggregateInputType | true
    _avg?: InventoryMovementAvgAggregateInputType
    _sum?: InventoryMovementSumAggregateInputType
    _min?: InventoryMovementMinAggregateInputType
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type InventoryMovementGroupByOutputType = {
    id: string
    businessId: string
    productId: string
    movementType: string
    quantity: Decimal
    referenceId: string | null
    createdAt: Date
    _count: InventoryMovementCountAggregateOutputType | null
    _avg: InventoryMovementAvgAggregateOutputType | null
    _sum: InventoryMovementSumAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  type GetInventoryMovementGroupByPayload<T extends InventoryMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
        }
      >
    >


  export type InventoryMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    productId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    productId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    productId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectScalar = {
    id?: boolean
    businessId?: boolean
    productId?: boolean
    movementType?: boolean
    quantity?: boolean
    referenceId?: boolean
    createdAt?: boolean
  }

  export type InventoryMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "productId" | "movementType" | "quantity" | "referenceId" | "createdAt", ExtArgs["result"]["inventoryMovement"]>
  export type InventoryMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryMovement"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      productId: string
      movementType: string
      quantity: Prisma.Decimal
      referenceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["inventoryMovement"]>
    composites: {}
  }

  type InventoryMovementGetPayload<S extends boolean | null | undefined | InventoryMovementDefaultArgs> = $Result.GetResult<Prisma.$InventoryMovementPayload, S>

  type InventoryMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryMovementCountAggregateInputType | true
    }

  export interface InventoryMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryMovement'], meta: { name: 'InventoryMovement' } }
    /**
     * Find zero or one InventoryMovement that matches the filter.
     * @param {InventoryMovementFindUniqueArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryMovementFindUniqueArgs>(args: SelectSubset<T, InventoryMovementFindUniqueArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryMovementFindUniqueOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryMovementFindFirstArgs>(args?: SelectSubset<T, InventoryMovementFindFirstArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany()
     * 
     * // Get first 10 InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryMovementFindManyArgs>(args?: SelectSubset<T, InventoryMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryMovement.
     * @param {InventoryMovementCreateArgs} args - Arguments to create a InventoryMovement.
     * @example
     * // Create one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.create({
     *   data: {
     *     // ... data to create a InventoryMovement
     *   }
     * })
     * 
     */
    create<T extends InventoryMovementCreateArgs>(args: SelectSubset<T, InventoryMovementCreateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryMovements.
     * @param {InventoryMovementCreateManyArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryMovementCreateManyArgs>(args?: SelectSubset<T, InventoryMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryMovements and returns the data saved in the database.
     * @param {InventoryMovementCreateManyAndReturnArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryMovements and only return the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryMovement.
     * @param {InventoryMovementDeleteArgs} args - Arguments to delete one InventoryMovement.
     * @example
     * // Delete one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.delete({
     *   where: {
     *     // ... filter to delete one InventoryMovement
     *   }
     * })
     * 
     */
    delete<T extends InventoryMovementDeleteArgs>(args: SelectSubset<T, InventoryMovementDeleteArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryMovement.
     * @param {InventoryMovementUpdateArgs} args - Arguments to update one InventoryMovement.
     * @example
     * // Update one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryMovementUpdateArgs>(args: SelectSubset<T, InventoryMovementUpdateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryMovements.
     * @param {InventoryMovementDeleteManyArgs} args - Arguments to filter InventoryMovements to delete.
     * @example
     * // Delete a few InventoryMovements
     * const { count } = await prisma.inventoryMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryMovementDeleteManyArgs>(args?: SelectSubset<T, InventoryMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryMovementUpdateManyArgs>(args: SelectSubset<T, InventoryMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryMovements and returns the data updated in the database.
     * @param {InventoryMovementUpdateManyAndReturnArgs} args - Arguments to update many InventoryMovements.
     * @example
     * // Update many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryMovements and only return the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryMovement.
     * @param {InventoryMovementUpsertArgs} args - Arguments to update or create a InventoryMovement.
     * @example
     * // Update or create a InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.upsert({
     *   create: {
     *     // ... data to create a InventoryMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryMovement we want to update
     *   }
     * })
     */
    upsert<T extends InventoryMovementUpsertArgs>(args: SelectSubset<T, InventoryMovementUpsertArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementCountArgs} args - Arguments to filter InventoryMovements to count.
     * @example
     * // Count the number of InventoryMovements
     * const count = await prisma.inventoryMovement.count({
     *   where: {
     *     // ... the filter for the InventoryMovements we want to count
     *   }
     * })
    **/
    count<T extends InventoryMovementCountArgs>(
      args?: Subset<T, InventoryMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryMovementAggregateArgs>(args: Subset<T, InventoryMovementAggregateArgs>): Prisma.PrismaPromise<GetInventoryMovementAggregateType<T>>

    /**
     * Group by InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryMovementGroupByArgs['orderBy'] }
        : { orderBy?: InventoryMovementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryMovement model
   */
  readonly fields: InventoryMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryMovement model
   */
  interface InventoryMovementFieldRefs {
    readonly id: FieldRef<"InventoryMovement", 'String'>
    readonly businessId: FieldRef<"InventoryMovement", 'String'>
    readonly productId: FieldRef<"InventoryMovement", 'String'>
    readonly movementType: FieldRef<"InventoryMovement", 'String'>
    readonly quantity: FieldRef<"InventoryMovement", 'Decimal'>
    readonly referenceId: FieldRef<"InventoryMovement", 'String'>
    readonly createdAt: FieldRef<"InventoryMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryMovement findUnique
   */
  export type InventoryMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findUniqueOrThrow
   */
  export type InventoryMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findFirst
   */
  export type InventoryMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findFirstOrThrow
   */
  export type InventoryMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findMany
   */
  export type InventoryMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovements to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement create
   */
  export type InventoryMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryMovement.
     */
    data: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
  }

  /**
   * InventoryMovement createMany
   */
  export type InventoryMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryMovement createManyAndReturn
   */
  export type InventoryMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryMovement update
   */
  export type InventoryMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryMovement.
     */
    data: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
    /**
     * Choose, which InventoryMovement to update.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement updateMany
   */
  export type InventoryMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryMovements.
     */
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyInput>
    /**
     * Filter which InventoryMovements to update
     */
    where?: InventoryMovementWhereInput
    /**
     * Limit how many InventoryMovements to update.
     */
    limit?: number
  }

  /**
   * InventoryMovement updateManyAndReturn
   */
  export type InventoryMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * The data used to update InventoryMovements.
     */
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyInput>
    /**
     * Filter which InventoryMovements to update
     */
    where?: InventoryMovementWhereInput
    /**
     * Limit how many InventoryMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryMovement upsert
   */
  export type InventoryMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryMovement to update in case it exists.
     */
    where: InventoryMovementWhereUniqueInput
    /**
     * In case the InventoryMovement found by the `where` argument doesn't exist, create a new InventoryMovement with this data.
     */
    create: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
    /**
     * In case the InventoryMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
  }

  /**
   * InventoryMovement delete
   */
  export type InventoryMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter which InventoryMovement to delete.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement deleteMany
   */
  export type InventoryMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovements to delete
     */
    where?: InventoryMovementWhereInput
    /**
     * Limit how many InventoryMovements to delete.
     */
    limit?: number
  }

  /**
   * InventoryMovement without action
   */
  export type InventoryMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryMovement
     */
    omit?: InventoryMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
  }


  /**
   * Model CashRegister
   */

  export type AggregateCashRegister = {
    _count: CashRegisterCountAggregateOutputType | null
    _avg: CashRegisterAvgAggregateOutputType | null
    _sum: CashRegisterSumAggregateOutputType | null
    _min: CashRegisterMinAggregateOutputType | null
    _max: CashRegisterMaxAggregateOutputType | null
  }

  export type CashRegisterAvgAggregateOutputType = {
    openingAmount: Decimal | null
    closingAmount: Decimal | null
  }

  export type CashRegisterSumAggregateOutputType = {
    openingAmount: Decimal | null
    closingAmount: Decimal | null
  }

  export type CashRegisterMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    openedById: string | null
    closedById: string | null
    openingAmount: Decimal | null
    closingAmount: Decimal | null
    openedAt: Date | null
    closedAt: Date | null
  }

  export type CashRegisterMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    openedById: string | null
    closedById: string | null
    openingAmount: Decimal | null
    closingAmount: Decimal | null
    openedAt: Date | null
    closedAt: Date | null
  }

  export type CashRegisterCountAggregateOutputType = {
    id: number
    businessId: number
    openedById: number
    closedById: number
    openingAmount: number
    closingAmount: number
    openedAt: number
    closedAt: number
    _all: number
  }


  export type CashRegisterAvgAggregateInputType = {
    openingAmount?: true
    closingAmount?: true
  }

  export type CashRegisterSumAggregateInputType = {
    openingAmount?: true
    closingAmount?: true
  }

  export type CashRegisterMinAggregateInputType = {
    id?: true
    businessId?: true
    openedById?: true
    closedById?: true
    openingAmount?: true
    closingAmount?: true
    openedAt?: true
    closedAt?: true
  }

  export type CashRegisterMaxAggregateInputType = {
    id?: true
    businessId?: true
    openedById?: true
    closedById?: true
    openingAmount?: true
    closingAmount?: true
    openedAt?: true
    closedAt?: true
  }

  export type CashRegisterCountAggregateInputType = {
    id?: true
    businessId?: true
    openedById?: true
    closedById?: true
    openingAmount?: true
    closingAmount?: true
    openedAt?: true
    closedAt?: true
    _all?: true
  }

  export type CashRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashRegister to aggregate.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashRegisters
    **/
    _count?: true | CashRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashRegisterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashRegisterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashRegisterMaxAggregateInputType
  }

  export type GetCashRegisterAggregateType<T extends CashRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateCashRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashRegister[P]>
      : GetScalarType<T[P], AggregateCashRegister[P]>
  }




  export type CashRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashRegisterWhereInput
    orderBy?: CashRegisterOrderByWithAggregationInput | CashRegisterOrderByWithAggregationInput[]
    by: CashRegisterScalarFieldEnum[] | CashRegisterScalarFieldEnum
    having?: CashRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashRegisterCountAggregateInputType | true
    _avg?: CashRegisterAvgAggregateInputType
    _sum?: CashRegisterSumAggregateInputType
    _min?: CashRegisterMinAggregateInputType
    _max?: CashRegisterMaxAggregateInputType
  }

  export type CashRegisterGroupByOutputType = {
    id: string
    businessId: string
    openedById: string
    closedById: string | null
    openingAmount: Decimal
    closingAmount: Decimal | null
    openedAt: Date
    closedAt: Date | null
    _count: CashRegisterCountAggregateOutputType | null
    _avg: CashRegisterAvgAggregateOutputType | null
    _sum: CashRegisterSumAggregateOutputType | null
    _min: CashRegisterMinAggregateOutputType | null
    _max: CashRegisterMaxAggregateOutputType | null
  }

  type GetCashRegisterGroupByPayload<T extends CashRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], CashRegisterGroupByOutputType[P]>
        }
      >
    >


  export type CashRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    openedById?: boolean
    closedById?: boolean
    openingAmount?: boolean
    closingAmount?: boolean
    openedAt?: boolean
    closedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | CashRegister$closedByArgs<ExtArgs>
    expenses?: boolean | CashRegister$expensesArgs<ExtArgs>
    _count?: boolean | CashRegisterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashRegister"]>

  export type CashRegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    openedById?: boolean
    closedById?: boolean
    openingAmount?: boolean
    closingAmount?: boolean
    openedAt?: boolean
    closedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | CashRegister$closedByArgs<ExtArgs>
  }, ExtArgs["result"]["cashRegister"]>

  export type CashRegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    openedById?: boolean
    closedById?: boolean
    openingAmount?: boolean
    closingAmount?: boolean
    openedAt?: boolean
    closedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | CashRegister$closedByArgs<ExtArgs>
  }, ExtArgs["result"]["cashRegister"]>

  export type CashRegisterSelectScalar = {
    id?: boolean
    businessId?: boolean
    openedById?: boolean
    closedById?: boolean
    openingAmount?: boolean
    closingAmount?: boolean
    openedAt?: boolean
    closedAt?: boolean
  }

  export type CashRegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "openedById" | "closedById" | "openingAmount" | "closingAmount" | "openedAt" | "closedAt", ExtArgs["result"]["cashRegister"]>
  export type CashRegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | CashRegister$closedByArgs<ExtArgs>
    expenses?: boolean | CashRegister$expensesArgs<ExtArgs>
    _count?: boolean | CashRegisterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CashRegisterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | CashRegister$closedByArgs<ExtArgs>
  }
  export type CashRegisterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    openedBy?: boolean | UserDefaultArgs<ExtArgs>
    closedBy?: boolean | CashRegister$closedByArgs<ExtArgs>
  }

  export type $CashRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashRegister"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      openedBy: Prisma.$UserPayload<ExtArgs>
      closedBy: Prisma.$UserPayload<ExtArgs> | null
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      openedById: string
      closedById: string | null
      openingAmount: Prisma.Decimal
      closingAmount: Prisma.Decimal | null
      openedAt: Date
      closedAt: Date | null
    }, ExtArgs["result"]["cashRegister"]>
    composites: {}
  }

  type CashRegisterGetPayload<S extends boolean | null | undefined | CashRegisterDefaultArgs> = $Result.GetResult<Prisma.$CashRegisterPayload, S>

  type CashRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashRegisterCountAggregateInputType | true
    }

  export interface CashRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashRegister'], meta: { name: 'CashRegister' } }
    /**
     * Find zero or one CashRegister that matches the filter.
     * @param {CashRegisterFindUniqueArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashRegisterFindUniqueArgs>(args: SelectSubset<T, CashRegisterFindUniqueArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashRegister that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashRegisterFindUniqueOrThrowArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashRegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, CashRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterFindFirstArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashRegisterFindFirstArgs>(args?: SelectSubset<T, CashRegisterFindFirstArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterFindFirstOrThrowArgs} args - Arguments to find a CashRegister
     * @example
     * // Get one CashRegister
     * const cashRegister = await prisma.cashRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashRegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, CashRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashRegisters
     * const cashRegisters = await prisma.cashRegister.findMany()
     * 
     * // Get first 10 CashRegisters
     * const cashRegisters = await prisma.cashRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashRegisterWithIdOnly = await prisma.cashRegister.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashRegisterFindManyArgs>(args?: SelectSubset<T, CashRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashRegister.
     * @param {CashRegisterCreateArgs} args - Arguments to create a CashRegister.
     * @example
     * // Create one CashRegister
     * const CashRegister = await prisma.cashRegister.create({
     *   data: {
     *     // ... data to create a CashRegister
     *   }
     * })
     * 
     */
    create<T extends CashRegisterCreateArgs>(args: SelectSubset<T, CashRegisterCreateArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashRegisters.
     * @param {CashRegisterCreateManyArgs} args - Arguments to create many CashRegisters.
     * @example
     * // Create many CashRegisters
     * const cashRegister = await prisma.cashRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashRegisterCreateManyArgs>(args?: SelectSubset<T, CashRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashRegisters and returns the data saved in the database.
     * @param {CashRegisterCreateManyAndReturnArgs} args - Arguments to create many CashRegisters.
     * @example
     * // Create many CashRegisters
     * const cashRegister = await prisma.cashRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashRegisters and only return the `id`
     * const cashRegisterWithIdOnly = await prisma.cashRegister.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashRegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, CashRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashRegister.
     * @param {CashRegisterDeleteArgs} args - Arguments to delete one CashRegister.
     * @example
     * // Delete one CashRegister
     * const CashRegister = await prisma.cashRegister.delete({
     *   where: {
     *     // ... filter to delete one CashRegister
     *   }
     * })
     * 
     */
    delete<T extends CashRegisterDeleteArgs>(args: SelectSubset<T, CashRegisterDeleteArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashRegister.
     * @param {CashRegisterUpdateArgs} args - Arguments to update one CashRegister.
     * @example
     * // Update one CashRegister
     * const cashRegister = await prisma.cashRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashRegisterUpdateArgs>(args: SelectSubset<T, CashRegisterUpdateArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashRegisters.
     * @param {CashRegisterDeleteManyArgs} args - Arguments to filter CashRegisters to delete.
     * @example
     * // Delete a few CashRegisters
     * const { count } = await prisma.cashRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashRegisterDeleteManyArgs>(args?: SelectSubset<T, CashRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashRegisters
     * const cashRegister = await prisma.cashRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashRegisterUpdateManyArgs>(args: SelectSubset<T, CashRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashRegisters and returns the data updated in the database.
     * @param {CashRegisterUpdateManyAndReturnArgs} args - Arguments to update many CashRegisters.
     * @example
     * // Update many CashRegisters
     * const cashRegister = await prisma.cashRegister.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashRegisters and only return the `id`
     * const cashRegisterWithIdOnly = await prisma.cashRegister.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashRegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, CashRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashRegister.
     * @param {CashRegisterUpsertArgs} args - Arguments to update or create a CashRegister.
     * @example
     * // Update or create a CashRegister
     * const cashRegister = await prisma.cashRegister.upsert({
     *   create: {
     *     // ... data to create a CashRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashRegister we want to update
     *   }
     * })
     */
    upsert<T extends CashRegisterUpsertArgs>(args: SelectSubset<T, CashRegisterUpsertArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterCountArgs} args - Arguments to filter CashRegisters to count.
     * @example
     * // Count the number of CashRegisters
     * const count = await prisma.cashRegister.count({
     *   where: {
     *     // ... the filter for the CashRegisters we want to count
     *   }
     * })
    **/
    count<T extends CashRegisterCountArgs>(
      args?: Subset<T, CashRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashRegisterAggregateArgs>(args: Subset<T, CashRegisterAggregateArgs>): Prisma.PrismaPromise<GetCashRegisterAggregateType<T>>

    /**
     * Group by CashRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashRegisterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashRegisterGroupByArgs['orderBy'] }
        : { orderBy?: CashRegisterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashRegister model
   */
  readonly fields: CashRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    openedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    closedBy<T extends CashRegister$closedByArgs<ExtArgs> = {}>(args?: Subset<T, CashRegister$closedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expenses<T extends CashRegister$expensesArgs<ExtArgs> = {}>(args?: Subset<T, CashRegister$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashRegister model
   */
  interface CashRegisterFieldRefs {
    readonly id: FieldRef<"CashRegister", 'String'>
    readonly businessId: FieldRef<"CashRegister", 'String'>
    readonly openedById: FieldRef<"CashRegister", 'String'>
    readonly closedById: FieldRef<"CashRegister", 'String'>
    readonly openingAmount: FieldRef<"CashRegister", 'Decimal'>
    readonly closingAmount: FieldRef<"CashRegister", 'Decimal'>
    readonly openedAt: FieldRef<"CashRegister", 'DateTime'>
    readonly closedAt: FieldRef<"CashRegister", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashRegister findUnique
   */
  export type CashRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister findUniqueOrThrow
   */
  export type CashRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister findFirst
   */
  export type CashRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashRegisters.
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashRegisters.
     */
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * CashRegister findFirstOrThrow
   */
  export type CashRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegister to fetch.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashRegisters.
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashRegisters.
     */
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * CashRegister findMany
   */
  export type CashRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter, which CashRegisters to fetch.
     */
    where?: CashRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashRegisters to fetch.
     */
    orderBy?: CashRegisterOrderByWithRelationInput | CashRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashRegisters.
     */
    cursor?: CashRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashRegisters.
     */
    skip?: number
    distinct?: CashRegisterScalarFieldEnum | CashRegisterScalarFieldEnum[]
  }

  /**
   * CashRegister create
   */
  export type CashRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a CashRegister.
     */
    data: XOR<CashRegisterCreateInput, CashRegisterUncheckedCreateInput>
  }

  /**
   * CashRegister createMany
   */
  export type CashRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashRegisters.
     */
    data: CashRegisterCreateManyInput | CashRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashRegister createManyAndReturn
   */
  export type CashRegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * The data used to create many CashRegisters.
     */
    data: CashRegisterCreateManyInput | CashRegisterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashRegister update
   */
  export type CashRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a CashRegister.
     */
    data: XOR<CashRegisterUpdateInput, CashRegisterUncheckedUpdateInput>
    /**
     * Choose, which CashRegister to update.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister updateMany
   */
  export type CashRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashRegisters.
     */
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyInput>
    /**
     * Filter which CashRegisters to update
     */
    where?: CashRegisterWhereInput
    /**
     * Limit how many CashRegisters to update.
     */
    limit?: number
  }

  /**
   * CashRegister updateManyAndReturn
   */
  export type CashRegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * The data used to update CashRegisters.
     */
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyInput>
    /**
     * Filter which CashRegisters to update
     */
    where?: CashRegisterWhereInput
    /**
     * Limit how many CashRegisters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashRegister upsert
   */
  export type CashRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the CashRegister to update in case it exists.
     */
    where: CashRegisterWhereUniqueInput
    /**
     * In case the CashRegister found by the `where` argument doesn't exist, create a new CashRegister with this data.
     */
    create: XOR<CashRegisterCreateInput, CashRegisterUncheckedCreateInput>
    /**
     * In case the CashRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashRegisterUpdateInput, CashRegisterUncheckedUpdateInput>
  }

  /**
   * CashRegister delete
   */
  export type CashRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
    /**
     * Filter which CashRegister to delete.
     */
    where: CashRegisterWhereUniqueInput
  }

  /**
   * CashRegister deleteMany
   */
  export type CashRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashRegisters to delete
     */
    where?: CashRegisterWhereInput
    /**
     * Limit how many CashRegisters to delete.
     */
    limit?: number
  }

  /**
   * CashRegister.closedBy
   */
  export type CashRegister$closedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CashRegister.expenses
   */
  export type CashRegister$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * CashRegister without action
   */
  export type CashRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashRegister
     */
    select?: CashRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashRegister
     */
    omit?: CashRegisterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashRegisterInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    cashRegisterId: string | null
    amount: Decimal | null
    description: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    cashRegisterId: string | null
    amount: Decimal | null
    description: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    businessId: number
    cashRegisterId: number
    amount: number
    description: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    businessId?: true
    cashRegisterId?: true
    amount?: true
    description?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    businessId?: true
    cashRegisterId?: true
    amount?: true
    description?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    businessId?: true
    cashRegisterId?: true
    amount?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    businessId: string
    cashRegisterId: string
    amount: Decimal
    description: string
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    businessId?: boolean
    cashRegisterId?: boolean
    amount?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "cashRegisterId" | "amount" | "description" | "createdAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    cashRegister?: boolean | CashRegisterDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      cashRegister: Prisma.$CashRegisterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      cashRegisterId: string
      amount: Prisma.Decimal
      description: string
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cashRegister<T extends CashRegisterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CashRegisterDefaultArgs<ExtArgs>>): Prisma__CashRegisterClient<$Result.GetResult<Prisma.$CashRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly businessId: FieldRef<"Expense", 'String'>
    readonly cashRegisterId: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model DailyMetric
   */

  export type AggregateDailyMetric = {
    _count: DailyMetricCountAggregateOutputType | null
    _avg: DailyMetricAvgAggregateOutputType | null
    _sum: DailyMetricSumAggregateOutputType | null
    _min: DailyMetricMinAggregateOutputType | null
    _max: DailyMetricMaxAggregateOutputType | null
  }

  export type DailyMetricAvgAggregateOutputType = {
    totalSales: Decimal | null
    totalOrders: number | null
    totalIncome: Decimal | null
  }

  export type DailyMetricSumAggregateOutputType = {
    totalSales: Decimal | null
    totalOrders: number | null
    totalIncome: Decimal | null
  }

  export type DailyMetricMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    date: Date | null
    totalSales: Decimal | null
    totalOrders: number | null
    totalIncome: Decimal | null
    createdAt: Date | null
  }

  export type DailyMetricMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    date: Date | null
    totalSales: Decimal | null
    totalOrders: number | null
    totalIncome: Decimal | null
    createdAt: Date | null
  }

  export type DailyMetricCountAggregateOutputType = {
    id: number
    businessId: number
    date: number
    totalSales: number
    totalOrders: number
    totalIncome: number
    createdAt: number
    _all: number
  }


  export type DailyMetricAvgAggregateInputType = {
    totalSales?: true
    totalOrders?: true
    totalIncome?: true
  }

  export type DailyMetricSumAggregateInputType = {
    totalSales?: true
    totalOrders?: true
    totalIncome?: true
  }

  export type DailyMetricMinAggregateInputType = {
    id?: true
    businessId?: true
    date?: true
    totalSales?: true
    totalOrders?: true
    totalIncome?: true
    createdAt?: true
  }

  export type DailyMetricMaxAggregateInputType = {
    id?: true
    businessId?: true
    date?: true
    totalSales?: true
    totalOrders?: true
    totalIncome?: true
    createdAt?: true
  }

  export type DailyMetricCountAggregateInputType = {
    id?: true
    businessId?: true
    date?: true
    totalSales?: true
    totalOrders?: true
    totalIncome?: true
    createdAt?: true
    _all?: true
  }

  export type DailyMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMetric to aggregate.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyMetrics
    **/
    _count?: true | DailyMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMetricMaxAggregateInputType
  }

  export type GetDailyMetricAggregateType<T extends DailyMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyMetric[P]>
      : GetScalarType<T[P], AggregateDailyMetric[P]>
  }




  export type DailyMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMetricWhereInput
    orderBy?: DailyMetricOrderByWithAggregationInput | DailyMetricOrderByWithAggregationInput[]
    by: DailyMetricScalarFieldEnum[] | DailyMetricScalarFieldEnum
    having?: DailyMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyMetricCountAggregateInputType | true
    _avg?: DailyMetricAvgAggregateInputType
    _sum?: DailyMetricSumAggregateInputType
    _min?: DailyMetricMinAggregateInputType
    _max?: DailyMetricMaxAggregateInputType
  }

  export type DailyMetricGroupByOutputType = {
    id: string
    businessId: string
    date: Date
    totalSales: Decimal
    totalOrders: number
    totalIncome: Decimal
    createdAt: Date
    _count: DailyMetricCountAggregateOutputType | null
    _avg: DailyMetricAvgAggregateOutputType | null
    _sum: DailyMetricSumAggregateOutputType | null
    _min: DailyMetricMinAggregateOutputType | null
    _max: DailyMetricMaxAggregateOutputType | null
  }

  type GetDailyMetricGroupByPayload<T extends DailyMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyMetricGroupByOutputType[P]>
            : GetScalarType<T[P], DailyMetricGroupByOutputType[P]>
        }
      >
    >


  export type DailyMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    date?: boolean
    totalSales?: boolean
    totalOrders?: boolean
    totalIncome?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMetric"]>

  export type DailyMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    date?: boolean
    totalSales?: boolean
    totalOrders?: boolean
    totalIncome?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMetric"]>

  export type DailyMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    date?: boolean
    totalSales?: boolean
    totalOrders?: boolean
    totalIncome?: boolean
    createdAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMetric"]>

  export type DailyMetricSelectScalar = {
    id?: boolean
    businessId?: boolean
    date?: boolean
    totalSales?: boolean
    totalOrders?: boolean
    totalIncome?: boolean
    createdAt?: boolean
  }

  export type DailyMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "date" | "totalSales" | "totalOrders" | "totalIncome" | "createdAt", ExtArgs["result"]["dailyMetric"]>
  export type DailyMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type DailyMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type DailyMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $DailyMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyMetric"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      date: Date
      totalSales: Prisma.Decimal
      totalOrders: number
      totalIncome: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["dailyMetric"]>
    composites: {}
  }

  type DailyMetricGetPayload<S extends boolean | null | undefined | DailyMetricDefaultArgs> = $Result.GetResult<Prisma.$DailyMetricPayload, S>

  type DailyMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyMetricCountAggregateInputType | true
    }

  export interface DailyMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyMetric'], meta: { name: 'DailyMetric' } }
    /**
     * Find zero or one DailyMetric that matches the filter.
     * @param {DailyMetricFindUniqueArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyMetricFindUniqueArgs>(args: SelectSubset<T, DailyMetricFindUniqueArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyMetricFindUniqueOrThrowArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricFindFirstArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyMetricFindFirstArgs>(args?: SelectSubset<T, DailyMetricFindFirstArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricFindFirstOrThrowArgs} args - Arguments to find a DailyMetric
     * @example
     * // Get one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyMetrics
     * const dailyMetrics = await prisma.dailyMetric.findMany()
     * 
     * // Get first 10 DailyMetrics
     * const dailyMetrics = await prisma.dailyMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyMetricWithIdOnly = await prisma.dailyMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyMetricFindManyArgs>(args?: SelectSubset<T, DailyMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyMetric.
     * @param {DailyMetricCreateArgs} args - Arguments to create a DailyMetric.
     * @example
     * // Create one DailyMetric
     * const DailyMetric = await prisma.dailyMetric.create({
     *   data: {
     *     // ... data to create a DailyMetric
     *   }
     * })
     * 
     */
    create<T extends DailyMetricCreateArgs>(args: SelectSubset<T, DailyMetricCreateArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyMetrics.
     * @param {DailyMetricCreateManyArgs} args - Arguments to create many DailyMetrics.
     * @example
     * // Create many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyMetricCreateManyArgs>(args?: SelectSubset<T, DailyMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyMetrics and returns the data saved in the database.
     * @param {DailyMetricCreateManyAndReturnArgs} args - Arguments to create many DailyMetrics.
     * @example
     * // Create many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyMetrics and only return the `id`
     * const dailyMetricWithIdOnly = await prisma.dailyMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyMetric.
     * @param {DailyMetricDeleteArgs} args - Arguments to delete one DailyMetric.
     * @example
     * // Delete one DailyMetric
     * const DailyMetric = await prisma.dailyMetric.delete({
     *   where: {
     *     // ... filter to delete one DailyMetric
     *   }
     * })
     * 
     */
    delete<T extends DailyMetricDeleteArgs>(args: SelectSubset<T, DailyMetricDeleteArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyMetric.
     * @param {DailyMetricUpdateArgs} args - Arguments to update one DailyMetric.
     * @example
     * // Update one DailyMetric
     * const dailyMetric = await prisma.dailyMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyMetricUpdateArgs>(args: SelectSubset<T, DailyMetricUpdateArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyMetrics.
     * @param {DailyMetricDeleteManyArgs} args - Arguments to filter DailyMetrics to delete.
     * @example
     * // Delete a few DailyMetrics
     * const { count } = await prisma.dailyMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyMetricDeleteManyArgs>(args?: SelectSubset<T, DailyMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyMetricUpdateManyArgs>(args: SelectSubset<T, DailyMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMetrics and returns the data updated in the database.
     * @param {DailyMetricUpdateManyAndReturnArgs} args - Arguments to update many DailyMetrics.
     * @example
     * // Update many DailyMetrics
     * const dailyMetric = await prisma.dailyMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyMetrics and only return the `id`
     * const dailyMetricWithIdOnly = await prisma.dailyMetric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyMetric.
     * @param {DailyMetricUpsertArgs} args - Arguments to update or create a DailyMetric.
     * @example
     * // Update or create a DailyMetric
     * const dailyMetric = await prisma.dailyMetric.upsert({
     *   create: {
     *     // ... data to create a DailyMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyMetric we want to update
     *   }
     * })
     */
    upsert<T extends DailyMetricUpsertArgs>(args: SelectSubset<T, DailyMetricUpsertArgs<ExtArgs>>): Prisma__DailyMetricClient<$Result.GetResult<Prisma.$DailyMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricCountArgs} args - Arguments to filter DailyMetrics to count.
     * @example
     * // Count the number of DailyMetrics
     * const count = await prisma.dailyMetric.count({
     *   where: {
     *     // ... the filter for the DailyMetrics we want to count
     *   }
     * })
    **/
    count<T extends DailyMetricCountArgs>(
      args?: Subset<T, DailyMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyMetricAggregateArgs>(args: Subset<T, DailyMetricAggregateArgs>): Prisma.PrismaPromise<GetDailyMetricAggregateType<T>>

    /**
     * Group by DailyMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyMetricGroupByArgs['orderBy'] }
        : { orderBy?: DailyMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyMetric model
   */
  readonly fields: DailyMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyMetric model
   */
  interface DailyMetricFieldRefs {
    readonly id: FieldRef<"DailyMetric", 'String'>
    readonly businessId: FieldRef<"DailyMetric", 'String'>
    readonly date: FieldRef<"DailyMetric", 'DateTime'>
    readonly totalSales: FieldRef<"DailyMetric", 'Decimal'>
    readonly totalOrders: FieldRef<"DailyMetric", 'Int'>
    readonly totalIncome: FieldRef<"DailyMetric", 'Decimal'>
    readonly createdAt: FieldRef<"DailyMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyMetric findUnique
   */
  export type DailyMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric findUniqueOrThrow
   */
  export type DailyMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric findFirst
   */
  export type DailyMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMetrics.
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMetrics.
     */
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * DailyMetric findFirstOrThrow
   */
  export type DailyMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * Filter, which DailyMetric to fetch.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMetrics.
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMetrics.
     */
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * DailyMetric findMany
   */
  export type DailyMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * Filter, which DailyMetrics to fetch.
     */
    where?: DailyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMetrics to fetch.
     */
    orderBy?: DailyMetricOrderByWithRelationInput | DailyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyMetrics.
     */
    cursor?: DailyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMetrics.
     */
    skip?: number
    distinct?: DailyMetricScalarFieldEnum | DailyMetricScalarFieldEnum[]
  }

  /**
   * DailyMetric create
   */
  export type DailyMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyMetric.
     */
    data: XOR<DailyMetricCreateInput, DailyMetricUncheckedCreateInput>
  }

  /**
   * DailyMetric createMany
   */
  export type DailyMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyMetrics.
     */
    data: DailyMetricCreateManyInput | DailyMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMetric createManyAndReturn
   */
  export type DailyMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * The data used to create many DailyMetrics.
     */
    data: DailyMetricCreateManyInput | DailyMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyMetric update
   */
  export type DailyMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyMetric.
     */
    data: XOR<DailyMetricUpdateInput, DailyMetricUncheckedUpdateInput>
    /**
     * Choose, which DailyMetric to update.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric updateMany
   */
  export type DailyMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyMetrics.
     */
    data: XOR<DailyMetricUpdateManyMutationInput, DailyMetricUncheckedUpdateManyInput>
    /**
     * Filter which DailyMetrics to update
     */
    where?: DailyMetricWhereInput
    /**
     * Limit how many DailyMetrics to update.
     */
    limit?: number
  }

  /**
   * DailyMetric updateManyAndReturn
   */
  export type DailyMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * The data used to update DailyMetrics.
     */
    data: XOR<DailyMetricUpdateManyMutationInput, DailyMetricUncheckedUpdateManyInput>
    /**
     * Filter which DailyMetrics to update
     */
    where?: DailyMetricWhereInput
    /**
     * Limit how many DailyMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyMetric upsert
   */
  export type DailyMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyMetric to update in case it exists.
     */
    where: DailyMetricWhereUniqueInput
    /**
     * In case the DailyMetric found by the `where` argument doesn't exist, create a new DailyMetric with this data.
     */
    create: XOR<DailyMetricCreateInput, DailyMetricUncheckedCreateInput>
    /**
     * In case the DailyMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyMetricUpdateInput, DailyMetricUncheckedUpdateInput>
  }

  /**
   * DailyMetric delete
   */
  export type DailyMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
    /**
     * Filter which DailyMetric to delete.
     */
    where: DailyMetricWhereUniqueInput
  }

  /**
   * DailyMetric deleteMany
   */
  export type DailyMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMetrics to delete
     */
    where?: DailyMetricWhereInput
    /**
     * Limit how many DailyMetrics to delete.
     */
    limit?: number
  }

  /**
   * DailyMetric without action
   */
  export type DailyMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMetric
     */
    select?: DailyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMetric
     */
    omit?: DailyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoUrl: 'logoUrl',
    phone: 'phone',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    description: 'description',
    pricePublic: 'pricePublic',
    priceDistributor: 'priceDistributor',
    unitType: 'unitType',
    stockQuantity: 'stockQuantity',
    minimumStockAlert: 'minimumStockAlert',
    active: 'active',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    userId: 'userId',
    totalAmount: 'totalAmount',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const DistributorScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    contactName: 'contactName',
    phone: 'phone',
    email: 'email',
    address: 'address',
    creditLimit: 'creditLimit',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type DistributorScalarFieldEnum = (typeof DistributorScalarFieldEnum)[keyof typeof DistributorScalarFieldEnum]


  export const DistributorOrderScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    distributorId: 'distributorId',
    status: 'status',
    isPaid: 'isPaid',
    paymentMethod: 'paymentMethod',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    deliveredAt: 'deliveredAt'
  };

  export type DistributorOrderScalarFieldEnum = (typeof DistributorOrderScalarFieldEnum)[keyof typeof DistributorOrderScalarFieldEnum]


  export const DistributorOrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal'
  };

  export type DistributorOrderItemScalarFieldEnum = (typeof DistributorOrderItemScalarFieldEnum)[keyof typeof DistributorOrderItemScalarFieldEnum]


  export const InventoryMovementScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    productId: 'productId',
    movementType: 'movementType',
    quantity: 'quantity',
    referenceId: 'referenceId',
    createdAt: 'createdAt'
  };

  export type InventoryMovementScalarFieldEnum = (typeof InventoryMovementScalarFieldEnum)[keyof typeof InventoryMovementScalarFieldEnum]


  export const CashRegisterScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    openedById: 'openedById',
    closedById: 'closedById',
    openingAmount: 'openingAmount',
    closingAmount: 'closingAmount',
    openedAt: 'openedAt',
    closedAt: 'closedAt'
  };

  export type CashRegisterScalarFieldEnum = (typeof CashRegisterScalarFieldEnum)[keyof typeof CashRegisterScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    cashRegisterId: 'cashRegisterId',
    amount: 'amount',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const DailyMetricScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    date: 'date',
    totalSales: 'totalSales',
    totalOrders: 'totalOrders',
    totalIncome: 'totalIncome',
    createdAt: 'createdAt'
  };

  export type DailyMetricScalarFieldEnum = (typeof DailyMetricScalarFieldEnum)[keyof typeof DailyMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    logoUrl?: StringNullableFilter<"Business"> | string | null
    phone?: StringNullableFilter<"Business"> | string | null
    email?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
    sales?: SaleListRelationFilter
    distributors?: DistributorListRelationFilter
    distributorOrders?: DistributorOrderListRelationFilter
    inventoryMovements?: InventoryMovementListRelationFilter
    cashRegisters?: CashRegisterListRelationFilter
    expenses?: ExpenseListRelationFilter
    dailyMetrics?: DailyMetricListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
    distributors?: DistributorOrderByRelationAggregateInput
    distributorOrders?: DistributorOrderOrderByRelationAggregateInput
    inventoryMovements?: InventoryMovementOrderByRelationAggregateInput
    cashRegisters?: CashRegisterOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    dailyMetrics?: DailyMetricOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    logoUrl?: StringNullableFilter<"Business"> | string | null
    phone?: StringNullableFilter<"Business"> | string | null
    email?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    users?: UserListRelationFilter
    products?: ProductListRelationFilter
    sales?: SaleListRelationFilter
    distributors?: DistributorListRelationFilter
    distributorOrders?: DistributorOrderListRelationFilter
    inventoryMovements?: InventoryMovementListRelationFilter
    cashRegisters?: CashRegisterListRelationFilter
    expenses?: ExpenseListRelationFilter
    dailyMetrics?: DailyMetricListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Business"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Business"> | string | null
    email?: StringNullableWithAggregatesFilter<"Business"> | string | null
    address?: StringNullableWithAggregatesFilter<"Business"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    businessId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    sales?: SaleListRelationFilter
    openedCash?: CashRegisterListRelationFilter
    closedCash?: CashRegisterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    sales?: SaleOrderByRelationAggregateInput
    openedCash?: CashRegisterOrderByRelationAggregateInput
    closedCash?: CashRegisterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    businessId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    sales?: SaleListRelationFilter
    openedCash?: CashRegisterListRelationFilter
    closedCash?: CashRegisterListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    businessId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    businessId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    pricePublic?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitType?: StringFilter<"Product"> | string
    stockQuantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"Product"> | boolean
    category?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    saleItems?: SaleItemListRelationFilter
    orderItems?: DistributorOrderItemListRelationFilter
    inventoryMovements?: InventoryMovementListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    unitType?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
    active?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    saleItems?: SaleItemOrderByRelationAggregateInput
    orderItems?: DistributorOrderItemOrderByRelationAggregateInput
    inventoryMovements?: InventoryMovementOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    businessId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    pricePublic?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitType?: StringFilter<"Product"> | string
    stockQuantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"Product"> | boolean
    category?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    saleItems?: SaleItemListRelationFilter
    orderItems?: DistributorOrderItemListRelationFilter
    inventoryMovements?: InventoryMovementListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    unitType?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
    active?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    businessId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    pricePublic?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitType?: StringWithAggregatesFilter<"Product"> | string
    stockQuantity?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    businessId?: StringFilter<"Sale"> | string
    userId?: StringFilter<"Sale"> | string
    totalAmount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    saleItems?: SaleItemListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    saleItems?: SaleItemOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    businessId?: StringFilter<"Sale"> | string
    userId?: StringFilter<"Sale"> | string
    totalAmount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    saleItems?: SaleItemListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    businessId?: StringWithAggregatesFilter<"Sale"> | string
    userId?: StringWithAggregatesFilter<"Sale"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringWithAggregatesFilter<"Sale"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    quantity?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    sale?: SaleOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    quantity?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleItem"> | string
    saleId?: StringWithAggregatesFilter<"SaleItem"> | string
    productId?: StringWithAggregatesFilter<"SaleItem"> | string
    quantity?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type DistributorWhereInput = {
    AND?: DistributorWhereInput | DistributorWhereInput[]
    OR?: DistributorWhereInput[]
    NOT?: DistributorWhereInput | DistributorWhereInput[]
    id?: StringFilter<"Distributor"> | string
    businessId?: StringFilter<"Distributor"> | string
    name?: StringFilter<"Distributor"> | string
    contactName?: StringNullableFilter<"Distributor"> | string | null
    phone?: StringNullableFilter<"Distributor"> | string | null
    email?: StringNullableFilter<"Distributor"> | string | null
    address?: StringNullableFilter<"Distributor"> | string | null
    creditLimit?: DecimalFilter<"Distributor"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"Distributor"> | boolean
    createdAt?: DateTimeFilter<"Distributor"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    orders?: DistributorOrderListRelationFilter
  }

  export type DistributorOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    contactName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    creditLimit?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    orders?: DistributorOrderOrderByRelationAggregateInput
  }

  export type DistributorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistributorWhereInput | DistributorWhereInput[]
    OR?: DistributorWhereInput[]
    NOT?: DistributorWhereInput | DistributorWhereInput[]
    businessId?: StringFilter<"Distributor"> | string
    name?: StringFilter<"Distributor"> | string
    contactName?: StringNullableFilter<"Distributor"> | string | null
    phone?: StringNullableFilter<"Distributor"> | string | null
    email?: StringNullableFilter<"Distributor"> | string | null
    address?: StringNullableFilter<"Distributor"> | string | null
    creditLimit?: DecimalFilter<"Distributor"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"Distributor"> | boolean
    createdAt?: DateTimeFilter<"Distributor"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    orders?: DistributorOrderListRelationFilter
  }, "id">

  export type DistributorOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    contactName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    creditLimit?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: DistributorCountOrderByAggregateInput
    _avg?: DistributorAvgOrderByAggregateInput
    _max?: DistributorMaxOrderByAggregateInput
    _min?: DistributorMinOrderByAggregateInput
    _sum?: DistributorSumOrderByAggregateInput
  }

  export type DistributorScalarWhereWithAggregatesInput = {
    AND?: DistributorScalarWhereWithAggregatesInput | DistributorScalarWhereWithAggregatesInput[]
    OR?: DistributorScalarWhereWithAggregatesInput[]
    NOT?: DistributorScalarWhereWithAggregatesInput | DistributorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Distributor"> | string
    businessId?: StringWithAggregatesFilter<"Distributor"> | string
    name?: StringWithAggregatesFilter<"Distributor"> | string
    contactName?: StringNullableWithAggregatesFilter<"Distributor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Distributor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Distributor"> | string | null
    address?: StringNullableWithAggregatesFilter<"Distributor"> | string | null
    creditLimit?: DecimalWithAggregatesFilter<"Distributor"> | Decimal | DecimalJsLike | number | string
    active?: BoolWithAggregatesFilter<"Distributor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Distributor"> | Date | string
  }

  export type DistributorOrderWhereInput = {
    AND?: DistributorOrderWhereInput | DistributorOrderWhereInput[]
    OR?: DistributorOrderWhereInput[]
    NOT?: DistributorOrderWhereInput | DistributorOrderWhereInput[]
    id?: StringFilter<"DistributorOrder"> | string
    businessId?: StringFilter<"DistributorOrder"> | string
    distributorId?: StringFilter<"DistributorOrder"> | string
    status?: EnumOrderStatusFilter<"DistributorOrder"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"DistributorOrder"> | boolean
    paymentMethod?: StringNullableFilter<"DistributorOrder"> | string | null
    totalAmount?: DecimalFilter<"DistributorOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DistributorOrder"> | Date | string
    deliveredAt?: DateTimeNullableFilter<"DistributorOrder"> | Date | string | null
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    distributor?: XOR<DistributorScalarRelationFilter, DistributorWhereInput>
    orderItems?: DistributorOrderItemListRelationFilter
  }

  export type DistributorOrderOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    distributorId?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    business?: BusinessOrderByWithRelationInput
    distributor?: DistributorOrderByWithRelationInput
    orderItems?: DistributorOrderItemOrderByRelationAggregateInput
  }

  export type DistributorOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistributorOrderWhereInput | DistributorOrderWhereInput[]
    OR?: DistributorOrderWhereInput[]
    NOT?: DistributorOrderWhereInput | DistributorOrderWhereInput[]
    businessId?: StringFilter<"DistributorOrder"> | string
    distributorId?: StringFilter<"DistributorOrder"> | string
    status?: EnumOrderStatusFilter<"DistributorOrder"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"DistributorOrder"> | boolean
    paymentMethod?: StringNullableFilter<"DistributorOrder"> | string | null
    totalAmount?: DecimalFilter<"DistributorOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DistributorOrder"> | Date | string
    deliveredAt?: DateTimeNullableFilter<"DistributorOrder"> | Date | string | null
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    distributor?: XOR<DistributorScalarRelationFilter, DistributorWhereInput>
    orderItems?: DistributorOrderItemListRelationFilter
  }, "id">

  export type DistributorOrderOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    distributorId?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    _count?: DistributorOrderCountOrderByAggregateInput
    _avg?: DistributorOrderAvgOrderByAggregateInput
    _max?: DistributorOrderMaxOrderByAggregateInput
    _min?: DistributorOrderMinOrderByAggregateInput
    _sum?: DistributorOrderSumOrderByAggregateInput
  }

  export type DistributorOrderScalarWhereWithAggregatesInput = {
    AND?: DistributorOrderScalarWhereWithAggregatesInput | DistributorOrderScalarWhereWithAggregatesInput[]
    OR?: DistributorOrderScalarWhereWithAggregatesInput[]
    NOT?: DistributorOrderScalarWhereWithAggregatesInput | DistributorOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistributorOrder"> | string
    businessId?: StringWithAggregatesFilter<"DistributorOrder"> | string
    distributorId?: StringWithAggregatesFilter<"DistributorOrder"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"DistributorOrder"> | $Enums.OrderStatus
    isPaid?: BoolWithAggregatesFilter<"DistributorOrder"> | boolean
    paymentMethod?: StringNullableWithAggregatesFilter<"DistributorOrder"> | string | null
    totalAmount?: DecimalWithAggregatesFilter<"DistributorOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DistributorOrder"> | Date | string
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"DistributorOrder"> | Date | string | null
  }

  export type DistributorOrderItemWhereInput = {
    AND?: DistributorOrderItemWhereInput | DistributorOrderItemWhereInput[]
    OR?: DistributorOrderItemWhereInput[]
    NOT?: DistributorOrderItemWhereInput | DistributorOrderItemWhereInput[]
    id?: StringFilter<"DistributorOrderItem"> | string
    orderId?: StringFilter<"DistributorOrderItem"> | string
    productId?: StringFilter<"DistributorOrderItem"> | string
    quantity?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    order?: XOR<DistributorOrderScalarRelationFilter, DistributorOrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DistributorOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    order?: DistributorOrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DistributorOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistributorOrderItemWhereInput | DistributorOrderItemWhereInput[]
    OR?: DistributorOrderItemWhereInput[]
    NOT?: DistributorOrderItemWhereInput | DistributorOrderItemWhereInput[]
    orderId?: StringFilter<"DistributorOrderItem"> | string
    productId?: StringFilter<"DistributorOrderItem"> | string
    quantity?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    order?: XOR<DistributorOrderScalarRelationFilter, DistributorOrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type DistributorOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    _count?: DistributorOrderItemCountOrderByAggregateInput
    _avg?: DistributorOrderItemAvgOrderByAggregateInput
    _max?: DistributorOrderItemMaxOrderByAggregateInput
    _min?: DistributorOrderItemMinOrderByAggregateInput
    _sum?: DistributorOrderItemSumOrderByAggregateInput
  }

  export type DistributorOrderItemScalarWhereWithAggregatesInput = {
    AND?: DistributorOrderItemScalarWhereWithAggregatesInput | DistributorOrderItemScalarWhereWithAggregatesInput[]
    OR?: DistributorOrderItemScalarWhereWithAggregatesInput[]
    NOT?: DistributorOrderItemScalarWhereWithAggregatesInput | DistributorOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DistributorOrderItem"> | string
    orderId?: StringWithAggregatesFilter<"DistributorOrderItem"> | string
    productId?: StringWithAggregatesFilter<"DistributorOrderItem"> | string
    quantity?: DecimalWithAggregatesFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalWithAggregatesFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type InventoryMovementWhereInput = {
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    businessId?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    movementType?: StringFilter<"InventoryMovement"> | string
    quantity?: DecimalFilter<"InventoryMovement"> | Decimal | DecimalJsLike | number | string
    referenceId?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InventoryMovementOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    businessId?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    movementType?: StringFilter<"InventoryMovement"> | string
    quantity?: DecimalFilter<"InventoryMovement"> | Decimal | DecimalJsLike | number | string
    referenceId?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type InventoryMovementOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InventoryMovementCountOrderByAggregateInput
    _avg?: InventoryMovementAvgOrderByAggregateInput
    _max?: InventoryMovementMaxOrderByAggregateInput
    _min?: InventoryMovementMinOrderByAggregateInput
    _sum?: InventoryMovementSumOrderByAggregateInput
  }

  export type InventoryMovementScalarWhereWithAggregatesInput = {
    AND?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    OR?: InventoryMovementScalarWhereWithAggregatesInput[]
    NOT?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryMovement"> | string
    businessId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    productId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    movementType?: StringWithAggregatesFilter<"InventoryMovement"> | string
    quantity?: DecimalWithAggregatesFilter<"InventoryMovement"> | Decimal | DecimalJsLike | number | string
    referenceId?: StringNullableWithAggregatesFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryMovement"> | Date | string
  }

  export type CashRegisterWhereInput = {
    AND?: CashRegisterWhereInput | CashRegisterWhereInput[]
    OR?: CashRegisterWhereInput[]
    NOT?: CashRegisterWhereInput | CashRegisterWhereInput[]
    id?: StringFilter<"CashRegister"> | string
    businessId?: StringFilter<"CashRegister"> | string
    openedById?: StringFilter<"CashRegister"> | string
    closedById?: StringNullableFilter<"CashRegister"> | string | null
    openingAmount?: DecimalFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    closingAmount?: DecimalNullableFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableFilter<"CashRegister"> | Date | string | null
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    openedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    closedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    expenses?: ExpenseListRelationFilter
  }

  export type CashRegisterOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    openedById?: SortOrder
    closedById?: SortOrderInput | SortOrder
    openingAmount?: SortOrder
    closingAmount?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    business?: BusinessOrderByWithRelationInput
    openedBy?: UserOrderByWithRelationInput
    closedBy?: UserOrderByWithRelationInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type CashRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CashRegisterWhereInput | CashRegisterWhereInput[]
    OR?: CashRegisterWhereInput[]
    NOT?: CashRegisterWhereInput | CashRegisterWhereInput[]
    businessId?: StringFilter<"CashRegister"> | string
    openedById?: StringFilter<"CashRegister"> | string
    closedById?: StringNullableFilter<"CashRegister"> | string | null
    openingAmount?: DecimalFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    closingAmount?: DecimalNullableFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableFilter<"CashRegister"> | Date | string | null
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    openedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    closedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type CashRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    openedById?: SortOrder
    closedById?: SortOrderInput | SortOrder
    openingAmount?: SortOrder
    closingAmount?: SortOrderInput | SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    _count?: CashRegisterCountOrderByAggregateInput
    _avg?: CashRegisterAvgOrderByAggregateInput
    _max?: CashRegisterMaxOrderByAggregateInput
    _min?: CashRegisterMinOrderByAggregateInput
    _sum?: CashRegisterSumOrderByAggregateInput
  }

  export type CashRegisterScalarWhereWithAggregatesInput = {
    AND?: CashRegisterScalarWhereWithAggregatesInput | CashRegisterScalarWhereWithAggregatesInput[]
    OR?: CashRegisterScalarWhereWithAggregatesInput[]
    NOT?: CashRegisterScalarWhereWithAggregatesInput | CashRegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashRegister"> | string
    businessId?: StringWithAggregatesFilter<"CashRegister"> | string
    openedById?: StringWithAggregatesFilter<"CashRegister"> | string
    closedById?: StringNullableWithAggregatesFilter<"CashRegister"> | string | null
    openingAmount?: DecimalWithAggregatesFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    closingAmount?: DecimalNullableWithAggregatesFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeWithAggregatesFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"CashRegister"> | Date | string | null
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    businessId?: StringFilter<"Expense"> | string
    cashRegisterId?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    cashRegister?: XOR<CashRegisterScalarRelationFilter, CashRegisterWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    cashRegister?: CashRegisterOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    businessId?: StringFilter<"Expense"> | string
    cashRegisterId?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    cashRegister?: XOR<CashRegisterScalarRelationFilter, CashRegisterWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    businessId?: StringWithAggregatesFilter<"Expense"> | string
    cashRegisterId?: StringWithAggregatesFilter<"Expense"> | string
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type DailyMetricWhereInput = {
    AND?: DailyMetricWhereInput | DailyMetricWhereInput[]
    OR?: DailyMetricWhereInput[]
    NOT?: DailyMetricWhereInput | DailyMetricWhereInput[]
    id?: StringFilter<"DailyMetric"> | string
    businessId?: StringFilter<"DailyMetric"> | string
    date?: DateTimeFilter<"DailyMetric"> | Date | string
    totalSales?: DecimalFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFilter<"DailyMetric"> | number
    totalIncome?: DecimalFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyMetric"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type DailyMetricOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type DailyMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    businessId_date?: DailyMetricBusinessIdDateCompoundUniqueInput
    AND?: DailyMetricWhereInput | DailyMetricWhereInput[]
    OR?: DailyMetricWhereInput[]
    NOT?: DailyMetricWhereInput | DailyMetricWhereInput[]
    businessId?: StringFilter<"DailyMetric"> | string
    date?: DateTimeFilter<"DailyMetric"> | Date | string
    totalSales?: DecimalFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFilter<"DailyMetric"> | number
    totalIncome?: DecimalFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyMetric"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id" | "businessId_date">

  export type DailyMetricOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
    _count?: DailyMetricCountOrderByAggregateInput
    _avg?: DailyMetricAvgOrderByAggregateInput
    _max?: DailyMetricMaxOrderByAggregateInput
    _min?: DailyMetricMinOrderByAggregateInput
    _sum?: DailyMetricSumOrderByAggregateInput
  }

  export type DailyMetricScalarWhereWithAggregatesInput = {
    AND?: DailyMetricScalarWhereWithAggregatesInput | DailyMetricScalarWhereWithAggregatesInput[]
    OR?: DailyMetricScalarWhereWithAggregatesInput[]
    NOT?: DailyMetricScalarWhereWithAggregatesInput | DailyMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyMetric"> | string
    businessId?: StringWithAggregatesFilter<"DailyMetric"> | string
    date?: DateTimeWithAggregatesFilter<"DailyMetric"> | Date | string
    totalSales?: DecimalWithAggregatesFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    totalOrders?: IntWithAggregatesFilter<"DailyMetric"> | number
    totalIncome?: DecimalWithAggregatesFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyMetric"> | Date | string
  }

  export type BusinessCreateInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutUsersInput
    sales?: SaleCreateNestedManyWithoutUserInput
    openedCash?: CashRegisterCreateNestedManyWithoutOpenedByInput
    closedCash?: CashRegisterCreateNestedManyWithoutClosedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    businessId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    openedCash?: CashRegisterUncheckedCreateNestedManyWithoutOpenedByInput
    closedCash?: CashRegisterUncheckedCreateNestedManyWithoutClosedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
    openedCash?: CashRegisterUpdateManyWithoutOpenedByNestedInput
    closedCash?: CashRegisterUpdateManyWithoutClosedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    openedCash?: CashRegisterUncheckedUpdateManyWithoutOpenedByNestedInput
    closedCash?: CashRegisterUncheckedUpdateManyWithoutClosedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    businessId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductsInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    businessId: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductsNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    businessId: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutSalesInput
    user: UserCreateNestedOneWithoutSalesInput
    saleItems?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    businessId: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutSalesNestedInput
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    saleItems?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: string
    businessId: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutSaleItemsInput
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: string
    saleId: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutSaleItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateManyInput = {
    id?: string
    saleId: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorCreateInput = {
    id?: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutDistributorsInput
    orders?: DistributorOrderCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateInput = {
    id?: string
    businessId: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    orders?: DistributorOrderUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutDistributorsNestedInput
    orders?: DistributorOrderUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: DistributorOrderUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorCreateManyInput = {
    id?: string
    businessId: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
  }

  export type DistributorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutDistributorOrdersInput
    distributor: DistributorCreateNestedOneWithoutOrdersInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutOrderInput
  }

  export type DistributorOrderUncheckedCreateInput = {
    id?: string
    businessId: string
    distributorId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type DistributorOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutDistributorOrdersNestedInput
    distributor?: DistributorUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type DistributorOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type DistributorOrderCreateManyInput = {
    id?: string
    businessId: string
    distributorId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
  }

  export type DistributorOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DistributorOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DistributorOrderItemCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    order: DistributorOrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type DistributorOrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: DistributorOrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type DistributorOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InventoryMovementCreateInput = {
    id?: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutInventoryMovementsInput
    product: ProductCreateNestedOneWithoutInventoryMovementsInput
  }

  export type InventoryMovementUncheckedCreateInput = {
    id?: string
    businessId: string
    productId: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
  }

  export type InventoryMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutInventoryMovementsNestedInput
    product?: ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementCreateManyInput = {
    id?: string
    businessId: string
    productId: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
  }

  export type InventoryMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashRegisterCreateInput = {
    id?: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutCashRegistersInput
    openedBy: UserCreateNestedOneWithoutOpenedCashInput
    closedBy?: UserCreateNestedOneWithoutClosedCashInput
    expenses?: ExpenseCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateInput = {
    id?: string
    businessId: string
    openedById: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutCashRegistersNestedInput
    openedBy?: UserUpdateOneRequiredWithoutOpenedCashNestedInput
    closedBy?: UserUpdateOneWithoutClosedCashNestedInput
    expenses?: ExpenseUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterCreateManyInput = {
    id?: string
    businessId: string
    openedById: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type CashRegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CashRegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutExpensesInput
    cashRegister: CashRegisterCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    businessId: string
    cashRegisterId: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutExpensesNestedInput
    cashRegister?: CashRegisterUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    cashRegisterId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    businessId: string
    cashRegisterId: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    cashRegisterId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricCreateInput = {
    id?: string
    date: Date | string
    totalSales: Decimal | DecimalJsLike | number | string
    totalOrders: number
    totalIncome: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutDailyMetricsInput
  }

  export type DailyMetricUncheckedCreateInput = {
    id?: string
    businessId: string
    date: Date | string
    totalSales: Decimal | DecimalJsLike | number | string
    totalOrders: number
    totalIncome: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DailyMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutDailyMetricsNestedInput
  }

  export type DailyMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricCreateManyInput = {
    id?: string
    businessId: string
    date: Date | string
    totalSales: Decimal | DecimalJsLike | number | string
    totalOrders: number
    totalIncome: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DailyMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type DistributorListRelationFilter = {
    every?: DistributorWhereInput
    some?: DistributorWhereInput
    none?: DistributorWhereInput
  }

  export type DistributorOrderListRelationFilter = {
    every?: DistributorOrderWhereInput
    some?: DistributorOrderWhereInput
    none?: DistributorOrderWhereInput
  }

  export type InventoryMovementListRelationFilter = {
    every?: InventoryMovementWhereInput
    some?: InventoryMovementWhereInput
    none?: InventoryMovementWhereInput
  }

  export type CashRegisterListRelationFilter = {
    every?: CashRegisterWhereInput
    some?: CashRegisterWhereInput
    none?: CashRegisterWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type DailyMetricListRelationFilter = {
    every?: DailyMetricWhereInput
    some?: DailyMetricWhereInput
    none?: DailyMetricWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistributorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistributorOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashRegisterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type DistributorOrderItemListRelationFilter = {
    every?: DistributorOrderItemWhereInput
    some?: DistributorOrderItemWhereInput
    none?: DistributorOrderItemWhereInput
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistributorOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    unitType?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
    active?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    unitType?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
    active?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    unitType?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
    active?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    pricePublic?: SortOrder
    priceDistributor?: SortOrder
    stockQuantity?: SortOrder
    minimumStockAlert?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    totalAmount?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type DistributorCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    creditLimit?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type DistributorAvgOrderByAggregateInput = {
    creditLimit?: SortOrder
  }

  export type DistributorMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    creditLimit?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type DistributorMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    creditLimit?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type DistributorSumOrderByAggregateInput = {
    creditLimit?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DistributorScalarRelationFilter = {
    is?: DistributorWhereInput
    isNot?: DistributorWhereInput
  }

  export type DistributorOrderCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    distributorId?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type DistributorOrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type DistributorOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    distributorId?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type DistributorOrderMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    distributorId?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    deliveredAt?: SortOrder
  }

  export type DistributorOrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DistributorOrderScalarRelationFilter = {
    is?: DistributorOrderWhereInput
    isNot?: DistributorOrderWhereInput
  }

  export type DistributorOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type DistributorOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type DistributorOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type DistributorOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type DistributorOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type InventoryMovementCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    productId?: SortOrder
    movementType?: SortOrder
    quantity?: SortOrder
    referenceId?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CashRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    openedById?: SortOrder
    closedById?: SortOrder
    openingAmount?: SortOrder
    closingAmount?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type CashRegisterAvgOrderByAggregateInput = {
    openingAmount?: SortOrder
    closingAmount?: SortOrder
  }

  export type CashRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    openedById?: SortOrder
    closedById?: SortOrder
    openingAmount?: SortOrder
    closingAmount?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type CashRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    openedById?: SortOrder
    closedById?: SortOrder
    openingAmount?: SortOrder
    closingAmount?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
  }

  export type CashRegisterSumOrderByAggregateInput = {
    openingAmount?: SortOrder
    closingAmount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CashRegisterScalarRelationFilter = {
    is?: CashRegisterWhereInput
    isNot?: CashRegisterWhereInput
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    cashRegisterId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DailyMetricBusinessIdDateCompoundUniqueInput = {
    businessId: string
    date: Date | string
  }

  export type DailyMetricCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyMetricAvgOrderByAggregateInput = {
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
  }

  export type DailyMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyMetricMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    date?: SortOrder
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyMetricSumOrderByAggregateInput = {
    totalSales?: SortOrder
    totalOrders?: SortOrder
    totalIncome?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutBusinessInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type DistributorCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DistributorCreateWithoutBusinessInput, DistributorUncheckedCreateWithoutBusinessInput> | DistributorCreateWithoutBusinessInput[] | DistributorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutBusinessInput | DistributorCreateOrConnectWithoutBusinessInput[]
    createMany?: DistributorCreateManyBusinessInputEnvelope
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
  }

  export type DistributorOrderCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DistributorOrderCreateWithoutBusinessInput, DistributorOrderUncheckedCreateWithoutBusinessInput> | DistributorOrderCreateWithoutBusinessInput[] | DistributorOrderUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutBusinessInput | DistributorOrderCreateOrConnectWithoutBusinessInput[]
    createMany?: DistributorOrderCreateManyBusinessInputEnvelope
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
  }

  export type InventoryMovementCreateNestedManyWithoutBusinessInput = {
    create?: XOR<InventoryMovementCreateWithoutBusinessInput, InventoryMovementUncheckedCreateWithoutBusinessInput> | InventoryMovementCreateWithoutBusinessInput[] | InventoryMovementUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutBusinessInput | InventoryMovementCreateOrConnectWithoutBusinessInput[]
    createMany?: InventoryMovementCreateManyBusinessInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type CashRegisterCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CashRegisterCreateWithoutBusinessInput, CashRegisterUncheckedCreateWithoutBusinessInput> | CashRegisterCreateWithoutBusinessInput[] | CashRegisterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutBusinessInput | CashRegisterCreateOrConnectWithoutBusinessInput[]
    createMany?: CashRegisterCreateManyBusinessInputEnvelope
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ExpenseCreateWithoutBusinessInput, ExpenseUncheckedCreateWithoutBusinessInput> | ExpenseCreateWithoutBusinessInput[] | ExpenseUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutBusinessInput | ExpenseCreateOrConnectWithoutBusinessInput[]
    createMany?: ExpenseCreateManyBusinessInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type DailyMetricCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DailyMetricCreateWithoutBusinessInput, DailyMetricUncheckedCreateWithoutBusinessInput> | DailyMetricCreateWithoutBusinessInput[] | DailyMetricUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DailyMetricCreateOrConnectWithoutBusinessInput | DailyMetricCreateOrConnectWithoutBusinessInput[]
    createMany?: DailyMetricCreateManyBusinessInputEnvelope
    connect?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type DistributorUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DistributorCreateWithoutBusinessInput, DistributorUncheckedCreateWithoutBusinessInput> | DistributorCreateWithoutBusinessInput[] | DistributorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutBusinessInput | DistributorCreateOrConnectWithoutBusinessInput[]
    createMany?: DistributorCreateManyBusinessInputEnvelope
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
  }

  export type DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DistributorOrderCreateWithoutBusinessInput, DistributorOrderUncheckedCreateWithoutBusinessInput> | DistributorOrderCreateWithoutBusinessInput[] | DistributorOrderUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutBusinessInput | DistributorOrderCreateOrConnectWithoutBusinessInput[]
    createMany?: DistributorOrderCreateManyBusinessInputEnvelope
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<InventoryMovementCreateWithoutBusinessInput, InventoryMovementUncheckedCreateWithoutBusinessInput> | InventoryMovementCreateWithoutBusinessInput[] | InventoryMovementUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutBusinessInput | InventoryMovementCreateOrConnectWithoutBusinessInput[]
    createMany?: InventoryMovementCreateManyBusinessInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type CashRegisterUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CashRegisterCreateWithoutBusinessInput, CashRegisterUncheckedCreateWithoutBusinessInput> | CashRegisterCreateWithoutBusinessInput[] | CashRegisterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutBusinessInput | CashRegisterCreateOrConnectWithoutBusinessInput[]
    createMany?: CashRegisterCreateManyBusinessInputEnvelope
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ExpenseCreateWithoutBusinessInput, ExpenseUncheckedCreateWithoutBusinessInput> | ExpenseCreateWithoutBusinessInput[] | ExpenseUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutBusinessInput | ExpenseCreateOrConnectWithoutBusinessInput[]
    createMany?: ExpenseCreateManyBusinessInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type DailyMetricUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<DailyMetricCreateWithoutBusinessInput, DailyMetricUncheckedCreateWithoutBusinessInput> | DailyMetricCreateWithoutBusinessInput[] | DailyMetricUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DailyMetricCreateOrConnectWithoutBusinessInput | DailyMetricCreateOrConnectWithoutBusinessInput[]
    createMany?: DailyMetricCreateManyBusinessInputEnvelope
    connect?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessInput | UserUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessInput | UserUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessInput | UserUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBusinessInput | ProductUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBusinessInput | ProductUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBusinessInput | ProductUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutBusinessInput | SaleUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutBusinessInput | SaleUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutBusinessInput | SaleUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type DistributorUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DistributorCreateWithoutBusinessInput, DistributorUncheckedCreateWithoutBusinessInput> | DistributorCreateWithoutBusinessInput[] | DistributorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutBusinessInput | DistributorCreateOrConnectWithoutBusinessInput[]
    upsert?: DistributorUpsertWithWhereUniqueWithoutBusinessInput | DistributorUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DistributorCreateManyBusinessInputEnvelope
    set?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    disconnect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    delete?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    update?: DistributorUpdateWithWhereUniqueWithoutBusinessInput | DistributorUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DistributorUpdateManyWithWhereWithoutBusinessInput | DistributorUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
  }

  export type DistributorOrderUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DistributorOrderCreateWithoutBusinessInput, DistributorOrderUncheckedCreateWithoutBusinessInput> | DistributorOrderCreateWithoutBusinessInput[] | DistributorOrderUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutBusinessInput | DistributorOrderCreateOrConnectWithoutBusinessInput[]
    upsert?: DistributorOrderUpsertWithWhereUniqueWithoutBusinessInput | DistributorOrderUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DistributorOrderCreateManyBusinessInputEnvelope
    set?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    disconnect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    delete?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    update?: DistributorOrderUpdateWithWhereUniqueWithoutBusinessInput | DistributorOrderUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DistributorOrderUpdateManyWithWhereWithoutBusinessInput | DistributorOrderUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DistributorOrderScalarWhereInput | DistributorOrderScalarWhereInput[]
  }

  export type InventoryMovementUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutBusinessInput, InventoryMovementUncheckedCreateWithoutBusinessInput> | InventoryMovementCreateWithoutBusinessInput[] | InventoryMovementUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutBusinessInput | InventoryMovementCreateOrConnectWithoutBusinessInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutBusinessInput | InventoryMovementUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: InventoryMovementCreateManyBusinessInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutBusinessInput | InventoryMovementUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutBusinessInput | InventoryMovementUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type CashRegisterUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CashRegisterCreateWithoutBusinessInput, CashRegisterUncheckedCreateWithoutBusinessInput> | CashRegisterCreateWithoutBusinessInput[] | CashRegisterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutBusinessInput | CashRegisterCreateOrConnectWithoutBusinessInput[]
    upsert?: CashRegisterUpsertWithWhereUniqueWithoutBusinessInput | CashRegisterUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CashRegisterCreateManyBusinessInputEnvelope
    set?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    disconnect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    delete?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    update?: CashRegisterUpdateWithWhereUniqueWithoutBusinessInput | CashRegisterUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CashRegisterUpdateManyWithWhereWithoutBusinessInput | CashRegisterUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ExpenseCreateWithoutBusinessInput, ExpenseUncheckedCreateWithoutBusinessInput> | ExpenseCreateWithoutBusinessInput[] | ExpenseUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutBusinessInput | ExpenseCreateOrConnectWithoutBusinessInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutBusinessInput | ExpenseUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ExpenseCreateManyBusinessInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutBusinessInput | ExpenseUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutBusinessInput | ExpenseUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type DailyMetricUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DailyMetricCreateWithoutBusinessInput, DailyMetricUncheckedCreateWithoutBusinessInput> | DailyMetricCreateWithoutBusinessInput[] | DailyMetricUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DailyMetricCreateOrConnectWithoutBusinessInput | DailyMetricCreateOrConnectWithoutBusinessInput[]
    upsert?: DailyMetricUpsertWithWhereUniqueWithoutBusinessInput | DailyMetricUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DailyMetricCreateManyBusinessInputEnvelope
    set?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    disconnect?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    delete?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    connect?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    update?: DailyMetricUpdateWithWhereUniqueWithoutBusinessInput | DailyMetricUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DailyMetricUpdateManyWithWhereWithoutBusinessInput | DailyMetricUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DailyMetricScalarWhereInput | DailyMetricScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessInput | UserUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessInput | UserUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessInput | UserUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBusinessInput | ProductUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBusinessInput | ProductUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBusinessInput | ProductUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput> | SaleCreateWithoutBusinessInput[] | SaleUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutBusinessInput | SaleCreateOrConnectWithoutBusinessInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutBusinessInput | SaleUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: SaleCreateManyBusinessInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutBusinessInput | SaleUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutBusinessInput | SaleUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type DistributorUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DistributorCreateWithoutBusinessInput, DistributorUncheckedCreateWithoutBusinessInput> | DistributorCreateWithoutBusinessInput[] | DistributorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutBusinessInput | DistributorCreateOrConnectWithoutBusinessInput[]
    upsert?: DistributorUpsertWithWhereUniqueWithoutBusinessInput | DistributorUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DistributorCreateManyBusinessInputEnvelope
    set?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    disconnect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    delete?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    update?: DistributorUpdateWithWhereUniqueWithoutBusinessInput | DistributorUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DistributorUpdateManyWithWhereWithoutBusinessInput | DistributorUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
  }

  export type DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DistributorOrderCreateWithoutBusinessInput, DistributorOrderUncheckedCreateWithoutBusinessInput> | DistributorOrderCreateWithoutBusinessInput[] | DistributorOrderUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutBusinessInput | DistributorOrderCreateOrConnectWithoutBusinessInput[]
    upsert?: DistributorOrderUpsertWithWhereUniqueWithoutBusinessInput | DistributorOrderUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DistributorOrderCreateManyBusinessInputEnvelope
    set?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    disconnect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    delete?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    update?: DistributorOrderUpdateWithWhereUniqueWithoutBusinessInput | DistributorOrderUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DistributorOrderUpdateManyWithWhereWithoutBusinessInput | DistributorOrderUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DistributorOrderScalarWhereInput | DistributorOrderScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutBusinessInput, InventoryMovementUncheckedCreateWithoutBusinessInput> | InventoryMovementCreateWithoutBusinessInput[] | InventoryMovementUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutBusinessInput | InventoryMovementCreateOrConnectWithoutBusinessInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutBusinessInput | InventoryMovementUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: InventoryMovementCreateManyBusinessInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutBusinessInput | InventoryMovementUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutBusinessInput | InventoryMovementUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CashRegisterCreateWithoutBusinessInput, CashRegisterUncheckedCreateWithoutBusinessInput> | CashRegisterCreateWithoutBusinessInput[] | CashRegisterUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutBusinessInput | CashRegisterCreateOrConnectWithoutBusinessInput[]
    upsert?: CashRegisterUpsertWithWhereUniqueWithoutBusinessInput | CashRegisterUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CashRegisterCreateManyBusinessInputEnvelope
    set?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    disconnect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    delete?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    update?: CashRegisterUpdateWithWhereUniqueWithoutBusinessInput | CashRegisterUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CashRegisterUpdateManyWithWhereWithoutBusinessInput | CashRegisterUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ExpenseCreateWithoutBusinessInput, ExpenseUncheckedCreateWithoutBusinessInput> | ExpenseCreateWithoutBusinessInput[] | ExpenseUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutBusinessInput | ExpenseCreateOrConnectWithoutBusinessInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutBusinessInput | ExpenseUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ExpenseCreateManyBusinessInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutBusinessInput | ExpenseUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutBusinessInput | ExpenseUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<DailyMetricCreateWithoutBusinessInput, DailyMetricUncheckedCreateWithoutBusinessInput> | DailyMetricCreateWithoutBusinessInput[] | DailyMetricUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: DailyMetricCreateOrConnectWithoutBusinessInput | DailyMetricCreateOrConnectWithoutBusinessInput[]
    upsert?: DailyMetricUpsertWithWhereUniqueWithoutBusinessInput | DailyMetricUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: DailyMetricCreateManyBusinessInputEnvelope
    set?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    disconnect?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    delete?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    connect?: DailyMetricWhereUniqueInput | DailyMetricWhereUniqueInput[]
    update?: DailyMetricUpdateWithWhereUniqueWithoutBusinessInput | DailyMetricUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: DailyMetricUpdateManyWithWhereWithoutBusinessInput | DailyMetricUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: DailyMetricScalarWhereInput | DailyMetricScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutUsersInput = {
    create?: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput
    connect?: BusinessWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashRegisterCreateNestedManyWithoutOpenedByInput = {
    create?: XOR<CashRegisterCreateWithoutOpenedByInput, CashRegisterUncheckedCreateWithoutOpenedByInput> | CashRegisterCreateWithoutOpenedByInput[] | CashRegisterUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutOpenedByInput | CashRegisterCreateOrConnectWithoutOpenedByInput[]
    createMany?: CashRegisterCreateManyOpenedByInputEnvelope
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
  }

  export type CashRegisterCreateNestedManyWithoutClosedByInput = {
    create?: XOR<CashRegisterCreateWithoutClosedByInput, CashRegisterUncheckedCreateWithoutClosedByInput> | CashRegisterCreateWithoutClosedByInput[] | CashRegisterUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutClosedByInput | CashRegisterCreateOrConnectWithoutClosedByInput[]
    createMany?: CashRegisterCreateManyClosedByInputEnvelope
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CashRegisterUncheckedCreateNestedManyWithoutOpenedByInput = {
    create?: XOR<CashRegisterCreateWithoutOpenedByInput, CashRegisterUncheckedCreateWithoutOpenedByInput> | CashRegisterCreateWithoutOpenedByInput[] | CashRegisterUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutOpenedByInput | CashRegisterCreateOrConnectWithoutOpenedByInput[]
    createMany?: CashRegisterCreateManyOpenedByInputEnvelope
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
  }

  export type CashRegisterUncheckedCreateNestedManyWithoutClosedByInput = {
    create?: XOR<CashRegisterCreateWithoutClosedByInput, CashRegisterUncheckedCreateWithoutClosedByInput> | CashRegisterCreateWithoutClosedByInput[] | CashRegisterUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutClosedByInput | CashRegisterCreateOrConnectWithoutClosedByInput[]
    createMany?: CashRegisterCreateManyClosedByInputEnvelope
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BusinessUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput
    upsert?: BusinessUpsertWithoutUsersInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUsersInput, BusinessUpdateWithoutUsersInput>, BusinessUncheckedUpdateWithoutUsersInput>
  }

  export type SaleUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashRegisterUpdateManyWithoutOpenedByNestedInput = {
    create?: XOR<CashRegisterCreateWithoutOpenedByInput, CashRegisterUncheckedCreateWithoutOpenedByInput> | CashRegisterCreateWithoutOpenedByInput[] | CashRegisterUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutOpenedByInput | CashRegisterCreateOrConnectWithoutOpenedByInput[]
    upsert?: CashRegisterUpsertWithWhereUniqueWithoutOpenedByInput | CashRegisterUpsertWithWhereUniqueWithoutOpenedByInput[]
    createMany?: CashRegisterCreateManyOpenedByInputEnvelope
    set?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    disconnect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    delete?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    update?: CashRegisterUpdateWithWhereUniqueWithoutOpenedByInput | CashRegisterUpdateWithWhereUniqueWithoutOpenedByInput[]
    updateMany?: CashRegisterUpdateManyWithWhereWithoutOpenedByInput | CashRegisterUpdateManyWithWhereWithoutOpenedByInput[]
    deleteMany?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
  }

  export type CashRegisterUpdateManyWithoutClosedByNestedInput = {
    create?: XOR<CashRegisterCreateWithoutClosedByInput, CashRegisterUncheckedCreateWithoutClosedByInput> | CashRegisterCreateWithoutClosedByInput[] | CashRegisterUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutClosedByInput | CashRegisterCreateOrConnectWithoutClosedByInput[]
    upsert?: CashRegisterUpsertWithWhereUniqueWithoutClosedByInput | CashRegisterUpsertWithWhereUniqueWithoutClosedByInput[]
    createMany?: CashRegisterCreateManyClosedByInputEnvelope
    set?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    disconnect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    delete?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    update?: CashRegisterUpdateWithWhereUniqueWithoutClosedByInput | CashRegisterUpdateWithWhereUniqueWithoutClosedByInput[]
    updateMany?: CashRegisterUpdateManyWithWhereWithoutClosedByInput | CashRegisterUpdateManyWithWhereWithoutClosedByInput[]
    deleteMany?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CashRegisterUncheckedUpdateManyWithoutOpenedByNestedInput = {
    create?: XOR<CashRegisterCreateWithoutOpenedByInput, CashRegisterUncheckedCreateWithoutOpenedByInput> | CashRegisterCreateWithoutOpenedByInput[] | CashRegisterUncheckedCreateWithoutOpenedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutOpenedByInput | CashRegisterCreateOrConnectWithoutOpenedByInput[]
    upsert?: CashRegisterUpsertWithWhereUniqueWithoutOpenedByInput | CashRegisterUpsertWithWhereUniqueWithoutOpenedByInput[]
    createMany?: CashRegisterCreateManyOpenedByInputEnvelope
    set?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    disconnect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    delete?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    update?: CashRegisterUpdateWithWhereUniqueWithoutOpenedByInput | CashRegisterUpdateWithWhereUniqueWithoutOpenedByInput[]
    updateMany?: CashRegisterUpdateManyWithWhereWithoutOpenedByInput | CashRegisterUpdateManyWithWhereWithoutOpenedByInput[]
    deleteMany?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
  }

  export type CashRegisterUncheckedUpdateManyWithoutClosedByNestedInput = {
    create?: XOR<CashRegisterCreateWithoutClosedByInput, CashRegisterUncheckedCreateWithoutClosedByInput> | CashRegisterCreateWithoutClosedByInput[] | CashRegisterUncheckedCreateWithoutClosedByInput[]
    connectOrCreate?: CashRegisterCreateOrConnectWithoutClosedByInput | CashRegisterCreateOrConnectWithoutClosedByInput[]
    upsert?: CashRegisterUpsertWithWhereUniqueWithoutClosedByInput | CashRegisterUpsertWithWhereUniqueWithoutClosedByInput[]
    createMany?: CashRegisterCreateManyClosedByInputEnvelope
    set?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    disconnect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    delete?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    connect?: CashRegisterWhereUniqueInput | CashRegisterWhereUniqueInput[]
    update?: CashRegisterUpdateWithWhereUniqueWithoutClosedByInput | CashRegisterUpdateWithWhereUniqueWithoutClosedByInput[]
    updateMany?: CashRegisterUpdateManyWithWhereWithoutClosedByInput | CashRegisterUpdateManyWithWhereWithoutClosedByInput[]
    deleteMany?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutProductsInput = {
    create?: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutProductsInput
    connect?: BusinessWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type DistributorOrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<DistributorOrderItemCreateWithoutProductInput, DistributorOrderItemUncheckedCreateWithoutProductInput> | DistributorOrderItemCreateWithoutProductInput[] | DistributorOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutProductInput | DistributorOrderItemCreateOrConnectWithoutProductInput[]
    createMany?: DistributorOrderItemCreateManyProductInputEnvelope
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
  }

  export type InventoryMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type DistributorOrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DistributorOrderItemCreateWithoutProductInput, DistributorOrderItemUncheckedCreateWithoutProductInput> | DistributorOrderItemCreateWithoutProductInput[] | DistributorOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutProductInput | DistributorOrderItemCreateOrConnectWithoutProductInput[]
    createMany?: DistributorOrderItemCreateManyProductInputEnvelope
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BusinessUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutProductsInput
    upsert?: BusinessUpsertWithoutProductsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutProductsInput, BusinessUpdateWithoutProductsInput>, BusinessUncheckedUpdateWithoutProductsInput>
  }

  export type SaleItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type DistributorOrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<DistributorOrderItemCreateWithoutProductInput, DistributorOrderItemUncheckedCreateWithoutProductInput> | DistributorOrderItemCreateWithoutProductInput[] | DistributorOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutProductInput | DistributorOrderItemCreateOrConnectWithoutProductInput[]
    upsert?: DistributorOrderItemUpsertWithWhereUniqueWithoutProductInput | DistributorOrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DistributorOrderItemCreateManyProductInputEnvelope
    set?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    disconnect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    delete?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    update?: DistributorOrderItemUpdateWithWhereUniqueWithoutProductInput | DistributorOrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DistributorOrderItemUpdateManyWithWhereWithoutProductInput | DistributorOrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DistributorOrderItemScalarWhereInput | DistributorOrderItemScalarWhereInput[]
  }

  export type InventoryMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutProductInput | InventoryMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutProductInput | InventoryMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutProductInput | InventoryMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type DistributorOrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DistributorOrderItemCreateWithoutProductInput, DistributorOrderItemUncheckedCreateWithoutProductInput> | DistributorOrderItemCreateWithoutProductInput[] | DistributorOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutProductInput | DistributorOrderItemCreateOrConnectWithoutProductInput[]
    upsert?: DistributorOrderItemUpsertWithWhereUniqueWithoutProductInput | DistributorOrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DistributorOrderItemCreateManyProductInputEnvelope
    set?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    disconnect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    delete?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    update?: DistributorOrderItemUpdateWithWhereUniqueWithoutProductInput | DistributorOrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DistributorOrderItemUpdateManyWithWhereWithoutProductInput | DistributorOrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DistributorOrderItemScalarWhereInput | DistributorOrderItemScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutProductInput | InventoryMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutProductInput | InventoryMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutProductInput | InventoryMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutSalesInput = {
    create?: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutSalesInput
    connect?: BusinessWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutSalesInput
    upsert?: BusinessUpsertWithoutSalesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutSalesInput, BusinessUpdateWithoutSalesInput>, BusinessUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SaleCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<SaleCreateWithoutSaleItemsInput, SaleUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutSaleItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<SaleCreateWithoutSaleItemsInput, SaleUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutSaleItemsInput
    upsert?: SaleUpsertWithoutSaleItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutSaleItemsInput, SaleUpdateWithoutSaleItemsInput>, SaleUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    upsert?: ProductUpsertWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleItemsInput, ProductUpdateWithoutSaleItemsInput>, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type BusinessCreateNestedOneWithoutDistributorsInput = {
    create?: XOR<BusinessCreateWithoutDistributorsInput, BusinessUncheckedCreateWithoutDistributorsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDistributorsInput
    connect?: BusinessWhereUniqueInput
  }

  export type DistributorOrderCreateNestedManyWithoutDistributorInput = {
    create?: XOR<DistributorOrderCreateWithoutDistributorInput, DistributorOrderUncheckedCreateWithoutDistributorInput> | DistributorOrderCreateWithoutDistributorInput[] | DistributorOrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutDistributorInput | DistributorOrderCreateOrConnectWithoutDistributorInput[]
    createMany?: DistributorOrderCreateManyDistributorInputEnvelope
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
  }

  export type DistributorOrderUncheckedCreateNestedManyWithoutDistributorInput = {
    create?: XOR<DistributorOrderCreateWithoutDistributorInput, DistributorOrderUncheckedCreateWithoutDistributorInput> | DistributorOrderCreateWithoutDistributorInput[] | DistributorOrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutDistributorInput | DistributorOrderCreateOrConnectWithoutDistributorInput[]
    createMany?: DistributorOrderCreateManyDistributorInputEnvelope
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutDistributorsNestedInput = {
    create?: XOR<BusinessCreateWithoutDistributorsInput, BusinessUncheckedCreateWithoutDistributorsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDistributorsInput
    upsert?: BusinessUpsertWithoutDistributorsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutDistributorsInput, BusinessUpdateWithoutDistributorsInput>, BusinessUncheckedUpdateWithoutDistributorsInput>
  }

  export type DistributorOrderUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<DistributorOrderCreateWithoutDistributorInput, DistributorOrderUncheckedCreateWithoutDistributorInput> | DistributorOrderCreateWithoutDistributorInput[] | DistributorOrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutDistributorInput | DistributorOrderCreateOrConnectWithoutDistributorInput[]
    upsert?: DistributorOrderUpsertWithWhereUniqueWithoutDistributorInput | DistributorOrderUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: DistributorOrderCreateManyDistributorInputEnvelope
    set?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    disconnect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    delete?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    update?: DistributorOrderUpdateWithWhereUniqueWithoutDistributorInput | DistributorOrderUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: DistributorOrderUpdateManyWithWhereWithoutDistributorInput | DistributorOrderUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: DistributorOrderScalarWhereInput | DistributorOrderScalarWhereInput[]
  }

  export type DistributorOrderUncheckedUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<DistributorOrderCreateWithoutDistributorInput, DistributorOrderUncheckedCreateWithoutDistributorInput> | DistributorOrderCreateWithoutDistributorInput[] | DistributorOrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutDistributorInput | DistributorOrderCreateOrConnectWithoutDistributorInput[]
    upsert?: DistributorOrderUpsertWithWhereUniqueWithoutDistributorInput | DistributorOrderUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: DistributorOrderCreateManyDistributorInputEnvelope
    set?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    disconnect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    delete?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    connect?: DistributorOrderWhereUniqueInput | DistributorOrderWhereUniqueInput[]
    update?: DistributorOrderUpdateWithWhereUniqueWithoutDistributorInput | DistributorOrderUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: DistributorOrderUpdateManyWithWhereWithoutDistributorInput | DistributorOrderUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: DistributorOrderScalarWhereInput | DistributorOrderScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutDistributorOrdersInput = {
    create?: XOR<BusinessCreateWithoutDistributorOrdersInput, BusinessUncheckedCreateWithoutDistributorOrdersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDistributorOrdersInput
    connect?: BusinessWhereUniqueInput
  }

  export type DistributorCreateNestedOneWithoutOrdersInput = {
    create?: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutOrdersInput
    connect?: DistributorWhereUniqueInput
  }

  export type DistributorOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<DistributorOrderItemCreateWithoutOrderInput, DistributorOrderItemUncheckedCreateWithoutOrderInput> | DistributorOrderItemCreateWithoutOrderInput[] | DistributorOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutOrderInput | DistributorOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: DistributorOrderItemCreateManyOrderInputEnvelope
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
  }

  export type DistributorOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<DistributorOrderItemCreateWithoutOrderInput, DistributorOrderItemUncheckedCreateWithoutOrderInput> | DistributorOrderItemCreateWithoutOrderInput[] | DistributorOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutOrderInput | DistributorOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: DistributorOrderItemCreateManyOrderInputEnvelope
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BusinessUpdateOneRequiredWithoutDistributorOrdersNestedInput = {
    create?: XOR<BusinessCreateWithoutDistributorOrdersInput, BusinessUncheckedCreateWithoutDistributorOrdersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDistributorOrdersInput
    upsert?: BusinessUpsertWithoutDistributorOrdersInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutDistributorOrdersInput, BusinessUpdateWithoutDistributorOrdersInput>, BusinessUncheckedUpdateWithoutDistributorOrdersInput>
  }

  export type DistributorUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutOrdersInput
    upsert?: DistributorUpsertWithoutOrdersInput
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutOrdersInput, DistributorUpdateWithoutOrdersInput>, DistributorUncheckedUpdateWithoutOrdersInput>
  }

  export type DistributorOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DistributorOrderItemCreateWithoutOrderInput, DistributorOrderItemUncheckedCreateWithoutOrderInput> | DistributorOrderItemCreateWithoutOrderInput[] | DistributorOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutOrderInput | DistributorOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: DistributorOrderItemUpsertWithWhereUniqueWithoutOrderInput | DistributorOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DistributorOrderItemCreateManyOrderInputEnvelope
    set?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    disconnect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    delete?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    update?: DistributorOrderItemUpdateWithWhereUniqueWithoutOrderInput | DistributorOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DistributorOrderItemUpdateManyWithWhereWithoutOrderInput | DistributorOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DistributorOrderItemScalarWhereInput | DistributorOrderItemScalarWhereInput[]
  }

  export type DistributorOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DistributorOrderItemCreateWithoutOrderInput, DistributorOrderItemUncheckedCreateWithoutOrderInput> | DistributorOrderItemCreateWithoutOrderInput[] | DistributorOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DistributorOrderItemCreateOrConnectWithoutOrderInput | DistributorOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: DistributorOrderItemUpsertWithWhereUniqueWithoutOrderInput | DistributorOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DistributorOrderItemCreateManyOrderInputEnvelope
    set?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    disconnect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    delete?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    connect?: DistributorOrderItemWhereUniqueInput | DistributorOrderItemWhereUniqueInput[]
    update?: DistributorOrderItemUpdateWithWhereUniqueWithoutOrderInput | DistributorOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DistributorOrderItemUpdateManyWithWhereWithoutOrderInput | DistributorOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DistributorOrderItemScalarWhereInput | DistributorOrderItemScalarWhereInput[]
  }

  export type DistributorOrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<DistributorOrderCreateWithoutOrderItemsInput, DistributorOrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutOrderItemsInput
    connect?: DistributorOrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type DistributorOrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<DistributorOrderCreateWithoutOrderItemsInput, DistributorOrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: DistributorOrderCreateOrConnectWithoutOrderItemsInput
    upsert?: DistributorOrderUpsertWithoutOrderItemsInput
    connect?: DistributorOrderWhereUniqueInput
    update?: XOR<XOR<DistributorOrderUpdateToOneWithWhereWithoutOrderItemsInput, DistributorOrderUpdateWithoutOrderItemsInput>, DistributorOrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BusinessCreateNestedOneWithoutInventoryMovementsInput = {
    create?: XOR<BusinessCreateWithoutInventoryMovementsInput, BusinessUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutInventoryMovementsInput
    connect?: BusinessWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInventoryMovementsInput = {
    create?: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutInventoryMovementsNestedInput = {
    create?: XOR<BusinessCreateWithoutInventoryMovementsInput, BusinessUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutInventoryMovementsInput
    upsert?: BusinessUpsertWithoutInventoryMovementsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutInventoryMovementsInput, BusinessUpdateWithoutInventoryMovementsInput>, BusinessUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoryMovementsInput
    upsert?: ProductUpsertWithoutInventoryMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoryMovementsInput, ProductUpdateWithoutInventoryMovementsInput>, ProductUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type BusinessCreateNestedOneWithoutCashRegistersInput = {
    create?: XOR<BusinessCreateWithoutCashRegistersInput, BusinessUncheckedCreateWithoutCashRegistersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCashRegistersInput
    connect?: BusinessWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOpenedCashInput = {
    create?: XOR<UserCreateWithoutOpenedCashInput, UserUncheckedCreateWithoutOpenedCashInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpenedCashInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClosedCashInput = {
    create?: XOR<UserCreateWithoutClosedCashInput, UserUncheckedCreateWithoutClosedCashInput>
    connectOrCreate?: UserCreateOrConnectWithoutClosedCashInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutCashRegisterInput = {
    create?: XOR<ExpenseCreateWithoutCashRegisterInput, ExpenseUncheckedCreateWithoutCashRegisterInput> | ExpenseCreateWithoutCashRegisterInput[] | ExpenseUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCashRegisterInput | ExpenseCreateOrConnectWithoutCashRegisterInput[]
    createMany?: ExpenseCreateManyCashRegisterInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCashRegisterInput = {
    create?: XOR<ExpenseCreateWithoutCashRegisterInput, ExpenseUncheckedCreateWithoutCashRegisterInput> | ExpenseCreateWithoutCashRegisterInput[] | ExpenseUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCashRegisterInput | ExpenseCreateOrConnectWithoutCashRegisterInput[]
    createMany?: ExpenseCreateManyCashRegisterInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BusinessUpdateOneRequiredWithoutCashRegistersNestedInput = {
    create?: XOR<BusinessCreateWithoutCashRegistersInput, BusinessUncheckedCreateWithoutCashRegistersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCashRegistersInput
    upsert?: BusinessUpsertWithoutCashRegistersInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutCashRegistersInput, BusinessUpdateWithoutCashRegistersInput>, BusinessUncheckedUpdateWithoutCashRegistersInput>
  }

  export type UserUpdateOneRequiredWithoutOpenedCashNestedInput = {
    create?: XOR<UserCreateWithoutOpenedCashInput, UserUncheckedCreateWithoutOpenedCashInput>
    connectOrCreate?: UserCreateOrConnectWithoutOpenedCashInput
    upsert?: UserUpsertWithoutOpenedCashInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOpenedCashInput, UserUpdateWithoutOpenedCashInput>, UserUncheckedUpdateWithoutOpenedCashInput>
  }

  export type UserUpdateOneWithoutClosedCashNestedInput = {
    create?: XOR<UserCreateWithoutClosedCashInput, UserUncheckedCreateWithoutClosedCashInput>
    connectOrCreate?: UserCreateOrConnectWithoutClosedCashInput
    upsert?: UserUpsertWithoutClosedCashInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClosedCashInput, UserUpdateWithoutClosedCashInput>, UserUncheckedUpdateWithoutClosedCashInput>
  }

  export type ExpenseUpdateManyWithoutCashRegisterNestedInput = {
    create?: XOR<ExpenseCreateWithoutCashRegisterInput, ExpenseUncheckedCreateWithoutCashRegisterInput> | ExpenseCreateWithoutCashRegisterInput[] | ExpenseUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCashRegisterInput | ExpenseCreateOrConnectWithoutCashRegisterInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCashRegisterInput | ExpenseUpsertWithWhereUniqueWithoutCashRegisterInput[]
    createMany?: ExpenseCreateManyCashRegisterInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCashRegisterInput | ExpenseUpdateWithWhereUniqueWithoutCashRegisterInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCashRegisterInput | ExpenseUpdateManyWithWhereWithoutCashRegisterInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCashRegisterNestedInput = {
    create?: XOR<ExpenseCreateWithoutCashRegisterInput, ExpenseUncheckedCreateWithoutCashRegisterInput> | ExpenseCreateWithoutCashRegisterInput[] | ExpenseUncheckedCreateWithoutCashRegisterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCashRegisterInput | ExpenseCreateOrConnectWithoutCashRegisterInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCashRegisterInput | ExpenseUpsertWithWhereUniqueWithoutCashRegisterInput[]
    createMany?: ExpenseCreateManyCashRegisterInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCashRegisterInput | ExpenseUpdateWithWhereUniqueWithoutCashRegisterInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCashRegisterInput | ExpenseUpdateManyWithWhereWithoutCashRegisterInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutExpensesInput = {
    create?: XOR<BusinessCreateWithoutExpensesInput, BusinessUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutExpensesInput
    connect?: BusinessWhereUniqueInput
  }

  export type CashRegisterCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CashRegisterCreateWithoutExpensesInput, CashRegisterUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CashRegisterCreateOrConnectWithoutExpensesInput
    connect?: CashRegisterWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<BusinessCreateWithoutExpensesInput, BusinessUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutExpensesInput
    upsert?: BusinessUpsertWithoutExpensesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutExpensesInput, BusinessUpdateWithoutExpensesInput>, BusinessUncheckedUpdateWithoutExpensesInput>
  }

  export type CashRegisterUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CashRegisterCreateWithoutExpensesInput, CashRegisterUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CashRegisterCreateOrConnectWithoutExpensesInput
    upsert?: CashRegisterUpsertWithoutExpensesInput
    connect?: CashRegisterWhereUniqueInput
    update?: XOR<XOR<CashRegisterUpdateToOneWithWhereWithoutExpensesInput, CashRegisterUpdateWithoutExpensesInput>, CashRegisterUncheckedUpdateWithoutExpensesInput>
  }

  export type BusinessCreateNestedOneWithoutDailyMetricsInput = {
    create?: XOR<BusinessCreateWithoutDailyMetricsInput, BusinessUncheckedCreateWithoutDailyMetricsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDailyMetricsInput
    connect?: BusinessWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUpdateOneRequiredWithoutDailyMetricsNestedInput = {
    create?: XOR<BusinessCreateWithoutDailyMetricsInput, BusinessUncheckedCreateWithoutDailyMetricsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutDailyMetricsInput
    upsert?: BusinessUpsertWithoutDailyMetricsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutDailyMetricsInput, BusinessUpdateWithoutDailyMetricsInput>, BusinessUncheckedUpdateWithoutDailyMetricsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutBusinessInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutUserInput
    openedCash?: CashRegisterCreateNestedManyWithoutOpenedByInput
    closedCash?: CashRegisterCreateNestedManyWithoutClosedByInput
  }

  export type UserUncheckedCreateWithoutBusinessInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    openedCash?: CashRegisterUncheckedCreateNestedManyWithoutOpenedByInput
    closedCash?: CashRegisterUncheckedCreateNestedManyWithoutClosedByInput
  }

  export type UserCreateOrConnectWithoutBusinessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserCreateManyBusinessInputEnvelope = {
    data: UserCreateManyBusinessInput | UserCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutBusinessInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBusinessInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput>
  }

  export type ProductCreateManyBusinessInputEnvelope = {
    data: ProductCreateManyBusinessInput | ProductCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutBusinessInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    saleItems?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutBusinessInput = {
    id?: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutBusinessInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput>
  }

  export type SaleCreateManyBusinessInputEnvelope = {
    data: SaleCreateManyBusinessInput | SaleCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type DistributorCreateWithoutBusinessInput = {
    id?: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    orders?: DistributorOrderCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutBusinessInput = {
    id?: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    orders?: DistributorOrderUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutBusinessInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutBusinessInput, DistributorUncheckedCreateWithoutBusinessInput>
  }

  export type DistributorCreateManyBusinessInputEnvelope = {
    data: DistributorCreateManyBusinessInput | DistributorCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type DistributorOrderCreateWithoutBusinessInput = {
    id?: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    distributor: DistributorCreateNestedOneWithoutOrdersInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutOrderInput
  }

  export type DistributorOrderUncheckedCreateWithoutBusinessInput = {
    id?: string
    distributorId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type DistributorOrderCreateOrConnectWithoutBusinessInput = {
    where: DistributorOrderWhereUniqueInput
    create: XOR<DistributorOrderCreateWithoutBusinessInput, DistributorOrderUncheckedCreateWithoutBusinessInput>
  }

  export type DistributorOrderCreateManyBusinessInputEnvelope = {
    data: DistributorOrderCreateManyBusinessInput | DistributorOrderCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type InventoryMovementCreateWithoutBusinessInput = {
    id?: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoryMovementsInput
  }

  export type InventoryMovementUncheckedCreateWithoutBusinessInput = {
    id?: string
    productId: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
  }

  export type InventoryMovementCreateOrConnectWithoutBusinessInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutBusinessInput, InventoryMovementUncheckedCreateWithoutBusinessInput>
  }

  export type InventoryMovementCreateManyBusinessInputEnvelope = {
    data: InventoryMovementCreateManyBusinessInput | InventoryMovementCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type CashRegisterCreateWithoutBusinessInput = {
    id?: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    openedBy: UserCreateNestedOneWithoutOpenedCashInput
    closedBy?: UserCreateNestedOneWithoutClosedCashInput
    expenses?: ExpenseCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateWithoutBusinessInput = {
    id?: string
    openedById: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterCreateOrConnectWithoutBusinessInput = {
    where: CashRegisterWhereUniqueInput
    create: XOR<CashRegisterCreateWithoutBusinessInput, CashRegisterUncheckedCreateWithoutBusinessInput>
  }

  export type CashRegisterCreateManyBusinessInputEnvelope = {
    data: CashRegisterCreateManyBusinessInput | CashRegisterCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutBusinessInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
    cashRegister: CashRegisterCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutBusinessInput = {
    id?: string
    cashRegisterId: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutBusinessInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutBusinessInput, ExpenseUncheckedCreateWithoutBusinessInput>
  }

  export type ExpenseCreateManyBusinessInputEnvelope = {
    data: ExpenseCreateManyBusinessInput | ExpenseCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type DailyMetricCreateWithoutBusinessInput = {
    id?: string
    date: Date | string
    totalSales: Decimal | DecimalJsLike | number | string
    totalOrders: number
    totalIncome: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DailyMetricUncheckedCreateWithoutBusinessInput = {
    id?: string
    date: Date | string
    totalSales: Decimal | DecimalJsLike | number | string
    totalOrders: number
    totalIncome: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DailyMetricCreateOrConnectWithoutBusinessInput = {
    where: DailyMetricWhereUniqueInput
    create: XOR<DailyMetricCreateWithoutBusinessInput, DailyMetricUncheckedCreateWithoutBusinessInput>
  }

  export type DailyMetricCreateManyBusinessInputEnvelope = {
    data: DailyMetricCreateManyBusinessInput | DailyMetricCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type UserUpdateManyWithWhereWithoutBusinessInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBusinessInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    businessId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBusinessInput, ProductUncheckedUpdateWithoutBusinessInput>
    create: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBusinessInput, ProductUncheckedUpdateWithoutBusinessInput>
  }

  export type ProductUpdateManyWithWhereWithoutBusinessInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    businessId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    pricePublic?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    unitType?: StringFilter<"Product"> | string
    stockQuantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"Product"> | boolean
    category?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutBusinessInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutBusinessInput, SaleUncheckedUpdateWithoutBusinessInput>
    create: XOR<SaleCreateWithoutBusinessInput, SaleUncheckedCreateWithoutBusinessInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutBusinessInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutBusinessInput, SaleUncheckedUpdateWithoutBusinessInput>
  }

  export type SaleUpdateManyWithWhereWithoutBusinessInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutBusinessInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    businessId?: StringFilter<"Sale"> | string
    userId?: StringFilter<"Sale"> | string
    totalAmount?: DecimalFilter<"Sale"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Sale"> | string
    createdAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type DistributorUpsertWithWhereUniqueWithoutBusinessInput = {
    where: DistributorWhereUniqueInput
    update: XOR<DistributorUpdateWithoutBusinessInput, DistributorUncheckedUpdateWithoutBusinessInput>
    create: XOR<DistributorCreateWithoutBusinessInput, DistributorUncheckedCreateWithoutBusinessInput>
  }

  export type DistributorUpdateWithWhereUniqueWithoutBusinessInput = {
    where: DistributorWhereUniqueInput
    data: XOR<DistributorUpdateWithoutBusinessInput, DistributorUncheckedUpdateWithoutBusinessInput>
  }

  export type DistributorUpdateManyWithWhereWithoutBusinessInput = {
    where: DistributorScalarWhereInput
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyWithoutBusinessInput>
  }

  export type DistributorScalarWhereInput = {
    AND?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
    OR?: DistributorScalarWhereInput[]
    NOT?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
    id?: StringFilter<"Distributor"> | string
    businessId?: StringFilter<"Distributor"> | string
    name?: StringFilter<"Distributor"> | string
    contactName?: StringNullableFilter<"Distributor"> | string | null
    phone?: StringNullableFilter<"Distributor"> | string | null
    email?: StringNullableFilter<"Distributor"> | string | null
    address?: StringNullableFilter<"Distributor"> | string | null
    creditLimit?: DecimalFilter<"Distributor"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"Distributor"> | boolean
    createdAt?: DateTimeFilter<"Distributor"> | Date | string
  }

  export type DistributorOrderUpsertWithWhereUniqueWithoutBusinessInput = {
    where: DistributorOrderWhereUniqueInput
    update: XOR<DistributorOrderUpdateWithoutBusinessInput, DistributorOrderUncheckedUpdateWithoutBusinessInput>
    create: XOR<DistributorOrderCreateWithoutBusinessInput, DistributorOrderUncheckedCreateWithoutBusinessInput>
  }

  export type DistributorOrderUpdateWithWhereUniqueWithoutBusinessInput = {
    where: DistributorOrderWhereUniqueInput
    data: XOR<DistributorOrderUpdateWithoutBusinessInput, DistributorOrderUncheckedUpdateWithoutBusinessInput>
  }

  export type DistributorOrderUpdateManyWithWhereWithoutBusinessInput = {
    where: DistributorOrderScalarWhereInput
    data: XOR<DistributorOrderUpdateManyMutationInput, DistributorOrderUncheckedUpdateManyWithoutBusinessInput>
  }

  export type DistributorOrderScalarWhereInput = {
    AND?: DistributorOrderScalarWhereInput | DistributorOrderScalarWhereInput[]
    OR?: DistributorOrderScalarWhereInput[]
    NOT?: DistributorOrderScalarWhereInput | DistributorOrderScalarWhereInput[]
    id?: StringFilter<"DistributorOrder"> | string
    businessId?: StringFilter<"DistributorOrder"> | string
    distributorId?: StringFilter<"DistributorOrder"> | string
    status?: EnumOrderStatusFilter<"DistributorOrder"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"DistributorOrder"> | boolean
    paymentMethod?: StringNullableFilter<"DistributorOrder"> | string | null
    totalAmount?: DecimalFilter<"DistributorOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DistributorOrder"> | Date | string
    deliveredAt?: DateTimeNullableFilter<"DistributorOrder"> | Date | string | null
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutBusinessInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutBusinessInput, InventoryMovementUncheckedUpdateWithoutBusinessInput>
    create: XOR<InventoryMovementCreateWithoutBusinessInput, InventoryMovementUncheckedCreateWithoutBusinessInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutBusinessInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutBusinessInput, InventoryMovementUncheckedUpdateWithoutBusinessInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutBusinessInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutBusinessInput>
  }

  export type InventoryMovementScalarWhereInput = {
    AND?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
    OR?: InventoryMovementScalarWhereInput[]
    NOT?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    businessId?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    movementType?: StringFilter<"InventoryMovement"> | string
    quantity?: DecimalFilter<"InventoryMovement"> | Decimal | DecimalJsLike | number | string
    referenceId?: StringNullableFilter<"InventoryMovement"> | string | null
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
  }

  export type CashRegisterUpsertWithWhereUniqueWithoutBusinessInput = {
    where: CashRegisterWhereUniqueInput
    update: XOR<CashRegisterUpdateWithoutBusinessInput, CashRegisterUncheckedUpdateWithoutBusinessInput>
    create: XOR<CashRegisterCreateWithoutBusinessInput, CashRegisterUncheckedCreateWithoutBusinessInput>
  }

  export type CashRegisterUpdateWithWhereUniqueWithoutBusinessInput = {
    where: CashRegisterWhereUniqueInput
    data: XOR<CashRegisterUpdateWithoutBusinessInput, CashRegisterUncheckedUpdateWithoutBusinessInput>
  }

  export type CashRegisterUpdateManyWithWhereWithoutBusinessInput = {
    where: CashRegisterScalarWhereInput
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyWithoutBusinessInput>
  }

  export type CashRegisterScalarWhereInput = {
    AND?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
    OR?: CashRegisterScalarWhereInput[]
    NOT?: CashRegisterScalarWhereInput | CashRegisterScalarWhereInput[]
    id?: StringFilter<"CashRegister"> | string
    businessId?: StringFilter<"CashRegister"> | string
    openedById?: StringFilter<"CashRegister"> | string
    closedById?: StringNullableFilter<"CashRegister"> | string | null
    openingAmount?: DecimalFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string
    closingAmount?: DecimalNullableFilter<"CashRegister"> | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFilter<"CashRegister"> | Date | string
    closedAt?: DateTimeNullableFilter<"CashRegister"> | Date | string | null
  }

  export type ExpenseUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutBusinessInput, ExpenseUncheckedUpdateWithoutBusinessInput>
    create: XOR<ExpenseCreateWithoutBusinessInput, ExpenseUncheckedCreateWithoutBusinessInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutBusinessInput, ExpenseUncheckedUpdateWithoutBusinessInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutBusinessInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    businessId?: StringFilter<"Expense"> | string
    cashRegisterId?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Expense"> | string
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type DailyMetricUpsertWithWhereUniqueWithoutBusinessInput = {
    where: DailyMetricWhereUniqueInput
    update: XOR<DailyMetricUpdateWithoutBusinessInput, DailyMetricUncheckedUpdateWithoutBusinessInput>
    create: XOR<DailyMetricCreateWithoutBusinessInput, DailyMetricUncheckedCreateWithoutBusinessInput>
  }

  export type DailyMetricUpdateWithWhereUniqueWithoutBusinessInput = {
    where: DailyMetricWhereUniqueInput
    data: XOR<DailyMetricUpdateWithoutBusinessInput, DailyMetricUncheckedUpdateWithoutBusinessInput>
  }

  export type DailyMetricUpdateManyWithWhereWithoutBusinessInput = {
    where: DailyMetricScalarWhereInput
    data: XOR<DailyMetricUpdateManyMutationInput, DailyMetricUncheckedUpdateManyWithoutBusinessInput>
  }

  export type DailyMetricScalarWhereInput = {
    AND?: DailyMetricScalarWhereInput | DailyMetricScalarWhereInput[]
    OR?: DailyMetricScalarWhereInput[]
    NOT?: DailyMetricScalarWhereInput | DailyMetricScalarWhereInput[]
    id?: StringFilter<"DailyMetric"> | string
    businessId?: StringFilter<"DailyMetric"> | string
    date?: DateTimeFilter<"DailyMetric"> | Date | string
    totalSales?: DecimalFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFilter<"DailyMetric"> | number
    totalIncome?: DecimalFilter<"DailyMetric"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DailyMetric"> | Date | string
  }

  export type BusinessCreateWithoutUsersInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUsersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
  }

  export type SaleCreateWithoutUserInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutSalesInput
    saleItems?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutUserInput = {
    id?: string
    businessId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleCreateManyUserInputEnvelope = {
    data: SaleCreateManyUserInput | SaleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CashRegisterCreateWithoutOpenedByInput = {
    id?: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutCashRegistersInput
    closedBy?: UserCreateNestedOneWithoutClosedCashInput
    expenses?: ExpenseCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateWithoutOpenedByInput = {
    id?: string
    businessId: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterCreateOrConnectWithoutOpenedByInput = {
    where: CashRegisterWhereUniqueInput
    create: XOR<CashRegisterCreateWithoutOpenedByInput, CashRegisterUncheckedCreateWithoutOpenedByInput>
  }

  export type CashRegisterCreateManyOpenedByInputEnvelope = {
    data: CashRegisterCreateManyOpenedByInput | CashRegisterCreateManyOpenedByInput[]
    skipDuplicates?: boolean
  }

  export type CashRegisterCreateWithoutClosedByInput = {
    id?: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutCashRegistersInput
    openedBy: UserCreateNestedOneWithoutOpenedCashInput
    expenses?: ExpenseCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterUncheckedCreateWithoutClosedByInput = {
    id?: string
    businessId: string
    openedById: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCashRegisterInput
  }

  export type CashRegisterCreateOrConnectWithoutClosedByInput = {
    where: CashRegisterWhereUniqueInput
    create: XOR<CashRegisterCreateWithoutClosedByInput, CashRegisterUncheckedCreateWithoutClosedByInput>
  }

  export type CashRegisterCreateManyClosedByInputEnvelope = {
    data: CashRegisterCreateManyClosedByInput | CashRegisterCreateManyClosedByInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutUsersInput = {
    update: XOR<BusinessUpdateWithoutUsersInput, BusinessUncheckedUpdateWithoutUsersInput>
    create: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutUsersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutUsersInput, BusinessUncheckedUpdateWithoutUsersInput>
  }

  export type BusinessUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutUserInput>
  }

  export type CashRegisterUpsertWithWhereUniqueWithoutOpenedByInput = {
    where: CashRegisterWhereUniqueInput
    update: XOR<CashRegisterUpdateWithoutOpenedByInput, CashRegisterUncheckedUpdateWithoutOpenedByInput>
    create: XOR<CashRegisterCreateWithoutOpenedByInput, CashRegisterUncheckedCreateWithoutOpenedByInput>
  }

  export type CashRegisterUpdateWithWhereUniqueWithoutOpenedByInput = {
    where: CashRegisterWhereUniqueInput
    data: XOR<CashRegisterUpdateWithoutOpenedByInput, CashRegisterUncheckedUpdateWithoutOpenedByInput>
  }

  export type CashRegisterUpdateManyWithWhereWithoutOpenedByInput = {
    where: CashRegisterScalarWhereInput
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyWithoutOpenedByInput>
  }

  export type CashRegisterUpsertWithWhereUniqueWithoutClosedByInput = {
    where: CashRegisterWhereUniqueInput
    update: XOR<CashRegisterUpdateWithoutClosedByInput, CashRegisterUncheckedUpdateWithoutClosedByInput>
    create: XOR<CashRegisterCreateWithoutClosedByInput, CashRegisterUncheckedCreateWithoutClosedByInput>
  }

  export type CashRegisterUpdateWithWhereUniqueWithoutClosedByInput = {
    where: CashRegisterWhereUniqueInput
    data: XOR<CashRegisterUpdateWithoutClosedByInput, CashRegisterUncheckedUpdateWithoutClosedByInput>
  }

  export type CashRegisterUpdateManyWithWhereWithoutClosedByInput = {
    where: CashRegisterScalarWhereInput
    data: XOR<CashRegisterUpdateManyMutationInput, CashRegisterUncheckedUpdateManyWithoutClosedByInput>
  }

  export type BusinessCreateWithoutProductsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutProductsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
  }

  export type SaleItemCreateWithoutProductInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    sale: SaleCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutProductInput = {
    id?: string
    saleId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemCreateManyProductInputEnvelope = {
    data: SaleItemCreateManyProductInput | SaleItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DistributorOrderItemCreateWithoutProductInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    order: DistributorOrderCreateNestedOneWithoutOrderItemsInput
  }

  export type DistributorOrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemCreateOrConnectWithoutProductInput = {
    where: DistributorOrderItemWhereUniqueInput
    create: XOR<DistributorOrderItemCreateWithoutProductInput, DistributorOrderItemUncheckedCreateWithoutProductInput>
  }

  export type DistributorOrderItemCreateManyProductInputEnvelope = {
    data: DistributorOrderItemCreateManyProductInput | DistributorOrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryMovementCreateWithoutProductInput = {
    id?: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutInventoryMovementsInput
  }

  export type InventoryMovementUncheckedCreateWithoutProductInput = {
    id?: string
    businessId: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
  }

  export type InventoryMovementCreateOrConnectWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput>
  }

  export type InventoryMovementCreateManyProductInputEnvelope = {
    data: InventoryMovementCreateManyProductInput | InventoryMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutProductsInput = {
    update: XOR<BusinessUpdateWithoutProductsInput, BusinessUncheckedUpdateWithoutProductsInput>
    create: XOR<BusinessCreateWithoutProductsInput, BusinessUncheckedCreateWithoutProductsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutProductsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutProductsInput, BusinessUncheckedUpdateWithoutProductsInput>
  }

  export type BusinessUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutProductInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    productId?: StringFilter<"SaleItem"> | string
    quantity?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"SaleItem"> | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: DistributorOrderItemWhereUniqueInput
    update: XOR<DistributorOrderItemUpdateWithoutProductInput, DistributorOrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<DistributorOrderItemCreateWithoutProductInput, DistributorOrderItemUncheckedCreateWithoutProductInput>
  }

  export type DistributorOrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: DistributorOrderItemWhereUniqueInput
    data: XOR<DistributorOrderItemUpdateWithoutProductInput, DistributorOrderItemUncheckedUpdateWithoutProductInput>
  }

  export type DistributorOrderItemUpdateManyWithWhereWithoutProductInput = {
    where: DistributorOrderItemScalarWhereInput
    data: XOR<DistributorOrderItemUpdateManyMutationInput, DistributorOrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type DistributorOrderItemScalarWhereInput = {
    AND?: DistributorOrderItemScalarWhereInput | DistributorOrderItemScalarWhereInput[]
    OR?: DistributorOrderItemScalarWhereInput[]
    NOT?: DistributorOrderItemScalarWhereInput | DistributorOrderItemScalarWhereInput[]
    id?: StringFilter<"DistributorOrderItem"> | string
    orderId?: StringFilter<"DistributorOrderItem"> | string
    productId?: StringFilter<"DistributorOrderItem"> | string
    quantity?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"DistributorOrderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutProductInput, InventoryMovementUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutProductInput, InventoryMovementUncheckedUpdateWithoutProductInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutProductInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type BusinessCreateWithoutSalesInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutSalesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
  }

  export type UserCreateWithoutSalesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutUsersInput
    openedCash?: CashRegisterCreateNestedManyWithoutOpenedByInput
    closedCash?: CashRegisterCreateNestedManyWithoutClosedByInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: string
    businessId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    openedCash?: CashRegisterUncheckedCreateNestedManyWithoutOpenedByInput
    closedCash?: CashRegisterUncheckedCreateNestedManyWithoutClosedByInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutSalesInput = {
    update: XOR<BusinessUpdateWithoutSalesInput, BusinessUncheckedUpdateWithoutSalesInput>
    create: XOR<BusinessCreateWithoutSalesInput, BusinessUncheckedCreateWithoutSalesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutSalesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutSalesInput, BusinessUncheckedUpdateWithoutSalesInput>
  }

  export type BusinessUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    openedCash?: CashRegisterUpdateManyWithoutOpenedByNestedInput
    closedCash?: CashRegisterUpdateManyWithoutClosedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    openedCash?: CashRegisterUncheckedUpdateManyWithoutOpenedByNestedInput
    closedCash?: CashRegisterUncheckedUpdateManyWithoutClosedByNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleCreateWithoutSaleItemsInput = {
    id?: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutSalesInput
    user: UserCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutSaleItemsInput = {
    id?: string
    businessId: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutSaleItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutSaleItemsInput, SaleUncheckedCreateWithoutSaleItemsInput>
  }

  export type ProductCreateWithoutSaleItemsInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductsInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleItemsInput = {
    id?: string
    businessId: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
  }

  export type SaleUpsertWithoutSaleItemsInput = {
    update: XOR<SaleUpdateWithoutSaleItemsInput, SaleUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<SaleCreateWithoutSaleItemsInput, SaleUncheckedCreateWithoutSaleItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutSaleItemsInput, SaleUncheckedUpdateWithoutSaleItemsInput>
  }

  export type SaleUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutSalesNestedInput
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutSaleItemsInput = {
    update: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BusinessCreateWithoutDistributorsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutDistributorsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutDistributorsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutDistributorsInput, BusinessUncheckedCreateWithoutDistributorsInput>
  }

  export type DistributorOrderCreateWithoutDistributorInput = {
    id?: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutDistributorOrdersInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutOrderInput
  }

  export type DistributorOrderUncheckedCreateWithoutDistributorInput = {
    id?: string
    businessId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type DistributorOrderCreateOrConnectWithoutDistributorInput = {
    where: DistributorOrderWhereUniqueInput
    create: XOR<DistributorOrderCreateWithoutDistributorInput, DistributorOrderUncheckedCreateWithoutDistributorInput>
  }

  export type DistributorOrderCreateManyDistributorInputEnvelope = {
    data: DistributorOrderCreateManyDistributorInput | DistributorOrderCreateManyDistributorInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutDistributorsInput = {
    update: XOR<BusinessUpdateWithoutDistributorsInput, BusinessUncheckedUpdateWithoutDistributorsInput>
    create: XOR<BusinessCreateWithoutDistributorsInput, BusinessUncheckedCreateWithoutDistributorsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutDistributorsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutDistributorsInput, BusinessUncheckedUpdateWithoutDistributorsInput>
  }

  export type BusinessUpdateWithoutDistributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutDistributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type DistributorOrderUpsertWithWhereUniqueWithoutDistributorInput = {
    where: DistributorOrderWhereUniqueInput
    update: XOR<DistributorOrderUpdateWithoutDistributorInput, DistributorOrderUncheckedUpdateWithoutDistributorInput>
    create: XOR<DistributorOrderCreateWithoutDistributorInput, DistributorOrderUncheckedCreateWithoutDistributorInput>
  }

  export type DistributorOrderUpdateWithWhereUniqueWithoutDistributorInput = {
    where: DistributorOrderWhereUniqueInput
    data: XOR<DistributorOrderUpdateWithoutDistributorInput, DistributorOrderUncheckedUpdateWithoutDistributorInput>
  }

  export type DistributorOrderUpdateManyWithWhereWithoutDistributorInput = {
    where: DistributorOrderScalarWhereInput
    data: XOR<DistributorOrderUpdateManyMutationInput, DistributorOrderUncheckedUpdateManyWithoutDistributorInput>
  }

  export type BusinessCreateWithoutDistributorOrdersInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutDistributorOrdersInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutDistributorOrdersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutDistributorOrdersInput, BusinessUncheckedCreateWithoutDistributorOrdersInput>
  }

  export type DistributorCreateWithoutOrdersInput = {
    id?: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutDistributorsInput
  }

  export type DistributorUncheckedCreateWithoutOrdersInput = {
    id?: string
    businessId: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
  }

  export type DistributorCreateOrConnectWithoutOrdersInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
  }

  export type DistributorOrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type DistributorOrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemCreateOrConnectWithoutOrderInput = {
    where: DistributorOrderItemWhereUniqueInput
    create: XOR<DistributorOrderItemCreateWithoutOrderInput, DistributorOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type DistributorOrderItemCreateManyOrderInputEnvelope = {
    data: DistributorOrderItemCreateManyOrderInput | DistributorOrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutDistributorOrdersInput = {
    update: XOR<BusinessUpdateWithoutDistributorOrdersInput, BusinessUncheckedUpdateWithoutDistributorOrdersInput>
    create: XOR<BusinessCreateWithoutDistributorOrdersInput, BusinessUncheckedCreateWithoutDistributorOrdersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutDistributorOrdersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutDistributorOrdersInput, BusinessUncheckedUpdateWithoutDistributorOrdersInput>
  }

  export type BusinessUpdateWithoutDistributorOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutDistributorOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type DistributorUpsertWithoutOrdersInput = {
    update: XOR<DistributorUpdateWithoutOrdersInput, DistributorUncheckedUpdateWithoutOrdersInput>
    create: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
    where?: DistributorWhereInput
  }

  export type DistributorUpdateToOneWithWhereWithoutOrdersInput = {
    where?: DistributorWhereInput
    data: XOR<DistributorUpdateWithoutOrdersInput, DistributorUncheckedUpdateWithoutOrdersInput>
  }

  export type DistributorUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutDistributorsNestedInput
  }

  export type DistributorUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: DistributorOrderItemWhereUniqueInput
    update: XOR<DistributorOrderItemUpdateWithoutOrderInput, DistributorOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<DistributorOrderItemCreateWithoutOrderInput, DistributorOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type DistributorOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: DistributorOrderItemWhereUniqueInput
    data: XOR<DistributorOrderItemUpdateWithoutOrderInput, DistributorOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type DistributorOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: DistributorOrderItemScalarWhereInput
    data: XOR<DistributorOrderItemUpdateManyMutationInput, DistributorOrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type DistributorOrderCreateWithoutOrderItemsInput = {
    id?: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutDistributorOrdersInput
    distributor: DistributorCreateNestedOneWithoutOrdersInput
  }

  export type DistributorOrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    businessId: string
    distributorId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
  }

  export type DistributorOrderCreateOrConnectWithoutOrderItemsInput = {
    where: DistributorOrderWhereUniqueInput
    create: XOR<DistributorOrderCreateWithoutOrderItemsInput, DistributorOrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductsInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    businessId: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type DistributorOrderUpsertWithoutOrderItemsInput = {
    update: XOR<DistributorOrderUpdateWithoutOrderItemsInput, DistributorOrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<DistributorOrderCreateWithoutOrderItemsInput, DistributorOrderUncheckedCreateWithoutOrderItemsInput>
    where?: DistributorOrderWhereInput
  }

  export type DistributorOrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: DistributorOrderWhereInput
    data: XOR<DistributorOrderUpdateWithoutOrderItemsInput, DistributorOrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type DistributorOrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutDistributorOrdersNestedInput
    distributor?: DistributorUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type DistributorOrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductsNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BusinessCreateWithoutInventoryMovementsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutInventoryMovementsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutInventoryMovementsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutInventoryMovementsInput, BusinessUncheckedCreateWithoutInventoryMovementsInput>
  }

  export type ProductCreateWithoutInventoryMovementsInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductsInput
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    orderItems?: DistributorOrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoryMovementsInput = {
    id?: string
    businessId: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    orderItems?: DistributorOrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoryMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
  }

  export type BusinessUpsertWithoutInventoryMovementsInput = {
    update: XOR<BusinessUpdateWithoutInventoryMovementsInput, BusinessUncheckedUpdateWithoutInventoryMovementsInput>
    create: XOR<BusinessCreateWithoutInventoryMovementsInput, BusinessUncheckedCreateWithoutInventoryMovementsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutInventoryMovementsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutInventoryMovementsInput, BusinessUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type BusinessUpdateWithoutInventoryMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutInventoryMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type ProductUpsertWithoutInventoryMovementsInput = {
    update: XOR<ProductUpdateWithoutInventoryMovementsInput, ProductUncheckedUpdateWithoutInventoryMovementsInput>
    create: XOR<ProductCreateWithoutInventoryMovementsInput, ProductUncheckedCreateWithoutInventoryMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoryMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoryMovementsInput, ProductUncheckedUpdateWithoutInventoryMovementsInput>
  }

  export type ProductUpdateWithoutInventoryMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductsNestedInput
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoryMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BusinessCreateWithoutCashRegistersInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCashRegistersInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCashRegistersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCashRegistersInput, BusinessUncheckedCreateWithoutCashRegistersInput>
  }

  export type UserCreateWithoutOpenedCashInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutUsersInput
    sales?: SaleCreateNestedManyWithoutUserInput
    closedCash?: CashRegisterCreateNestedManyWithoutClosedByInput
  }

  export type UserUncheckedCreateWithoutOpenedCashInput = {
    id?: string
    businessId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    closedCash?: CashRegisterUncheckedCreateNestedManyWithoutClosedByInput
  }

  export type UserCreateOrConnectWithoutOpenedCashInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOpenedCashInput, UserUncheckedCreateWithoutOpenedCashInput>
  }

  export type UserCreateWithoutClosedCashInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutUsersInput
    sales?: SaleCreateNestedManyWithoutUserInput
    openedCash?: CashRegisterCreateNestedManyWithoutOpenedByInput
  }

  export type UserUncheckedCreateWithoutClosedCashInput = {
    id?: string
    businessId: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
    openedCash?: CashRegisterUncheckedCreateNestedManyWithoutOpenedByInput
  }

  export type UserCreateOrConnectWithoutClosedCashInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClosedCashInput, UserUncheckedCreateWithoutClosedCashInput>
  }

  export type ExpenseCreateWithoutCashRegisterInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutCashRegisterInput = {
    id?: string
    businessId: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutCashRegisterInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCashRegisterInput, ExpenseUncheckedCreateWithoutCashRegisterInput>
  }

  export type ExpenseCreateManyCashRegisterInputEnvelope = {
    data: ExpenseCreateManyCashRegisterInput | ExpenseCreateManyCashRegisterInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutCashRegistersInput = {
    update: XOR<BusinessUpdateWithoutCashRegistersInput, BusinessUncheckedUpdateWithoutCashRegistersInput>
    create: XOR<BusinessCreateWithoutCashRegistersInput, BusinessUncheckedCreateWithoutCashRegistersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutCashRegistersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutCashRegistersInput, BusinessUncheckedUpdateWithoutCashRegistersInput>
  }

  export type BusinessUpdateWithoutCashRegistersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCashRegistersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserUpsertWithoutOpenedCashInput = {
    update: XOR<UserUpdateWithoutOpenedCashInput, UserUncheckedUpdateWithoutOpenedCashInput>
    create: XOR<UserCreateWithoutOpenedCashInput, UserUncheckedCreateWithoutOpenedCashInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOpenedCashInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOpenedCashInput, UserUncheckedUpdateWithoutOpenedCashInput>
  }

  export type UserUpdateWithoutOpenedCashInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
    closedCash?: CashRegisterUpdateManyWithoutClosedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOpenedCashInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    closedCash?: CashRegisterUncheckedUpdateManyWithoutClosedByNestedInput
  }

  export type UserUpsertWithoutClosedCashInput = {
    update: XOR<UserUpdateWithoutClosedCashInput, UserUncheckedUpdateWithoutClosedCashInput>
    create: XOR<UserCreateWithoutClosedCashInput, UserUncheckedCreateWithoutClosedCashInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClosedCashInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClosedCashInput, UserUncheckedUpdateWithoutClosedCashInput>
  }

  export type UserUpdateWithoutClosedCashInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    sales?: SaleUpdateManyWithoutUserNestedInput
    openedCash?: CashRegisterUpdateManyWithoutOpenedByNestedInput
  }

  export type UserUncheckedUpdateWithoutClosedCashInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    openedCash?: CashRegisterUncheckedUpdateManyWithoutOpenedByNestedInput
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCashRegisterInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCashRegisterInput, ExpenseUncheckedUpdateWithoutCashRegisterInput>
    create: XOR<ExpenseCreateWithoutCashRegisterInput, ExpenseUncheckedCreateWithoutCashRegisterInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCashRegisterInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCashRegisterInput, ExpenseUncheckedUpdateWithoutCashRegisterInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCashRegisterInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCashRegisterInput>
  }

  export type BusinessCreateWithoutExpensesInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    dailyMetrics?: DailyMetricUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutExpensesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutExpensesInput, BusinessUncheckedCreateWithoutExpensesInput>
  }

  export type CashRegisterCreateWithoutExpensesInput = {
    id?: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
    business: BusinessCreateNestedOneWithoutCashRegistersInput
    openedBy: UserCreateNestedOneWithoutOpenedCashInput
    closedBy?: UserCreateNestedOneWithoutClosedCashInput
  }

  export type CashRegisterUncheckedCreateWithoutExpensesInput = {
    id?: string
    businessId: string
    openedById: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type CashRegisterCreateOrConnectWithoutExpensesInput = {
    where: CashRegisterWhereUniqueInput
    create: XOR<CashRegisterCreateWithoutExpensesInput, CashRegisterUncheckedCreateWithoutExpensesInput>
  }

  export type BusinessUpsertWithoutExpensesInput = {
    update: XOR<BusinessUpdateWithoutExpensesInput, BusinessUncheckedUpdateWithoutExpensesInput>
    create: XOR<BusinessCreateWithoutExpensesInput, BusinessUncheckedCreateWithoutExpensesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutExpensesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutExpensesInput, BusinessUncheckedUpdateWithoutExpensesInput>
  }

  export type BusinessUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    dailyMetrics?: DailyMetricUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type CashRegisterUpsertWithoutExpensesInput = {
    update: XOR<CashRegisterUpdateWithoutExpensesInput, CashRegisterUncheckedUpdateWithoutExpensesInput>
    create: XOR<CashRegisterCreateWithoutExpensesInput, CashRegisterUncheckedCreateWithoutExpensesInput>
    where?: CashRegisterWhereInput
  }

  export type CashRegisterUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CashRegisterWhereInput
    data: XOR<CashRegisterUpdateWithoutExpensesInput, CashRegisterUncheckedUpdateWithoutExpensesInput>
  }

  export type CashRegisterUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutCashRegistersNestedInput
    openedBy?: UserUpdateOneRequiredWithoutOpenedCashNestedInput
    closedBy?: UserUpdateOneWithoutClosedCashNestedInput
  }

  export type CashRegisterUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessCreateWithoutDailyMetricsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    products?: ProductCreateNestedManyWithoutBusinessInput
    sales?: SaleCreateNestedManyWithoutBusinessInput
    distributors?: DistributorCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutDailyMetricsInput = {
    id?: string
    name: string
    logoUrl?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    products?: ProductUncheckedCreateNestedManyWithoutBusinessInput
    sales?: SaleUncheckedCreateNestedManyWithoutBusinessInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutBusinessInput
    distributorOrders?: DistributorOrderUncheckedCreateNestedManyWithoutBusinessInput
    inventoryMovements?: InventoryMovementUncheckedCreateNestedManyWithoutBusinessInput
    cashRegisters?: CashRegisterUncheckedCreateNestedManyWithoutBusinessInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutDailyMetricsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutDailyMetricsInput, BusinessUncheckedCreateWithoutDailyMetricsInput>
  }

  export type BusinessUpsertWithoutDailyMetricsInput = {
    update: XOR<BusinessUpdateWithoutDailyMetricsInput, BusinessUncheckedUpdateWithoutDailyMetricsInput>
    create: XOR<BusinessCreateWithoutDailyMetricsInput, BusinessUncheckedCreateWithoutDailyMetricsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutDailyMetricsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutDailyMetricsInput, BusinessUncheckedUpdateWithoutDailyMetricsInput>
  }

  export type BusinessUpdateWithoutDailyMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    products?: ProductUpdateManyWithoutBusinessNestedInput
    sales?: SaleUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutDailyMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    products?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
    sales?: SaleUncheckedUpdateManyWithoutBusinessNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutBusinessNestedInput
    distributorOrders?: DistributorOrderUncheckedUpdateManyWithoutBusinessNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutBusinessNestedInput
    cashRegisters?: CashRegisterUncheckedUpdateManyWithoutBusinessNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserCreateManyBusinessInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    active?: boolean
    createdAt?: Date | string
  }

  export type ProductCreateManyBusinessInput = {
    id?: string
    name: string
    description?: string | null
    pricePublic: Decimal | DecimalJsLike | number | string
    priceDistributor: Decimal | DecimalJsLike | number | string
    unitType: string
    stockQuantity: Decimal | DecimalJsLike | number | string
    minimumStockAlert: Decimal | DecimalJsLike | number | string
    active?: boolean
    category?: string | null
    createdAt?: Date | string
  }

  export type SaleCreateManyBusinessInput = {
    id?: string
    userId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
  }

  export type DistributorCreateManyBusinessInput = {
    id?: string
    name: string
    contactName?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    creditLimit?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
  }

  export type DistributorOrderCreateManyBusinessInput = {
    id?: string
    distributorId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
  }

  export type InventoryMovementCreateManyBusinessInput = {
    id?: string
    productId: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
  }

  export type CashRegisterCreateManyBusinessInput = {
    id?: string
    openedById: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type ExpenseCreateManyBusinessInput = {
    id?: string
    cashRegisterId: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
  }

  export type DailyMetricCreateManyBusinessInput = {
    id?: string
    date: Date | string
    totalSales: Decimal | DecimalJsLike | number | string
    totalOrders: number
    totalIncome: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutUserNestedInput
    openedCash?: CashRegisterUpdateManyWithoutOpenedByNestedInput
    closedCash?: CashRegisterUpdateManyWithoutClosedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
    openedCash?: CashRegisterUncheckedUpdateManyWithoutOpenedByNestedInput
    closedCash?: CashRegisterUncheckedUpdateManyWithoutClosedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutProductNestedInput
    inventoryMovements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pricePublic?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceDistributor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitType?: StringFieldUpdateOperationsInput | string
    stockQuantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumStockAlert?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    saleItems?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: DistributorOrderUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: DistributorOrderUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    creditLimit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorOrderUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distributor?: DistributorUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type DistributorOrderUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type DistributorOrderUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryMovementUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoryMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashRegisterUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedBy?: UserUpdateOneRequiredWithoutOpenedCashNestedInput
    closedBy?: UserUpdateOneWithoutClosedCashNestedInput
    expenses?: ExpenseUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExpenseUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cashRegister?: CashRegisterUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashRegisterId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    cashRegisterId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyMetricUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOrders?: IntFieldUpdateOperationsInput | number
    totalIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyUserInput = {
    id?: string
    businessId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    createdAt?: Date | string
  }

  export type CashRegisterCreateManyOpenedByInput = {
    id?: string
    businessId: string
    closedById?: string | null
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type CashRegisterCreateManyClosedByInput = {
    id?: string
    businessId: string
    openedById: string
    openingAmount: Decimal | DecimalJsLike | number | string
    closingAmount?: Decimal | DecimalJsLike | number | string | null
    openedAt?: Date | string
    closedAt?: Date | string | null
  }

  export type SaleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutSalesNestedInput
    saleItems?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashRegisterUpdateWithoutOpenedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutCashRegistersNestedInput
    closedBy?: UserUpdateOneWithoutClosedCashNestedInput
    expenses?: ExpenseUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateWithoutOpenedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateManyWithoutOpenedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    closedById?: NullableStringFieldUpdateOperationsInput | string | null
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CashRegisterUpdateWithoutClosedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutCashRegistersNestedInput
    openedBy?: UserUpdateOneRequiredWithoutOpenedCashNestedInput
    expenses?: ExpenseUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateWithoutClosedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutCashRegisterNestedInput
  }

  export type CashRegisterUncheckedUpdateManyWithoutClosedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    openedById?: StringFieldUpdateOperationsInput | string
    openingAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleItemCreateManyProductInput = {
    id?: string
    saleId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type InventoryMovementCreateManyProductInput = {
    id?: string
    businessId: string
    movementType: string
    quantity: Decimal | DecimalJsLike | number | string
    referenceId?: string | null
    createdAt?: Date | string
  }

  export type SaleItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SaleUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: DistributorOrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type DistributorOrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InventoryMovementUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutInventoryMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    movementType?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderCreateManyDistributorInput = {
    id?: string
    businessId: string
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paymentMethod?: string | null
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    deliveredAt?: Date | string | null
  }

  export type DistributorOrderUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutDistributorOrdersNestedInput
    orderItems?: DistributorOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type DistributorOrderUncheckedUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItems?: DistributorOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type DistributorOrderUncheckedUpdateManyWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DistributorOrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    unitPrice: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type DistributorOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DistributorOrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseCreateManyCashRegisterInput = {
    id?: string
    businessId: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    createdAt?: Date | string
  }

  export type ExpenseUpdateWithoutCashRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCashRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutCashRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}