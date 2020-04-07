/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { FeedbackList } from './message/feedback';
import { FeedbackListInstance } from './message/feedback';
import { MediaList } from './message/media';
import { MediaListInstance } from './message/media';
import { SerializableClass } from '../../../../interfaces';

type MessageAddressRetention = 'retain';

type MessageContentRetention = 'retain';

type MessageDirection = 'inbound'|'outbound-api'|'outbound-call'|'outbound-reply';

type MessageStatus = 'queued'|'sending'|'sent'|'failed'|'delivered'|'undelivered'|'receiving'|'received'|'accepted'|'scheduled'|'read'|'partially_delivered';

type MessageTrafficType = 'free';

/**
 * Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 */
declare function MessageList(version: V2010, accountSid: string): MessageListInstance;

/**
 * Options to pass to update
 *
 * @property body - The text of the message you want to send
 */
interface MessageInstanceUpdateOptions {
  body: string;
}

interface MessageListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MessageContext;
  /**
   * create a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MessageListInstanceCreateOptions, callback?: (error: Error | null, item: MessageInstance) => any): Promise<MessageInstance>;
  /**
   * Streams MessageInstance records from the API.
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
  each(callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MessageInstance records from the API.
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
  each(opts?: MessageListInstanceEachOptions, callback?: (item: MessageInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a message
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): MessageContext;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MessageListInstanceOptions, callback?: (error: Error | null, items: MessageInstance[]) => any): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MessageListInstancePageOptions, callback?: (error: Error | null, items: MessagePage) => any): Promise<MessagePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property addressRetention - Determines if the address can be stored or obfuscated based on privacy settings
 * @property applicationSid - The application to use for callbacks
 * @property body - The text of the message you want to send. Can be up to 1,600 characters in length.
 * @property contentRetention - Determines if the message content can be stored or redacted based on privacy settings
 * @property forceDelivery - Reserved
 * @property from - The phone number that initiated the message
 * @property maxPrice - The total maximum price up to 4 decimal places in US dollars acceptable for the message to be delivered.
 * @property mediaUrl - The URL of the media to send with the message
 * @property messagingServiceSid - The SID of the Messaging Service you want to associate with the message.
 * @property persistentAction - Rich actions for Channels Messages.
 * @property provideFeedback - Whether to confirm delivery of the message
 * @property smartEncoded - Whether to detect Unicode characters that have a similar GSM-7 character and replace them
 * @property statusCallback - The URL we should call to send status information to your application
 * @property to - The destination phone number
 * @property validityPeriod - The number of seconds that the message can remain in our outgoing queue.
 */
interface MessageListInstanceCreateOptions {
  addressRetention?: MessageAddressRetention;
  applicationSid?: string;
  body?: string;
  contentRetention?: MessageContentRetention;
  forceDelivery?: boolean;
  from?: string;
  maxPrice?: number;
  mediaUrl?: string | string[];
  messagingServiceSid?: string;
  persistentAction?: string | string[];
  provideFeedback?: boolean;
  smartEncoded?: boolean;
  statusCallback?: string;
  to: string;
  validityPeriod?: number;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateSent - Filter by date sent
 * @property dateSentAfter - Filter by date sent
 * @property dateSentBefore - Filter by date sent
 * @property done - Function to be called upon completion of streaming
 * @property from - Filter by from number
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property to - Filter by messages sent to this number
 */
interface MessageListInstanceEachOptions {
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  dateSent?: Date;
  dateSentAfter?: Date;
  dateSentBefore?: Date;
  done?: Function;
  from?: string;
  limit?: number;
  pageSize?: number;
  to?: string;
}

/**
 * Options to pass to list
 *
 * @property dateSent - Filter by date sent
 * @property dateSentAfter - Filter by date sent
 * @property dateSentBefore - Filter by date sent
 * @property from - Filter by from number
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property to - Filter by messages sent to this number
 */
interface MessageListInstanceOptions {
  dateSent?: Date;
  dateSentAfter?: Date;
  dateSentBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  to?: string;
}

/**
 * Options to pass to page
 *
 * @property dateSent - Filter by date sent
 * @property dateSentAfter - Filter by date sent
 * @property dateSentBefore - Filter by date sent
 * @property from - Filter by from number
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property to - Filter by messages sent to this number
 */
interface MessageListInstancePageOptions {
  dateSent?: Date;
  dateSentAfter?: Date;
  dateSentBefore?: Date;
  from?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  to?: string;
}

interface MessagePayload extends MessageResource, Page.TwilioResponsePayload {
}

interface MessageResource {
  account_sid: string;
  api_version: string;
  body: string;
  date_created: Date;
  date_sent: Date;
  date_updated: Date;
  direction: MessageDirection;
  error_code: number;
  error_message: string;
  from: string;
  messaging_service_sid: string;
  num_media: string;
  num_segments: string;
  price: string;
  price_unit: string;
  sid: string;
  status: MessageStatus;
  subresource_uris: string;
  to: string;
  uri: string;
}

interface MessageSolution {
  accountSid?: string;
}


declare class MessageContext {
  /**
   * Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, sid: string);

  feedback: FeedbackListInstance;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  media: MediaListInstance;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
}


declare class MessageInstance extends SerializableClass {
  /**
   * Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: MessagePayload, accountSid: string, sid: string);

  private _proxy: MessageContext;
  accountSid: string;
  apiVersion: string;
  body: string;
  dateCreated: Date;
  dateSent: Date;
  dateUpdated: Date;
  direction: MessageDirection;
  errorCode: number;
  errorMessage: string;
  /**
   * Access the feedback
   */
  feedback(): FeedbackListInstance;
  /**
   * fetch a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  from: string;
  /**
   * Access the media
   */
  media(): MediaListInstance;
  messagingServiceSid: string;
  numMedia: string;
  numSegments: string;
  price: string;
  priceUnit: string;
  /**
   * remove a MessageInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: MessageInstance) => any): Promise<boolean>;
  sid: string;
  status: MessageStatus;
  subresourceUris: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MessageInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MessageInstanceUpdateOptions, callback?: (error: Error | null, items: MessageInstance) => any): Promise<MessageInstance>;
  uri: string;
}


declare class MessagePage extends Page<V2010, MessagePayload, MessageResource, MessageInstance> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: MessageSolution);

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessagePayload): MessageInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MessageAddressRetention, MessageContentRetention, MessageContext, MessageDirection, MessageInstance, MessageInstanceUpdateOptions, MessageList, MessageListInstance, MessageListInstanceCreateOptions, MessageListInstanceEachOptions, MessageListInstanceOptions, MessageListInstancePageOptions, MessagePage, MessagePayload, MessageResource, MessageSolution, MessageStatus, MessageTrafficType }
