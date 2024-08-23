import {InMemoryCache} from '@apollo/client';

import ApolloService from './index';

describe('ApolloService', () => {
  it('should have a valid Apollo client', () => {
    expect(ApolloService.client).toBeDefined();
    expect(ApolloService.client.constructor.name).toBe('ApolloClient');
  });

  it('should have a valid URI for the Apollo client', () => {
    // @ts-ignore
    expect(ApolloService.client?.link.uri).toBe(
      process.env.EXPO_PUBLIC_API_URL,
    );
  });

  it('should have a valid cache for the Apollo client', () => {
    expect(ApolloService.client?.cache).toBeInstanceOf(InMemoryCache);
  });
});
