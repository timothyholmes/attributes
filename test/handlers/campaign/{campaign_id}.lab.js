const { expect } = require('code');
const Lab = require('lab');

const handlers = require('../../../lib/handlers/campaign/{campaign_id}');

const lab = exports.lab = Lab.script(); // eslint-disable-line

lab.experiment('/campaign/{campaign_id}', () => {
  lab.experiment('PUT', () => {
    lab.test('should throw not implemented error', () => {
      try {
        handlers.put();
        throw new Error('Should not be here');
      } catch (error) {
        expect(error.output.statusCode).equal(501);
      }
    });
  });
  lab.experiment('GET', () => {
    lab.test('should throw not implemented error', () => {
      try {
        handlers.get();
        throw new Error('Should not be here');
      } catch (error) {
        expect(error.output.statusCode).equal(501);
      }
    });
  });
  lab.experiment('DELETE', () => {
    lab.test('should throw not implemented error', () => {
      try {
        handlers.delete();
        throw new Error('Should not be here');
      } catch (error) {
        expect(error.output.statusCode).equal(501);
      }
    });
  });
});
