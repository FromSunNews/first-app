import { SuiClient } from '@mysten/sui.js/client';

let client: SuiClient | null = null;

export const getSuiClient = () => {
  if (!client) {
    client = new SuiClient({
      url: 'https://fullnode.testnet.sui.io:443'
    });
  }
  return client;
}; 