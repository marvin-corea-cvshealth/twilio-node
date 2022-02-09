/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type FleetDataMetering = 'payg';

/**
 * Initialize the FleetList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function FleetList(version: V1): FleetListInstance;

/**
 * Options to pass to update
 *
 * @property commandsMethod - Deprecated
 * @property commandsUrl - Deprecated
 * @property ipCommandsMethod - A string representing the HTTP method to use when making a request to `ip_commands_url`
 * @property ipCommandsUrl - The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device
 * @property networkAccessProfile - The SID or unique name of the Network Access Profile of the Fleet
 * @property smsCommandsMethod - A string representing the HTTP method to use when making a request to `sms_commands_url`
 * @property smsCommandsUrl - The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface FleetInstanceUpdateOptions {
  commandsMethod?: string;
  commandsUrl?: string;
  ipCommandsMethod?: string;
  ipCommandsUrl?: string;
  networkAccessProfile?: string;
  smsCommandsMethod?: string;
  smsCommandsUrl?: string;
  uniqueName?: string;
}

interface FleetListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FleetContext;
  /**
   * create a FleetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FleetListInstanceCreateOptions, callback?: (error: Error | null, item: FleetInstance) => any): Promise<FleetInstance>;
  /**
   * Streams FleetInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FleetInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: FleetListInstanceEachOptions, callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a fleet
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): FleetContext;
  /**
   * Retrieve a single target page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
  /**
   * Retrieve a single target page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
  /**
   * Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
  /**
   * Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FleetListInstanceOptions, callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
  /**
   * Retrieve a single page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
  /**
   * Retrieve a single page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FleetListInstancePageOptions, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property commandsEnabled - Deprecated
 * @property commandsMethod - Deprecated
 * @property commandsUrl - Deprecated
 * @property dataEnabled - Defines whether SIMs in the Fleet are capable of using data connectivity
 * @property dataLimit - The total data usage (download and upload combined) in Megabytes that each Sim resource assigned to the Fleet resource can consume
 * @property ipCommandsMethod - A string representing the HTTP method to use when making a request to `ip_commands_url`
 * @property ipCommandsUrl - The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device
 * @property networkAccessProfile - The SID or unique name of the Network Access Profile of the Fleet
 * @property smsCommandsEnabled - Defines whether SIMs in the Fleet are capable of sending and receiving machine-to-machine SMS via Commands
 * @property smsCommandsMethod - A string representing the HTTP method to use when making a request to `sms_commands_url`
 * @property smsCommandsUrl - The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface FleetListInstanceCreateOptions {
  commandsEnabled?: boolean;
  commandsMethod?: string;
  commandsUrl?: string;
  dataEnabled?: boolean;
  dataLimit?: number;
  ipCommandsMethod?: string;
  ipCommandsUrl?: string;
  networkAccessProfile: string;
  smsCommandsEnabled?: boolean;
  smsCommandsMethod?: string;
  smsCommandsUrl?: string;
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property networkAccessProfile - The SID or unique name of the Network Access Profile of the Fleet
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface FleetListInstanceEachOptions {
  callback?: (item: FleetInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  networkAccessProfile?: string;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property networkAccessProfile - The SID or unique name of the Network Access Profile of the Fleet
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface FleetListInstanceOptions {
  limit?: number;
  networkAccessProfile?: string;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property networkAccessProfile - The SID or unique name of the Network Access Profile of the Fleet
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FleetListInstancePageOptions {
  networkAccessProfile?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FleetPayload extends FleetResource, Page.TwilioResponsePayload {
}

interface FleetResource {
  account_sid: string;
  commands_enabled: boolean;
  commands_method: string;
  commands_url: string;
  data_enabled: boolean;
  data_limit: number;
  data_metering: FleetDataMetering;
  date_created: Date;
  date_updated: Date;
  ip_commands_method: string;
  ip_commands_url: string;
  network_access_profile_sid: string;
  sid: string;
  sms_commands_enabled: boolean;
  sms_commands_method: string;
  sms_commands_url: string;
  unique_name: string;
  url: string;
}

interface FleetSolution {
}


declare class FleetContext {
  /**
   * Initialize the FleetContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
  /**
   * update a FleetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FleetInstanceUpdateOptions, callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
}


declare class FleetInstance extends SerializableClass {
  /**
   * Initialize the FleetContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, payload: FleetPayload, sid: string);

  private _proxy: FleetContext;
  accountSid: string;
  commandsEnabled: boolean;
  commandsMethod: string;
  commandsUrl: string;
  dataEnabled: boolean;
  dataLimit: number;
  dataMetering: FleetDataMetering;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
  ipCommandsMethod: string;
  ipCommandsUrl: string;
  networkAccessProfileSid: string;
  sid: string;
  smsCommandsEnabled: boolean;
  smsCommandsMethod: string;
  smsCommandsUrl: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
  /**
   * update a FleetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FleetInstanceUpdateOptions, callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
  url: string;
}


declare class FleetPage extends Page<V1, FleetPayload, FleetResource, FleetInstance> {
  /**
   * Initialize the FleetPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FleetSolution);

  /**
   * Build an instance of FleetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FleetPayload): FleetInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FleetContext, FleetDataMetering, FleetInstance, FleetInstanceUpdateOptions, FleetList, FleetListInstance, FleetListInstanceCreateOptions, FleetListInstanceEachOptions, FleetListInstanceOptions, FleetListInstancePageOptions, FleetPage, FleetPayload, FleetResource, FleetSolution }
