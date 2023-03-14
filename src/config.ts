import convict from 'convict';

const config = convict({
  block_engine_url: {
    format: String,
    default: 'frankfurt.mainnet.block-engine.jito.wtf',
  },
  auth_keypair_path: {
    format: String,
    default: './auth.json',
  },
  rpc_url: {
    format: String,
    default: 'https://api.mainnet-beta.solana.com',
  },
  rpc_requests_per_second: {
    format: Number,
    default: 0,
  },
  rpc_max_batch_size: {
    format: Number,
    default: 20,
  },
  gc_interval_sec: {
    format: Number,
    default: 60,
  },
});
config.loadFile('.config.json');
config.validate({ allowed: 'strict' });

export { config };