import { object, string } from 'yup';

import Scheme from './index';

describe('schemeResolver', () => {
  describe('resolve', () => {
    it('should return a function', () => {
      const schema = object().shape({
        name: string().required('Name is required'),
        email: string().email('Invalid email').required('Email is required'),
      });

      const resolver = Scheme.resolve(schema);

      expect(typeof resolver).toBe('function');
    });
  });

  describe('build', () => {
    it('should create a Yup schema with the given shape', async () => {
      const schemaShape = {
        email: string().email().required(),
        password: string().min(8).required(),
      };

      const schema = Scheme.build(schemaShape);

      const validData = {
        email: 'test@example.com',
        password: 'password123',
      };

      await expect(schema.isValid(validData)).resolves.toBe(true);

      const invalidData = {
        email: 'not-an-email',
        password: 'short',
      };

      await expect(schema.isValid(invalidData)).resolves.toBe(false);

      const partialValidData = {
        email: 'test@example.com',
      };

      await expect(schema.isValid(partialValidData)).resolves.toBe(false);
    });
  });
});
