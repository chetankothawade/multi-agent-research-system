
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ResearchSession
 * 
 */
export type ResearchSession = $Result.DefaultSelection<Prisma.$ResearchSessionPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model AgentStep
 * 
 */
export type AgentStep = $Result.DefaultSelection<Prisma.$AgentStepPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model ModelPricing
 * 
 */
export type ModelPricing = $Result.DefaultSelection<Prisma.$ModelPricingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const AgentStatus: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed'
};

export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type AgentStatus = $Enums.AgentStatus

export const AgentStatus: typeof $Enums.AgentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.researchSession`: Exposes CRUD operations for the **ResearchSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchSessions
    * const researchSessions = await prisma.researchSession.findMany()
    * ```
    */
  get researchSession(): Prisma.ResearchSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentStep`: Exposes CRUD operations for the **AgentStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentSteps
    * const agentSteps = await prisma.agentStep.findMany()
    * ```
    */
  get agentStep(): Prisma.AgentStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelPricing`: Exposes CRUD operations for the **ModelPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelPricings
    * const modelPricings = await prisma.modelPricing.findMany()
    * ```
    */
  get modelPricing(): Prisma.ModelPricingDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    User: 'User',
    ResearchSession: 'ResearchSession',
    Agent: 'Agent',
    AgentStep: 'AgentStep',
    Report: 'Report',
    ModelPricing: 'ModelPricing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "researchSession" | "agent" | "agentStep" | "report" | "modelPricing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      ResearchSession: {
        payload: Prisma.$ResearchSessionPayload<ExtArgs>
        fields: Prisma.ResearchSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearchSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearchSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>
          }
          findFirst: {
            args: Prisma.ResearchSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearchSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>
          }
          findMany: {
            args: Prisma.ResearchSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>[]
          }
          create: {
            args: Prisma.ResearchSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>
          }
          createMany: {
            args: Prisma.ResearchSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResearchSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>
          }
          update: {
            args: Prisma.ResearchSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>
          }
          deleteMany: {
            args: Prisma.ResearchSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearchSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResearchSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchSessionPayload>
          }
          aggregate: {
            args: Prisma.ResearchSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearchSession>
          }
          groupBy: {
            args: Prisma.ResearchSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearchSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearchSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ResearchSessionCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      AgentStep: {
        payload: Prisma.$AgentStepPayload<ExtArgs>
        fields: Prisma.AgentStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>
          }
          findFirst: {
            args: Prisma.AgentStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>
          }
          findMany: {
            args: Prisma.AgentStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>[]
          }
          create: {
            args: Prisma.AgentStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>
          }
          createMany: {
            args: Prisma.AgentStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgentStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>
          }
          update: {
            args: Prisma.AgentStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>
          }
          deleteMany: {
            args: Prisma.AgentStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentStepPayload>
          }
          aggregate: {
            args: Prisma.AgentStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentStep>
          }
          groupBy: {
            args: Prisma.AgentStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentStepCountArgs<ExtArgs>
            result: $Utils.Optional<AgentStepCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      ModelPricing: {
        payload: Prisma.$ModelPricingPayload<ExtArgs>
        fields: Prisma.ModelPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>
          }
          findFirst: {
            args: Prisma.ModelPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>
          }
          findMany: {
            args: Prisma.ModelPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>[]
          }
          create: {
            args: Prisma.ModelPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>
          }
          createMany: {
            args: Prisma.ModelPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModelPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>
          }
          update: {
            args: Prisma.ModelPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>
          }
          deleteMany: {
            args: Prisma.ModelPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModelPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPricingPayload>
          }
          aggregate: {
            args: Prisma.ModelPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelPricing>
          }
          groupBy: {
            args: Prisma.ModelPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelPricingCountArgs<ExtArgs>
            result: $Utils.Optional<ModelPricingCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    researchSession?: ResearchSessionOmit
    agent?: AgentOmit
    agentStep?: AgentStepOmit
    report?: ReportOmit
    modelPricing?: ModelPricingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    researchSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researchSessions?: boolean | UserCountOutputTypeCountResearchSessionsArgs
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
  export type UserCountOutputTypeCountResearchSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchSessionWhereInput
  }


  /**
   * Count Type ResearchSessionCountOutputType
   */

  export type ResearchSessionCountOutputType = {
    agents: number
  }

  export type ResearchSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | ResearchSessionCountOutputTypeCountAgentsArgs
  }

  // Custom InputTypes
  /**
   * ResearchSessionCountOutputType without action
   */
  export type ResearchSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSessionCountOutputType
     */
    select?: ResearchSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResearchSessionCountOutputType without action
   */
  export type ResearchSessionCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    steps: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | AgentCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentStepWhereInput
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
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
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
    name: string
    email: string
    passwordHash: string
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
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    researchSessions?: boolean | User$researchSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researchSessions?: boolean | User$researchSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      researchSessions: Prisma.$ResearchSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
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
    researchSessions<T extends User$researchSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$researchSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.researchSessions
   */
  export type User$researchSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    where?: ResearchSessionWhereInput
    orderBy?: ResearchSessionOrderByWithRelationInput | ResearchSessionOrderByWithRelationInput[]
    cursor?: ResearchSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResearchSessionScalarFieldEnum | ResearchSessionScalarFieldEnum[]
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
   * Model ResearchSession
   */

  export type AggregateResearchSession = {
    _count: ResearchSessionCountAggregateOutputType | null
    _avg: ResearchSessionAvgAggregateOutputType | null
    _sum: ResearchSessionSumAggregateOutputType | null
    _min: ResearchSessionMinAggregateOutputType | null
    _max: ResearchSessionMaxAggregateOutputType | null
  }

  export type ResearchSessionAvgAggregateOutputType = {
    totalTokens: number | null
    totalCost: Decimal | null
    totalSteps: number | null
  }

  export type ResearchSessionSumAggregateOutputType = {
    totalTokens: number | null
    totalCost: Decimal | null
    totalSteps: number | null
  }

  export type ResearchSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    topic: string | null
    status: $Enums.SessionStatus | null
    totalTokens: number | null
    totalCost: Decimal | null
    totalSteps: number | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ResearchSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    topic: string | null
    status: $Enums.SessionStatus | null
    totalTokens: number | null
    totalCost: Decimal | null
    totalSteps: number | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ResearchSessionCountAggregateOutputType = {
    id: number
    userId: number
    topic: number
    status: number
    totalTokens: number
    totalCost: number
    totalSteps: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type ResearchSessionAvgAggregateInputType = {
    totalTokens?: true
    totalCost?: true
    totalSteps?: true
  }

  export type ResearchSessionSumAggregateInputType = {
    totalTokens?: true
    totalCost?: true
    totalSteps?: true
  }

  export type ResearchSessionMinAggregateInputType = {
    id?: true
    userId?: true
    topic?: true
    status?: true
    totalTokens?: true
    totalCost?: true
    totalSteps?: true
    startedAt?: true
    completedAt?: true
  }

  export type ResearchSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    topic?: true
    status?: true
    totalTokens?: true
    totalCost?: true
    totalSteps?: true
    startedAt?: true
    completedAt?: true
  }

  export type ResearchSessionCountAggregateInputType = {
    id?: true
    userId?: true
    topic?: true
    status?: true
    totalTokens?: true
    totalCost?: true
    totalSteps?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type ResearchSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchSession to aggregate.
     */
    where?: ResearchSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchSessions to fetch.
     */
    orderBy?: ResearchSessionOrderByWithRelationInput | ResearchSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchSessions
    **/
    _count?: true | ResearchSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchSessionMaxAggregateInputType
  }

  export type GetResearchSessionAggregateType<T extends ResearchSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchSession[P]>
      : GetScalarType<T[P], AggregateResearchSession[P]>
  }




  export type ResearchSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchSessionWhereInput
    orderBy?: ResearchSessionOrderByWithAggregationInput | ResearchSessionOrderByWithAggregationInput[]
    by: ResearchSessionScalarFieldEnum[] | ResearchSessionScalarFieldEnum
    having?: ResearchSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchSessionCountAggregateInputType | true
    _avg?: ResearchSessionAvgAggregateInputType
    _sum?: ResearchSessionSumAggregateInputType
    _min?: ResearchSessionMinAggregateInputType
    _max?: ResearchSessionMaxAggregateInputType
  }

  export type ResearchSessionGroupByOutputType = {
    id: string
    userId: string
    topic: string
    status: $Enums.SessionStatus
    totalTokens: number
    totalCost: Decimal
    totalSteps: number
    startedAt: Date
    completedAt: Date | null
    _count: ResearchSessionCountAggregateOutputType | null
    _avg: ResearchSessionAvgAggregateOutputType | null
    _sum: ResearchSessionSumAggregateOutputType | null
    _min: ResearchSessionMinAggregateOutputType | null
    _max: ResearchSessionMaxAggregateOutputType | null
  }

  type GetResearchSessionGroupByPayload<T extends ResearchSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchSessionGroupByOutputType[P]>
        }
      >
    >


  export type ResearchSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    topic?: boolean
    status?: boolean
    totalTokens?: boolean
    totalCost?: boolean
    totalSteps?: boolean
    startedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    agents?: boolean | ResearchSession$agentsArgs<ExtArgs>
    report?: boolean | ResearchSession$reportArgs<ExtArgs>
    _count?: boolean | ResearchSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["researchSession"]>



  export type ResearchSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    topic?: boolean
    status?: boolean
    totalTokens?: boolean
    totalCost?: boolean
    totalSteps?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type ResearchSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "topic" | "status" | "totalTokens" | "totalCost" | "totalSteps" | "startedAt" | "completedAt", ExtArgs["result"]["researchSession"]>
  export type ResearchSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    agents?: boolean | ResearchSession$agentsArgs<ExtArgs>
    report?: boolean | ResearchSession$reportArgs<ExtArgs>
    _count?: boolean | ResearchSessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResearchSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearchSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      agents: Prisma.$AgentPayload<ExtArgs>[]
      report: Prisma.$ReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      topic: string
      status: $Enums.SessionStatus
      totalTokens: number
      totalCost: Prisma.Decimal
      totalSteps: number
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["researchSession"]>
    composites: {}
  }

  type ResearchSessionGetPayload<S extends boolean | null | undefined | ResearchSessionDefaultArgs> = $Result.GetResult<Prisma.$ResearchSessionPayload, S>

  type ResearchSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResearchSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResearchSessionCountAggregateInputType | true
    }

  export interface ResearchSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearchSession'], meta: { name: 'ResearchSession' } }
    /**
     * Find zero or one ResearchSession that matches the filter.
     * @param {ResearchSessionFindUniqueArgs} args - Arguments to find a ResearchSession
     * @example
     * // Get one ResearchSession
     * const researchSession = await prisma.researchSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearchSessionFindUniqueArgs>(args: SelectSubset<T, ResearchSessionFindUniqueArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResearchSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResearchSessionFindUniqueOrThrowArgs} args - Arguments to find a ResearchSession
     * @example
     * // Get one ResearchSession
     * const researchSession = await prisma.researchSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearchSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearchSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearchSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionFindFirstArgs} args - Arguments to find a ResearchSession
     * @example
     * // Get one ResearchSession
     * const researchSession = await prisma.researchSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearchSessionFindFirstArgs>(args?: SelectSubset<T, ResearchSessionFindFirstArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResearchSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionFindFirstOrThrowArgs} args - Arguments to find a ResearchSession
     * @example
     * // Get one ResearchSession
     * const researchSession = await prisma.researchSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearchSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearchSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResearchSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchSessions
     * const researchSessions = await prisma.researchSession.findMany()
     * 
     * // Get first 10 ResearchSessions
     * const researchSessions = await prisma.researchSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchSessionWithIdOnly = await prisma.researchSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearchSessionFindManyArgs>(args?: SelectSubset<T, ResearchSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResearchSession.
     * @param {ResearchSessionCreateArgs} args - Arguments to create a ResearchSession.
     * @example
     * // Create one ResearchSession
     * const ResearchSession = await prisma.researchSession.create({
     *   data: {
     *     // ... data to create a ResearchSession
     *   }
     * })
     * 
     */
    create<T extends ResearchSessionCreateArgs>(args: SelectSubset<T, ResearchSessionCreateArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResearchSessions.
     * @param {ResearchSessionCreateManyArgs} args - Arguments to create many ResearchSessions.
     * @example
     * // Create many ResearchSessions
     * const researchSession = await prisma.researchSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearchSessionCreateManyArgs>(args?: SelectSubset<T, ResearchSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResearchSession.
     * @param {ResearchSessionDeleteArgs} args - Arguments to delete one ResearchSession.
     * @example
     * // Delete one ResearchSession
     * const ResearchSession = await prisma.researchSession.delete({
     *   where: {
     *     // ... filter to delete one ResearchSession
     *   }
     * })
     * 
     */
    delete<T extends ResearchSessionDeleteArgs>(args: SelectSubset<T, ResearchSessionDeleteArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResearchSession.
     * @param {ResearchSessionUpdateArgs} args - Arguments to update one ResearchSession.
     * @example
     * // Update one ResearchSession
     * const researchSession = await prisma.researchSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearchSessionUpdateArgs>(args: SelectSubset<T, ResearchSessionUpdateArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResearchSessions.
     * @param {ResearchSessionDeleteManyArgs} args - Arguments to filter ResearchSessions to delete.
     * @example
     * // Delete a few ResearchSessions
     * const { count } = await prisma.researchSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearchSessionDeleteManyArgs>(args?: SelectSubset<T, ResearchSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchSessions
     * const researchSession = await prisma.researchSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearchSessionUpdateManyArgs>(args: SelectSubset<T, ResearchSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchSession.
     * @param {ResearchSessionUpsertArgs} args - Arguments to update or create a ResearchSession.
     * @example
     * // Update or create a ResearchSession
     * const researchSession = await prisma.researchSession.upsert({
     *   create: {
     *     // ... data to create a ResearchSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchSession we want to update
     *   }
     * })
     */
    upsert<T extends ResearchSessionUpsertArgs>(args: SelectSubset<T, ResearchSessionUpsertArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResearchSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionCountArgs} args - Arguments to filter ResearchSessions to count.
     * @example
     * // Count the number of ResearchSessions
     * const count = await prisma.researchSession.count({
     *   where: {
     *     // ... the filter for the ResearchSessions we want to count
     *   }
     * })
    **/
    count<T extends ResearchSessionCountArgs>(
      args?: Subset<T, ResearchSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchSessionAggregateArgs>(args: Subset<T, ResearchSessionAggregateArgs>): Prisma.PrismaPromise<GetResearchSessionAggregateType<T>>

    /**
     * Group by ResearchSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchSessionGroupByArgs} args - Group by arguments.
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
      T extends ResearchSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchSessionGroupByArgs['orderBy'] }
        : { orderBy?: ResearchSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResearchSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearchSession model
   */
  readonly fields: ResearchSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearchSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agents<T extends ResearchSession$agentsArgs<ExtArgs> = {}>(args?: Subset<T, ResearchSession$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends ResearchSession$reportArgs<ExtArgs> = {}>(args?: Subset<T, ResearchSession$reportArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResearchSession model
   */
  interface ResearchSessionFieldRefs {
    readonly id: FieldRef<"ResearchSession", 'String'>
    readonly userId: FieldRef<"ResearchSession", 'String'>
    readonly topic: FieldRef<"ResearchSession", 'String'>
    readonly status: FieldRef<"ResearchSession", 'SessionStatus'>
    readonly totalTokens: FieldRef<"ResearchSession", 'Int'>
    readonly totalCost: FieldRef<"ResearchSession", 'Decimal'>
    readonly totalSteps: FieldRef<"ResearchSession", 'Int'>
    readonly startedAt: FieldRef<"ResearchSession", 'DateTime'>
    readonly completedAt: FieldRef<"ResearchSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResearchSession findUnique
   */
  export type ResearchSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * Filter, which ResearchSession to fetch.
     */
    where: ResearchSessionWhereUniqueInput
  }

  /**
   * ResearchSession findUniqueOrThrow
   */
  export type ResearchSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * Filter, which ResearchSession to fetch.
     */
    where: ResearchSessionWhereUniqueInput
  }

  /**
   * ResearchSession findFirst
   */
  export type ResearchSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * Filter, which ResearchSession to fetch.
     */
    where?: ResearchSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchSessions to fetch.
     */
    orderBy?: ResearchSessionOrderByWithRelationInput | ResearchSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchSessions.
     */
    cursor?: ResearchSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchSessions.
     */
    distinct?: ResearchSessionScalarFieldEnum | ResearchSessionScalarFieldEnum[]
  }

  /**
   * ResearchSession findFirstOrThrow
   */
  export type ResearchSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * Filter, which ResearchSession to fetch.
     */
    where?: ResearchSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchSessions to fetch.
     */
    orderBy?: ResearchSessionOrderByWithRelationInput | ResearchSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchSessions.
     */
    cursor?: ResearchSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchSessions.
     */
    distinct?: ResearchSessionScalarFieldEnum | ResearchSessionScalarFieldEnum[]
  }

  /**
   * ResearchSession findMany
   */
  export type ResearchSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * Filter, which ResearchSessions to fetch.
     */
    where?: ResearchSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchSessions to fetch.
     */
    orderBy?: ResearchSessionOrderByWithRelationInput | ResearchSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchSessions.
     */
    cursor?: ResearchSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchSessions.
     */
    distinct?: ResearchSessionScalarFieldEnum | ResearchSessionScalarFieldEnum[]
  }

  /**
   * ResearchSession create
   */
  export type ResearchSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ResearchSession.
     */
    data: XOR<ResearchSessionCreateInput, ResearchSessionUncheckedCreateInput>
  }

  /**
   * ResearchSession createMany
   */
  export type ResearchSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearchSessions.
     */
    data: ResearchSessionCreateManyInput | ResearchSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearchSession update
   */
  export type ResearchSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ResearchSession.
     */
    data: XOR<ResearchSessionUpdateInput, ResearchSessionUncheckedUpdateInput>
    /**
     * Choose, which ResearchSession to update.
     */
    where: ResearchSessionWhereUniqueInput
  }

  /**
   * ResearchSession updateMany
   */
  export type ResearchSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearchSessions.
     */
    data: XOR<ResearchSessionUpdateManyMutationInput, ResearchSessionUncheckedUpdateManyInput>
    /**
     * Filter which ResearchSessions to update
     */
    where?: ResearchSessionWhereInput
    /**
     * Limit how many ResearchSessions to update.
     */
    limit?: number
  }

  /**
   * ResearchSession upsert
   */
  export type ResearchSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ResearchSession to update in case it exists.
     */
    where: ResearchSessionWhereUniqueInput
    /**
     * In case the ResearchSession found by the `where` argument doesn't exist, create a new ResearchSession with this data.
     */
    create: XOR<ResearchSessionCreateInput, ResearchSessionUncheckedCreateInput>
    /**
     * In case the ResearchSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchSessionUpdateInput, ResearchSessionUncheckedUpdateInput>
  }

  /**
   * ResearchSession delete
   */
  export type ResearchSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
    /**
     * Filter which ResearchSession to delete.
     */
    where: ResearchSessionWhereUniqueInput
  }

  /**
   * ResearchSession deleteMany
   */
  export type ResearchSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchSessions to delete
     */
    where?: ResearchSessionWhereInput
    /**
     * Limit how many ResearchSessions to delete.
     */
    limit?: number
  }

  /**
   * ResearchSession.agents
   */
  export type ResearchSession$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * ResearchSession.report
   */
  export type ResearchSession$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
  }

  /**
   * ResearchSession without action
   */
  export type ResearchSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchSession
     */
    select?: ResearchSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResearchSession
     */
    omit?: ResearchSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResearchSessionInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    tokenUsage: number | null
    cost: Decimal | null
    executionTimeMs: number | null
    retries: number | null
  }

  export type AgentSumAggregateOutputType = {
    tokenUsage: number | null
    cost: Decimal | null
    executionTimeMs: number | null
    retries: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    agentName: string | null
    status: $Enums.AgentStatus | null
    tokenUsage: number | null
    cost: Decimal | null
    executionTimeMs: number | null
    retries: number | null
    error: string | null
    createdAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    agentName: string | null
    status: $Enums.AgentStatus | null
    tokenUsage: number | null
    cost: Decimal | null
    executionTimeMs: number | null
    retries: number | null
    error: string | null
    createdAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    sessionId: number
    agentName: number
    status: number
    inputData: number
    outputData: number
    tokenUsage: number
    cost: number
    executionTimeMs: number
    retries: number
    error: number
    createdAt: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    tokenUsage?: true
    cost?: true
    executionTimeMs?: true
    retries?: true
  }

  export type AgentSumAggregateInputType = {
    tokenUsage?: true
    cost?: true
    executionTimeMs?: true
    retries?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    sessionId?: true
    agentName?: true
    status?: true
    tokenUsage?: true
    cost?: true
    executionTimeMs?: true
    retries?: true
    error?: true
    createdAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    sessionId?: true
    agentName?: true
    status?: true
    tokenUsage?: true
    cost?: true
    executionTimeMs?: true
    retries?: true
    error?: true
    createdAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    sessionId?: true
    agentName?: true
    status?: true
    inputData?: true
    outputData?: true
    tokenUsage?: true
    cost?: true
    executionTimeMs?: true
    retries?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    sessionId: string
    agentName: string
    status: $Enums.AgentStatus
    inputData: JsonValue | null
    outputData: JsonValue | null
    tokenUsage: number
    cost: Decimal
    executionTimeMs: number
    retries: number
    error: string | null
    createdAt: Date
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    agentName?: boolean
    status?: boolean
    inputData?: boolean
    outputData?: boolean
    tokenUsage?: boolean
    cost?: boolean
    executionTimeMs?: boolean
    retries?: boolean
    error?: boolean
    createdAt?: boolean
    session?: boolean | ResearchSessionDefaultArgs<ExtArgs>
    steps?: boolean | Agent$stepsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>



  export type AgentSelectScalar = {
    id?: boolean
    sessionId?: boolean
    agentName?: boolean
    status?: boolean
    inputData?: boolean
    outputData?: boolean
    tokenUsage?: boolean
    cost?: boolean
    executionTimeMs?: boolean
    retries?: boolean
    error?: boolean
    createdAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "agentName" | "status" | "inputData" | "outputData" | "tokenUsage" | "cost" | "executionTimeMs" | "retries" | "error" | "createdAt", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ResearchSessionDefaultArgs<ExtArgs>
    steps?: boolean | Agent$stepsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      session: Prisma.$ResearchSessionPayload<ExtArgs>
      steps: Prisma.$AgentStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      agentName: string
      status: $Enums.AgentStatus
      inputData: Prisma.JsonValue | null
      outputData: Prisma.JsonValue | null
      tokenUsage: number
      cost: Prisma.Decimal
      executionTimeMs: number
      retries: number
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ResearchSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResearchSessionDefaultArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends Agent$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly sessionId: FieldRef<"Agent", 'String'>
    readonly agentName: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'AgentStatus'>
    readonly inputData: FieldRef<"Agent", 'Json'>
    readonly outputData: FieldRef<"Agent", 'Json'>
    readonly tokenUsage: FieldRef<"Agent", 'Int'>
    readonly cost: FieldRef<"Agent", 'Decimal'>
    readonly executionTimeMs: FieldRef<"Agent", 'Int'>
    readonly retries: FieldRef<"Agent", 'Int'>
    readonly error: FieldRef<"Agent", 'String'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.steps
   */
  export type Agent$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    where?: AgentStepWhereInput
    orderBy?: AgentStepOrderByWithRelationInput | AgentStepOrderByWithRelationInput[]
    cursor?: AgentStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentStepScalarFieldEnum | AgentStepScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model AgentStep
   */

  export type AggregateAgentStep = {
    _count: AgentStepCountAggregateOutputType | null
    _avg: AgentStepAvgAggregateOutputType | null
    _sum: AgentStepSumAggregateOutputType | null
    _min: AgentStepMinAggregateOutputType | null
    _max: AgentStepMaxAggregateOutputType | null
  }

  export type AgentStepAvgAggregateOutputType = {
    stepNumber: number | null
    promptTokens: number | null
    completionTokens: number | null
    cost: Decimal | null
  }

  export type AgentStepSumAggregateOutputType = {
    stepNumber: number | null
    promptTokens: number | null
    completionTokens: number | null
    cost: Decimal | null
  }

  export type AgentStepMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    stepNumber: number | null
    toolName: string | null
    promptTokens: number | null
    completionTokens: number | null
    cost: Decimal | null
    createdAt: Date | null
  }

  export type AgentStepMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    stepNumber: number | null
    toolName: string | null
    promptTokens: number | null
    completionTokens: number | null
    cost: Decimal | null
    createdAt: Date | null
  }

  export type AgentStepCountAggregateOutputType = {
    id: number
    agentId: number
    stepNumber: number
    toolName: number
    arguments: number
    response: number
    promptTokens: number
    completionTokens: number
    cost: number
    createdAt: number
    _all: number
  }


  export type AgentStepAvgAggregateInputType = {
    stepNumber?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
  }

  export type AgentStepSumAggregateInputType = {
    stepNumber?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
  }

  export type AgentStepMinAggregateInputType = {
    id?: true
    agentId?: true
    stepNumber?: true
    toolName?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
    createdAt?: true
  }

  export type AgentStepMaxAggregateInputType = {
    id?: true
    agentId?: true
    stepNumber?: true
    toolName?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
    createdAt?: true
  }

  export type AgentStepCountAggregateInputType = {
    id?: true
    agentId?: true
    stepNumber?: true
    toolName?: true
    arguments?: true
    response?: true
    promptTokens?: true
    completionTokens?: true
    cost?: true
    createdAt?: true
    _all?: true
  }

  export type AgentStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentStep to aggregate.
     */
    where?: AgentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentSteps to fetch.
     */
    orderBy?: AgentStepOrderByWithRelationInput | AgentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentSteps
    **/
    _count?: true | AgentStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentStepMaxAggregateInputType
  }

  export type GetAgentStepAggregateType<T extends AgentStepAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentStep[P]>
      : GetScalarType<T[P], AggregateAgentStep[P]>
  }




  export type AgentStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentStepWhereInput
    orderBy?: AgentStepOrderByWithAggregationInput | AgentStepOrderByWithAggregationInput[]
    by: AgentStepScalarFieldEnum[] | AgentStepScalarFieldEnum
    having?: AgentStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentStepCountAggregateInputType | true
    _avg?: AgentStepAvgAggregateInputType
    _sum?: AgentStepSumAggregateInputType
    _min?: AgentStepMinAggregateInputType
    _max?: AgentStepMaxAggregateInputType
  }

  export type AgentStepGroupByOutputType = {
    id: string
    agentId: string
    stepNumber: number
    toolName: string
    arguments: JsonValue
    response: JsonValue | null
    promptTokens: number
    completionTokens: number
    cost: Decimal
    createdAt: Date
    _count: AgentStepCountAggregateOutputType | null
    _avg: AgentStepAvgAggregateOutputType | null
    _sum: AgentStepSumAggregateOutputType | null
    _min: AgentStepMinAggregateOutputType | null
    _max: AgentStepMaxAggregateOutputType | null
  }

  type GetAgentStepGroupByPayload<T extends AgentStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentStepGroupByOutputType[P]>
            : GetScalarType<T[P], AgentStepGroupByOutputType[P]>
        }
      >
    >


  export type AgentStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    stepNumber?: boolean
    toolName?: boolean
    arguments?: boolean
    response?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    cost?: boolean
    createdAt?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentStep"]>



  export type AgentStepSelectScalar = {
    id?: boolean
    agentId?: boolean
    stepNumber?: boolean
    toolName?: boolean
    arguments?: boolean
    response?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    cost?: boolean
    createdAt?: boolean
  }

  export type AgentStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agentId" | "stepNumber" | "toolName" | "arguments" | "response" | "promptTokens" | "completionTokens" | "cost" | "createdAt", ExtArgs["result"]["agentStep"]>
  export type AgentStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $AgentStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentStep"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      stepNumber: number
      toolName: string
      arguments: Prisma.JsonValue
      response: Prisma.JsonValue | null
      promptTokens: number
      completionTokens: number
      cost: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["agentStep"]>
    composites: {}
  }

  type AgentStepGetPayload<S extends boolean | null | undefined | AgentStepDefaultArgs> = $Result.GetResult<Prisma.$AgentStepPayload, S>

  type AgentStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentStepCountAggregateInputType | true
    }

  export interface AgentStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentStep'], meta: { name: 'AgentStep' } }
    /**
     * Find zero or one AgentStep that matches the filter.
     * @param {AgentStepFindUniqueArgs} args - Arguments to find a AgentStep
     * @example
     * // Get one AgentStep
     * const agentStep = await prisma.agentStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentStepFindUniqueArgs>(args: SelectSubset<T, AgentStepFindUniqueArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentStepFindUniqueOrThrowArgs} args - Arguments to find a AgentStep
     * @example
     * // Get one AgentStep
     * const agentStep = await prisma.agentStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentStepFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepFindFirstArgs} args - Arguments to find a AgentStep
     * @example
     * // Get one AgentStep
     * const agentStep = await prisma.agentStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentStepFindFirstArgs>(args?: SelectSubset<T, AgentStepFindFirstArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepFindFirstOrThrowArgs} args - Arguments to find a AgentStep
     * @example
     * // Get one AgentStep
     * const agentStep = await prisma.agentStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentStepFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentSteps
     * const agentSteps = await prisma.agentStep.findMany()
     * 
     * // Get first 10 AgentSteps
     * const agentSteps = await prisma.agentStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentStepWithIdOnly = await prisma.agentStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentStepFindManyArgs>(args?: SelectSubset<T, AgentStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentStep.
     * @param {AgentStepCreateArgs} args - Arguments to create a AgentStep.
     * @example
     * // Create one AgentStep
     * const AgentStep = await prisma.agentStep.create({
     *   data: {
     *     // ... data to create a AgentStep
     *   }
     * })
     * 
     */
    create<T extends AgentStepCreateArgs>(args: SelectSubset<T, AgentStepCreateArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentSteps.
     * @param {AgentStepCreateManyArgs} args - Arguments to create many AgentSteps.
     * @example
     * // Create many AgentSteps
     * const agentStep = await prisma.agentStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentStepCreateManyArgs>(args?: SelectSubset<T, AgentStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AgentStep.
     * @param {AgentStepDeleteArgs} args - Arguments to delete one AgentStep.
     * @example
     * // Delete one AgentStep
     * const AgentStep = await prisma.agentStep.delete({
     *   where: {
     *     // ... filter to delete one AgentStep
     *   }
     * })
     * 
     */
    delete<T extends AgentStepDeleteArgs>(args: SelectSubset<T, AgentStepDeleteArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentStep.
     * @param {AgentStepUpdateArgs} args - Arguments to update one AgentStep.
     * @example
     * // Update one AgentStep
     * const agentStep = await prisma.agentStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentStepUpdateArgs>(args: SelectSubset<T, AgentStepUpdateArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentSteps.
     * @param {AgentStepDeleteManyArgs} args - Arguments to filter AgentSteps to delete.
     * @example
     * // Delete a few AgentSteps
     * const { count } = await prisma.agentStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentStepDeleteManyArgs>(args?: SelectSubset<T, AgentStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentSteps
     * const agentStep = await prisma.agentStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentStepUpdateManyArgs>(args: SelectSubset<T, AgentStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgentStep.
     * @param {AgentStepUpsertArgs} args - Arguments to update or create a AgentStep.
     * @example
     * // Update or create a AgentStep
     * const agentStep = await prisma.agentStep.upsert({
     *   create: {
     *     // ... data to create a AgentStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentStep we want to update
     *   }
     * })
     */
    upsert<T extends AgentStepUpsertArgs>(args: SelectSubset<T, AgentStepUpsertArgs<ExtArgs>>): Prisma__AgentStepClient<$Result.GetResult<Prisma.$AgentStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepCountArgs} args - Arguments to filter AgentSteps to count.
     * @example
     * // Count the number of AgentSteps
     * const count = await prisma.agentStep.count({
     *   where: {
     *     // ... the filter for the AgentSteps we want to count
     *   }
     * })
    **/
    count<T extends AgentStepCountArgs>(
      args?: Subset<T, AgentStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentStepAggregateArgs>(args: Subset<T, AgentStepAggregateArgs>): Prisma.PrismaPromise<GetAgentStepAggregateType<T>>

    /**
     * Group by AgentStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentStepGroupByArgs} args - Group by arguments.
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
      T extends AgentStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentStepGroupByArgs['orderBy'] }
        : { orderBy?: AgentStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentStep model
   */
  readonly fields: AgentStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AgentStep model
   */
  interface AgentStepFieldRefs {
    readonly id: FieldRef<"AgentStep", 'String'>
    readonly agentId: FieldRef<"AgentStep", 'String'>
    readonly stepNumber: FieldRef<"AgentStep", 'Int'>
    readonly toolName: FieldRef<"AgentStep", 'String'>
    readonly arguments: FieldRef<"AgentStep", 'Json'>
    readonly response: FieldRef<"AgentStep", 'Json'>
    readonly promptTokens: FieldRef<"AgentStep", 'Int'>
    readonly completionTokens: FieldRef<"AgentStep", 'Int'>
    readonly cost: FieldRef<"AgentStep", 'Decimal'>
    readonly createdAt: FieldRef<"AgentStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentStep findUnique
   */
  export type AgentStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * Filter, which AgentStep to fetch.
     */
    where: AgentStepWhereUniqueInput
  }

  /**
   * AgentStep findUniqueOrThrow
   */
  export type AgentStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * Filter, which AgentStep to fetch.
     */
    where: AgentStepWhereUniqueInput
  }

  /**
   * AgentStep findFirst
   */
  export type AgentStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * Filter, which AgentStep to fetch.
     */
    where?: AgentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentSteps to fetch.
     */
    orderBy?: AgentStepOrderByWithRelationInput | AgentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentSteps.
     */
    cursor?: AgentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentSteps.
     */
    distinct?: AgentStepScalarFieldEnum | AgentStepScalarFieldEnum[]
  }

  /**
   * AgentStep findFirstOrThrow
   */
  export type AgentStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * Filter, which AgentStep to fetch.
     */
    where?: AgentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentSteps to fetch.
     */
    orderBy?: AgentStepOrderByWithRelationInput | AgentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentSteps.
     */
    cursor?: AgentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentSteps.
     */
    distinct?: AgentStepScalarFieldEnum | AgentStepScalarFieldEnum[]
  }

  /**
   * AgentStep findMany
   */
  export type AgentStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * Filter, which AgentSteps to fetch.
     */
    where?: AgentStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentSteps to fetch.
     */
    orderBy?: AgentStepOrderByWithRelationInput | AgentStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentSteps.
     */
    cursor?: AgentStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentSteps.
     */
    distinct?: AgentStepScalarFieldEnum | AgentStepScalarFieldEnum[]
  }

  /**
   * AgentStep create
   */
  export type AgentStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentStep.
     */
    data: XOR<AgentStepCreateInput, AgentStepUncheckedCreateInput>
  }

  /**
   * AgentStep createMany
   */
  export type AgentStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentSteps.
     */
    data: AgentStepCreateManyInput | AgentStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentStep update
   */
  export type AgentStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentStep.
     */
    data: XOR<AgentStepUpdateInput, AgentStepUncheckedUpdateInput>
    /**
     * Choose, which AgentStep to update.
     */
    where: AgentStepWhereUniqueInput
  }

  /**
   * AgentStep updateMany
   */
  export type AgentStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentSteps.
     */
    data: XOR<AgentStepUpdateManyMutationInput, AgentStepUncheckedUpdateManyInput>
    /**
     * Filter which AgentSteps to update
     */
    where?: AgentStepWhereInput
    /**
     * Limit how many AgentSteps to update.
     */
    limit?: number
  }

  /**
   * AgentStep upsert
   */
  export type AgentStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentStep to update in case it exists.
     */
    where: AgentStepWhereUniqueInput
    /**
     * In case the AgentStep found by the `where` argument doesn't exist, create a new AgentStep with this data.
     */
    create: XOR<AgentStepCreateInput, AgentStepUncheckedCreateInput>
    /**
     * In case the AgentStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentStepUpdateInput, AgentStepUncheckedUpdateInput>
  }

  /**
   * AgentStep delete
   */
  export type AgentStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
    /**
     * Filter which AgentStep to delete.
     */
    where: AgentStepWhereUniqueInput
  }

  /**
   * AgentStep deleteMany
   */
  export type AgentStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentSteps to delete
     */
    where?: AgentStepWhereInput
    /**
     * Limit how many AgentSteps to delete.
     */
    limit?: number
  }

  /**
   * AgentStep without action
   */
  export type AgentStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentStep
     */
    select?: AgentStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentStep
     */
    omit?: AgentStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentStepInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    executiveSummary: string | null
    detailedAnalysis: string | null
    conclusion: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    executiveSummary: string | null
    detailedAnalysis: string | null
    conclusion: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    sessionId: number
    executiveSummary: number
    keyFindings: number
    detailedAnalysis: number
    references: number
    conclusion: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    sessionId?: true
    executiveSummary?: true
    detailedAnalysis?: true
    conclusion?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    sessionId?: true
    executiveSummary?: true
    detailedAnalysis?: true
    conclusion?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    sessionId?: true
    executiveSummary?: true
    keyFindings?: true
    detailedAnalysis?: true
    references?: true
    conclusion?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    sessionId: string
    executiveSummary: string
    keyFindings: JsonValue
    detailedAnalysis: string | null
    references: JsonValue
    conclusion: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    executiveSummary?: boolean
    keyFindings?: boolean
    detailedAnalysis?: boolean
    references?: boolean
    conclusion?: boolean
    createdAt?: boolean
    session?: boolean | ResearchSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    sessionId?: boolean
    executiveSummary?: boolean
    keyFindings?: boolean
    detailedAnalysis?: boolean
    references?: boolean
    conclusion?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "executiveSummary" | "keyFindings" | "detailedAnalysis" | "references" | "conclusion" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ResearchSessionDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      session: Prisma.$ResearchSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      executiveSummary: string
      keyFindings: Prisma.JsonValue
      detailedAnalysis: string | null
      references: Prisma.JsonValue
      conclusion: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ResearchSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResearchSessionDefaultArgs<ExtArgs>>): Prisma__ResearchSessionClient<$Result.GetResult<Prisma.$ResearchSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly sessionId: FieldRef<"Report", 'String'>
    readonly executiveSummary: FieldRef<"Report", 'String'>
    readonly keyFindings: FieldRef<"Report", 'Json'>
    readonly detailedAnalysis: FieldRef<"Report", 'String'>
    readonly references: FieldRef<"Report", 'Json'>
    readonly conclusion: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model ModelPricing
   */

  export type AggregateModelPricing = {
    _count: ModelPricingCountAggregateOutputType | null
    _avg: ModelPricingAvgAggregateOutputType | null
    _sum: ModelPricingSumAggregateOutputType | null
    _min: ModelPricingMinAggregateOutputType | null
    _max: ModelPricingMaxAggregateOutputType | null
  }

  export type ModelPricingAvgAggregateOutputType = {
    inputCostPerMillion: Decimal | null
    outputCostPerMillion: Decimal | null
  }

  export type ModelPricingSumAggregateOutputType = {
    inputCostPerMillion: Decimal | null
    outputCostPerMillion: Decimal | null
  }

  export type ModelPricingMinAggregateOutputType = {
    id: string | null
    modelName: string | null
    inputCostPerMillion: Decimal | null
    outputCostPerMillion: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelPricingMaxAggregateOutputType = {
    id: string | null
    modelName: string | null
    inputCostPerMillion: Decimal | null
    outputCostPerMillion: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelPricingCountAggregateOutputType = {
    id: number
    modelName: number
    inputCostPerMillion: number
    outputCostPerMillion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelPricingAvgAggregateInputType = {
    inputCostPerMillion?: true
    outputCostPerMillion?: true
  }

  export type ModelPricingSumAggregateInputType = {
    inputCostPerMillion?: true
    outputCostPerMillion?: true
  }

  export type ModelPricingMinAggregateInputType = {
    id?: true
    modelName?: true
    inputCostPerMillion?: true
    outputCostPerMillion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelPricingMaxAggregateInputType = {
    id?: true
    modelName?: true
    inputCostPerMillion?: true
    outputCostPerMillion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelPricingCountAggregateInputType = {
    id?: true
    modelName?: true
    inputCostPerMillion?: true
    outputCostPerMillion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelPricing to aggregate.
     */
    where?: ModelPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPricings to fetch.
     */
    orderBy?: ModelPricingOrderByWithRelationInput | ModelPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelPricings
    **/
    _count?: true | ModelPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelPricingMaxAggregateInputType
  }

  export type GetModelPricingAggregateType<T extends ModelPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateModelPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelPricing[P]>
      : GetScalarType<T[P], AggregateModelPricing[P]>
  }




  export type ModelPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelPricingWhereInput
    orderBy?: ModelPricingOrderByWithAggregationInput | ModelPricingOrderByWithAggregationInput[]
    by: ModelPricingScalarFieldEnum[] | ModelPricingScalarFieldEnum
    having?: ModelPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelPricingCountAggregateInputType | true
    _avg?: ModelPricingAvgAggregateInputType
    _sum?: ModelPricingSumAggregateInputType
    _min?: ModelPricingMinAggregateInputType
    _max?: ModelPricingMaxAggregateInputType
  }

  export type ModelPricingGroupByOutputType = {
    id: string
    modelName: string
    inputCostPerMillion: Decimal
    outputCostPerMillion: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ModelPricingCountAggregateOutputType | null
    _avg: ModelPricingAvgAggregateOutputType | null
    _sum: ModelPricingSumAggregateOutputType | null
    _min: ModelPricingMinAggregateOutputType | null
    _max: ModelPricingMaxAggregateOutputType | null
  }

  type GetModelPricingGroupByPayload<T extends ModelPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelPricingGroupByOutputType[P]>
            : GetScalarType<T[P], ModelPricingGroupByOutputType[P]>
        }
      >
    >


  export type ModelPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelName?: boolean
    inputCostPerMillion?: boolean
    outputCostPerMillion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modelPricing"]>



  export type ModelPricingSelectScalar = {
    id?: boolean
    modelName?: boolean
    inputCostPerMillion?: boolean
    outputCostPerMillion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelPricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelName" | "inputCostPerMillion" | "outputCostPerMillion" | "createdAt" | "updatedAt", ExtArgs["result"]["modelPricing"]>

  export type $ModelPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelPricing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelName: string
      inputCostPerMillion: Prisma.Decimal
      outputCostPerMillion: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelPricing"]>
    composites: {}
  }

  type ModelPricingGetPayload<S extends boolean | null | undefined | ModelPricingDefaultArgs> = $Result.GetResult<Prisma.$ModelPricingPayload, S>

  type ModelPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelPricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelPricingCountAggregateInputType | true
    }

  export interface ModelPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelPricing'], meta: { name: 'ModelPricing' } }
    /**
     * Find zero or one ModelPricing that matches the filter.
     * @param {ModelPricingFindUniqueArgs} args - Arguments to find a ModelPricing
     * @example
     * // Get one ModelPricing
     * const modelPricing = await prisma.modelPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelPricingFindUniqueArgs>(args: SelectSubset<T, ModelPricingFindUniqueArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelPricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelPricingFindUniqueOrThrowArgs} args - Arguments to find a ModelPricing
     * @example
     * // Get one ModelPricing
     * const modelPricing = await prisma.modelPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingFindFirstArgs} args - Arguments to find a ModelPricing
     * @example
     * // Get one ModelPricing
     * const modelPricing = await prisma.modelPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelPricingFindFirstArgs>(args?: SelectSubset<T, ModelPricingFindFirstArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingFindFirstOrThrowArgs} args - Arguments to find a ModelPricing
     * @example
     * // Get one ModelPricing
     * const modelPricing = await prisma.modelPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelPricings
     * const modelPricings = await prisma.modelPricing.findMany()
     * 
     * // Get first 10 ModelPricings
     * const modelPricings = await prisma.modelPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelPricingWithIdOnly = await prisma.modelPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelPricingFindManyArgs>(args?: SelectSubset<T, ModelPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelPricing.
     * @param {ModelPricingCreateArgs} args - Arguments to create a ModelPricing.
     * @example
     * // Create one ModelPricing
     * const ModelPricing = await prisma.modelPricing.create({
     *   data: {
     *     // ... data to create a ModelPricing
     *   }
     * })
     * 
     */
    create<T extends ModelPricingCreateArgs>(args: SelectSubset<T, ModelPricingCreateArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelPricings.
     * @param {ModelPricingCreateManyArgs} args - Arguments to create many ModelPricings.
     * @example
     * // Create many ModelPricings
     * const modelPricing = await prisma.modelPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelPricingCreateManyArgs>(args?: SelectSubset<T, ModelPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModelPricing.
     * @param {ModelPricingDeleteArgs} args - Arguments to delete one ModelPricing.
     * @example
     * // Delete one ModelPricing
     * const ModelPricing = await prisma.modelPricing.delete({
     *   where: {
     *     // ... filter to delete one ModelPricing
     *   }
     * })
     * 
     */
    delete<T extends ModelPricingDeleteArgs>(args: SelectSubset<T, ModelPricingDeleteArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelPricing.
     * @param {ModelPricingUpdateArgs} args - Arguments to update one ModelPricing.
     * @example
     * // Update one ModelPricing
     * const modelPricing = await prisma.modelPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelPricingUpdateArgs>(args: SelectSubset<T, ModelPricingUpdateArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelPricings.
     * @param {ModelPricingDeleteManyArgs} args - Arguments to filter ModelPricings to delete.
     * @example
     * // Delete a few ModelPricings
     * const { count } = await prisma.modelPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelPricingDeleteManyArgs>(args?: SelectSubset<T, ModelPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelPricings
     * const modelPricing = await prisma.modelPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelPricingUpdateManyArgs>(args: SelectSubset<T, ModelPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelPricing.
     * @param {ModelPricingUpsertArgs} args - Arguments to update or create a ModelPricing.
     * @example
     * // Update or create a ModelPricing
     * const modelPricing = await prisma.modelPricing.upsert({
     *   create: {
     *     // ... data to create a ModelPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelPricing we want to update
     *   }
     * })
     */
    upsert<T extends ModelPricingUpsertArgs>(args: SelectSubset<T, ModelPricingUpsertArgs<ExtArgs>>): Prisma__ModelPricingClient<$Result.GetResult<Prisma.$ModelPricingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingCountArgs} args - Arguments to filter ModelPricings to count.
     * @example
     * // Count the number of ModelPricings
     * const count = await prisma.modelPricing.count({
     *   where: {
     *     // ... the filter for the ModelPricings we want to count
     *   }
     * })
    **/
    count<T extends ModelPricingCountArgs>(
      args?: Subset<T, ModelPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelPricingAggregateArgs>(args: Subset<T, ModelPricingAggregateArgs>): Prisma.PrismaPromise<GetModelPricingAggregateType<T>>

    /**
     * Group by ModelPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelPricingGroupByArgs} args - Group by arguments.
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
      T extends ModelPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelPricingGroupByArgs['orderBy'] }
        : { orderBy?: ModelPricingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelPricing model
   */
  readonly fields: ModelPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ModelPricing model
   */
  interface ModelPricingFieldRefs {
    readonly id: FieldRef<"ModelPricing", 'String'>
    readonly modelName: FieldRef<"ModelPricing", 'String'>
    readonly inputCostPerMillion: FieldRef<"ModelPricing", 'Decimal'>
    readonly outputCostPerMillion: FieldRef<"ModelPricing", 'Decimal'>
    readonly createdAt: FieldRef<"ModelPricing", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelPricing findUnique
   */
  export type ModelPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * Filter, which ModelPricing to fetch.
     */
    where: ModelPricingWhereUniqueInput
  }

  /**
   * ModelPricing findUniqueOrThrow
   */
  export type ModelPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * Filter, which ModelPricing to fetch.
     */
    where: ModelPricingWhereUniqueInput
  }

  /**
   * ModelPricing findFirst
   */
  export type ModelPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * Filter, which ModelPricing to fetch.
     */
    where?: ModelPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPricings to fetch.
     */
    orderBy?: ModelPricingOrderByWithRelationInput | ModelPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelPricings.
     */
    cursor?: ModelPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPricings.
     */
    distinct?: ModelPricingScalarFieldEnum | ModelPricingScalarFieldEnum[]
  }

  /**
   * ModelPricing findFirstOrThrow
   */
  export type ModelPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * Filter, which ModelPricing to fetch.
     */
    where?: ModelPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPricings to fetch.
     */
    orderBy?: ModelPricingOrderByWithRelationInput | ModelPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelPricings.
     */
    cursor?: ModelPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPricings.
     */
    distinct?: ModelPricingScalarFieldEnum | ModelPricingScalarFieldEnum[]
  }

  /**
   * ModelPricing findMany
   */
  export type ModelPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * Filter, which ModelPricings to fetch.
     */
    where?: ModelPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelPricings to fetch.
     */
    orderBy?: ModelPricingOrderByWithRelationInput | ModelPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelPricings.
     */
    cursor?: ModelPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelPricings.
     */
    distinct?: ModelPricingScalarFieldEnum | ModelPricingScalarFieldEnum[]
  }

  /**
   * ModelPricing create
   */
  export type ModelPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * The data needed to create a ModelPricing.
     */
    data: XOR<ModelPricingCreateInput, ModelPricingUncheckedCreateInput>
  }

  /**
   * ModelPricing createMany
   */
  export type ModelPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelPricings.
     */
    data: ModelPricingCreateManyInput | ModelPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelPricing update
   */
  export type ModelPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * The data needed to update a ModelPricing.
     */
    data: XOR<ModelPricingUpdateInput, ModelPricingUncheckedUpdateInput>
    /**
     * Choose, which ModelPricing to update.
     */
    where: ModelPricingWhereUniqueInput
  }

  /**
   * ModelPricing updateMany
   */
  export type ModelPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelPricings.
     */
    data: XOR<ModelPricingUpdateManyMutationInput, ModelPricingUncheckedUpdateManyInput>
    /**
     * Filter which ModelPricings to update
     */
    where?: ModelPricingWhereInput
    /**
     * Limit how many ModelPricings to update.
     */
    limit?: number
  }

  /**
   * ModelPricing upsert
   */
  export type ModelPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * The filter to search for the ModelPricing to update in case it exists.
     */
    where: ModelPricingWhereUniqueInput
    /**
     * In case the ModelPricing found by the `where` argument doesn't exist, create a new ModelPricing with this data.
     */
    create: XOR<ModelPricingCreateInput, ModelPricingUncheckedCreateInput>
    /**
     * In case the ModelPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelPricingUpdateInput, ModelPricingUncheckedUpdateInput>
  }

  /**
   * ModelPricing delete
   */
  export type ModelPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
    /**
     * Filter which ModelPricing to delete.
     */
    where: ModelPricingWhereUniqueInput
  }

  /**
   * ModelPricing deleteMany
   */
  export type ModelPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelPricings to delete
     */
    where?: ModelPricingWhereInput
    /**
     * Limit how many ModelPricings to delete.
     */
    limit?: number
  }

  /**
   * ModelPricing without action
   */
  export type ModelPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelPricing
     */
    select?: ModelPricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelPricing
     */
    omit?: ModelPricingOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResearchSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    topic: 'topic',
    status: 'status',
    totalTokens: 'totalTokens',
    totalCost: 'totalCost',
    totalSteps: 'totalSteps',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type ResearchSessionScalarFieldEnum = (typeof ResearchSessionScalarFieldEnum)[keyof typeof ResearchSessionScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    agentName: 'agentName',
    status: 'status',
    inputData: 'inputData',
    outputData: 'outputData',
    tokenUsage: 'tokenUsage',
    cost: 'cost',
    executionTimeMs: 'executionTimeMs',
    retries: 'retries',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const AgentStepScalarFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    stepNumber: 'stepNumber',
    toolName: 'toolName',
    arguments: 'arguments',
    response: 'response',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    cost: 'cost',
    createdAt: 'createdAt'
  };

  export type AgentStepScalarFieldEnum = (typeof AgentStepScalarFieldEnum)[keyof typeof AgentStepScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    executiveSummary: 'executiveSummary',
    keyFindings: 'keyFindings',
    detailedAnalysis: 'detailedAnalysis',
    references: 'references',
    conclusion: 'conclusion',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ModelPricingScalarFieldEnum: {
    id: 'id',
    modelName: 'modelName',
    inputCostPerMillion: 'inputCostPerMillion',
    outputCostPerMillion: 'outputCostPerMillion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelPricingScalarFieldEnum = (typeof ModelPricingScalarFieldEnum)[keyof typeof ModelPricingScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ResearchSessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    topic: 'topic'
  };

  export type ResearchSessionOrderByRelevanceFieldEnum = (typeof ResearchSessionOrderByRelevanceFieldEnum)[keyof typeof ResearchSessionOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AgentOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    agentName: 'agentName',
    error: 'error'
  };

  export type AgentOrderByRelevanceFieldEnum = (typeof AgentOrderByRelevanceFieldEnum)[keyof typeof AgentOrderByRelevanceFieldEnum]


  export const AgentStepOrderByRelevanceFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    toolName: 'toolName'
  };

  export type AgentStepOrderByRelevanceFieldEnum = (typeof AgentStepOrderByRelevanceFieldEnum)[keyof typeof AgentStepOrderByRelevanceFieldEnum]


  export const ReportOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    executiveSummary: 'executiveSummary',
    detailedAnalysis: 'detailedAnalysis',
    conclusion: 'conclusion'
  };

  export type ReportOrderByRelevanceFieldEnum = (typeof ReportOrderByRelevanceFieldEnum)[keyof typeof ReportOrderByRelevanceFieldEnum]


  export const ModelPricingOrderByRelevanceFieldEnum: {
    id: 'id',
    modelName: 'modelName'
  };

  export type ModelPricingOrderByRelevanceFieldEnum = (typeof ModelPricingOrderByRelevanceFieldEnum)[keyof typeof ModelPricingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'AgentStatus'
   */
  export type EnumAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    researchSessions?: ResearchSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    researchSessions?: ResearchSessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    researchSessions?: ResearchSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResearchSessionWhereInput = {
    AND?: ResearchSessionWhereInput | ResearchSessionWhereInput[]
    OR?: ResearchSessionWhereInput[]
    NOT?: ResearchSessionWhereInput | ResearchSessionWhereInput[]
    id?: StringFilter<"ResearchSession"> | string
    userId?: StringFilter<"ResearchSession"> | string
    topic?: StringFilter<"ResearchSession"> | string
    status?: EnumSessionStatusFilter<"ResearchSession"> | $Enums.SessionStatus
    totalTokens?: IntFilter<"ResearchSession"> | number
    totalCost?: DecimalFilter<"ResearchSession"> | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFilter<"ResearchSession"> | number
    startedAt?: DateTimeFilter<"ResearchSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"ResearchSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agents?: AgentListRelationFilter
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
  }

  export type ResearchSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    agents?: AgentOrderByRelationAggregateInput
    report?: ReportOrderByWithRelationInput
    _relevance?: ResearchSessionOrderByRelevanceInput
  }

  export type ResearchSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResearchSessionWhereInput | ResearchSessionWhereInput[]
    OR?: ResearchSessionWhereInput[]
    NOT?: ResearchSessionWhereInput | ResearchSessionWhereInput[]
    userId?: StringFilter<"ResearchSession"> | string
    topic?: StringFilter<"ResearchSession"> | string
    status?: EnumSessionStatusFilter<"ResearchSession"> | $Enums.SessionStatus
    totalTokens?: IntFilter<"ResearchSession"> | number
    totalCost?: DecimalFilter<"ResearchSession"> | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFilter<"ResearchSession"> | number
    startedAt?: DateTimeFilter<"ResearchSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"ResearchSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agents?: AgentListRelationFilter
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
  }, "id">

  export type ResearchSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ResearchSessionCountOrderByAggregateInput
    _avg?: ResearchSessionAvgOrderByAggregateInput
    _max?: ResearchSessionMaxOrderByAggregateInput
    _min?: ResearchSessionMinOrderByAggregateInput
    _sum?: ResearchSessionSumOrderByAggregateInput
  }

  export type ResearchSessionScalarWhereWithAggregatesInput = {
    AND?: ResearchSessionScalarWhereWithAggregatesInput | ResearchSessionScalarWhereWithAggregatesInput[]
    OR?: ResearchSessionScalarWhereWithAggregatesInput[]
    NOT?: ResearchSessionScalarWhereWithAggregatesInput | ResearchSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResearchSession"> | string
    userId?: StringWithAggregatesFilter<"ResearchSession"> | string
    topic?: StringWithAggregatesFilter<"ResearchSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"ResearchSession"> | $Enums.SessionStatus
    totalTokens?: IntWithAggregatesFilter<"ResearchSession"> | number
    totalCost?: DecimalWithAggregatesFilter<"ResearchSession"> | Decimal | DecimalJsLike | number | string
    totalSteps?: IntWithAggregatesFilter<"ResearchSession"> | number
    startedAt?: DateTimeWithAggregatesFilter<"ResearchSession"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ResearchSession"> | Date | string | null
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    sessionId?: StringFilter<"Agent"> | string
    agentName?: StringFilter<"Agent"> | string
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    inputData?: JsonNullableFilter<"Agent">
    outputData?: JsonNullableFilter<"Agent">
    tokenUsage?: IntFilter<"Agent"> | number
    cost?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFilter<"Agent"> | number
    retries?: IntFilter<"Agent"> | number
    error?: StringNullableFilter<"Agent"> | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    session?: XOR<ResearchSessionScalarRelationFilter, ResearchSessionWhereInput>
    steps?: AgentStepListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    agentName?: SortOrder
    status?: SortOrder
    inputData?: SortOrderInput | SortOrder
    outputData?: SortOrderInput | SortOrder
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: ResearchSessionOrderByWithRelationInput
    steps?: AgentStepOrderByRelationAggregateInput
    _relevance?: AgentOrderByRelevanceInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    sessionId?: StringFilter<"Agent"> | string
    agentName?: StringFilter<"Agent"> | string
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    inputData?: JsonNullableFilter<"Agent">
    outputData?: JsonNullableFilter<"Agent">
    tokenUsage?: IntFilter<"Agent"> | number
    cost?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFilter<"Agent"> | number
    retries?: IntFilter<"Agent"> | number
    error?: StringNullableFilter<"Agent"> | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    session?: XOR<ResearchSessionScalarRelationFilter, ResearchSessionWhereInput>
    steps?: AgentStepListRelationFilter
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    agentName?: SortOrder
    status?: SortOrder
    inputData?: SortOrderInput | SortOrder
    outputData?: SortOrderInput | SortOrder
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    sessionId?: StringWithAggregatesFilter<"Agent"> | string
    agentName?: StringWithAggregatesFilter<"Agent"> | string
    status?: EnumAgentStatusWithAggregatesFilter<"Agent"> | $Enums.AgentStatus
    inputData?: JsonNullableWithAggregatesFilter<"Agent">
    outputData?: JsonNullableWithAggregatesFilter<"Agent">
    tokenUsage?: IntWithAggregatesFilter<"Agent"> | number
    cost?: DecimalWithAggregatesFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntWithAggregatesFilter<"Agent"> | number
    retries?: IntWithAggregatesFilter<"Agent"> | number
    error?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type AgentStepWhereInput = {
    AND?: AgentStepWhereInput | AgentStepWhereInput[]
    OR?: AgentStepWhereInput[]
    NOT?: AgentStepWhereInput | AgentStepWhereInput[]
    id?: StringFilter<"AgentStep"> | string
    agentId?: StringFilter<"AgentStep"> | string
    stepNumber?: IntFilter<"AgentStep"> | number
    toolName?: StringFilter<"AgentStep"> | string
    arguments?: JsonFilter<"AgentStep">
    response?: JsonNullableFilter<"AgentStep">
    promptTokens?: IntFilter<"AgentStep"> | number
    completionTokens?: IntFilter<"AgentStep"> | number
    cost?: DecimalFilter<"AgentStep"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"AgentStep"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type AgentStepOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    stepNumber?: SortOrder
    toolName?: SortOrder
    arguments?: SortOrder
    response?: SortOrderInput | SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    agent?: AgentOrderByWithRelationInput
    _relevance?: AgentStepOrderByRelevanceInput
  }

  export type AgentStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId_stepNumber?: AgentStepAgentIdStepNumberCompoundUniqueInput
    AND?: AgentStepWhereInput | AgentStepWhereInput[]
    OR?: AgentStepWhereInput[]
    NOT?: AgentStepWhereInput | AgentStepWhereInput[]
    agentId?: StringFilter<"AgentStep"> | string
    stepNumber?: IntFilter<"AgentStep"> | number
    toolName?: StringFilter<"AgentStep"> | string
    arguments?: JsonFilter<"AgentStep">
    response?: JsonNullableFilter<"AgentStep">
    promptTokens?: IntFilter<"AgentStep"> | number
    completionTokens?: IntFilter<"AgentStep"> | number
    cost?: DecimalFilter<"AgentStep"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"AgentStep"> | Date | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id" | "agentId_stepNumber">

  export type AgentStepOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    stepNumber?: SortOrder
    toolName?: SortOrder
    arguments?: SortOrder
    response?: SortOrderInput | SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
    _count?: AgentStepCountOrderByAggregateInput
    _avg?: AgentStepAvgOrderByAggregateInput
    _max?: AgentStepMaxOrderByAggregateInput
    _min?: AgentStepMinOrderByAggregateInput
    _sum?: AgentStepSumOrderByAggregateInput
  }

  export type AgentStepScalarWhereWithAggregatesInput = {
    AND?: AgentStepScalarWhereWithAggregatesInput | AgentStepScalarWhereWithAggregatesInput[]
    OR?: AgentStepScalarWhereWithAggregatesInput[]
    NOT?: AgentStepScalarWhereWithAggregatesInput | AgentStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentStep"> | string
    agentId?: StringWithAggregatesFilter<"AgentStep"> | string
    stepNumber?: IntWithAggregatesFilter<"AgentStep"> | number
    toolName?: StringWithAggregatesFilter<"AgentStep"> | string
    arguments?: JsonWithAggregatesFilter<"AgentStep">
    response?: JsonNullableWithAggregatesFilter<"AgentStep">
    promptTokens?: IntWithAggregatesFilter<"AgentStep"> | number
    completionTokens?: IntWithAggregatesFilter<"AgentStep"> | number
    cost?: DecimalWithAggregatesFilter<"AgentStep"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"AgentStep"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    sessionId?: StringFilter<"Report"> | string
    executiveSummary?: StringFilter<"Report"> | string
    keyFindings?: JsonFilter<"Report">
    detailedAnalysis?: StringNullableFilter<"Report"> | string | null
    references?: JsonFilter<"Report">
    conclusion?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    session?: XOR<ResearchSessionScalarRelationFilter, ResearchSessionWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    executiveSummary?: SortOrder
    keyFindings?: SortOrder
    detailedAnalysis?: SortOrderInput | SortOrder
    references?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    session?: ResearchSessionOrderByWithRelationInput
    _relevance?: ReportOrderByRelevanceInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    executiveSummary?: StringFilter<"Report"> | string
    keyFindings?: JsonFilter<"Report">
    detailedAnalysis?: StringNullableFilter<"Report"> | string | null
    references?: JsonFilter<"Report">
    conclusion?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    session?: XOR<ResearchSessionScalarRelationFilter, ResearchSessionWhereInput>
  }, "id" | "sessionId">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    executiveSummary?: SortOrder
    keyFindings?: SortOrder
    detailedAnalysis?: SortOrderInput | SortOrder
    references?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    sessionId?: StringWithAggregatesFilter<"Report"> | string
    executiveSummary?: StringWithAggregatesFilter<"Report"> | string
    keyFindings?: JsonWithAggregatesFilter<"Report">
    detailedAnalysis?: StringNullableWithAggregatesFilter<"Report"> | string | null
    references?: JsonWithAggregatesFilter<"Report">
    conclusion?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type ModelPricingWhereInput = {
    AND?: ModelPricingWhereInput | ModelPricingWhereInput[]
    OR?: ModelPricingWhereInput[]
    NOT?: ModelPricingWhereInput | ModelPricingWhereInput[]
    id?: StringFilter<"ModelPricing"> | string
    modelName?: StringFilter<"ModelPricing"> | string
    inputCostPerMillion?: DecimalFilter<"ModelPricing"> | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalFilter<"ModelPricing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ModelPricing"> | Date | string
    updatedAt?: DateTimeFilter<"ModelPricing"> | Date | string
  }

  export type ModelPricingOrderByWithRelationInput = {
    id?: SortOrder
    modelName?: SortOrder
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ModelPricingOrderByRelevanceInput
  }

  export type ModelPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    modelName?: string
    AND?: ModelPricingWhereInput | ModelPricingWhereInput[]
    OR?: ModelPricingWhereInput[]
    NOT?: ModelPricingWhereInput | ModelPricingWhereInput[]
    inputCostPerMillion?: DecimalFilter<"ModelPricing"> | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalFilter<"ModelPricing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ModelPricing"> | Date | string
    updatedAt?: DateTimeFilter<"ModelPricing"> | Date | string
  }, "id" | "modelName">

  export type ModelPricingOrderByWithAggregationInput = {
    id?: SortOrder
    modelName?: SortOrder
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelPricingCountOrderByAggregateInput
    _avg?: ModelPricingAvgOrderByAggregateInput
    _max?: ModelPricingMaxOrderByAggregateInput
    _min?: ModelPricingMinOrderByAggregateInput
    _sum?: ModelPricingSumOrderByAggregateInput
  }

  export type ModelPricingScalarWhereWithAggregatesInput = {
    AND?: ModelPricingScalarWhereWithAggregatesInput | ModelPricingScalarWhereWithAggregatesInput[]
    OR?: ModelPricingScalarWhereWithAggregatesInput[]
    NOT?: ModelPricingScalarWhereWithAggregatesInput | ModelPricingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelPricing"> | string
    modelName?: StringWithAggregatesFilter<"ModelPricing"> | string
    inputCostPerMillion?: DecimalWithAggregatesFilter<"ModelPricing"> | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalWithAggregatesFilter<"ModelPricing"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ModelPricing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModelPricing"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    researchSessions?: ResearchSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    researchSessions?: ResearchSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchSessions?: ResearchSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchSessions?: ResearchSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchSessionCreateInput = {
    id?: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutResearchSessionsInput
    agents?: AgentCreateNestedManyWithoutSessionInput
    report?: ReportCreateNestedOneWithoutSessionInput
  }

  export type ResearchSessionUncheckedCreateInput = {
    id?: string
    userId: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    agents?: AgentUncheckedCreateNestedManyWithoutSessionInput
    report?: ReportUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ResearchSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResearchSessionsNestedInput
    agents?: AgentUpdateManyWithoutSessionNestedInput
    report?: ReportUpdateOneWithoutSessionNestedInput
  }

  export type ResearchSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agents?: AgentUncheckedUpdateManyWithoutSessionNestedInput
    report?: ReportUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type ResearchSessionCreateManyInput = {
    id?: string
    userId: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ResearchSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResearchSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgentCreateInput = {
    id?: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
    session: ResearchSessionCreateNestedOneWithoutAgentsInput
    steps?: AgentStepCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    sessionId: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
    steps?: AgentStepUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ResearchSessionUpdateOneRequiredWithoutAgentsNestedInput
    steps?: AgentStepUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AgentStepUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    sessionId: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStepCreateInput = {
    id?: string
    stepNumber: number
    toolName: string
    arguments: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: number
    completionTokens?: number
    cost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    agent: AgentCreateNestedOneWithoutStepsInput
  }

  export type AgentStepUncheckedCreateInput = {
    id?: string
    agentId: string
    stepNumber: number
    toolName: string
    arguments: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: number
    completionTokens?: number
    cost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type AgentStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: AgentUpdateOneRequiredWithoutStepsNestedInput
  }

  export type AgentStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStepCreateManyInput = {
    id?: string
    agentId: string
    stepNumber: number
    toolName: string
    arguments: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: number
    completionTokens?: number
    cost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type AgentStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    executiveSummary: string
    keyFindings: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: string | null
    references: JsonNullValueInput | InputJsonValue
    conclusion: string
    createdAt?: Date | string
    session: ResearchSessionCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    sessionId: string
    executiveSummary: string
    keyFindings: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: string | null
    references: JsonNullValueInput | InputJsonValue
    conclusion: string
    createdAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: StringFieldUpdateOperationsInput | string
    keyFindings?: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    references?: JsonNullValueInput | InputJsonValue
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ResearchSessionUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    executiveSummary?: StringFieldUpdateOperationsInput | string
    keyFindings?: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    references?: JsonNullValueInput | InputJsonValue
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    sessionId: string
    executiveSummary: string
    keyFindings: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: string | null
    references: JsonNullValueInput | InputJsonValue
    conclusion: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: StringFieldUpdateOperationsInput | string
    keyFindings?: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    references?: JsonNullValueInput | InputJsonValue
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    executiveSummary?: StringFieldUpdateOperationsInput | string
    keyFindings?: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    references?: JsonNullValueInput | InputJsonValue
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelPricingCreateInput = {
    id?: string
    modelName: string
    inputCostPerMillion: Decimal | DecimalJsLike | number | string
    outputCostPerMillion: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelPricingUncheckedCreateInput = {
    id?: string
    modelName: string
    inputCostPerMillion: Decimal | DecimalJsLike | number | string
    outputCostPerMillion: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelPricingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    inputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelPricingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    inputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelPricingCreateManyInput = {
    id?: string
    modelName: string
    inputCostPerMillion: Decimal | DecimalJsLike | number | string
    outputCostPerMillion: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelPricingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    inputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelPricingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    inputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    outputCostPerMillion?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResearchSessionListRelationFilter = {
    every?: ResearchSessionWhereInput
    some?: ResearchSessionWhereInput
    none?: ResearchSessionWhereInput
  }

  export type ResearchSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type ReportNullableScalarRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResearchSessionOrderByRelevanceInput = {
    fields: ResearchSessionOrderByRelevanceFieldEnum | ResearchSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResearchSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ResearchSessionAvgOrderByAggregateInput = {
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
  }

  export type ResearchSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ResearchSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ResearchSessionSumOrderByAggregateInput = {
    totalTokens?: SortOrder
    totalCost?: SortOrder
    totalSteps?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ResearchSessionScalarRelationFilter = {
    is?: ResearchSessionWhereInput
    isNot?: ResearchSessionWhereInput
  }

  export type AgentStepListRelationFilter = {
    every?: AgentStepWhereInput
    some?: AgentStepWhereInput
    none?: AgentStepWhereInput
  }

  export type AgentStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentOrderByRelevanceInput = {
    fields: AgentOrderByRelevanceFieldEnum | AgentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    agentName?: SortOrder
    status?: SortOrder
    inputData?: SortOrder
    outputData?: SortOrder
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    agentName?: SortOrder
    status?: SortOrder
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    agentName?: SortOrder
    status?: SortOrder
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    tokenUsage?: SortOrder
    cost?: SortOrder
    executionTimeMs?: SortOrder
    retries?: SortOrder
  }

  export type EnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type AgentStepOrderByRelevanceInput = {
    fields: AgentStepOrderByRelevanceFieldEnum | AgentStepOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AgentStepAgentIdStepNumberCompoundUniqueInput = {
    agentId: string
    stepNumber: number
  }

  export type AgentStepCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    stepNumber?: SortOrder
    toolName?: SortOrder
    arguments?: SortOrder
    response?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentStepAvgOrderByAggregateInput = {
    stepNumber?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
  }

  export type AgentStepMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    stepNumber?: SortOrder
    toolName?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentStepMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    stepNumber?: SortOrder
    toolName?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentStepSumOrderByAggregateInput = {
    stepNumber?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    cost?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ReportOrderByRelevanceInput = {
    fields: ReportOrderByRelevanceFieldEnum | ReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    executiveSummary?: SortOrder
    keyFindings?: SortOrder
    detailedAnalysis?: SortOrder
    references?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    executiveSummary?: SortOrder
    detailedAnalysis?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    executiveSummary?: SortOrder
    detailedAnalysis?: SortOrder
    conclusion?: SortOrder
    createdAt?: SortOrder
  }

  export type ModelPricingOrderByRelevanceInput = {
    fields: ModelPricingOrderByRelevanceFieldEnum | ModelPricingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModelPricingCountOrderByAggregateInput = {
    id?: SortOrder
    modelName?: SortOrder
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelPricingAvgOrderByAggregateInput = {
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
  }

  export type ModelPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    modelName?: SortOrder
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelPricingMinOrderByAggregateInput = {
    id?: SortOrder
    modelName?: SortOrder
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelPricingSumOrderByAggregateInput = {
    inputCostPerMillion?: SortOrder
    outputCostPerMillion?: SortOrder
  }

  export type ResearchSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<ResearchSessionCreateWithoutUserInput, ResearchSessionUncheckedCreateWithoutUserInput> | ResearchSessionCreateWithoutUserInput[] | ResearchSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutUserInput | ResearchSessionCreateOrConnectWithoutUserInput[]
    createMany?: ResearchSessionCreateManyUserInputEnvelope
    connect?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
  }

  export type ResearchSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResearchSessionCreateWithoutUserInput, ResearchSessionUncheckedCreateWithoutUserInput> | ResearchSessionCreateWithoutUserInput[] | ResearchSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutUserInput | ResearchSessionCreateOrConnectWithoutUserInput[]
    createMany?: ResearchSessionCreateManyUserInputEnvelope
    connect?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResearchSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResearchSessionCreateWithoutUserInput, ResearchSessionUncheckedCreateWithoutUserInput> | ResearchSessionCreateWithoutUserInput[] | ResearchSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutUserInput | ResearchSessionCreateOrConnectWithoutUserInput[]
    upsert?: ResearchSessionUpsertWithWhereUniqueWithoutUserInput | ResearchSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResearchSessionCreateManyUserInputEnvelope
    set?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    disconnect?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    delete?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    connect?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    update?: ResearchSessionUpdateWithWhereUniqueWithoutUserInput | ResearchSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResearchSessionUpdateManyWithWhereWithoutUserInput | ResearchSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResearchSessionScalarWhereInput | ResearchSessionScalarWhereInput[]
  }

  export type ResearchSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResearchSessionCreateWithoutUserInput, ResearchSessionUncheckedCreateWithoutUserInput> | ResearchSessionCreateWithoutUserInput[] | ResearchSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutUserInput | ResearchSessionCreateOrConnectWithoutUserInput[]
    upsert?: ResearchSessionUpsertWithWhereUniqueWithoutUserInput | ResearchSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResearchSessionCreateManyUserInputEnvelope
    set?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    disconnect?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    delete?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    connect?: ResearchSessionWhereUniqueInput | ResearchSessionWhereUniqueInput[]
    update?: ResearchSessionUpdateWithWhereUniqueWithoutUserInput | ResearchSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResearchSessionUpdateManyWithWhereWithoutUserInput | ResearchSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResearchSessionScalarWhereInput | ResearchSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResearchSessionsInput = {
    create?: XOR<UserCreateWithoutResearchSessionsInput, UserUncheckedCreateWithoutResearchSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResearchSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type AgentCreateNestedManyWithoutSessionInput = {
    create?: XOR<AgentCreateWithoutSessionInput, AgentUncheckedCreateWithoutSessionInput> | AgentCreateWithoutSessionInput[] | AgentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutSessionInput | AgentCreateOrConnectWithoutSessionInput[]
    createMany?: AgentCreateManySessionInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type ReportCreateNestedOneWithoutSessionInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput
    connect?: ReportWhereUniqueInput
  }

  export type AgentUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AgentCreateWithoutSessionInput, AgentUncheckedCreateWithoutSessionInput> | AgentCreateWithoutSessionInput[] | AgentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutSessionInput | AgentCreateOrConnectWithoutSessionInput[]
    createMany?: AgentCreateManySessionInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedOneWithoutSessionInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput
    connect?: ReportWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutResearchSessionsNestedInput = {
    create?: XOR<UserCreateWithoutResearchSessionsInput, UserUncheckedCreateWithoutResearchSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResearchSessionsInput
    upsert?: UserUpsertWithoutResearchSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResearchSessionsInput, UserUpdateWithoutResearchSessionsInput>, UserUncheckedUpdateWithoutResearchSessionsInput>
  }

  export type AgentUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AgentCreateWithoutSessionInput, AgentUncheckedCreateWithoutSessionInput> | AgentCreateWithoutSessionInput[] | AgentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutSessionInput | AgentCreateOrConnectWithoutSessionInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutSessionInput | AgentUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AgentCreateManySessionInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutSessionInput | AgentUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutSessionInput | AgentUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type ReportUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput
    upsert?: ReportUpsertWithoutSessionInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutSessionInput, ReportUpdateWithoutSessionInput>, ReportUncheckedUpdateWithoutSessionInput>
  }

  export type AgentUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AgentCreateWithoutSessionInput, AgentUncheckedCreateWithoutSessionInput> | AgentCreateWithoutSessionInput[] | AgentUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutSessionInput | AgentCreateOrConnectWithoutSessionInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutSessionInput | AgentUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AgentCreateManySessionInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutSessionInput | AgentUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutSessionInput | AgentUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateOneWithoutSessionNestedInput = {
    create?: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ReportCreateOrConnectWithoutSessionInput
    upsert?: ReportUpsertWithoutSessionInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutSessionInput, ReportUpdateWithoutSessionInput>, ReportUncheckedUpdateWithoutSessionInput>
  }

  export type ResearchSessionCreateNestedOneWithoutAgentsInput = {
    create?: XOR<ResearchSessionCreateWithoutAgentsInput, ResearchSessionUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutAgentsInput
    connect?: ResearchSessionWhereUniqueInput
  }

  export type AgentStepCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentStepCreateWithoutAgentInput, AgentStepUncheckedCreateWithoutAgentInput> | AgentStepCreateWithoutAgentInput[] | AgentStepUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentStepCreateOrConnectWithoutAgentInput | AgentStepCreateOrConnectWithoutAgentInput[]
    createMany?: AgentStepCreateManyAgentInputEnvelope
    connect?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
  }

  export type AgentStepUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentStepCreateWithoutAgentInput, AgentStepUncheckedCreateWithoutAgentInput> | AgentStepCreateWithoutAgentInput[] | AgentStepUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentStepCreateOrConnectWithoutAgentInput | AgentStepCreateOrConnectWithoutAgentInput[]
    createMany?: AgentStepCreateManyAgentInputEnvelope
    connect?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
  }

  export type EnumAgentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AgentStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ResearchSessionUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<ResearchSessionCreateWithoutAgentsInput, ResearchSessionUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutAgentsInput
    upsert?: ResearchSessionUpsertWithoutAgentsInput
    connect?: ResearchSessionWhereUniqueInput
    update?: XOR<XOR<ResearchSessionUpdateToOneWithWhereWithoutAgentsInput, ResearchSessionUpdateWithoutAgentsInput>, ResearchSessionUncheckedUpdateWithoutAgentsInput>
  }

  export type AgentStepUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentStepCreateWithoutAgentInput, AgentStepUncheckedCreateWithoutAgentInput> | AgentStepCreateWithoutAgentInput[] | AgentStepUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentStepCreateOrConnectWithoutAgentInput | AgentStepCreateOrConnectWithoutAgentInput[]
    upsert?: AgentStepUpsertWithWhereUniqueWithoutAgentInput | AgentStepUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentStepCreateManyAgentInputEnvelope
    set?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    disconnect?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    delete?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    connect?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    update?: AgentStepUpdateWithWhereUniqueWithoutAgentInput | AgentStepUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentStepUpdateManyWithWhereWithoutAgentInput | AgentStepUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentStepScalarWhereInput | AgentStepScalarWhereInput[]
  }

  export type AgentStepUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentStepCreateWithoutAgentInput, AgentStepUncheckedCreateWithoutAgentInput> | AgentStepCreateWithoutAgentInput[] | AgentStepUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentStepCreateOrConnectWithoutAgentInput | AgentStepCreateOrConnectWithoutAgentInput[]
    upsert?: AgentStepUpsertWithWhereUniqueWithoutAgentInput | AgentStepUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentStepCreateManyAgentInputEnvelope
    set?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    disconnect?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    delete?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    connect?: AgentStepWhereUniqueInput | AgentStepWhereUniqueInput[]
    update?: AgentStepUpdateWithWhereUniqueWithoutAgentInput | AgentStepUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentStepUpdateManyWithWhereWithoutAgentInput | AgentStepUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentStepScalarWhereInput | AgentStepScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutStepsInput = {
    create?: XOR<AgentCreateWithoutStepsInput, AgentUncheckedCreateWithoutStepsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutStepsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<AgentCreateWithoutStepsInput, AgentUncheckedCreateWithoutStepsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutStepsInput
    upsert?: AgentUpsertWithoutStepsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutStepsInput, AgentUpdateWithoutStepsInput>, AgentUncheckedUpdateWithoutStepsInput>
  }

  export type ResearchSessionCreateNestedOneWithoutReportInput = {
    create?: XOR<ResearchSessionCreateWithoutReportInput, ResearchSessionUncheckedCreateWithoutReportInput>
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutReportInput
    connect?: ResearchSessionWhereUniqueInput
  }

  export type ResearchSessionUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<ResearchSessionCreateWithoutReportInput, ResearchSessionUncheckedCreateWithoutReportInput>
    connectOrCreate?: ResearchSessionCreateOrConnectWithoutReportInput
    upsert?: ResearchSessionUpsertWithoutReportInput
    connect?: ResearchSessionWhereUniqueInput
    update?: XOR<XOR<ResearchSessionUpdateToOneWithWhereWithoutReportInput, ResearchSessionUpdateWithoutReportInput>, ResearchSessionUncheckedUpdateWithoutReportInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[]
    notIn?: $Enums.SessionStatus[]
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[]
    notIn?: $Enums.AgentStatus[]
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ResearchSessionCreateWithoutUserInput = {
    id?: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    agents?: AgentCreateNestedManyWithoutSessionInput
    report?: ReportCreateNestedOneWithoutSessionInput
  }

  export type ResearchSessionUncheckedCreateWithoutUserInput = {
    id?: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    agents?: AgentUncheckedCreateNestedManyWithoutSessionInput
    report?: ReportUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ResearchSessionCreateOrConnectWithoutUserInput = {
    where: ResearchSessionWhereUniqueInput
    create: XOR<ResearchSessionCreateWithoutUserInput, ResearchSessionUncheckedCreateWithoutUserInput>
  }

  export type ResearchSessionCreateManyUserInputEnvelope = {
    data: ResearchSessionCreateManyUserInput | ResearchSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResearchSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: ResearchSessionWhereUniqueInput
    update: XOR<ResearchSessionUpdateWithoutUserInput, ResearchSessionUncheckedUpdateWithoutUserInput>
    create: XOR<ResearchSessionCreateWithoutUserInput, ResearchSessionUncheckedCreateWithoutUserInput>
  }

  export type ResearchSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: ResearchSessionWhereUniqueInput
    data: XOR<ResearchSessionUpdateWithoutUserInput, ResearchSessionUncheckedUpdateWithoutUserInput>
  }

  export type ResearchSessionUpdateManyWithWhereWithoutUserInput = {
    where: ResearchSessionScalarWhereInput
    data: XOR<ResearchSessionUpdateManyMutationInput, ResearchSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type ResearchSessionScalarWhereInput = {
    AND?: ResearchSessionScalarWhereInput | ResearchSessionScalarWhereInput[]
    OR?: ResearchSessionScalarWhereInput[]
    NOT?: ResearchSessionScalarWhereInput | ResearchSessionScalarWhereInput[]
    id?: StringFilter<"ResearchSession"> | string
    userId?: StringFilter<"ResearchSession"> | string
    topic?: StringFilter<"ResearchSession"> | string
    status?: EnumSessionStatusFilter<"ResearchSession"> | $Enums.SessionStatus
    totalTokens?: IntFilter<"ResearchSession"> | number
    totalCost?: DecimalFilter<"ResearchSession"> | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFilter<"ResearchSession"> | number
    startedAt?: DateTimeFilter<"ResearchSession"> | Date | string
    completedAt?: DateTimeNullableFilter<"ResearchSession"> | Date | string | null
  }

  export type UserCreateWithoutResearchSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutResearchSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutResearchSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResearchSessionsInput, UserUncheckedCreateWithoutResearchSessionsInput>
  }

  export type AgentCreateWithoutSessionInput = {
    id?: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
    steps?: AgentStepCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutSessionInput = {
    id?: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
    steps?: AgentStepUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutSessionInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutSessionInput, AgentUncheckedCreateWithoutSessionInput>
  }

  export type AgentCreateManySessionInputEnvelope = {
    data: AgentCreateManySessionInput | AgentCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutSessionInput = {
    id?: string
    executiveSummary: string
    keyFindings: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: string | null
    references: JsonNullValueInput | InputJsonValue
    conclusion: string
    createdAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutSessionInput = {
    id?: string
    executiveSummary: string
    keyFindings: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: string | null
    references: JsonNullValueInput | InputJsonValue
    conclusion: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutSessionInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutResearchSessionsInput = {
    update: XOR<UserUpdateWithoutResearchSessionsInput, UserUncheckedUpdateWithoutResearchSessionsInput>
    create: XOR<UserCreateWithoutResearchSessionsInput, UserUncheckedCreateWithoutResearchSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResearchSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResearchSessionsInput, UserUncheckedUpdateWithoutResearchSessionsInput>
  }

  export type UserUpdateWithoutResearchSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutResearchSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUpsertWithWhereUniqueWithoutSessionInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutSessionInput, AgentUncheckedUpdateWithoutSessionInput>
    create: XOR<AgentCreateWithoutSessionInput, AgentUncheckedCreateWithoutSessionInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutSessionInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutSessionInput, AgentUncheckedUpdateWithoutSessionInput>
  }

  export type AgentUpdateManyWithWhereWithoutSessionInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutSessionInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    sessionId?: StringFilter<"Agent"> | string
    agentName?: StringFilter<"Agent"> | string
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    inputData?: JsonNullableFilter<"Agent">
    outputData?: JsonNullableFilter<"Agent">
    tokenUsage?: IntFilter<"Agent"> | number
    cost?: DecimalFilter<"Agent"> | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFilter<"Agent"> | number
    retries?: IntFilter<"Agent"> | number
    error?: StringNullableFilter<"Agent"> | string | null
    createdAt?: DateTimeFilter<"Agent"> | Date | string
  }

  export type ReportUpsertWithoutSessionInput = {
    update: XOR<ReportUpdateWithoutSessionInput, ReportUncheckedUpdateWithoutSessionInput>
    create: XOR<ReportCreateWithoutSessionInput, ReportUncheckedCreateWithoutSessionInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutSessionInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutSessionInput, ReportUncheckedUpdateWithoutSessionInput>
  }

  export type ReportUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: StringFieldUpdateOperationsInput | string
    keyFindings?: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    references?: JsonNullValueInput | InputJsonValue
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveSummary?: StringFieldUpdateOperationsInput | string
    keyFindings?: JsonNullValueInput | InputJsonValue
    detailedAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    references?: JsonNullValueInput | InputJsonValue
    conclusion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchSessionCreateWithoutAgentsInput = {
    id?: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutResearchSessionsInput
    report?: ReportCreateNestedOneWithoutSessionInput
  }

  export type ResearchSessionUncheckedCreateWithoutAgentsInput = {
    id?: string
    userId: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    report?: ReportUncheckedCreateNestedOneWithoutSessionInput
  }

  export type ResearchSessionCreateOrConnectWithoutAgentsInput = {
    where: ResearchSessionWhereUniqueInput
    create: XOR<ResearchSessionCreateWithoutAgentsInput, ResearchSessionUncheckedCreateWithoutAgentsInput>
  }

  export type AgentStepCreateWithoutAgentInput = {
    id?: string
    stepNumber: number
    toolName: string
    arguments: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: number
    completionTokens?: number
    cost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type AgentStepUncheckedCreateWithoutAgentInput = {
    id?: string
    stepNumber: number
    toolName: string
    arguments: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: number
    completionTokens?: number
    cost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type AgentStepCreateOrConnectWithoutAgentInput = {
    where: AgentStepWhereUniqueInput
    create: XOR<AgentStepCreateWithoutAgentInput, AgentStepUncheckedCreateWithoutAgentInput>
  }

  export type AgentStepCreateManyAgentInputEnvelope = {
    data: AgentStepCreateManyAgentInput | AgentStepCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ResearchSessionUpsertWithoutAgentsInput = {
    update: XOR<ResearchSessionUpdateWithoutAgentsInput, ResearchSessionUncheckedUpdateWithoutAgentsInput>
    create: XOR<ResearchSessionCreateWithoutAgentsInput, ResearchSessionUncheckedCreateWithoutAgentsInput>
    where?: ResearchSessionWhereInput
  }

  export type ResearchSessionUpdateToOneWithWhereWithoutAgentsInput = {
    where?: ResearchSessionWhereInput
    data: XOR<ResearchSessionUpdateWithoutAgentsInput, ResearchSessionUncheckedUpdateWithoutAgentsInput>
  }

  export type ResearchSessionUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResearchSessionsNestedInput
    report?: ReportUpdateOneWithoutSessionNestedInput
  }

  export type ResearchSessionUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type AgentStepUpsertWithWhereUniqueWithoutAgentInput = {
    where: AgentStepWhereUniqueInput
    update: XOR<AgentStepUpdateWithoutAgentInput, AgentStepUncheckedUpdateWithoutAgentInput>
    create: XOR<AgentStepCreateWithoutAgentInput, AgentStepUncheckedCreateWithoutAgentInput>
  }

  export type AgentStepUpdateWithWhereUniqueWithoutAgentInput = {
    where: AgentStepWhereUniqueInput
    data: XOR<AgentStepUpdateWithoutAgentInput, AgentStepUncheckedUpdateWithoutAgentInput>
  }

  export type AgentStepUpdateManyWithWhereWithoutAgentInput = {
    where: AgentStepScalarWhereInput
    data: XOR<AgentStepUpdateManyMutationInput, AgentStepUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentStepScalarWhereInput = {
    AND?: AgentStepScalarWhereInput | AgentStepScalarWhereInput[]
    OR?: AgentStepScalarWhereInput[]
    NOT?: AgentStepScalarWhereInput | AgentStepScalarWhereInput[]
    id?: StringFilter<"AgentStep"> | string
    agentId?: StringFilter<"AgentStep"> | string
    stepNumber?: IntFilter<"AgentStep"> | number
    toolName?: StringFilter<"AgentStep"> | string
    arguments?: JsonFilter<"AgentStep">
    response?: JsonNullableFilter<"AgentStep">
    promptTokens?: IntFilter<"AgentStep"> | number
    completionTokens?: IntFilter<"AgentStep"> | number
    cost?: DecimalFilter<"AgentStep"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"AgentStep"> | Date | string
  }

  export type AgentCreateWithoutStepsInput = {
    id?: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
    session: ResearchSessionCreateNestedOneWithoutAgentsInput
  }

  export type AgentUncheckedCreateWithoutStepsInput = {
    id?: string
    sessionId: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
  }

  export type AgentCreateOrConnectWithoutStepsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutStepsInput, AgentUncheckedCreateWithoutStepsInput>
  }

  export type AgentUpsertWithoutStepsInput = {
    update: XOR<AgentUpdateWithoutStepsInput, AgentUncheckedUpdateWithoutStepsInput>
    create: XOR<AgentCreateWithoutStepsInput, AgentUncheckedCreateWithoutStepsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutStepsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutStepsInput, AgentUncheckedUpdateWithoutStepsInput>
  }

  export type AgentUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ResearchSessionUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchSessionCreateWithoutReportInput = {
    id?: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutResearchSessionsInput
    agents?: AgentCreateNestedManyWithoutSessionInput
  }

  export type ResearchSessionUncheckedCreateWithoutReportInput = {
    id?: string
    userId: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    agents?: AgentUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ResearchSessionCreateOrConnectWithoutReportInput = {
    where: ResearchSessionWhereUniqueInput
    create: XOR<ResearchSessionCreateWithoutReportInput, ResearchSessionUncheckedCreateWithoutReportInput>
  }

  export type ResearchSessionUpsertWithoutReportInput = {
    update: XOR<ResearchSessionUpdateWithoutReportInput, ResearchSessionUncheckedUpdateWithoutReportInput>
    create: XOR<ResearchSessionCreateWithoutReportInput, ResearchSessionUncheckedCreateWithoutReportInput>
    where?: ResearchSessionWhereInput
  }

  export type ResearchSessionUpdateToOneWithWhereWithoutReportInput = {
    where?: ResearchSessionWhereInput
    data: XOR<ResearchSessionUpdateWithoutReportInput, ResearchSessionUncheckedUpdateWithoutReportInput>
  }

  export type ResearchSessionUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResearchSessionsNestedInput
    agents?: AgentUpdateManyWithoutSessionNestedInput
  }

  export type ResearchSessionUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agents?: AgentUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ResearchSessionCreateManyUserInput = {
    id?: string
    topic: string
    status?: $Enums.SessionStatus
    totalTokens?: number
    totalCost?: Decimal | DecimalJsLike | number | string
    totalSteps?: number
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ResearchSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agents?: AgentUpdateManyWithoutSessionNestedInput
    report?: ReportUpdateOneWithoutSessionNestedInput
  }

  export type ResearchSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agents?: AgentUncheckedUpdateManyWithoutSessionNestedInput
    report?: ReportUncheckedUpdateOneWithoutSessionNestedInput
  }

  export type ResearchSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalTokens?: IntFieldUpdateOperationsInput | number
    totalCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgentCreateManySessionInput = {
    id?: string
    agentName: string
    status?: $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: number
    cost?: Decimal | DecimalJsLike | number | string
    executionTimeMs?: number
    retries?: number
    error?: string | null
    createdAt?: Date | string
  }

  export type AgentUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AgentStepUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: AgentStepUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    inputData?: NullableJsonNullValueInput | InputJsonValue
    outputData?: NullableJsonNullValueInput | InputJsonValue
    tokenUsage?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executionTimeMs?: IntFieldUpdateOperationsInput | number
    retries?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStepCreateManyAgentInput = {
    id?: string
    stepNumber: number
    toolName: string
    arguments: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: number
    completionTokens?: number
    cost?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type AgentStepUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStepUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentStepUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    toolName?: StringFieldUpdateOperationsInput | string
    arguments?: JsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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