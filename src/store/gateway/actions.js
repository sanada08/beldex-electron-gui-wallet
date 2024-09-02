export const resetWalletData = state => {
  state.commit("set_wallet_data", {
    status: {
      code: 1,
      message: null
    },
    info: {
      name: "",
      address: "",
      height: 0,
      balance: 0,
      unlocked_balance: 0,
      view_only: false,
      load_balance: false
    },
    secret: {
      mnemonic: "",
      view_key: "",
      spend_key: ""
    },
    transactions: {
      tx_list: []
    },
    address_list: {
      used: [],
      unused: [],
      address_book: []
    }
  });
};

export const resetWalletStatus = state => {
  state.commit("set_wallet_data", {
    status: {
      code: 1,
      message: null
    }
  });
};

export const resetPendingConfig = state => {
  state.commit("set_app_data", {
    pending_config: state.state.app.config
  });
};

export const update_router_path_rightpane = state => {
  state.commit("set_router_path_rightpane", {
    router_path_rightpane: state.state.app.config
  });
};
