
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string
  email: string
  passwordHash: string
  role: Role
  address: string
  phone: string
  isRadiography: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

/**
 * Model Subscription
 * 
 */
export type Subscription = {
  id: string
  userId: string
  status: SubscriptionStatus
  plan: SubscriptionPlan
  startedAt: Date | null
  endedAt: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Patient
 * 
 */
export type Patient = {
  id: string
  name: string
  email: string
  birthDate: Date
  cpf: string
  address: string
  phone: string
  notes: string | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
  createdById: string | null
}

/**
 * Model RadiographyRequest
 * 
 */
export type RadiographyRequest = {
  id: string
  patientId: string
  requestedById: string
  assignedToId: string | null
  status: RequestStatus
  modality: string | null
  priority: number | null
  description: string | null
  scheduledAt: Date | null
  createdAt: Date
  updatedAt: Date
  cancelledAt: Date | null
  completedAt: Date | null
}

/**
 * Model Radiography
 * 
 */
export type Radiography = {
  id: string
  requestId: string
  filePath: string
  originalName: string | null
  contentType: string | null
  fileSize: number | null
  uploadedById: string | null
  uploadedAt: Date
  aiResult: Prisma.JsonValue | null
  processedAt: Date | null
  checksum: string | null
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  ADMIN: 'ADMIN',
  DENTIST: 'DENTIST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING: 'PENDING',
  CANCELED: 'CANCELED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const SubscriptionPlan: {
  FREE: 'FREE',
  PRO: 'PRO'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const RequestStatus: {
  PENDING: 'PENDING',
  SENT_TO_CLINIC: 'SENT_TO_CLINIC',
  WAITING_UPLOAD: 'WAITING_UPLOAD',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<GlobalReject>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<GlobalReject>;

  /**
   * `prisma.radiographyRequest`: Exposes CRUD operations for the **RadiographyRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RadiographyRequests
    * const radiographyRequests = await prisma.radiographyRequest.findMany()
    * ```
    */
  get radiographyRequest(): Prisma.RadiographyRequestDelegate<GlobalReject>;

  /**
   * `prisma.radiography`: Exposes CRUD operations for the **Radiography** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Radiographies
    * const radiographies = await prisma.radiography.findMany()
    * ```
    */
  get radiography(): Prisma.RadiographyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Subscription: 'Subscription',
    Patient: 'Patient',
    RadiographyRequest: 'RadiographyRequest',
    Radiography: 'Radiography'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    patients: number
    requestedBy: number
    assignedTo: number
    radiographies: number
  }

  export type UserCountOutputTypeSelect = {
    patients?: boolean
    requestedBy?: boolean
    assignedTo?: boolean
    radiographies?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PatientCountOutputType
   */


  export type PatientCountOutputType = {
    radiographyRequests: number
  }

  export type PatientCountOutputTypeSelect = {
    radiographyRequests?: boolean
  }

  export type PatientCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PatientCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PatientCountOutputType
    : S extends undefined
    ? never
    : S extends PatientCountOutputTypeArgs
    ?'include' extends U
    ? PatientCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PatientCountOutputType ? PatientCountOutputType[P] : never
  } 
    : PatientCountOutputType
  : PatientCountOutputType




  // Custom InputTypes

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     * 
    **/
    select?: PatientCountOutputTypeSelect | null
  }



  /**
   * Count Type RadiographyRequestCountOutputType
   */


  export type RadiographyRequestCountOutputType = {
    radiographies: number
  }

  export type RadiographyRequestCountOutputTypeSelect = {
    radiographies?: boolean
  }

  export type RadiographyRequestCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RadiographyRequestCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? RadiographyRequestCountOutputType
    : S extends undefined
    ? never
    : S extends RadiographyRequestCountOutputTypeArgs
    ?'include' extends U
    ? RadiographyRequestCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof RadiographyRequestCountOutputType ? RadiographyRequestCountOutputType[P] : never
  } 
    : RadiographyRequestCountOutputType
  : RadiographyRequestCountOutputType




  // Custom InputTypes

  /**
   * RadiographyRequestCountOutputType without action
   */
  export type RadiographyRequestCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequestCountOutputType
     * 
    **/
    select?: RadiographyRequestCountOutputTypeSelect | null
  }



  /**
   * Models
   */

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
    name: string | null
    email: string | null
    passwordHash: string | null
    role: Role | null
    address: string | null
    phone: string | null
    isRadiography: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: Role | null
    address: string | null
    phone: string | null
    isRadiography: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    address: number
    phone: number
    isRadiography: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    address?: true
    phone?: true
    isRadiography?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    address?: true
    phone?: true
    isRadiography?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    address?: true
    phone?: true
    isRadiography?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: Role
    address: string
    phone: string
    isRadiography: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    address?: boolean
    phone?: boolean
    isRadiography?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subscriptions?: boolean | SubscriptionArgs
    patients?: boolean | PatientFindManyArgs
    requestedBy?: boolean | RadiographyRequestFindManyArgs
    assignedTo?: boolean | RadiographyRequestFindManyArgs
    radiographies?: boolean | RadiographyFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    subscriptions?: boolean | SubscriptionArgs
    patients?: boolean | PatientFindManyArgs
    requestedBy?: boolean | RadiographyRequestFindManyArgs
    assignedTo?: boolean | RadiographyRequestFindManyArgs
    radiographies?: boolean | RadiographyFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'subscriptions' ? SubscriptionGetPayload<S['include'][P]> | null :
        P extends 'patients' ? Array < PatientGetPayload<S['include'][P]>>  :
        P extends 'requestedBy' ? Array < RadiographyRequestGetPayload<S['include'][P]>>  :
        P extends 'assignedTo' ? Array < RadiographyRequestGetPayload<S['include'][P]>>  :
        P extends 'radiographies' ? Array < RadiographyGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'subscriptions' ? SubscriptionGetPayload<S['select'][P]> | null :
        P extends 'patients' ? Array < PatientGetPayload<S['select'][P]>>  :
        P extends 'requestedBy' ? Array < RadiographyRequestGetPayload<S['select'][P]>>  :
        P extends 'assignedTo' ? Array < RadiographyRequestGetPayload<S['select'][P]>>  :
        P extends 'radiographies' ? Array < RadiographyGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    subscriptions<T extends SubscriptionArgs = {}>(args?: Subset<T, SubscriptionArgs>): CheckSelect<T, Prisma__SubscriptionClient<Subscription | null >, Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null >>;

    patients<T extends PatientFindManyArgs = {}>(args?: Subset<T, PatientFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Patient>>, PrismaPromise<Array<PatientGetPayload<T>>>>;

    requestedBy<T extends RadiographyRequestFindManyArgs = {}>(args?: Subset<T, RadiographyRequestFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RadiographyRequest>>, PrismaPromise<Array<RadiographyRequestGetPayload<T>>>>;

    assignedTo<T extends RadiographyRequestFindManyArgs = {}>(args?: Subset<T, RadiographyRequestFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RadiographyRequest>>, PrismaPromise<Array<RadiographyRequestGetPayload<T>>>>;

    radiographies<T extends RadiographyFindManyArgs = {}>(args?: Subset<T, RadiographyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Radiography>>, PrismaPromise<Array<RadiographyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Subscription
   */


  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: SubscriptionStatus | null
    plan: SubscriptionPlan | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: SubscriptionStatus | null
    plan: SubscriptionPlan | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    plan: number
    startedAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    plan?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    plan?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    plan?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs = {
    /**
     * Filter which Subscription to aggregate.
     * 
    **/
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     * 
    **/
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs = {
    where?: SubscriptionWhereInput
    orderBy?: Enumerable<SubscriptionOrderByWithAggregationInput>
    by: Array<SubscriptionScalarFieldEnum>
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }


  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    status: SubscriptionStatus
    plan: SubscriptionPlan
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect = {
    id?: boolean
    userId?: boolean
    status?: boolean
    plan?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
  }

  export type SubscriptionInclude = {
    user?: boolean | UserArgs
  }

  export type SubscriptionGetPayload<
    S extends boolean | null | undefined | SubscriptionArgs,
    U = keyof S
      > = S extends true
        ? Subscription
    : S extends undefined
    ? never
    : S extends SubscriptionArgs | SubscriptionFindManyArgs
    ?'include' extends U
    ? Subscription  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Subscription ? Subscription[P] : never
  } 
    : Subscription
  : Subscription


  type SubscriptionCountArgs = Merge<
    Omit<SubscriptionFindManyArgs, 'select' | 'include'> & {
      select?: SubscriptionCountAggregateInputType | true
    }
  >

  export interface SubscriptionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubscriptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Subscription'> extends True ? CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>> : CheckSelect<T, Prisma__SubscriptionClient<Subscription | null >, Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null >>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubscriptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Subscription'> extends True ? CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>> : CheckSelect<T, Prisma__SubscriptionClient<Subscription | null >, Prisma__SubscriptionClient<SubscriptionGetPayload<T> | null >>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubscriptionFindManyArgs>(
      args?: SelectSubset<T, SubscriptionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Subscription>>, PrismaPromise<Array<SubscriptionGetPayload<T>>>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
    **/
    create<T extends SubscriptionCreateArgs>(
      args: SelectSubset<T, SubscriptionCreateArgs>
    ): CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>>

    /**
     * Create many Subscriptions.
     *     @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscription = await prisma.subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubscriptionCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
    **/
    delete<T extends SubscriptionDeleteArgs>(
      args: SelectSubset<T, SubscriptionDeleteArgs>
    ): CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubscriptionUpdateArgs>(
      args: SelectSubset<T, SubscriptionUpdateArgs>
    ): CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubscriptionUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
    **/
    upsert<T extends SubscriptionUpsertArgs>(
      args: SelectSubset<T, SubscriptionUpsertArgs>
    ): CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>>

    /**
     * Find one Subscription that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>>

    /**
     * Find the first Subscription that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SubscriptionClient<Subscription>, Prisma__SubscriptionClient<SubscriptionGetPayload<T>>>

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubscriptionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Subscription base type for findUnique actions
   */
  export type SubscriptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscription to fetch.
     * 
    **/
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription: findUnique
   */
  export interface SubscriptionFindUniqueArgs extends SubscriptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subscription base type for findFirst actions
   */
  export type SubscriptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscription to fetch.
     * 
    **/
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     * 
    **/
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     * 
    **/
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     * 
    **/
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }

  /**
   * Subscription: findFirst
   */
  export interface SubscriptionFindFirstArgs extends SubscriptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * Filter, which Subscriptions to fetch.
     * 
    **/
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     * 
    **/
    orderBy?: Enumerable<SubscriptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     * 
    **/
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SubscriptionScalarFieldEnum>
  }


  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * The data needed to create a Subscription.
     * 
    **/
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }


  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs = {
    /**
     * The data used to create many Subscriptions.
     * 
    **/
    data: Enumerable<SubscriptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * The data needed to update a Subscription.
     * 
    **/
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     * 
    **/
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs = {
    /**
     * The data used to update Subscriptions.
     * 
    **/
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     * 
    **/
    where?: SubscriptionWhereInput
  }


  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     * 
    **/
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     * 
    **/
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }


  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
    /**
     * Filter which Subscription to delete.
     * 
    **/
    where: SubscriptionWhereUniqueInput
  }


  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs = {
    /**
     * Filter which Subscriptions to delete
     * 
    **/
    where?: SubscriptionWhereInput
  }


  /**
   * Subscription: findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs = SubscriptionFindUniqueArgsBase
      

  /**
   * Subscription: findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs = SubscriptionFindFirstArgsBase
      

  /**
   * Subscription without action
   */
  export type SubscriptionArgs = {
    /**
     * Select specific fields to fetch from the Subscription
     * 
    **/
    select?: SubscriptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubscriptionInclude | null
  }



  /**
   * Model Patient
   */


  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    birthDate: Date | null
    cpf: string | null
    address: string | null
    phone: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    createdById: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    birthDate: Date | null
    cpf: string | null
    address: string | null
    phone: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    createdById: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    birthDate: number
    cpf: number
    address: number
    phone: number
    notes: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    createdById: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    birthDate?: true
    cpf?: true
    address?: true
    phone?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdById?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    birthDate?: true
    cpf?: true
    address?: true
    phone?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdById?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    birthDate?: true
    cpf?: true
    address?: true
    phone?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdById?: true
    _all?: true
  }

  export type PatientAggregateArgs = {
    /**
     * Filter which Patient to aggregate.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs = {
    where?: PatientWhereInput
    orderBy?: Enumerable<PatientOrderByWithAggregationInput>
    by: Array<PatientScalarFieldEnum>
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }


  export type PatientGroupByOutputType = {
    id: string
    name: string
    email: string
    birthDate: Date
    cpf: string
    address: string
    phone: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    createdById: string | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    birthDate?: boolean
    cpf?: boolean
    address?: boolean
    phone?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserArgs
    radiographyRequests?: boolean | RadiographyRequestFindManyArgs
    _count?: boolean | PatientCountOutputTypeArgs
  }

  export type PatientInclude = {
    createdBy?: boolean | UserArgs
    radiographyRequests?: boolean | RadiographyRequestFindManyArgs
    _count?: boolean | PatientCountOutputTypeArgs
  }

  export type PatientGetPayload<
    S extends boolean | null | undefined | PatientArgs,
    U = keyof S
      > = S extends true
        ? Patient
    : S extends undefined
    ? never
    : S extends PatientArgs | PatientFindManyArgs
    ?'include' extends U
    ? Patient  & {
    [P in TrueKeys<S['include']>]:
        P extends 'createdBy' ? UserGetPayload<S['include'][P]> | null :
        P extends 'radiographyRequests' ? Array < RadiographyRequestGetPayload<S['include'][P]>>  :
        P extends '_count' ? PatientCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'createdBy' ? UserGetPayload<S['select'][P]> | null :
        P extends 'radiographyRequests' ? Array < RadiographyRequestGetPayload<S['select'][P]>>  :
        P extends '_count' ? PatientCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Patient ? Patient[P] : never
  } 
    : Patient
  : Patient


  type PatientCountArgs = Merge<
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }
  >

  export interface PatientDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PatientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patient'> extends True ? CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>> : CheckSelect<T, Prisma__PatientClient<Patient | null >, Prisma__PatientClient<PatientGetPayload<T> | null >>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PatientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patient'> extends True ? CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>> : CheckSelect<T, Prisma__PatientClient<Patient | null >, Prisma__PatientClient<PatientGetPayload<T> | null >>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs>(
      args?: SelectSubset<T, PatientFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Patient>>, PrismaPromise<Array<PatientGetPayload<T>>>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs>(
      args: SelectSubset<T, PatientCreateArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

    /**
     * Create many Patients.
     *     @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientCreateManyArgs>(
      args?: SelectSubset<T, PatientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs>(
      args: SelectSubset<T, PatientDeleteArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs>(
      args: SelectSubset<T, PatientUpdateArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs>(
      args?: SelectSubset<T, PatientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs>(
      args: SelectSubset<T, PatientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs>(
      args: SelectSubset<T, PatientUpsertArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

    /**
     * Find one Patient that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

    /**
     * Find the first Patient that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    createdBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    radiographyRequests<T extends RadiographyRequestFindManyArgs = {}>(args?: Subset<T, RadiographyRequestFindManyArgs>): CheckSelect<T, PrismaPromise<Array<RadiographyRequest>>, PrismaPromise<Array<RadiographyRequestGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Patient base type for findUnique actions
   */
  export type PatientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where: PatientWhereUniqueInput
  }

  /**
   * Patient: findUnique
   */
  export interface PatientFindUniqueArgs extends PatientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient base type for findFirst actions
   */
  export type PatientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     * 
    **/
    distinct?: Enumerable<PatientScalarFieldEnum>
  }

  /**
   * Patient: findFirst
   */
  export interface PatientFindFirstArgs extends PatientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter, which Patients to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * The data needed to create a Patient.
     * 
    **/
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs = {
    /**
     * The data used to create many Patients.
     * 
    **/
    data: Enumerable<PatientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * The data needed to update a Patient.
     * 
    **/
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs = {
    /**
     * The data used to update Patients.
     * 
    **/
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     * 
    **/
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * The filter to search for the Patient to update in case it exists.
     * 
    **/
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     * 
    **/
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
    /**
     * Filter which Patient to delete.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs = {
    /**
     * Filter which Patients to delete
     * 
    **/
    where?: PatientWhereInput
  }


  /**
   * Patient: findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs = PatientFindUniqueArgsBase
      

  /**
   * Patient: findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs = PatientFindFirstArgsBase
      

  /**
   * Patient without action
   */
  export type PatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PatientInclude | null
  }



  /**
   * Model RadiographyRequest
   */


  export type AggregateRadiographyRequest = {
    _count: RadiographyRequestCountAggregateOutputType | null
    _avg: RadiographyRequestAvgAggregateOutputType | null
    _sum: RadiographyRequestSumAggregateOutputType | null
    _min: RadiographyRequestMinAggregateOutputType | null
    _max: RadiographyRequestMaxAggregateOutputType | null
  }

  export type RadiographyRequestAvgAggregateOutputType = {
    priority: number | null
  }

  export type RadiographyRequestSumAggregateOutputType = {
    priority: number | null
  }

  export type RadiographyRequestMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    requestedById: string | null
    assignedToId: string | null
    status: RequestStatus | null
    modality: string | null
    priority: number | null
    description: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    cancelledAt: Date | null
    completedAt: Date | null
  }

  export type RadiographyRequestMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    requestedById: string | null
    assignedToId: string | null
    status: RequestStatus | null
    modality: string | null
    priority: number | null
    description: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    cancelledAt: Date | null
    completedAt: Date | null
  }

  export type RadiographyRequestCountAggregateOutputType = {
    id: number
    patientId: number
    requestedById: number
    assignedToId: number
    status: number
    modality: number
    priority: number
    description: number
    scheduledAt: number
    createdAt: number
    updatedAt: number
    cancelledAt: number
    completedAt: number
    _all: number
  }


  export type RadiographyRequestAvgAggregateInputType = {
    priority?: true
  }

  export type RadiographyRequestSumAggregateInputType = {
    priority?: true
  }

  export type RadiographyRequestMinAggregateInputType = {
    id?: true
    patientId?: true
    requestedById?: true
    assignedToId?: true
    status?: true
    modality?: true
    priority?: true
    description?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    cancelledAt?: true
    completedAt?: true
  }

  export type RadiographyRequestMaxAggregateInputType = {
    id?: true
    patientId?: true
    requestedById?: true
    assignedToId?: true
    status?: true
    modality?: true
    priority?: true
    description?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    cancelledAt?: true
    completedAt?: true
  }

  export type RadiographyRequestCountAggregateInputType = {
    id?: true
    patientId?: true
    requestedById?: true
    assignedToId?: true
    status?: true
    modality?: true
    priority?: true
    description?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    cancelledAt?: true
    completedAt?: true
    _all?: true
  }

  export type RadiographyRequestAggregateArgs = {
    /**
     * Filter which RadiographyRequest to aggregate.
     * 
    **/
    where?: RadiographyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadiographyRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<RadiographyRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RadiographyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadiographyRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadiographyRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RadiographyRequests
    **/
    _count?: true | RadiographyRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RadiographyRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RadiographyRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadiographyRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadiographyRequestMaxAggregateInputType
  }

  export type GetRadiographyRequestAggregateType<T extends RadiographyRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRadiographyRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadiographyRequest[P]>
      : GetScalarType<T[P], AggregateRadiographyRequest[P]>
  }




  export type RadiographyRequestGroupByArgs = {
    where?: RadiographyRequestWhereInput
    orderBy?: Enumerable<RadiographyRequestOrderByWithAggregationInput>
    by: Array<RadiographyRequestScalarFieldEnum>
    having?: RadiographyRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadiographyRequestCountAggregateInputType | true
    _avg?: RadiographyRequestAvgAggregateInputType
    _sum?: RadiographyRequestSumAggregateInputType
    _min?: RadiographyRequestMinAggregateInputType
    _max?: RadiographyRequestMaxAggregateInputType
  }


  export type RadiographyRequestGroupByOutputType = {
    id: string
    patientId: string
    requestedById: string
    assignedToId: string | null
    status: RequestStatus
    modality: string | null
    priority: number | null
    description: string | null
    scheduledAt: Date | null
    createdAt: Date
    updatedAt: Date
    cancelledAt: Date | null
    completedAt: Date | null
    _count: RadiographyRequestCountAggregateOutputType | null
    _avg: RadiographyRequestAvgAggregateOutputType | null
    _sum: RadiographyRequestSumAggregateOutputType | null
    _min: RadiographyRequestMinAggregateOutputType | null
    _max: RadiographyRequestMaxAggregateOutputType | null
  }

  type GetRadiographyRequestGroupByPayload<T extends RadiographyRequestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RadiographyRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadiographyRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadiographyRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RadiographyRequestGroupByOutputType[P]>
        }
      >
    >


  export type RadiographyRequestSelect = {
    id?: boolean
    patientId?: boolean
    requestedById?: boolean
    assignedToId?: boolean
    status?: boolean
    modality?: boolean
    priority?: boolean
    description?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cancelledAt?: boolean
    completedAt?: boolean
    patient?: boolean | PatientArgs
    requestedBy?: boolean | UserArgs
    assignedTo?: boolean | UserArgs
    radiographies?: boolean | RadiographyFindManyArgs
    _count?: boolean | RadiographyRequestCountOutputTypeArgs
  }

  export type RadiographyRequestInclude = {
    patient?: boolean | PatientArgs
    requestedBy?: boolean | UserArgs
    assignedTo?: boolean | UserArgs
    radiographies?: boolean | RadiographyFindManyArgs
    _count?: boolean | RadiographyRequestCountOutputTypeArgs
  }

  export type RadiographyRequestGetPayload<
    S extends boolean | null | undefined | RadiographyRequestArgs,
    U = keyof S
      > = S extends true
        ? RadiographyRequest
    : S extends undefined
    ? never
    : S extends RadiographyRequestArgs | RadiographyRequestFindManyArgs
    ?'include' extends U
    ? RadiographyRequest  & {
    [P in TrueKeys<S['include']>]:
        P extends 'patient' ? PatientGetPayload<S['include'][P]> :
        P extends 'requestedBy' ? UserGetPayload<S['include'][P]> :
        P extends 'assignedTo' ? UserGetPayload<S['include'][P]> | null :
        P extends 'radiographies' ? Array < RadiographyGetPayload<S['include'][P]>>  :
        P extends '_count' ? RadiographyRequestCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'patient' ? PatientGetPayload<S['select'][P]> :
        P extends 'requestedBy' ? UserGetPayload<S['select'][P]> :
        P extends 'assignedTo' ? UserGetPayload<S['select'][P]> | null :
        P extends 'radiographies' ? Array < RadiographyGetPayload<S['select'][P]>>  :
        P extends '_count' ? RadiographyRequestCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RadiographyRequest ? RadiographyRequest[P] : never
  } 
    : RadiographyRequest
  : RadiographyRequest


  type RadiographyRequestCountArgs = Merge<
    Omit<RadiographyRequestFindManyArgs, 'select' | 'include'> & {
      select?: RadiographyRequestCountAggregateInputType | true
    }
  >

  export interface RadiographyRequestDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one RadiographyRequest that matches the filter.
     * @param {RadiographyRequestFindUniqueArgs} args - Arguments to find a RadiographyRequest
     * @example
     * // Get one RadiographyRequest
     * const radiographyRequest = await prisma.radiographyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RadiographyRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RadiographyRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RadiographyRequest'> extends True ? CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>> : CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest | null >, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T> | null >>

    /**
     * Find the first RadiographyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestFindFirstArgs} args - Arguments to find a RadiographyRequest
     * @example
     * // Get one RadiographyRequest
     * const radiographyRequest = await prisma.radiographyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RadiographyRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RadiographyRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RadiographyRequest'> extends True ? CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>> : CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest | null >, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T> | null >>

    /**
     * Find zero or more RadiographyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RadiographyRequests
     * const radiographyRequests = await prisma.radiographyRequest.findMany()
     * 
     * // Get first 10 RadiographyRequests
     * const radiographyRequests = await prisma.radiographyRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radiographyRequestWithIdOnly = await prisma.radiographyRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RadiographyRequestFindManyArgs>(
      args?: SelectSubset<T, RadiographyRequestFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<RadiographyRequest>>, PrismaPromise<Array<RadiographyRequestGetPayload<T>>>>

    /**
     * Create a RadiographyRequest.
     * @param {RadiographyRequestCreateArgs} args - Arguments to create a RadiographyRequest.
     * @example
     * // Create one RadiographyRequest
     * const RadiographyRequest = await prisma.radiographyRequest.create({
     *   data: {
     *     // ... data to create a RadiographyRequest
     *   }
     * })
     * 
    **/
    create<T extends RadiographyRequestCreateArgs>(
      args: SelectSubset<T, RadiographyRequestCreateArgs>
    ): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>>

    /**
     * Create many RadiographyRequests.
     *     @param {RadiographyRequestCreateManyArgs} args - Arguments to create many RadiographyRequests.
     *     @example
     *     // Create many RadiographyRequests
     *     const radiographyRequest = await prisma.radiographyRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RadiographyRequestCreateManyArgs>(
      args?: SelectSubset<T, RadiographyRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RadiographyRequest.
     * @param {RadiographyRequestDeleteArgs} args - Arguments to delete one RadiographyRequest.
     * @example
     * // Delete one RadiographyRequest
     * const RadiographyRequest = await prisma.radiographyRequest.delete({
     *   where: {
     *     // ... filter to delete one RadiographyRequest
     *   }
     * })
     * 
    **/
    delete<T extends RadiographyRequestDeleteArgs>(
      args: SelectSubset<T, RadiographyRequestDeleteArgs>
    ): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>>

    /**
     * Update one RadiographyRequest.
     * @param {RadiographyRequestUpdateArgs} args - Arguments to update one RadiographyRequest.
     * @example
     * // Update one RadiographyRequest
     * const radiographyRequest = await prisma.radiographyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RadiographyRequestUpdateArgs>(
      args: SelectSubset<T, RadiographyRequestUpdateArgs>
    ): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>>

    /**
     * Delete zero or more RadiographyRequests.
     * @param {RadiographyRequestDeleteManyArgs} args - Arguments to filter RadiographyRequests to delete.
     * @example
     * // Delete a few RadiographyRequests
     * const { count } = await prisma.radiographyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RadiographyRequestDeleteManyArgs>(
      args?: SelectSubset<T, RadiographyRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RadiographyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RadiographyRequests
     * const radiographyRequest = await prisma.radiographyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RadiographyRequestUpdateManyArgs>(
      args: SelectSubset<T, RadiographyRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RadiographyRequest.
     * @param {RadiographyRequestUpsertArgs} args - Arguments to update or create a RadiographyRequest.
     * @example
     * // Update or create a RadiographyRequest
     * const radiographyRequest = await prisma.radiographyRequest.upsert({
     *   create: {
     *     // ... data to create a RadiographyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RadiographyRequest we want to update
     *   }
     * })
    **/
    upsert<T extends RadiographyRequestUpsertArgs>(
      args: SelectSubset<T, RadiographyRequestUpsertArgs>
    ): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>>

    /**
     * Find one RadiographyRequest that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RadiographyRequestFindUniqueOrThrowArgs} args - Arguments to find a RadiographyRequest
     * @example
     * // Get one RadiographyRequest
     * const radiographyRequest = await prisma.radiographyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RadiographyRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RadiographyRequestFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>>

    /**
     * Find the first RadiographyRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestFindFirstOrThrowArgs} args - Arguments to find a RadiographyRequest
     * @example
     * // Get one RadiographyRequest
     * const radiographyRequest = await prisma.radiographyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RadiographyRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RadiographyRequestFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest>, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T>>>

    /**
     * Count the number of RadiographyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestCountArgs} args - Arguments to filter RadiographyRequests to count.
     * @example
     * // Count the number of RadiographyRequests
     * const count = await prisma.radiographyRequest.count({
     *   where: {
     *     // ... the filter for the RadiographyRequests we want to count
     *   }
     * })
    **/
    count<T extends RadiographyRequestCountArgs>(
      args?: Subset<T, RadiographyRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadiographyRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RadiographyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RadiographyRequestAggregateArgs>(args: Subset<T, RadiographyRequestAggregateArgs>): PrismaPromise<GetRadiographyRequestAggregateType<T>>

    /**
     * Group by RadiographyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyRequestGroupByArgs} args - Group by arguments.
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
      T extends RadiographyRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RadiographyRequestGroupByArgs['orderBy'] }
        : { orderBy?: RadiographyRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RadiographyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadiographyRequestGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for RadiographyRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RadiographyRequestClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    patient<T extends PatientArgs = {}>(args?: Subset<T, PatientArgs>): CheckSelect<T, Prisma__PatientClient<Patient | null >, Prisma__PatientClient<PatientGetPayload<T> | null >>;

    requestedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    assignedTo<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    radiographies<T extends RadiographyFindManyArgs = {}>(args?: Subset<T, RadiographyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Radiography>>, PrismaPromise<Array<RadiographyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RadiographyRequest base type for findUnique actions
   */
  export type RadiographyRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * Filter, which RadiographyRequest to fetch.
     * 
    **/
    where: RadiographyRequestWhereUniqueInput
  }

  /**
   * RadiographyRequest: findUnique
   */
  export interface RadiographyRequestFindUniqueArgs extends RadiographyRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RadiographyRequest base type for findFirst actions
   */
  export type RadiographyRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * Filter, which RadiographyRequest to fetch.
     * 
    **/
    where?: RadiographyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadiographyRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<RadiographyRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RadiographyRequests.
     * 
    **/
    cursor?: RadiographyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadiographyRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadiographyRequests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RadiographyRequests.
     * 
    **/
    distinct?: Enumerable<RadiographyRequestScalarFieldEnum>
  }

  /**
   * RadiographyRequest: findFirst
   */
  export interface RadiographyRequestFindFirstArgs extends RadiographyRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RadiographyRequest findMany
   */
  export type RadiographyRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * Filter, which RadiographyRequests to fetch.
     * 
    **/
    where?: RadiographyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadiographyRequests to fetch.
     * 
    **/
    orderBy?: Enumerable<RadiographyRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RadiographyRequests.
     * 
    **/
    cursor?: RadiographyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadiographyRequests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadiographyRequests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RadiographyRequestScalarFieldEnum>
  }


  /**
   * RadiographyRequest create
   */
  export type RadiographyRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * The data needed to create a RadiographyRequest.
     * 
    **/
    data: XOR<RadiographyRequestCreateInput, RadiographyRequestUncheckedCreateInput>
  }


  /**
   * RadiographyRequest createMany
   */
  export type RadiographyRequestCreateManyArgs = {
    /**
     * The data used to create many RadiographyRequests.
     * 
    **/
    data: Enumerable<RadiographyRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RadiographyRequest update
   */
  export type RadiographyRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * The data needed to update a RadiographyRequest.
     * 
    **/
    data: XOR<RadiographyRequestUpdateInput, RadiographyRequestUncheckedUpdateInput>
    /**
     * Choose, which RadiographyRequest to update.
     * 
    **/
    where: RadiographyRequestWhereUniqueInput
  }


  /**
   * RadiographyRequest updateMany
   */
  export type RadiographyRequestUpdateManyArgs = {
    /**
     * The data used to update RadiographyRequests.
     * 
    **/
    data: XOR<RadiographyRequestUpdateManyMutationInput, RadiographyRequestUncheckedUpdateManyInput>
    /**
     * Filter which RadiographyRequests to update
     * 
    **/
    where?: RadiographyRequestWhereInput
  }


  /**
   * RadiographyRequest upsert
   */
  export type RadiographyRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * The filter to search for the RadiographyRequest to update in case it exists.
     * 
    **/
    where: RadiographyRequestWhereUniqueInput
    /**
     * In case the RadiographyRequest found by the `where` argument doesn't exist, create a new RadiographyRequest with this data.
     * 
    **/
    create: XOR<RadiographyRequestCreateInput, RadiographyRequestUncheckedCreateInput>
    /**
     * In case the RadiographyRequest was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RadiographyRequestUpdateInput, RadiographyRequestUncheckedUpdateInput>
  }


  /**
   * RadiographyRequest delete
   */
  export type RadiographyRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
    /**
     * Filter which RadiographyRequest to delete.
     * 
    **/
    where: RadiographyRequestWhereUniqueInput
  }


  /**
   * RadiographyRequest deleteMany
   */
  export type RadiographyRequestDeleteManyArgs = {
    /**
     * Filter which RadiographyRequests to delete
     * 
    **/
    where?: RadiographyRequestWhereInput
  }


  /**
   * RadiographyRequest: findUniqueOrThrow
   */
  export type RadiographyRequestFindUniqueOrThrowArgs = RadiographyRequestFindUniqueArgsBase
      

  /**
   * RadiographyRequest: findFirstOrThrow
   */
  export type RadiographyRequestFindFirstOrThrowArgs = RadiographyRequestFindFirstArgsBase
      

  /**
   * RadiographyRequest without action
   */
  export type RadiographyRequestArgs = {
    /**
     * Select specific fields to fetch from the RadiographyRequest
     * 
    **/
    select?: RadiographyRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyRequestInclude | null
  }



  /**
   * Model Radiography
   */


  export type AggregateRadiography = {
    _count: RadiographyCountAggregateOutputType | null
    _avg: RadiographyAvgAggregateOutputType | null
    _sum: RadiographySumAggregateOutputType | null
    _min: RadiographyMinAggregateOutputType | null
    _max: RadiographyMaxAggregateOutputType | null
  }

  export type RadiographyAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type RadiographySumAggregateOutputType = {
    fileSize: number | null
  }

  export type RadiographyMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    filePath: string | null
    originalName: string | null
    contentType: string | null
    fileSize: number | null
    uploadedById: string | null
    uploadedAt: Date | null
    processedAt: Date | null
    checksum: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RadiographyMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    filePath: string | null
    originalName: string | null
    contentType: string | null
    fileSize: number | null
    uploadedById: string | null
    uploadedAt: Date | null
    processedAt: Date | null
    checksum: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RadiographyCountAggregateOutputType = {
    id: number
    requestId: number
    filePath: number
    originalName: number
    contentType: number
    fileSize: number
    uploadedById: number
    uploadedAt: number
    aiResult: number
    processedAt: number
    checksum: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RadiographyAvgAggregateInputType = {
    fileSize?: true
  }

  export type RadiographySumAggregateInputType = {
    fileSize?: true
  }

  export type RadiographyMinAggregateInputType = {
    id?: true
    requestId?: true
    filePath?: true
    originalName?: true
    contentType?: true
    fileSize?: true
    uploadedById?: true
    uploadedAt?: true
    processedAt?: true
    checksum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RadiographyMaxAggregateInputType = {
    id?: true
    requestId?: true
    filePath?: true
    originalName?: true
    contentType?: true
    fileSize?: true
    uploadedById?: true
    uploadedAt?: true
    processedAt?: true
    checksum?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RadiographyCountAggregateInputType = {
    id?: true
    requestId?: true
    filePath?: true
    originalName?: true
    contentType?: true
    fileSize?: true
    uploadedById?: true
    uploadedAt?: true
    aiResult?: true
    processedAt?: true
    checksum?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RadiographyAggregateArgs = {
    /**
     * Filter which Radiography to aggregate.
     * 
    **/
    where?: RadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radiographies to fetch.
     * 
    **/
    orderBy?: Enumerable<RadiographyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radiographies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radiographies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Radiographies
    **/
    _count?: true | RadiographyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RadiographyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RadiographySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadiographyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadiographyMaxAggregateInputType
  }

  export type GetRadiographyAggregateType<T extends RadiographyAggregateArgs> = {
        [P in keyof T & keyof AggregateRadiography]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadiography[P]>
      : GetScalarType<T[P], AggregateRadiography[P]>
  }




  export type RadiographyGroupByArgs = {
    where?: RadiographyWhereInput
    orderBy?: Enumerable<RadiographyOrderByWithAggregationInput>
    by: Array<RadiographyScalarFieldEnum>
    having?: RadiographyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadiographyCountAggregateInputType | true
    _avg?: RadiographyAvgAggregateInputType
    _sum?: RadiographySumAggregateInputType
    _min?: RadiographyMinAggregateInputType
    _max?: RadiographyMaxAggregateInputType
  }


  export type RadiographyGroupByOutputType = {
    id: string
    requestId: string
    filePath: string
    originalName: string | null
    contentType: string | null
    fileSize: number | null
    uploadedById: string | null
    uploadedAt: Date
    aiResult: JsonValue | null
    processedAt: Date | null
    checksum: string | null
    createdAt: Date
    updatedAt: Date
    _count: RadiographyCountAggregateOutputType | null
    _avg: RadiographyAvgAggregateOutputType | null
    _sum: RadiographySumAggregateOutputType | null
    _min: RadiographyMinAggregateOutputType | null
    _max: RadiographyMaxAggregateOutputType | null
  }

  type GetRadiographyGroupByPayload<T extends RadiographyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RadiographyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadiographyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadiographyGroupByOutputType[P]>
            : GetScalarType<T[P], RadiographyGroupByOutputType[P]>
        }
      >
    >


  export type RadiographySelect = {
    id?: boolean
    requestId?: boolean
    filePath?: boolean
    originalName?: boolean
    contentType?: boolean
    fileSize?: boolean
    uploadedById?: boolean
    uploadedAt?: boolean
    aiResult?: boolean
    processedAt?: boolean
    checksum?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | RadiographyRequestArgs
    uploadedBy?: boolean | UserArgs
  }

  export type RadiographyInclude = {
    request?: boolean | RadiographyRequestArgs
    uploadedBy?: boolean | UserArgs
  }

  export type RadiographyGetPayload<
    S extends boolean | null | undefined | RadiographyArgs,
    U = keyof S
      > = S extends true
        ? Radiography
    : S extends undefined
    ? never
    : S extends RadiographyArgs | RadiographyFindManyArgs
    ?'include' extends U
    ? Radiography  & {
    [P in TrueKeys<S['include']>]:
        P extends 'request' ? RadiographyRequestGetPayload<S['include'][P]> :
        P extends 'uploadedBy' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'request' ? RadiographyRequestGetPayload<S['select'][P]> :
        P extends 'uploadedBy' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Radiography ? Radiography[P] : never
  } 
    : Radiography
  : Radiography


  type RadiographyCountArgs = Merge<
    Omit<RadiographyFindManyArgs, 'select' | 'include'> & {
      select?: RadiographyCountAggregateInputType | true
    }
  >

  export interface RadiographyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Radiography that matches the filter.
     * @param {RadiographyFindUniqueArgs} args - Arguments to find a Radiography
     * @example
     * // Get one Radiography
     * const radiography = await prisma.radiography.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RadiographyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RadiographyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Radiography'> extends True ? CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>> : CheckSelect<T, Prisma__RadiographyClient<Radiography | null >, Prisma__RadiographyClient<RadiographyGetPayload<T> | null >>

    /**
     * Find the first Radiography that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyFindFirstArgs} args - Arguments to find a Radiography
     * @example
     * // Get one Radiography
     * const radiography = await prisma.radiography.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RadiographyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RadiographyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Radiography'> extends True ? CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>> : CheckSelect<T, Prisma__RadiographyClient<Radiography | null >, Prisma__RadiographyClient<RadiographyGetPayload<T> | null >>

    /**
     * Find zero or more Radiographies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Radiographies
     * const radiographies = await prisma.radiography.findMany()
     * 
     * // Get first 10 Radiographies
     * const radiographies = await prisma.radiography.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radiographyWithIdOnly = await prisma.radiography.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RadiographyFindManyArgs>(
      args?: SelectSubset<T, RadiographyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Radiography>>, PrismaPromise<Array<RadiographyGetPayload<T>>>>

    /**
     * Create a Radiography.
     * @param {RadiographyCreateArgs} args - Arguments to create a Radiography.
     * @example
     * // Create one Radiography
     * const Radiography = await prisma.radiography.create({
     *   data: {
     *     // ... data to create a Radiography
     *   }
     * })
     * 
    **/
    create<T extends RadiographyCreateArgs>(
      args: SelectSubset<T, RadiographyCreateArgs>
    ): CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>>

    /**
     * Create many Radiographies.
     *     @param {RadiographyCreateManyArgs} args - Arguments to create many Radiographies.
     *     @example
     *     // Create many Radiographies
     *     const radiography = await prisma.radiography.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RadiographyCreateManyArgs>(
      args?: SelectSubset<T, RadiographyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Radiography.
     * @param {RadiographyDeleteArgs} args - Arguments to delete one Radiography.
     * @example
     * // Delete one Radiography
     * const Radiography = await prisma.radiography.delete({
     *   where: {
     *     // ... filter to delete one Radiography
     *   }
     * })
     * 
    **/
    delete<T extends RadiographyDeleteArgs>(
      args: SelectSubset<T, RadiographyDeleteArgs>
    ): CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>>

    /**
     * Update one Radiography.
     * @param {RadiographyUpdateArgs} args - Arguments to update one Radiography.
     * @example
     * // Update one Radiography
     * const radiography = await prisma.radiography.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RadiographyUpdateArgs>(
      args: SelectSubset<T, RadiographyUpdateArgs>
    ): CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>>

    /**
     * Delete zero or more Radiographies.
     * @param {RadiographyDeleteManyArgs} args - Arguments to filter Radiographies to delete.
     * @example
     * // Delete a few Radiographies
     * const { count } = await prisma.radiography.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RadiographyDeleteManyArgs>(
      args?: SelectSubset<T, RadiographyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radiographies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Radiographies
     * const radiography = await prisma.radiography.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RadiographyUpdateManyArgs>(
      args: SelectSubset<T, RadiographyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Radiography.
     * @param {RadiographyUpsertArgs} args - Arguments to update or create a Radiography.
     * @example
     * // Update or create a Radiography
     * const radiography = await prisma.radiography.upsert({
     *   create: {
     *     // ... data to create a Radiography
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Radiography we want to update
     *   }
     * })
    **/
    upsert<T extends RadiographyUpsertArgs>(
      args: SelectSubset<T, RadiographyUpsertArgs>
    ): CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>>

    /**
     * Find one Radiography that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {RadiographyFindUniqueOrThrowArgs} args - Arguments to find a Radiography
     * @example
     * // Get one Radiography
     * const radiography = await prisma.radiography.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RadiographyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RadiographyFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>>

    /**
     * Find the first Radiography that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyFindFirstOrThrowArgs} args - Arguments to find a Radiography
     * @example
     * // Get one Radiography
     * const radiography = await prisma.radiography.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RadiographyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RadiographyFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__RadiographyClient<Radiography>, Prisma__RadiographyClient<RadiographyGetPayload<T>>>

    /**
     * Count the number of Radiographies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyCountArgs} args - Arguments to filter Radiographies to count.
     * @example
     * // Count the number of Radiographies
     * const count = await prisma.radiography.count({
     *   where: {
     *     // ... the filter for the Radiographies we want to count
     *   }
     * })
    **/
    count<T extends RadiographyCountArgs>(
      args?: Subset<T, RadiographyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadiographyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Radiography.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RadiographyAggregateArgs>(args: Subset<T, RadiographyAggregateArgs>): PrismaPromise<GetRadiographyAggregateType<T>>

    /**
     * Group by Radiography.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiographyGroupByArgs} args - Group by arguments.
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
      T extends RadiographyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RadiographyGroupByArgs['orderBy'] }
        : { orderBy?: RadiographyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RadiographyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadiographyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Radiography.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RadiographyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    request<T extends RadiographyRequestArgs = {}>(args?: Subset<T, RadiographyRequestArgs>): CheckSelect<T, Prisma__RadiographyRequestClient<RadiographyRequest | null >, Prisma__RadiographyRequestClient<RadiographyRequestGetPayload<T> | null >>;

    uploadedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Radiography base type for findUnique actions
   */
  export type RadiographyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * Filter, which Radiography to fetch.
     * 
    **/
    where: RadiographyWhereUniqueInput
  }

  /**
   * Radiography: findUnique
   */
  export interface RadiographyFindUniqueArgs extends RadiographyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Radiography base type for findFirst actions
   */
  export type RadiographyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * Filter, which Radiography to fetch.
     * 
    **/
    where?: RadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radiographies to fetch.
     * 
    **/
    orderBy?: Enumerable<RadiographyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radiographies.
     * 
    **/
    cursor?: RadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radiographies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radiographies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radiographies.
     * 
    **/
    distinct?: Enumerable<RadiographyScalarFieldEnum>
  }

  /**
   * Radiography: findFirst
   */
  export interface RadiographyFindFirstArgs extends RadiographyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Radiography findMany
   */
  export type RadiographyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * Filter, which Radiographies to fetch.
     * 
    **/
    where?: RadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radiographies to fetch.
     * 
    **/
    orderBy?: Enumerable<RadiographyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Radiographies.
     * 
    **/
    cursor?: RadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radiographies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radiographies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RadiographyScalarFieldEnum>
  }


  /**
   * Radiography create
   */
  export type RadiographyCreateArgs = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * The data needed to create a Radiography.
     * 
    **/
    data: XOR<RadiographyCreateInput, RadiographyUncheckedCreateInput>
  }


  /**
   * Radiography createMany
   */
  export type RadiographyCreateManyArgs = {
    /**
     * The data used to create many Radiographies.
     * 
    **/
    data: Enumerable<RadiographyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Radiography update
   */
  export type RadiographyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * The data needed to update a Radiography.
     * 
    **/
    data: XOR<RadiographyUpdateInput, RadiographyUncheckedUpdateInput>
    /**
     * Choose, which Radiography to update.
     * 
    **/
    where: RadiographyWhereUniqueInput
  }


  /**
   * Radiography updateMany
   */
  export type RadiographyUpdateManyArgs = {
    /**
     * The data used to update Radiographies.
     * 
    **/
    data: XOR<RadiographyUpdateManyMutationInput, RadiographyUncheckedUpdateManyInput>
    /**
     * Filter which Radiographies to update
     * 
    **/
    where?: RadiographyWhereInput
  }


  /**
   * Radiography upsert
   */
  export type RadiographyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * The filter to search for the Radiography to update in case it exists.
     * 
    **/
    where: RadiographyWhereUniqueInput
    /**
     * In case the Radiography found by the `where` argument doesn't exist, create a new Radiography with this data.
     * 
    **/
    create: XOR<RadiographyCreateInput, RadiographyUncheckedCreateInput>
    /**
     * In case the Radiography was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RadiographyUpdateInput, RadiographyUncheckedUpdateInput>
  }


  /**
   * Radiography delete
   */
  export type RadiographyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
    /**
     * Filter which Radiography to delete.
     * 
    **/
    where: RadiographyWhereUniqueInput
  }


  /**
   * Radiography deleteMany
   */
  export type RadiographyDeleteManyArgs = {
    /**
     * Filter which Radiographies to delete
     * 
    **/
    where?: RadiographyWhereInput
  }


  /**
   * Radiography: findUniqueOrThrow
   */
  export type RadiographyFindUniqueOrThrowArgs = RadiographyFindUniqueArgsBase
      

  /**
   * Radiography: findFirstOrThrow
   */
  export type RadiographyFindFirstOrThrowArgs = RadiographyFindFirstArgsBase
      

  /**
   * Radiography without action
   */
  export type RadiographyArgs = {
    /**
     * Select specific fields to fetch from the Radiography
     * 
    **/
    select?: RadiographySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RadiographyInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    address: 'address',
    phone: 'phone',
    isRadiography: 'isRadiography',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    plan: 'plan',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    birthDate: 'birthDate',
    cpf: 'cpf',
    address: 'address',
    phone: 'phone',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    createdById: 'createdById'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const RadiographyRequestScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    requestedById: 'requestedById',
    assignedToId: 'assignedToId',
    status: 'status',
    modality: 'modality',
    priority: 'priority',
    description: 'description',
    scheduledAt: 'scheduledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cancelledAt: 'cancelledAt',
    completedAt: 'completedAt'
  };

  export type RadiographyRequestScalarFieldEnum = (typeof RadiographyRequestScalarFieldEnum)[keyof typeof RadiographyRequestScalarFieldEnum]


  export const RadiographyScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    filePath: 'filePath',
    originalName: 'originalName',
    contentType: 'contentType',
    fileSize: 'fileSize',
    uploadedById: 'uploadedById',
    uploadedAt: 'uploadedAt',
    aiResult: 'aiResult',
    processedAt: 'processedAt',
    checksum: 'checksum',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RadiographyScalarFieldEnum = (typeof RadiographyScalarFieldEnum)[keyof typeof RadiographyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    passwordHash?: StringFilter | string
    role?: EnumRoleFilter | Role
    address?: StringFilter | string
    phone?: StringFilter | string
    isRadiography?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deletedAt?: DateTimeNullableFilter | Date | string | null
    subscriptions?: XOR<SubscriptionRelationFilter, SubscriptionWhereInput> | null
    patients?: PatientListRelationFilter
    requestedBy?: RadiographyRequestListRelationFilter
    assignedTo?: RadiographyRequestListRelationFilter
    radiographies?: RadiographyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isRadiography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    subscriptions?: SubscriptionOrderByWithRelationInput
    patients?: PatientOrderByRelationAggregateInput
    requestedBy?: RadiographyRequestOrderByRelationAggregateInput
    assignedTo?: RadiographyRequestOrderByRelationAggregateInput
    radiographies?: RadiographyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isRadiography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    passwordHash?: StringWithAggregatesFilter | string
    role?: EnumRoleWithAggregatesFilter | Role
    address?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    isRadiography?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: Enumerable<SubscriptionWhereInput>
    OR?: Enumerable<SubscriptionWhereInput>
    NOT?: Enumerable<SubscriptionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    status?: EnumSubscriptionStatusFilter | SubscriptionStatus
    plan?: EnumSubscriptionPlanFilter | SubscriptionPlan
    startedAt?: DateTimeNullableFilter | Date | string | null
    endedAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubscriptionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    status?: EnumSubscriptionStatusWithAggregatesFilter | SubscriptionStatus
    plan?: EnumSubscriptionPlanWithAggregatesFilter | SubscriptionPlan
    startedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PatientWhereInput = {
    AND?: Enumerable<PatientWhereInput>
    OR?: Enumerable<PatientWhereInput>
    NOT?: Enumerable<PatientWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    birthDate?: DateTimeFilter | Date | string
    cpf?: StringFilter | string
    address?: StringFilter | string
    phone?: StringFilter | string
    notes?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deletedAt?: DateTimeNullableFilter | Date | string | null
    createdById?: StringNullableFilter | string | null
    createdBy?: XOR<UserRelationFilter, UserWhereInput> | null
    radiographyRequests?: RadiographyRequestListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    radiographyRequests?: RadiographyRequestOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = {
    id?: string
    email?: string
    cpf_createdById?: PatientCpfCreatedByIdCompoundUniqueInput
  }

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdById?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PatientScalarWhereWithAggregatesInput>
    OR?: Enumerable<PatientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PatientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    birthDate?: DateTimeWithAggregatesFilter | Date | string
    cpf?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    notes?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdById?: StringNullableWithAggregatesFilter | string | null
  }

  export type RadiographyRequestWhereInput = {
    AND?: Enumerable<RadiographyRequestWhereInput>
    OR?: Enumerable<RadiographyRequestWhereInput>
    NOT?: Enumerable<RadiographyRequestWhereInput>
    id?: StringFilter | string
    patientId?: StringFilter | string
    requestedById?: StringFilter | string
    assignedToId?: StringNullableFilter | string | null
    status?: EnumRequestStatusFilter | RequestStatus
    modality?: StringNullableFilter | string | null
    priority?: IntNullableFilter | number | null
    description?: StringNullableFilter | string | null
    scheduledAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    cancelledAt?: DateTimeNullableFilter | Date | string | null
    completedAt?: DateTimeNullableFilter | Date | string | null
    patient?: XOR<PatientRelationFilter, PatientWhereInput>
    requestedBy?: XOR<UserRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserRelationFilter, UserWhereInput> | null
    radiographies?: RadiographyListRelationFilter
  }

  export type RadiographyRequestOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    requestedById?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
    modality?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    requestedBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    radiographies?: RadiographyOrderByRelationAggregateInput
  }

  export type RadiographyRequestWhereUniqueInput = {
    id?: string
  }

  export type RadiographyRequestOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    requestedById?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
    modality?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
    _count?: RadiographyRequestCountOrderByAggregateInput
    _avg?: RadiographyRequestAvgOrderByAggregateInput
    _max?: RadiographyRequestMaxOrderByAggregateInput
    _min?: RadiographyRequestMinOrderByAggregateInput
    _sum?: RadiographyRequestSumOrderByAggregateInput
  }

  export type RadiographyRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RadiographyRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<RadiographyRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RadiographyRequestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    patientId?: StringWithAggregatesFilter | string
    requestedById?: StringWithAggregatesFilter | string
    assignedToId?: StringNullableWithAggregatesFilter | string | null
    status?: EnumRequestStatusWithAggregatesFilter | RequestStatus
    modality?: StringNullableWithAggregatesFilter | string | null
    priority?: IntNullableWithAggregatesFilter | number | null
    description?: StringNullableWithAggregatesFilter | string | null
    scheduledAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    cancelledAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type RadiographyWhereInput = {
    AND?: Enumerable<RadiographyWhereInput>
    OR?: Enumerable<RadiographyWhereInput>
    NOT?: Enumerable<RadiographyWhereInput>
    id?: StringFilter | string
    requestId?: StringFilter | string
    filePath?: StringFilter | string
    originalName?: StringNullableFilter | string | null
    contentType?: StringNullableFilter | string | null
    fileSize?: IntNullableFilter | number | null
    uploadedById?: StringNullableFilter | string | null
    uploadedAt?: DateTimeFilter | Date | string
    aiResult?: JsonNullableFilter
    processedAt?: DateTimeNullableFilter | Date | string | null
    checksum?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    request?: XOR<RadiographyRequestRelationFilter, RadiographyRequestWhereInput>
    uploadedBy?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type RadiographyOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    filePath?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    aiResult?: SortOrder
    processedAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    request?: RadiographyRequestOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type RadiographyWhereUniqueInput = {
    id?: string
  }

  export type RadiographyOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    filePath?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    aiResult?: SortOrder
    processedAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RadiographyCountOrderByAggregateInput
    _avg?: RadiographyAvgOrderByAggregateInput
    _max?: RadiographyMaxOrderByAggregateInput
    _min?: RadiographyMinOrderByAggregateInput
    _sum?: RadiographySumOrderByAggregateInput
  }

  export type RadiographyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RadiographyScalarWhereWithAggregatesInput>
    OR?: Enumerable<RadiographyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RadiographyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    requestId?: StringWithAggregatesFilter | string
    filePath?: StringWithAggregatesFilter | string
    originalName?: StringNullableWithAggregatesFilter | string | null
    contentType?: StringNullableWithAggregatesFilter | string | null
    fileSize?: IntNullableWithAggregatesFilter | number | null
    uploadedById?: StringNullableWithAggregatesFilter | string | null
    uploadedAt?: DateTimeWithAggregatesFilter | Date | string
    aiResult?: JsonNullableWithAggregatesFilter
    processedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    checksum?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    patients?: PatientCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestUncheckedCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestUncheckedCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUncheckedUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateInput = {
    id?: string
    status?: SubscriptionStatus
    plan?: SubscriptionPlan
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    status?: SubscriptionStatus
    plan?: SubscriptionPlan
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | SubscriptionStatus
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | SubscriptionPlan
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | SubscriptionStatus
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | SubscriptionPlan
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    status?: SubscriptionStatus
    plan?: SubscriptionPlan
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | SubscriptionStatus
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | SubscriptionPlan
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | SubscriptionStatus
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | SubscriptionPlan
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: UserCreateNestedOneWithoutPatientsInput
    radiographyRequests?: RadiographyRequestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdById?: string | null
    radiographyRequests?: RadiographyRequestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneWithoutPatientsNestedInput
    radiographyRequests?: RadiographyRequestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    radiographyRequests?: RadiographyRequestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdById?: string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RadiographyRequestCreateInput = {
    id?: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutRadiographyRequestsInput
    requestedBy: UserCreateNestedOneWithoutRequestedByInput
    assignedTo?: UserCreateNestedOneWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestUncheckedCreateInput = {
    id?: string
    patientId: string
    requestedById: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutRadiographyRequestsNestedInput
    requestedBy?: UserUpdateOneRequiredWithoutRequestedByNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    radiographies?: RadiographyUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestCreateManyInput = {
    id?: string
    patientId: string
    requestedById: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type RadiographyRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RadiographyRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RadiographyCreateInput = {
    id?: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request: RadiographyRequestCreateNestedOneWithoutRadiographiesInput
    uploadedBy?: UserCreateNestedOneWithoutRadiographiesInput
  }

  export type RadiographyUncheckedCreateInput = {
    id?: string
    requestId: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedById?: string | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadiographyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RadiographyRequestUpdateOneRequiredWithoutRadiographiesNestedInput
    uploadedBy?: UserUpdateOneWithoutRadiographiesNestedInput
  }

  export type RadiographyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadiographyCreateManyInput = {
    id?: string
    requestId: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedById?: string | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadiographyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadiographyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type SubscriptionRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type RadiographyRequestListRelationFilter = {
    every?: RadiographyRequestWhereInput
    some?: RadiographyRequestWhereInput
    none?: RadiographyRequestWhereInput
  }

  export type RadiographyListRelationFilter = {
    every?: RadiographyWhereInput
    some?: RadiographyWhereInput
    none?: RadiographyWhereInput
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RadiographyRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RadiographyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isRadiography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isRadiography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isRadiography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type EnumSubscriptionStatusFilter = {
    equals?: SubscriptionStatus
    in?: Enumerable<SubscriptionStatus>
    notIn?: Enumerable<SubscriptionStatus>
    not?: NestedEnumSubscriptionStatusFilter | SubscriptionStatus
  }

  export type EnumSubscriptionPlanFilter = {
    equals?: SubscriptionPlan
    in?: Enumerable<SubscriptionPlan>
    notIn?: Enumerable<SubscriptionPlan>
    not?: NestedEnumSubscriptionPlanFilter | SubscriptionPlan
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter = {
    equals?: SubscriptionStatus
    in?: Enumerable<SubscriptionStatus>
    notIn?: Enumerable<SubscriptionStatus>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter | SubscriptionStatus
    _count?: NestedIntFilter
    _min?: NestedEnumSubscriptionStatusFilter
    _max?: NestedEnumSubscriptionStatusFilter
  }

  export type EnumSubscriptionPlanWithAggregatesFilter = {
    equals?: SubscriptionPlan
    in?: Enumerable<SubscriptionPlan>
    notIn?: Enumerable<SubscriptionPlan>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter | SubscriptionPlan
    _count?: NestedIntFilter
    _min?: NestedEnumSubscriptionPlanFilter
    _max?: NestedEnumSubscriptionPlanFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type PatientCpfCreatedByIdCompoundUniqueInput = {
    cpf: string
    createdById: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRequestStatusFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusFilter | RequestStatus
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type PatientRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type RadiographyRequestCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    requestedById?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
    modality?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
  }

  export type RadiographyRequestAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type RadiographyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    requestedById?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
    modality?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
  }

  export type RadiographyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    requestedById?: SortOrder
    assignedToId?: SortOrder
    status?: SortOrder
    modality?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
  }

  export type RadiographyRequestSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusWithAggregatesFilter | RequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumRequestStatusFilter
    _max?: NestedEnumRequestStatusFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type RadiographyRequestRelationFilter = {
    is?: RadiographyRequestWhereInput
    isNot?: RadiographyRequestWhereInput
  }

  export type RadiographyCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    filePath?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    aiResult?: SortOrder
    processedAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadiographyAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type RadiographyMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    filePath?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadiographyMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    filePath?: SortOrder
    originalName?: SortOrder
    contentType?: SortOrder
    fileSize?: SortOrder
    uploadedById?: SortOrder
    uploadedAt?: SortOrder
    processedAt?: SortOrder
    checksum?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadiographySumOrderByAggregateInput = {
    fileSize?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type PatientCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCreatedByInput>, Enumerable<PatientUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCreatedByInput>
    createMany?: PatientCreateManyCreatedByInputEnvelope
    connect?: Enumerable<PatientWhereUniqueInput>
  }

  export type RadiographyRequestCreateNestedManyWithoutRequestedByInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutRequestedByInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutRequestedByInput>
    createMany?: RadiographyRequestCreateManyRequestedByInputEnvelope
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
  }

  export type RadiographyRequestCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutAssignedToInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutAssignedToInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutAssignedToInput>
    createMany?: RadiographyRequestCreateManyAssignedToInputEnvelope
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
  }

  export type RadiographyCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutUploadedByInput>, Enumerable<RadiographyUncheckedCreateWithoutUploadedByInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutUploadedByInput>
    createMany?: RadiographyCreateManyUploadedByInputEnvelope
    connect?: Enumerable<RadiographyWhereUniqueInput>
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCreatedByInput>, Enumerable<PatientUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCreatedByInput>
    createMany?: PatientCreateManyCreatedByInputEnvelope
    connect?: Enumerable<PatientWhereUniqueInput>
  }

  export type RadiographyRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutRequestedByInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutRequestedByInput>
    createMany?: RadiographyRequestCreateManyRequestedByInputEnvelope
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
  }

  export type RadiographyRequestUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutAssignedToInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutAssignedToInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutAssignedToInput>
    createMany?: RadiographyRequestCreateManyAssignedToInputEnvelope
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
  }

  export type RadiographyUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutUploadedByInput>, Enumerable<RadiographyUncheckedCreateWithoutUploadedByInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutUploadedByInput>
    createMany?: RadiographyCreateManyUploadedByInputEnvelope
    connect?: Enumerable<RadiographyWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCreatedByInput>, Enumerable<PatientUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<PatientUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: PatientCreateManyCreatedByInputEnvelope
    set?: Enumerable<PatientWhereUniqueInput>
    disconnect?: Enumerable<PatientWhereUniqueInput>
    delete?: Enumerable<PatientWhereUniqueInput>
    connect?: Enumerable<PatientWhereUniqueInput>
    update?: Enumerable<PatientUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<PatientUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<PatientScalarWhereInput>
  }

  export type RadiographyRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutRequestedByInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutRequestedByInput>
    upsert?: Enumerable<RadiographyRequestUpsertWithWhereUniqueWithoutRequestedByInput>
    createMany?: RadiographyRequestCreateManyRequestedByInputEnvelope
    set?: Enumerable<RadiographyRequestWhereUniqueInput>
    disconnect?: Enumerable<RadiographyRequestWhereUniqueInput>
    delete?: Enumerable<RadiographyRequestWhereUniqueInput>
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
    update?: Enumerable<RadiographyRequestUpdateWithWhereUniqueWithoutRequestedByInput>
    updateMany?: Enumerable<RadiographyRequestUpdateManyWithWhereWithoutRequestedByInput>
    deleteMany?: Enumerable<RadiographyRequestScalarWhereInput>
  }

  export type RadiographyRequestUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutAssignedToInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutAssignedToInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutAssignedToInput>
    upsert?: Enumerable<RadiographyRequestUpsertWithWhereUniqueWithoutAssignedToInput>
    createMany?: RadiographyRequestCreateManyAssignedToInputEnvelope
    set?: Enumerable<RadiographyRequestWhereUniqueInput>
    disconnect?: Enumerable<RadiographyRequestWhereUniqueInput>
    delete?: Enumerable<RadiographyRequestWhereUniqueInput>
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
    update?: Enumerable<RadiographyRequestUpdateWithWhereUniqueWithoutAssignedToInput>
    updateMany?: Enumerable<RadiographyRequestUpdateManyWithWhereWithoutAssignedToInput>
    deleteMany?: Enumerable<RadiographyRequestScalarWhereInput>
  }

  export type RadiographyUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutUploadedByInput>, Enumerable<RadiographyUncheckedCreateWithoutUploadedByInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutUploadedByInput>
    upsert?: Enumerable<RadiographyUpsertWithWhereUniqueWithoutUploadedByInput>
    createMany?: RadiographyCreateManyUploadedByInputEnvelope
    set?: Enumerable<RadiographyWhereUniqueInput>
    disconnect?: Enumerable<RadiographyWhereUniqueInput>
    delete?: Enumerable<RadiographyWhereUniqueInput>
    connect?: Enumerable<RadiographyWhereUniqueInput>
    update?: Enumerable<RadiographyUpdateWithWhereUniqueWithoutUploadedByInput>
    updateMany?: Enumerable<RadiographyUpdateManyWithWhereWithoutUploadedByInput>
    deleteMany?: Enumerable<RadiographyScalarWhereInput>
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<PatientCreateWithoutCreatedByInput>, Enumerable<PatientUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PatientCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<PatientUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: PatientCreateManyCreatedByInputEnvelope
    set?: Enumerable<PatientWhereUniqueInput>
    disconnect?: Enumerable<PatientWhereUniqueInput>
    delete?: Enumerable<PatientWhereUniqueInput>
    connect?: Enumerable<PatientWhereUniqueInput>
    update?: Enumerable<PatientUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<PatientUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<PatientScalarWhereInput>
  }

  export type RadiographyRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutRequestedByInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutRequestedByInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutRequestedByInput>
    upsert?: Enumerable<RadiographyRequestUpsertWithWhereUniqueWithoutRequestedByInput>
    createMany?: RadiographyRequestCreateManyRequestedByInputEnvelope
    set?: Enumerable<RadiographyRequestWhereUniqueInput>
    disconnect?: Enumerable<RadiographyRequestWhereUniqueInput>
    delete?: Enumerable<RadiographyRequestWhereUniqueInput>
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
    update?: Enumerable<RadiographyRequestUpdateWithWhereUniqueWithoutRequestedByInput>
    updateMany?: Enumerable<RadiographyRequestUpdateManyWithWhereWithoutRequestedByInput>
    deleteMany?: Enumerable<RadiographyRequestScalarWhereInput>
  }

  export type RadiographyRequestUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutAssignedToInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutAssignedToInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutAssignedToInput>
    upsert?: Enumerable<RadiographyRequestUpsertWithWhereUniqueWithoutAssignedToInput>
    createMany?: RadiographyRequestCreateManyAssignedToInputEnvelope
    set?: Enumerable<RadiographyRequestWhereUniqueInput>
    disconnect?: Enumerable<RadiographyRequestWhereUniqueInput>
    delete?: Enumerable<RadiographyRequestWhereUniqueInput>
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
    update?: Enumerable<RadiographyRequestUpdateWithWhereUniqueWithoutAssignedToInput>
    updateMany?: Enumerable<RadiographyRequestUpdateManyWithWhereWithoutAssignedToInput>
    deleteMany?: Enumerable<RadiographyRequestScalarWhereInput>
  }

  export type RadiographyUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutUploadedByInput>, Enumerable<RadiographyUncheckedCreateWithoutUploadedByInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutUploadedByInput>
    upsert?: Enumerable<RadiographyUpsertWithWhereUniqueWithoutUploadedByInput>
    createMany?: RadiographyCreateManyUploadedByInputEnvelope
    set?: Enumerable<RadiographyWhereUniqueInput>
    disconnect?: Enumerable<RadiographyWhereUniqueInput>
    delete?: Enumerable<RadiographyWhereUniqueInput>
    connect?: Enumerable<RadiographyWhereUniqueInput>
    update?: Enumerable<RadiographyUpdateWithWhereUniqueWithoutUploadedByInput>
    updateMany?: Enumerable<RadiographyUpdateManyWithWhereWithoutUploadedByInput>
    deleteMany?: Enumerable<RadiographyScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: SubscriptionStatus
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: SubscriptionPlan
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type RadiographyRequestCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutPatientInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutPatientInput>
    createMany?: RadiographyRequestCreateManyPatientInputEnvelope
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
  }

  export type RadiographyRequestUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutPatientInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutPatientInput>
    createMany?: RadiographyRequestCreateManyPatientInputEnvelope
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type RadiographyRequestUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutPatientInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<RadiographyRequestUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: RadiographyRequestCreateManyPatientInputEnvelope
    set?: Enumerable<RadiographyRequestWhereUniqueInput>
    disconnect?: Enumerable<RadiographyRequestWhereUniqueInput>
    delete?: Enumerable<RadiographyRequestWhereUniqueInput>
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
    update?: Enumerable<RadiographyRequestUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<RadiographyRequestUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<RadiographyRequestScalarWhereInput>
  }

  export type RadiographyRequestUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<Enumerable<RadiographyRequestCreateWithoutPatientInput>, Enumerable<RadiographyRequestUncheckedCreateWithoutPatientInput>>
    connectOrCreate?: Enumerable<RadiographyRequestCreateOrConnectWithoutPatientInput>
    upsert?: Enumerable<RadiographyRequestUpsertWithWhereUniqueWithoutPatientInput>
    createMany?: RadiographyRequestCreateManyPatientInputEnvelope
    set?: Enumerable<RadiographyRequestWhereUniqueInput>
    disconnect?: Enumerable<RadiographyRequestWhereUniqueInput>
    delete?: Enumerable<RadiographyRequestWhereUniqueInput>
    connect?: Enumerable<RadiographyRequestWhereUniqueInput>
    update?: Enumerable<RadiographyRequestUpdateWithWhereUniqueWithoutPatientInput>
    updateMany?: Enumerable<RadiographyRequestUpdateManyWithWhereWithoutPatientInput>
    deleteMany?: Enumerable<RadiographyRequestScalarWhereInput>
  }

  export type PatientCreateNestedOneWithoutRadiographyRequestsInput = {
    create?: XOR<PatientCreateWithoutRadiographyRequestsInput, PatientUncheckedCreateWithoutRadiographyRequestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRadiographyRequestsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestedByInput = {
    create?: XOR<UserCreateWithoutRequestedByInput, UserUncheckedCreateWithoutRequestedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedToInput = {
    create?: XOR<UserCreateWithoutAssignedToInput, UserUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedToInput
    connect?: UserWhereUniqueInput
  }

  export type RadiographyCreateNestedManyWithoutRequestInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutRequestInput>, Enumerable<RadiographyUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutRequestInput>
    createMany?: RadiographyCreateManyRequestInputEnvelope
    connect?: Enumerable<RadiographyWhereUniqueInput>
  }

  export type RadiographyUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutRequestInput>, Enumerable<RadiographyUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutRequestInput>
    createMany?: RadiographyCreateManyRequestInputEnvelope
    connect?: Enumerable<RadiographyWhereUniqueInput>
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: RequestStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUpdateOneRequiredWithoutRadiographyRequestsNestedInput = {
    create?: XOR<PatientCreateWithoutRadiographyRequestsInput, PatientUncheckedCreateWithoutRadiographyRequestsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutRadiographyRequestsInput
    upsert?: PatientUpsertWithoutRadiographyRequestsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<PatientUpdateWithoutRadiographyRequestsInput, PatientUncheckedUpdateWithoutRadiographyRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestedByNestedInput = {
    create?: XOR<UserCreateWithoutRequestedByInput, UserUncheckedCreateWithoutRequestedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedByInput
    upsert?: UserUpsertWithoutRequestedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRequestedByInput, UserUncheckedUpdateWithoutRequestedByInput>
  }

  export type UserUpdateOneWithoutAssignedToNestedInput = {
    create?: XOR<UserCreateWithoutAssignedToInput, UserUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedToInput
    upsert?: UserUpsertWithoutAssignedToInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAssignedToInput, UserUncheckedUpdateWithoutAssignedToInput>
  }

  export type RadiographyUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutRequestInput>, Enumerable<RadiographyUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutRequestInput>
    upsert?: Enumerable<RadiographyUpsertWithWhereUniqueWithoutRequestInput>
    createMany?: RadiographyCreateManyRequestInputEnvelope
    set?: Enumerable<RadiographyWhereUniqueInput>
    disconnect?: Enumerable<RadiographyWhereUniqueInput>
    delete?: Enumerable<RadiographyWhereUniqueInput>
    connect?: Enumerable<RadiographyWhereUniqueInput>
    update?: Enumerable<RadiographyUpdateWithWhereUniqueWithoutRequestInput>
    updateMany?: Enumerable<RadiographyUpdateManyWithWhereWithoutRequestInput>
    deleteMany?: Enumerable<RadiographyScalarWhereInput>
  }

  export type RadiographyUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Enumerable<RadiographyCreateWithoutRequestInput>, Enumerable<RadiographyUncheckedCreateWithoutRequestInput>>
    connectOrCreate?: Enumerable<RadiographyCreateOrConnectWithoutRequestInput>
    upsert?: Enumerable<RadiographyUpsertWithWhereUniqueWithoutRequestInput>
    createMany?: RadiographyCreateManyRequestInputEnvelope
    set?: Enumerable<RadiographyWhereUniqueInput>
    disconnect?: Enumerable<RadiographyWhereUniqueInput>
    delete?: Enumerable<RadiographyWhereUniqueInput>
    connect?: Enumerable<RadiographyWhereUniqueInput>
    update?: Enumerable<RadiographyUpdateWithWhereUniqueWithoutRequestInput>
    updateMany?: Enumerable<RadiographyUpdateManyWithWhereWithoutRequestInput>
    deleteMany?: Enumerable<RadiographyScalarWhereInput>
  }

  export type RadiographyRequestCreateNestedOneWithoutRadiographiesInput = {
    create?: XOR<RadiographyRequestCreateWithoutRadiographiesInput, RadiographyRequestUncheckedCreateWithoutRadiographiesInput>
    connectOrCreate?: RadiographyRequestCreateOrConnectWithoutRadiographiesInput
    connect?: RadiographyRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRadiographiesInput = {
    create?: XOR<UserCreateWithoutRadiographiesInput, UserUncheckedCreateWithoutRadiographiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRadiographiesInput
    connect?: UserWhereUniqueInput
  }

  export type RadiographyRequestUpdateOneRequiredWithoutRadiographiesNestedInput = {
    create?: XOR<RadiographyRequestCreateWithoutRadiographiesInput, RadiographyRequestUncheckedCreateWithoutRadiographiesInput>
    connectOrCreate?: RadiographyRequestCreateOrConnectWithoutRadiographiesInput
    upsert?: RadiographyRequestUpsertWithoutRadiographiesInput
    connect?: RadiographyRequestWhereUniqueInput
    update?: XOR<RadiographyRequestUpdateWithoutRadiographiesInput, RadiographyRequestUncheckedUpdateWithoutRadiographiesInput>
  }

  export type UserUpdateOneWithoutRadiographiesNestedInput = {
    create?: XOR<UserCreateWithoutRadiographiesInput, UserUncheckedCreateWithoutRadiographiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRadiographiesInput
    upsert?: UserUpsertWithoutRadiographiesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRadiographiesInput, UserUncheckedUpdateWithoutRadiographiesInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumSubscriptionStatusFilter = {
    equals?: SubscriptionStatus
    in?: Enumerable<SubscriptionStatus>
    notIn?: Enumerable<SubscriptionStatus>
    not?: NestedEnumSubscriptionStatusFilter | SubscriptionStatus
  }

  export type NestedEnumSubscriptionPlanFilter = {
    equals?: SubscriptionPlan
    in?: Enumerable<SubscriptionPlan>
    notIn?: Enumerable<SubscriptionPlan>
    not?: NestedEnumSubscriptionPlanFilter | SubscriptionPlan
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter = {
    equals?: SubscriptionStatus
    in?: Enumerable<SubscriptionStatus>
    notIn?: Enumerable<SubscriptionStatus>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter | SubscriptionStatus
    _count?: NestedIntFilter
    _min?: NestedEnumSubscriptionStatusFilter
    _max?: NestedEnumSubscriptionStatusFilter
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter = {
    equals?: SubscriptionPlan
    in?: Enumerable<SubscriptionPlan>
    notIn?: Enumerable<SubscriptionPlan>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter | SubscriptionPlan
    _count?: NestedIntFilter
    _min?: NestedEnumSubscriptionPlanFilter
    _max?: NestedEnumSubscriptionPlanFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedEnumRequestStatusFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusFilter | RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter = {
    equals?: RequestStatus
    in?: Enumerable<RequestStatus>
    notIn?: Enumerable<RequestStatus>
    not?: NestedEnumRequestStatusWithAggregatesFilter | RequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumRequestStatusFilter
    _max?: NestedEnumRequestStatusFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    status?: SubscriptionStatus
    plan?: SubscriptionPlan
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    status?: SubscriptionStatus
    plan?: SubscriptionPlan
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutCreatedByInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    radiographyRequests?: RadiographyRequestCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    radiographyRequests?: RadiographyRequestUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutCreatedByInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput>
  }

  export type PatientCreateManyCreatedByInputEnvelope = {
    data: Enumerable<PatientCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type RadiographyRequestCreateWithoutRequestedByInput = {
    id?: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutRadiographyRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string
    patientId: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestCreateOrConnectWithoutRequestedByInput = {
    where: RadiographyRequestWhereUniqueInput
    create: XOR<RadiographyRequestCreateWithoutRequestedByInput, RadiographyRequestUncheckedCreateWithoutRequestedByInput>
  }

  export type RadiographyRequestCreateManyRequestedByInputEnvelope = {
    data: Enumerable<RadiographyRequestCreateManyRequestedByInput>
    skipDuplicates?: boolean
  }

  export type RadiographyRequestCreateWithoutAssignedToInput = {
    id?: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutRadiographyRequestsInput
    requestedBy: UserCreateNestedOneWithoutRequestedByInput
    radiographies?: RadiographyCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    patientId: string
    requestedById: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestCreateOrConnectWithoutAssignedToInput = {
    where: RadiographyRequestWhereUniqueInput
    create: XOR<RadiographyRequestCreateWithoutAssignedToInput, RadiographyRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type RadiographyRequestCreateManyAssignedToInputEnvelope = {
    data: Enumerable<RadiographyRequestCreateManyAssignedToInput>
    skipDuplicates?: boolean
  }

  export type RadiographyCreateWithoutUploadedByInput = {
    id?: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request: RadiographyRequestCreateNestedOneWithoutRadiographiesInput
  }

  export type RadiographyUncheckedCreateWithoutUploadedByInput = {
    id?: string
    requestId: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadiographyCreateOrConnectWithoutUploadedByInput = {
    where: RadiographyWhereUniqueInput
    create: XOR<RadiographyCreateWithoutUploadedByInput, RadiographyUncheckedCreateWithoutUploadedByInput>
  }

  export type RadiographyCreateManyUploadedByInputEnvelope = {
    data: Enumerable<RadiographyCreateManyUploadedByInput>
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | SubscriptionStatus
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | SubscriptionPlan
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | SubscriptionStatus
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | SubscriptionPlan
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutCreatedByInput, PatientUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PatientCreateWithoutCreatedByInput, PatientUncheckedCreateWithoutCreatedByInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutCreatedByInput, PatientUncheckedUpdateWithoutCreatedByInput>
  }

  export type PatientUpdateManyWithWhereWithoutCreatedByInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutPatientsInput>
  }

  export type PatientScalarWhereInput = {
    AND?: Enumerable<PatientScalarWhereInput>
    OR?: Enumerable<PatientScalarWhereInput>
    NOT?: Enumerable<PatientScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    birthDate?: DateTimeFilter | Date | string
    cpf?: StringFilter | string
    address?: StringFilter | string
    phone?: StringFilter | string
    notes?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deletedAt?: DateTimeNullableFilter | Date | string | null
    createdById?: StringNullableFilter | string | null
  }

  export type RadiographyRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: RadiographyRequestWhereUniqueInput
    update: XOR<RadiographyRequestUpdateWithoutRequestedByInput, RadiographyRequestUncheckedUpdateWithoutRequestedByInput>
    create: XOR<RadiographyRequestCreateWithoutRequestedByInput, RadiographyRequestUncheckedCreateWithoutRequestedByInput>
  }

  export type RadiographyRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: RadiographyRequestWhereUniqueInput
    data: XOR<RadiographyRequestUpdateWithoutRequestedByInput, RadiographyRequestUncheckedUpdateWithoutRequestedByInput>
  }

  export type RadiographyRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: RadiographyRequestScalarWhereInput
    data: XOR<RadiographyRequestUpdateManyMutationInput, RadiographyRequestUncheckedUpdateManyWithoutRequestedByInput>
  }

  export type RadiographyRequestScalarWhereInput = {
    AND?: Enumerable<RadiographyRequestScalarWhereInput>
    OR?: Enumerable<RadiographyRequestScalarWhereInput>
    NOT?: Enumerable<RadiographyRequestScalarWhereInput>
    id?: StringFilter | string
    patientId?: StringFilter | string
    requestedById?: StringFilter | string
    assignedToId?: StringNullableFilter | string | null
    status?: EnumRequestStatusFilter | RequestStatus
    modality?: StringNullableFilter | string | null
    priority?: IntNullableFilter | number | null
    description?: StringNullableFilter | string | null
    scheduledAt?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    cancelledAt?: DateTimeNullableFilter | Date | string | null
    completedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type RadiographyRequestUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: RadiographyRequestWhereUniqueInput
    update: XOR<RadiographyRequestUpdateWithoutAssignedToInput, RadiographyRequestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<RadiographyRequestCreateWithoutAssignedToInput, RadiographyRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type RadiographyRequestUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: RadiographyRequestWhereUniqueInput
    data: XOR<RadiographyRequestUpdateWithoutAssignedToInput, RadiographyRequestUncheckedUpdateWithoutAssignedToInput>
  }

  export type RadiographyRequestUpdateManyWithWhereWithoutAssignedToInput = {
    where: RadiographyRequestScalarWhereInput
    data: XOR<RadiographyRequestUpdateManyMutationInput, RadiographyRequestUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type RadiographyUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: RadiographyWhereUniqueInput
    update: XOR<RadiographyUpdateWithoutUploadedByInput, RadiographyUncheckedUpdateWithoutUploadedByInput>
    create: XOR<RadiographyCreateWithoutUploadedByInput, RadiographyUncheckedCreateWithoutUploadedByInput>
  }

  export type RadiographyUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: RadiographyWhereUniqueInput
    data: XOR<RadiographyUpdateWithoutUploadedByInput, RadiographyUncheckedUpdateWithoutUploadedByInput>
  }

  export type RadiographyUpdateManyWithWhereWithoutUploadedByInput = {
    where: RadiographyScalarWhereInput
    data: XOR<RadiographyUpdateManyMutationInput, RadiographyUncheckedUpdateManyWithoutRadiographiesInput>
  }

  export type RadiographyScalarWhereInput = {
    AND?: Enumerable<RadiographyScalarWhereInput>
    OR?: Enumerable<RadiographyScalarWhereInput>
    NOT?: Enumerable<RadiographyScalarWhereInput>
    id?: StringFilter | string
    requestId?: StringFilter | string
    filePath?: StringFilter | string
    originalName?: StringNullableFilter | string | null
    contentType?: StringNullableFilter | string | null
    fileSize?: IntNullableFilter | number | null
    uploadedById?: StringNullableFilter | string | null
    uploadedAt?: DateTimeFilter | Date | string
    aiResult?: JsonNullableFilter
    processedAt?: DateTimeNullableFilter | Date | string | null
    checksum?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestUncheckedCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestUncheckedCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUncheckedUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserCreateWithoutPatientsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    requestedBy?: RadiographyRequestCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    requestedBy?: RadiographyRequestUncheckedCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestUncheckedCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type RadiographyRequestCreateWithoutPatientInput = {
    id?: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    requestedBy: UserCreateNestedOneWithoutRequestedByInput
    assignedTo?: UserCreateNestedOneWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestUncheckedCreateWithoutPatientInput = {
    id?: string
    requestedById: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RadiographyRequestCreateOrConnectWithoutPatientInput = {
    where: RadiographyRequestWhereUniqueInput
    create: XOR<RadiographyRequestCreateWithoutPatientInput, RadiographyRequestUncheckedCreateWithoutPatientInput>
  }

  export type RadiographyRequestCreateManyPatientInputEnvelope = {
    data: Enumerable<RadiographyRequestCreateManyPatientInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    requestedBy?: RadiographyRequestUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    requestedBy?: RadiographyRequestUncheckedUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type RadiographyRequestUpsertWithWhereUniqueWithoutPatientInput = {
    where: RadiographyRequestWhereUniqueInput
    update: XOR<RadiographyRequestUpdateWithoutPatientInput, RadiographyRequestUncheckedUpdateWithoutPatientInput>
    create: XOR<RadiographyRequestCreateWithoutPatientInput, RadiographyRequestUncheckedCreateWithoutPatientInput>
  }

  export type RadiographyRequestUpdateWithWhereUniqueWithoutPatientInput = {
    where: RadiographyRequestWhereUniqueInput
    data: XOR<RadiographyRequestUpdateWithoutPatientInput, RadiographyRequestUncheckedUpdateWithoutPatientInput>
  }

  export type RadiographyRequestUpdateManyWithWhereWithoutPatientInput = {
    where: RadiographyRequestScalarWhereInput
    data: XOR<RadiographyRequestUpdateManyMutationInput, RadiographyRequestUncheckedUpdateManyWithoutRadiographyRequestsInput>
  }

  export type PatientCreateWithoutRadiographyRequestsInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: UserCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateWithoutRadiographyRequestsInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdById?: string | null
  }

  export type PatientCreateOrConnectWithoutRadiographyRequestsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutRadiographyRequestsInput, PatientUncheckedCreateWithoutRadiographyRequestsInput>
  }

  export type UserCreateWithoutRequestedByInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    patients?: PatientCreateNestedManyWithoutCreatedByInput
    assignedTo?: RadiographyRequestCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutRequestedByInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTo?: RadiographyRequestUncheckedCreateNestedManyWithoutAssignedToInput
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutRequestedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestedByInput, UserUncheckedCreateWithoutRequestedByInput>
  }

  export type UserCreateWithoutAssignedToInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    patients?: PatientCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestCreateNestedManyWithoutRequestedByInput
    radiographies?: RadiographyCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutAssignedToInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestUncheckedCreateNestedManyWithoutRequestedByInput
    radiographies?: RadiographyUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutAssignedToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedToInput, UserUncheckedCreateWithoutAssignedToInput>
  }

  export type RadiographyCreateWithoutRequestInput = {
    id?: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutRadiographiesInput
  }

  export type RadiographyUncheckedCreateWithoutRequestInput = {
    id?: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedById?: string | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadiographyCreateOrConnectWithoutRequestInput = {
    where: RadiographyWhereUniqueInput
    create: XOR<RadiographyCreateWithoutRequestInput, RadiographyUncheckedCreateWithoutRequestInput>
  }

  export type RadiographyCreateManyRequestInputEnvelope = {
    data: Enumerable<RadiographyCreateManyRequestInput>
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutRadiographyRequestsInput = {
    update: XOR<PatientUpdateWithoutRadiographyRequestsInput, PatientUncheckedUpdateWithoutRadiographyRequestsInput>
    create: XOR<PatientCreateWithoutRadiographyRequestsInput, PatientUncheckedCreateWithoutRadiographyRequestsInput>
  }

  export type PatientUpdateWithoutRadiographyRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutRadiographyRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutRequestedByInput = {
    update: XOR<UserUpdateWithoutRequestedByInput, UserUncheckedUpdateWithoutRequestedByInput>
    create: XOR<UserCreateWithoutRequestedByInput, UserUncheckedCreateWithoutRequestedByInput>
  }

  export type UserUpdateWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutCreatedByNestedInput
    assignedTo?: RadiographyRequestUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTo?: RadiographyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    radiographies?: RadiographyUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUpsertWithoutAssignedToInput = {
    update: XOR<UserUpdateWithoutAssignedToInput, UserUncheckedUpdateWithoutAssignedToInput>
    create: XOR<UserCreateWithoutAssignedToInput, UserUncheckedCreateWithoutAssignedToInput>
  }

  export type UserUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUpdateManyWithoutRequestedByNestedInput
    radiographies?: RadiographyUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUncheckedUpdateManyWithoutRequestedByNestedInput
    radiographies?: RadiographyUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type RadiographyUpsertWithWhereUniqueWithoutRequestInput = {
    where: RadiographyWhereUniqueInput
    update: XOR<RadiographyUpdateWithoutRequestInput, RadiographyUncheckedUpdateWithoutRequestInput>
    create: XOR<RadiographyCreateWithoutRequestInput, RadiographyUncheckedCreateWithoutRequestInput>
  }

  export type RadiographyUpdateWithWhereUniqueWithoutRequestInput = {
    where: RadiographyWhereUniqueInput
    data: XOR<RadiographyUpdateWithoutRequestInput, RadiographyUncheckedUpdateWithoutRequestInput>
  }

  export type RadiographyUpdateManyWithWhereWithoutRequestInput = {
    where: RadiographyScalarWhereInput
    data: XOR<RadiographyUpdateManyMutationInput, RadiographyUncheckedUpdateManyWithoutRadiographiesInput>
  }

  export type RadiographyRequestCreateWithoutRadiographiesInput = {
    id?: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutRadiographyRequestsInput
    requestedBy: UserCreateNestedOneWithoutRequestedByInput
    assignedTo?: UserCreateNestedOneWithoutAssignedToInput
  }

  export type RadiographyRequestUncheckedCreateWithoutRadiographiesInput = {
    id?: string
    patientId: string
    requestedById: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type RadiographyRequestCreateOrConnectWithoutRadiographiesInput = {
    where: RadiographyRequestWhereUniqueInput
    create: XOR<RadiographyRequestCreateWithoutRadiographiesInput, RadiographyRequestUncheckedCreateWithoutRadiographiesInput>
  }

  export type UserCreateWithoutRadiographiesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionCreateNestedOneWithoutUserInput
    patients?: PatientCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutRadiographiesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role?: Role
    address: string
    phone: string
    isRadiography?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subscriptions?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutCreatedByInput
    requestedBy?: RadiographyRequestUncheckedCreateNestedManyWithoutRequestedByInput
    assignedTo?: RadiographyRequestUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutRadiographiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRadiographiesInput, UserUncheckedCreateWithoutRadiographiesInput>
  }

  export type RadiographyRequestUpsertWithoutRadiographiesInput = {
    update: XOR<RadiographyRequestUpdateWithoutRadiographiesInput, RadiographyRequestUncheckedUpdateWithoutRadiographiesInput>
    create: XOR<RadiographyRequestCreateWithoutRadiographiesInput, RadiographyRequestUncheckedCreateWithoutRadiographiesInput>
  }

  export type RadiographyRequestUpdateWithoutRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutRadiographyRequestsNestedInput
    requestedBy?: UserUpdateOneRequiredWithoutRequestedByNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedToNestedInput
  }

  export type RadiographyRequestUncheckedUpdateWithoutRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutRadiographiesInput = {
    update: XOR<UserUpdateWithoutRadiographiesInput, UserUncheckedUpdateWithoutRadiographiesInput>
    create: XOR<UserCreateWithoutRadiographiesInput, UserUncheckedCreateWithoutRadiographiesInput>
  }

  export type UserUpdateWithoutRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUpdateOneWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isRadiography?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptions?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCreatedByNestedInput
    requestedBy?: RadiographyRequestUncheckedUpdateManyWithoutRequestedByNestedInput
    assignedTo?: RadiographyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type PatientCreateManyCreatedByInput = {
    id?: string
    name: string
    email: string
    birthDate: Date | string
    cpf: string
    address: string
    phone: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RadiographyRequestCreateManyRequestedByInput = {
    id?: string
    patientId: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type RadiographyRequestCreateManyAssignedToInput = {
    id?: string
    patientId: string
    requestedById: string
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type RadiographyCreateManyUploadedByInput = {
    id?: string
    requestId: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    radiographyRequests?: RadiographyRequestUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    radiographyRequests?: RadiographyRequestUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RadiographyRequestUpdateWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutRadiographyRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    radiographies?: RadiographyUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RadiographyRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutRadiographyRequestsNestedInput
    requestedBy?: UserUpdateOneRequiredWithoutRequestedByNestedInput
    radiographies?: RadiographyUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    radiographies?: RadiographyUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RadiographyUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RadiographyRequestUpdateOneRequiredWithoutRadiographiesNestedInput
  }

  export type RadiographyUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadiographyUncheckedUpdateManyWithoutRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadiographyRequestCreateManyPatientInput = {
    id?: string
    requestedById: string
    assignedToId?: string | null
    status?: RequestStatus
    modality?: string | null
    priority?: number | null
    description?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type RadiographyRequestUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestedBy?: UserUpdateOneRequiredWithoutRequestedByNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedToNestedInput
    radiographies?: RadiographyUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    radiographies?: RadiographyUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RadiographyRequestUncheckedUpdateManyWithoutRadiographyRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | RequestStatus
    modality?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RadiographyCreateManyRequestInput = {
    id?: string
    filePath: string
    originalName?: string | null
    contentType?: string | null
    fileSize?: number | null
    uploadedById?: string | null
    uploadedAt?: Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    checksum?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RadiographyUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutRadiographiesNestedInput
  }

  export type RadiographyUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    contentType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiResult?: NullableJsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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