export type Jupiter = {
  version: '0.1.0';
  name: 'jupiter';
  instructions: [
    {
      name: 'route';
      accounts: [
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'destinationTokenAccount';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'swapLeg';
          type: {
            defined: 'SwapLeg';
          };
        },
        {
          name: 'inAmount';
          type: 'u64';
        },
        {
          name: 'quotedOutAmount';
          type: 'u64';
        },
        {
          name: 'slippageBps';
          type: 'u16';
        },
        {
          name: 'platformFeeBps';
          type: 'u8';
        },
      ];
    },
    {
      name: 'whirlpoolSwapExactOutput';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'whirlpool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenOwnerAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenVaultA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenOwnerAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenVaultB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArray0';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArray1';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArray2';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'oracle';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'outAmount';
          type: 'u64';
        },
        {
          name: 'inAmountWithSlippage';
          type: {
            defined: 'AmountWithSlippage';
          };
        },
        {
          name: 'aToB';
          type: 'bool';
        },
        {
          name: 'platformFeeBps';
          type: 'u8';
        },
      ];
    },
    {
      name: 'raydiumSwapExactOutput';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'ammId';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'ammAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'ammOpenOrders';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolCoinTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolPcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumProgramId';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'serumMarket';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumBids';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumAsks';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumEventQueue';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumCoinVaultAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumPcVaultAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumVaultSigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userSourceTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userDestinationTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userSourceOwner';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [
        {
          name: 'outAmount';
          type: 'u64';
        },
        {
          name: 'inAmountWithSlippage';
          type: {
            defined: 'AmountWithSlippage';
          };
        },
        {
          name: 'platformFeeBps';
          type: 'u8';
        },
      ];
    },
    {
      name: 'raydiumClmmSwapExactOutput';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'ammConfig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'observationState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tickArray';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'outAmount';
          type: 'u64';
        },
        {
          name: 'inAmountWithSlippage';
          type: {
            defined: 'AmountWithSlippage';
          };
        },
        {
          name: 'platformFeeBps';
          type: 'u8';
        },
      ];
    },
    {
      name: 'createOpenOrders';
      accounts: [
        {
          name: 'openOrders';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'dexProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'market';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'mercurialSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swapState';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'sourceTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destinationTokenAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'cykuraSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'signer';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'factoryState';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'lastObservationState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'coreProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'serumSwap';
      accounts: [
        {
          name: 'market';
          accounts: [
            {
              name: 'market';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'openOrders';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'requestQueue';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'eventQueue';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'bids';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'asks';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'coinVault';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'pcVault';
              isMut: true;
              isSigner: false;
            },
            {
              name: 'vaultSigner';
              isMut: false;
              isSigner: false;
            },
          ];
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'orderPayerTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'coinWallet';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pcWallet';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'dexProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'saberSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swap';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swapAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'inputUserAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputUserAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feesTokenAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'saberAddDecimals';
      accounts: [
        {
          name: 'addDecimalsProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'wrapper';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'wrapperMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'wrapperUnderlyingTokens';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'userUnderlyingTokens';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userWrappedTokens';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'tokenSwap';
      accounts: [
        {
          name: 'tokenSwapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swap';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'source';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapSource';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapDestination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolFee';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'senchaSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swap';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'inputUserAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputFeesAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputUserAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputFeesAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'stepSwap';
      accounts: [
        {
          name: 'tokenSwapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swap';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'source';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapSource';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapDestination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolFee';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'cropperSwap';
      accounts: [
        {
          name: 'tokenSwapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swap';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swapState';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'source';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapSource';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapDestination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolFee';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'raydiumSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'ammId';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'ammAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'ammOpenOrders';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolCoinTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolPcTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumProgramId';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'serumMarket';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumBids';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumAsks';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumEventQueue';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumCoinVaultAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumPcVaultAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'serumVaultSigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userSourceTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userDestinationTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userSourceOwner';
          isMut: false;
          isSigner: true;
        },
      ];
      args: [];
    },
    {
      name: 'cremaSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clmmConfig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clmmpool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenA';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenB';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'accountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'accountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenAVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenBVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArrayMap';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'partner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'partnerAtaA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'partnerAtaB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'lifinitySwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'amm';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'sourceInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destinationInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapSource';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapDestination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pythAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pythPcAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'configAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'marinadeDeposit';
      accounts: [
        {
          name: 'marinadeFinanceProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'msolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liqPoolSolLegPda';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liqPoolMsolLeg';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liqPoolMsolLegAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'reservePda';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'transferFrom';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintTo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'msolMintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userWsolTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tempWsolTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'wsolMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'marinadeUnstake';
      accounts: [
        {
          name: 'marinadeFinanceProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'state';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'msolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liqPoolSolLegPda';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liqPoolMsolLeg';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'treasuryMsolAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'getMsolFrom';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'getMsolFromAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'transferSolTo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userWsolTokenAccount';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'aldrinSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolSigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'baseTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'quoteTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feePoolTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'walletAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'userBaseTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userQuoteTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'aldrinV2Swap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolSigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'baseTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'quoteTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feePoolTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'walletAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'userBaseTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userQuoteTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'curve';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'whirlpoolSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'whirlpool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenOwnerAccountA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenVaultA';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenOwnerAccountB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenVaultB';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArray0';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArray1';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickArray2';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'oracle';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'invariantSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tickmap';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'accountX';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'accountY';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reserveX';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'reserveY';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'programAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'meteoraSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userSourceToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userDestinationToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'aVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'aTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bTokenVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'aVaultLpMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bVaultLpMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'aVaultLp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bVaultLp';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'adminTokenFee';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'user';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'vaultProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'goosefxSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'controller';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sslIn';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sslOut';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liabilityVaultIn';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swappedLiabilityVaultIn';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'liabilityVaultOut';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swappedLiabilityVaultOut';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userInAta';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userOutAta';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeCollectorAta';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userWallet';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'feeCollector';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'deltafiSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'marketConfig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'swapInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userSourceToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userDestinationToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapSourceToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapDestinationToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltafiUser';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'adminDestinationToken';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'pythPriceBase';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pythPriceQuote';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'balansolSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'taxMan';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bidMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'treasurer';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'srcTreasury';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'srcAssociatedTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'askMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'dstTreasury';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'dstAssociatedTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'dstTokenAccountTaxman';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'marcoPoloSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'state';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenX';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenY';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolXAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolYAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapperXAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapperYAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapper';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'referrerXAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'referrerYAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'referrer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'associatedTokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'dradexSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'pair';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'market';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'eventQueue';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'dexUser';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'marketUser';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bids';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'asks';
          isMut: true;
          isSigner: false;
        },
        {
          name: 't0Vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 't1Vault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 't0User';
          isMut: true;
          isSigner: false;
        },
        {
          name: 't1User';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'master';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'signer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'logger';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'lifinityV2Swap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'amm';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTransferAuthority';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'sourceInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destinationInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapSource';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'swapDestination';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'poolMint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'feeAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'oracleMainAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'oracleSubAccount';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'oraclePcAccount';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'raydiumClmmSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'payer';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'ammConfig';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'poolState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'inputVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outputVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'observationState';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tickArray';
          isMut: true;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'phoenixSwap';
      accounts: [
        {
          name: 'swapProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'logAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'market';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'trader';
          isMut: false;
          isSigner: true;
        },
        {
          name: 'baseAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'quoteAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'baseVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'quoteVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
  ];
  types: [
    {
      name: 'AmountWithSlippage';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'slippageBps';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'SplitLegDeeper';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'percent';
            type: 'u8';
          },
          {
            name: 'swapLeg';
            type: {
              defined: 'SwapLegSwap';
            };
          },
        ];
      };
    },
    {
      name: 'SplitLeg';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'percent';
            type: 'u8';
          },
          {
            name: 'swapLeg';
            type: {
              defined: 'SwapLegDeeper';
            };
          },
        ];
      };
    },
    {
      name: 'SwapInstrution';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Swap';
            fields: [
              {
                defined: 'Swap';
              },
            ];
          },
        ];
      };
    },
    {
      name: 'Side';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Bid';
          },
          {
            name: 'Ask';
          },
        ];
      };
    },
    {
      name: 'SwapLegSwap';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'PlaceholderOne';
          },
          {
            name: 'PlaceholderTwo';
          },
          {
            name: 'Swap';
            fields: [
              {
                name: 'swap';
                type: {
                  defined: 'Swap';
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: 'SwapLegDeeper';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Chain';
            fields: [
              {
                name: 'swap_legs';
                type: {
                  vec: {
                    defined: 'SwapLegSwap';
                  };
                };
              },
            ];
          },
          {
            name: 'Split';
            fields: [
              {
                name: 'split_legs';
                type: {
                  vec: {
                    defined: 'SplitLegDeeper';
                  };
                };
              },
            ];
          },
          {
            name: 'Swap';
            fields: [
              {
                name: 'swap';
                type: {
                  defined: 'Swap';
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: 'SwapLeg';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Chain';
            fields: [
              {
                name: 'swap_legs';
                type: {
                  vec: {
                    defined: 'SwapLegDeeper';
                  };
                };
              },
            ];
          },
          {
            name: 'Split';
            fields: [
              {
                name: 'split_legs';
                type: {
                  vec: {
                    defined: 'SplitLeg';
                  };
                };
              },
            ];
          },
          {
            name: 'Swap';
            fields: [
              {
                name: 'swap';
                type: {
                  defined: 'Swap';
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: 'Swap';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Saber';
          },
          {
            name: 'SaberAddDecimalsDeposit';
          },
          {
            name: 'SaberAddDecimalsWithdraw';
          },
          {
            name: 'TokenSwap';
          },
          {
            name: 'Sencha';
          },
          {
            name: 'Step';
          },
          {
            name: 'Cropper';
          },
          {
            name: 'Raydium';
          },
          {
            name: 'Crema';
            fields: [
              {
                name: 'a_to_b';
                type: 'bool';
              },
            ];
          },
          {
            name: 'Lifinity';
          },
          {
            name: 'Mercurial';
          },
          {
            name: 'Cykura';
          },
          {
            name: 'Serum';
            fields: [
              {
                name: 'side';
                type: {
                  defined: 'Side';
                };
              },
            ];
          },
          {
            name: 'MarinadeDeposit';
          },
          {
            name: 'MarinadeUnstake';
          },
          {
            name: 'Aldrin';
            fields: [
              {
                name: 'side';
                type: {
                  defined: 'Side';
                };
              },
            ];
          },
          {
            name: 'AldrinV2';
            fields: [
              {
                name: 'side';
                type: {
                  defined: 'Side';
                };
              },
            ];
          },
          {
            name: 'Whirlpool';
            fields: [
              {
                name: 'a_to_b';
                type: 'bool';
              },
            ];
          },
          {
            name: 'Invariant';
            fields: [
              {
                name: 'x_to_y';
                type: 'bool';
              },
            ];
          },
          {
            name: 'Meteora';
          },
          {
            name: 'GooseFX';
          },
          {
            name: 'DeltaFi';
            fields: [
              {
                name: 'stable';
                type: 'bool';
              },
            ];
          },
          {
            name: 'Balansol';
          },
          {
            name: 'MarcoPolo';
            fields: [
              {
                name: 'x_to_y';
                type: 'bool';
              },
            ];
          },
          {
            name: 'Dradex';
            fields: [
              {
                name: 'side';
                type: {
                  defined: 'Side';
                };
              },
            ];
          },
          {
            name: 'LifinityV2';
          },
          {
            name: 'RaydiumClmm';
          },
          {
            name: 'Openbook';
            fields: [
              {
                name: 'side';
                type: {
                  defined: 'Side';
                };
              },
            ];
          },
          {
            name: 'Phoenix';
            fields: [
              {
                name: 'side';
                type: {
                  defined: 'Side';
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: 'SwapAction';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'SetupSplit';
            fields: [
              {
                name: 'percents';
                type: 'bytes';
              },
            ];
          },
          {
            name: 'NextSplitLeg';
          },
          {
            name: 'MergeSplit';
          },
          {
            name: 'Swap';
            fields: [
              {
                name: 'swap';
                type: {
                  defined: 'Swap';
                };
              },
            ];
          },
        ];
      };
    },
  ];
  events: [
    {
      name: 'Swap';
      fields: [
        {
          name: 'amm';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'inputMint';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'inputAmount';
          type: 'u64';
          index: false;
        },
        {
          name: 'outputMint';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'outputAmount';
          type: 'u64';
          index: false;
        },
      ];
    },
    {
      name: 'Fee';
      fields: [
        {
          name: 'account';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'mint';
          type: 'publicKey';
          index: false;
        },
        {
          name: 'amount';
          type: 'u64';
          index: false;
        },
      ];
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'EmptyRoute';
      msg: 'Empty route';
    },
    {
      code: 6001;
      name: 'SlippageToleranceExceeded';
      msg: 'Slippage tolerance exceeded';
    },
    {
      code: 6002;
      name: 'InvalidCalculation';
      msg: 'Invalid calculation';
    },
    {
      code: 6003;
      name: 'MissingPlatformFeeAccount';
      msg: 'Missing platform fee account';
    },
    {
      code: 6004;
      name: 'InvalidSlippage';
      msg: 'Invalid slippage';
    },
    {
      code: 6005;
      name: 'NotEnoughPercent';
      msg: 'Not enough percent to 100';
    },
    {
      code: 6006;
      name: 'InAmountsStackIsEmpty';
      msg: 'In amounts stack is empty';
    },
    {
      code: 6007;
      name: 'OutAmountsStackIsEmpty';
      msg: 'Out amounts stack is empty';
    },
    {
      code: 6008;
      name: 'NotEnoughAccountKeys';
      msg: 'Not Enough Account keys';
    },
  ];
};
export declare const IDL: Jupiter;
