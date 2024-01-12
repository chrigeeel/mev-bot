export const Jupiter = {
  version: '0.1.0',
  name: 'jupiter',
  instructions: [
    {
      name: 'route',
      accounts: [
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userTransferAuthority',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'destinationTokenAccount',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'swapLeg',
          type: {
            defined: 'SwapLeg',
          },
        },
        {
          name: 'inAmount',
          type: 'u64',
        },
        {
          name: 'quotedOutAmount',
          type: 'u64',
        },
        {
          name: 'slippageBps',
          type: 'u16',
        },
        {
          name: 'platformFeeBps',
          type: 'u8',
        },
      ],
    },
  ],
};
