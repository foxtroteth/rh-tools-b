// ============================================================================
//  Robinhood Secrets
//  ---------------------------------------------------------------------------
//  Name this script exactly "Robinhood Secrets".
//
//  Set this up ONCE. "Robinhood Pool" and "Robinhood Portfolio" both read from
//  it, so when a new build of those arrives you paste it straight over the old
//  one and nothing here is touched: your keys and your presets survive every
//  update.
//
//  This file is never shared and never updated. Keep it on your phone only.
//  Anyone who reads PRIVATE_KEY below can spend everything in that wallet.
//
//  Service fee (charged by Robinhood Pool and Robinhood Portfolio, not by
//  this file):
//    open a position          0.3 USDG per open
//    claim fees or close      1.5% of the LP fees collected, paid in USDG
//  Both are paid inside the same transaction as the action itself, and shown
//  in the confirmation before anything is sent.
// ============================================================================

module.exports = {

  // -- 1. Alchemy. Required. --------------------------------------------------
  // Free at alchemy.com: sign in, create an app, pick Robinhood Chain, copy
  // the API key (the short string, not the whole URL). Without this nothing
  // can be sent, because the public nodes reject the gas estimates every
  // transaction needs.
  ALCHEMY_API_KEY: "",

  // -- 2. Wallet private key. Required to open, claim or close. ---------------
  // 64 hex characters, with or without the leading 0x.
  //
  // This signs your transactions on the phone; it is never sent anywhere. Even
  // so, use a wallet you keep only for this, funded with what you are willing
  // to have at risk. Do not reuse your main wallet, and do not paste this key
  // into anything else.
  PRIVATE_KEY: "",

  // -- 3. Blockscout. Strongly recommended. -----------------------------------
  // Free at blockscout.com. Without it the scripts fall back to the public
  // explorer, which times out often: the symptom is a wallet that shows a
  // balance but no positions.
  BLOCKSCOUT_API_KEY: "",

  // -- 4. Uniswap. Required. --------------------------------------------------
  // Free at hub.uniswap.org: sign in, create an API key and paste it here.
  // Robinhood Pool and Robinhood Portfolio do not start without it.
  UNISWAP_API_KEY: "",

  // -- 5. Practice mode. ------------------------------------------------------
  // true  = work out the transaction, show the plan, the gas and the service
  //         fee, send nothing.
  // false = really send transactions.
  //
  // Leave this true until you have watched one practice run of each button and
  // the numbers look like what you expected.
  PRACTICE_MODE: true,

  // -- 6. Zap presets. --------------------------------------------------------
  // The buttons offered when you open a position. Up to three; a button for
  // entering a custom amount is always present regardless.
  //
  //   amount  USDG to deposit
  //   slices  how many steps to split it across (1-100). Each step costs extra
  //           gas to open and close.
  //   top     where the ladder starts, in percent below the price. 0 puts it
  //           against the market. Optional; leave it out for 0.
  //   range   how far below the price the ladder reaches, in percent (1-99).
  //           Must be further down than top.
  //
  // Weight leans toward the far edge, so with 5 steps the split is 1:2:3:4:5.
  ZAP_PRESETS: [
    { amount: 100, slices: 5, top: 0, range: 60 },
    { amount: 250, slices: 5, top: 0, range: 60 },
  ],

};
