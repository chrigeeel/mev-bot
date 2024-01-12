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
          type: 'SwapLeg',
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
  types: [
    {
      name: 'AmountWithSlippage',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'slippageBps',
            type: 'u16',
          },
        ],
      },
    },
    {
      name: 'SplitLegDeeper',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'percent',
            type: 'u8',
          },
          {
            name: 'swapLeg',
            type: {
              defined: 'SwapLegSwap',
            },
          },
        ],
      },
    },
    {
      name: 'SplitLeg',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'percent',
            type: 'u8',
          },
          {
            name: 'swapLeg',
            type: {
              defined: 'SwapLegDeeper',
            },
          },
        ],
      },
    },
    {
      name: 'SwapInstrution',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Swap',
            fields: [
              {
                defined: 'Swap',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Side',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Bid',
          },
          {
            name: 'Ask',
          },
        ],
      },
    },
    {
      name: 'SwapLegSwap',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'PlaceholderOne',
          },
          {
            name: 'PlaceholderTwo',
          },
          {
            name: 'Swap',
            fields: [
              {
                name: 'swap',
                type: {
                  defined: 'Swap',
                },
              },
            ],
          },
        ],
      },
    },
    {
      name: 'SwapLegDeeper',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Chain',
            fields: [
              {
                name: 'swap_legs',
                type: {
                  vec: {
                    defined: 'SwapLegSwap',
                  },
                },
              },
            ],
          },
          {
            name: 'Split',
            fields: [
              {
                name: 'split_legs',
                type: {
                  vec: {
                    defined: 'SplitLegDeeper',
                  },
                },
              },
            ],
          },
          {
            name: 'Swap',
            fields: [
              {
                name: 'swap',
                type: {
                  defined: 'Swap',
                },
              },
            ],
          },
        ],
      },
    },
    {
      name: 'SwapLeg',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Chain',
            fields: [
              {
                name: 'swap_legs',
                type: {
                  vec: {
                    defined: 'SwapLegDeeper',
                  },
                },
              },
            ],
          },
          {
            name: 'Split',
            fields: [
              {
                name: 'split_legs',
                type: {
                  vec: {
                    defined: 'SplitLeg',
                  },
                },
              },
            ],
          },
          {
            name: 'Swap',
            fields: [
              {
                name: 'swap',
                type: {
                  defined: 'Swap',
                },
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Swap',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Saber',
          },
          {
            name: 'SaberAddDecimalsDeposit',
          },
          {
            name: 'SaberAddDecimalsWithdraw',
          },
          {
            name: 'TokenSwap',
          },
          {
            name: 'Sencha',
          },
          {
            name: 'Step',
          },
          {
            name: 'Cropper',
          },
          {
            name: 'Raydium',
          },
          {
            name: 'Crema',
            fields: [
              {
                name: 'a_to_b',
                type: 'bool',
              },
            ],
          },
          {
            name: 'Lifinity',
          },
          {
            name: 'Mercurial',
          },
          {
            name: 'Cykura',
          },
          {
            name: 'Serum',
            fields: [
              {
                name: 'side',
                type: {
                  defined: 'Side',
                },
              },
            ],
          },
          {
            name: 'MarinadeDeposit',
          },
          {
            name: 'MarinadeUnstake',
          },
          {
            name: 'Aldrin',
            fields: [
              {
                name: 'side',
                type: {
                  defined: 'Side',
                },
              },
            ],
          },
          {
            name: 'AldrinV2',
            fields: [
              {
                name: 'side',
                type: {
                  defined: 'Side',
                },
              },
            ],
          },
          {
            name: 'Whirlpool',
            fields: [
              {
                name: 'a_to_b',
                type: 'bool',
              },
            ],
          },
          {
            name: 'Invariant',
            fields: [
              {
                name: 'x_to_y',
                type: 'bool',
              },
            ],
          },
          {
            name: 'Meteora',
          },
          {
            name: 'GooseFX',
          },
          {
            name: 'DeltaFi',
            fields: [
              {
                name: 'stable',
                type: 'bool',
              },
            ],
          },
          {
            name: 'Balansol',
          },
          {
            name: 'MarcoPolo',
            fields: [
              {
                name: 'x_to_y',
                type: 'bool',
              },
            ],
          },
          {
            name: 'Dradex',
            fields: [
              {
                name: 'side',
                type: {
                  defined: 'Side',
                },
              },
            ],
          },
          {
            name: 'LifinityV2',
          },
          {
            name: 'RaydiumClmm',
          },
          {
            name: 'Openbook',
            fields: [
              {
                name: 'side',
                type: {
                  defined: 'Side',
                },
              },
            ],
          },
          {
            name: 'Phoenix',
            fields: [
              {
                name: 'side',
                type: {
                  defined: 'Side',
                },
              },
            ],
          },
        ],
      },
    },
    {
      name: 'SwapAction',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'SetupSplit',
            fields: [
              {
                name: 'percents',
                type: 'bytes',
              },
            ],
          },
          {
            name: 'NextSplitLeg',
          },
          {
            name: 'MergeSplit',
          },
          {
            name: 'Swap',
            fields: [
              {
                name: 'swap',
                type: {
                  defined: 'Swap',
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
