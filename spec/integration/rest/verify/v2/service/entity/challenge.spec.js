'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Challenge', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Entities/${identity}/Challenges`;

      var values = {FactorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create_push_without_auth_payload response',
    function(done) {
      var body = {
          'sid': 'YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YF03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'status': 'pending',
          'responded_reason': 'none',
          'details': {
              'message': 'Hi! Mr. John Doe, would you like to sign up?',
              'date': '2020-07-01T12:13:14Z',
              'fields': [
                  {
                      'label': 'Action',
                      'value': 'Sign up in portal'
                  }
              ]
          },
          'hidden_details': {
              'ip': '172.168.1.234'
          },
          'factor_type': 'push',
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_totp_without_auth_payload response',
    function(done) {
      var body = {
          'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'status': 'pending',
          'responded_reason': 'none',
          'details': {
              'message': 'Hi! Mr. John Doe, would you like to sign up?',
              'date': '2020-07-01T12:13:14Z',
              'fields': [
                  {
                      'label': 'Action',
                      'value': 'Sign up in portal'
                  }
              ]
          },
          'hidden_details': {
              'ip': '172.168.1.234'
          },
          'factor_type': 'totp',
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_totp_with_auth_payload response',
    function(done) {
      var body = {
          'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'status': 'approved',
          'responded_reason': 'none',
          'details': {
              'message': 'Hi! Mr. John Doe, would you like to sign up?',
              'date': '2020-07-01T12:13:14Z',
              'fields': [
                  {
                      'label': 'Action',
                      'value': 'Sign up in portal'
                  }
              ]
          },
          'hidden_details': {
              'ip': '172.168.1.234'
          },
          'factor_type': 'totp',
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges('YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var sid = 'YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Entities/${identity}/Challenges/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch_sid response',
    function(done) {
      var body = {
          'sid': 'YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'status': 'pending',
          'responded_reason': 'none',
          'details': {
              'message': 'Hi! Mr. John Doe, would you like to sign up?',
              'date': '2020-07-01T12:13:14Z',
              'fields': [
                  {
                      'label': 'Action',
                      'value': 'Sign up in portal'
                  }
              ]
          },
          'hidden_details': {
              'ip': '172.168.1.234'
          },
          'factor_type': 'push',
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges('YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'challenges': [
              {
                  'sid': 'YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'push',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              },
              {
                  'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'totp',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'challenges'
          }
      };
      holodeck.mock(new Response(200, body));
      client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .entities('identity')
                      .challenges.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'challenges': [
              {
                  'sid': 'YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'push',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              },
              {
                  'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'totp',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'challenges'
          }
      };
      holodeck.mock(new Response(200, body));
      client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .entities('identity')
                      .challenges.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://verify.twilio.com/v2/Services/${serviceSid}/Entities/${identity}/Challenges',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'challenges': [
              {
                  'sid': 'YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'push',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              },
              {
                  'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'totp',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'challenges'
          }
      };
      holodeck.mock(new Response(200, body));
      client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .entities('identity')
                      .challenges.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Entities/${identity}/Challenges`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'challenges': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'challenges'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'challenges': [
              {
                  'sid': 'YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'push',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              },
              {
                  'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'date_responded': '2015-07-30T20:00:00Z',
                  'expiration_date': '2015-07-30T20:00:00Z',
                  'status': 'pending',
                  'responded_reason': 'none',
                  'details': {
                      'message': 'Hi! Mr. John Doe, would you like to sign up?',
                      'date': '2020-07-01T12:13:14Z',
                      'fields': [
                          {
                              'label': 'Action',
                              'value': 'Sign up in portal'
                          }
                      ]
                  },
                  'hidden_details': {
                      'ip': '172.168.1.234'
                  },
                  'factor_type': 'totp',
                  'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'challenges'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges('YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var sid = 'YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/Entities/${identity}/Challenges/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid verify_push response',
    function(done) {
      var body = {
          'sid': 'YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YF03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'status': 'approved',
          'responded_reason': 'none',
          'details': {
              'message': 'Hi! Mr. John Doe, would you like to sign up?',
              'date': '2020-07-01T12:13:14Z',
              'fields': [
                  {
                      'label': 'Action',
                      'value': 'Sign up in portal'
                  }
              ]
          },
          'hidden_details': {
              'ip': '172.168.1.234'
          },
          'factor_type': 'push',
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC03aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges('YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid verify_totp response',
    function(done) {
      var body = {
          'sid': 'YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YF02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'status': 'approved',
          'responded_reason': 'none',
          'details': {
              'message': 'Hi! Mr. John Doe, would you like to sign up?',
              'date': '2020-07-01T12:13:14Z',
              'fields': [
                  {
                      'label': 'Action',
                      'value': 'Sign up in portal'
                  }
              ]
          },
          'hidden_details': {
              'ip': '172.168.1.234'
          },
          'factor_type': 'totp',
          'url': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'notifications': 'https://verify.twilio.com/v2/Services/VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Challenges/YC02aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .entities('identity')
                                    .challenges('YCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
