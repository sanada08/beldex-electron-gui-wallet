export default {
  buttons: {
    // All button text is uppercased in the gui
    advanced: "ADVANCED",
    all: "ALL",
    back: "BACK",
    browse: "BROWSE",
    cancel: "Cancel",
    change: "CHANGE",
    check: "CHECK",
    clear: "Clear",
    close: "CLOSE",
    contacts: "CONTACTS",
    copyAddress: "COPY ADDRESS",
    copyData: "COPY DATA",
    copySignature: "COPY SIGNATURE",
    createWallet: "Create Wallet",
    decrypt: "DECRYPT",
    delete: "DELETE",
    edit: "EDIT",
    export: "EXPORT",
    generate: "GENERATE",
    import: "IMPORT",
    importWallet: "Import Wallet | IMPORT WALLETS",
    bns: "BELDEX NAME SERVICE",

    min: "MIN",
    next: "NEXT",
    openWallet: "OPEN WALLET",
    purchase: "PURCHASE",
    receive: "Receive",
    registerMasterNode: "REGISTER MASTER NODE",
    renew: "RENEW",
    rescan: "RESCAN",
    restoreWallet: "Restore Wallet",
    save: "SAVE",
    saveTxNotes: "SAVE TX NOTES",
    selectLocation: "SELECT LOCATION",
    selectWalletFile: "Select File",
    send: "Send",
    sendCoins: "SEND COINS",
    masterNode: "MASTER NODES",
    settings: "SETTINGS",
    showQRCode: "SHOW QR CODE",
    showTxDetails: "SHOW TX DETAILS",
    sign: "SIGN",
    stake: "STAKE",
    sweepAll: "SWEEP ALL",
    unlock: "UNLOCK",
    update: "UPDATE",
    verify: "VERIFY",
    viewOnExplorer: "VIEW ON EXPLORER",
    //new wamp
    add: "Add",
    max: "Max"
  },
  dialog: {
    // Generic buttons
    buttons: {
      ok: "OK",
      cancel: "CANCEL",
      open: "OPEN"
    },

    // Dialogs
    banPeer: {
      title: "Ban peer",
      peerDetailsTitle: "Peer details",
      message: "Enter length to ban peer in seconds.\nDefault 3600 = 1 hour.",
      ok: "Ban peer"
    },
    copyAddress: {
      title: "Copy address",
      message:
        "There is a payment id associated with this address.\nBe sure to copy the payment id separately."
    },
    copyPrivateKeys: {
      // Copy {seedWords/viewKey/spendKey}
      title: "Copy {type}",
      message:
        "Be careful who you send your private keys to as they control your funds.",
      seedWords: "Seed Words",
      viewKey: "View Key",
      spendKey: "Spend Key"
    },
    deleteWallet: {
      title: "Delete wallet",
      message:
        "Are you absolutely sure you want to delete your wallet?\nMake sure you have your private keys backed up.\nTHIS PROCESS IS NOT REVERSIBLE!",
      ok: "DELETE"
    },
    exit: {
      title: "Exit",
      message: "Are you sure you want to exit?",
      ok: "EXIT"
    },
    keyImages: {
      title: "{type} key images",
      message: "Do you want to {type} key images?",
      export: "Export",
      import: "Import"
    },
    bnsUpdate: {
      title: "Update BNS record",
      message: "Do you want to update the BNS record?",
      ok: "UPDATE"
    },
    noPassword: {
      title: "No password set",
      message: "Are you sure you want to create a wallet with no password?",
      ok: "YES"
    },
    password: {
      title: "Password",
      message: "Enter wallet password to continue."
    },
    purchase: {
      title: "Purchase name",
      message: "Do you want to purchase the name?",
      ok: "PURCHASE"
    },
    renew: {
      title: "Renew name",
      message: "Do you want to renew the name?",
      ok: "RENEW"
    },
    registerMasterNode: {
      title: "Register master node",
      message: "Do you want to register the master node?",
      ok: "REGISTER"
    },
    rescan: {
      title: "Rescan wallet",
      message:
        "Warning: Some information about previous transactions\nsuch as the recipient's address will be lost.",
      ok: "RESCAN"
    },
    restart: {
      title: "Restart",
      message: "Changes require restart. Would you like to restart now?",
      ok: "RESTART"
    },
    showPrivateKeys: {
      title: "Show private keys",
      message: "Do you want to view your private keys?",
      ok: "SHOW"
    },
    signature: {
      title: "Signature",
      message:
        "Copy the data signed by your primary address's private key below"
    },
    stake: {
      title: "Stake",
      message: "Do you want to stake?",
      ok: "STAKE"
    },
    sweepAll: {
      title: "Sweep all",
      message: "Do you want to sweep all?",
      ok: "SWEEP ALL"
    },
    sweepAllWarning: {
      title: "Sweep all warning",
      message:
        "You are about to combine all of your unspent funds by sending a transaction to yourself, your wallet may show a balance of 0 temporarily, after 10 blocks your funds will unlock and you may stake normally.",
      ok: "CONTINUE"
    },
    switchWallet: {
      title: "Switch wallet",
      closeMessage: "Are you sure you want to close the current wallet?",
      restartMessage:
        "The wallet RPC is currently syncing. \nIf you wish to switch wallets then you must restart the application. \nYou will lose your syncing progress and have to rescan the blockchain again.",
      restartWalletMessage:
        "If you wish to switch wallets then you must restart the application. Are you sure you want to close the current wallet and restart?"
    },
    transactionDetails: {
      title: "Transaction details",
      ok: "CLOSE"
    },
    transfer: {
      title: "Transfer",
      message: "Do you want to send the transaction?",
      ok: "SEND"
    },
    confirmTransaction: {
      title: "Confirm transaction",
      sendTo: "Send to",
      priority: "Priority"
    },
    unlockConfirm: {
      title: "Confirm unlock",
      ok: "UNLOCK"
    },
    unlockMasterNode: {
      title: "Unlock master node",
      confirmTitle: "Confirm unlock",
      message: "Do you want to unlock the master node?",
      ok: "UNLOCK"
    },
    unlockMasterNodeWarning: {
      title: "Unlock master node warning",
      message:
        "Unlocking a partial stake in a node will also unstake for any other participants, if staking in a shared node its best to let the operator and other participants know you are unstaking.",
      ok: "CONTINUE"
    }
  },
  fieldLabels: {
    // Field labels are also all uppercased
    address: "ADDRESS",
    amount: "Amount",
    backupOwner: "BACKUP OWNER",
    confirmPassword: "Confirm Password (optional)",
    daemonLogLevel: "DAEMON LOG LEVEL",
    daemonP2pPort: "DAEMON P2P PORT",
    data: "DATA",
    dataStoragePath: "DATA STORAGE PATH",
    decryptRecord: "DECRYPT RECORD",
    filter: "FILTER",
    filterTransactionType: "FILTER BY TRANSACTION TYPE",
    internalWalletPort: "INTERNAL WALLET PORT",
    keyImages: {
      exportDirectory: "KEY IMAGE EXPORT DIRECTORY",
      importFile: "KEY IMAGE IMPORT FILE"
    },
    limitDownloadRate: "LIMIT DOWNLOAD RATE",
    limitUploadRate: "LIMIT UPLOAD RATE",
    bnsType: "BNS RECORD TYPE",
    localDaemonIP: "LOCAL DAEMON IP",
    localDaemonPort: "LOCAL DAEMON PORT",
    belnetFullAddress: "BELNET FULL ADDRESS",
    maxIncomingPeers: "MAX INCOMING PEERS",
    maxOutgoingPeers: "MAX OUTGOING PEERS",
    message: "MESSAGE",
    mnemonicSeed: "Recovery Seed",
    name: "NAME",
    newWalletName: "Wallet Name",
    notes: "NOTES",
    optional: "OPTIONAL",
    owner: "OWNER",
    password: "Password (optional)",
    paymentId: "PAYMENT ID",
    priority: "Priority",
    remoteNodeHost: "REMOTE NODE HOST",
    remoteNodePort: "REMOTE NODE PORT",
    restoreFromBlockHeight: "RESTORE FROM BLOCK HEIGHT",
    restoreFromDate: "Restore from Date",
    seedLanguage: "Seed Language",
    masterNodeCommand: "MASTER NODE COMMAND",
    masterNodeKey: "MASTER NODE KEY",
    bchatId: "BCHAT ID",
    signature: "SIGNATURE",
    transactionId: "TRANSACTION ID",
    walletFile: "Wallet File",
    walletLogLevel: "WALLET LOG LEVEL",
    walletName: "Wallet Name",
    walletRPCPort: "WALLET RPC PORT",
    walletStoragePath: "WALLET STORAGE PATH",

    // These are specific labels which do not get uppercased
    confirmNewPassword: "Confirm New Password",
    newPassword: "New Password",
    oldPassword: "Old Password",
    rescanFullBlockchain: "Rescan full blockchain",
    rescanSpentOutputs: "Rescan spent outputs",
    transactionNotes: "Transaction Notes",
    chooseNetwork: "Choose a Network",
    network: "Network",

    // new design vamp
    to: "To"
  },
  footer: {
    ready: "READY",
    scanning: "SCANNING",
    status: "Status",
    syncing: "SYNCING",
    remote: "Remote",
    wallet: "Wallet",
    updateRequired: "UPDATE REQUIRED"
  },
  menuItems: {
    about: "About",
    changePassword: "Change Password",
    copyAddress: "Copy address",
    copyBackupOwner: "Copy backup owner",
    copyBelnetAddress: "Copy belnet address",
    copyBelnetName: "Copy belnet name",
    copyName: "Copy name",
    copyOwner: "Copy owner",
    copyQR: "Copy QR code",
    copySeedWords: "Copy seed words",
    copyBchatId: "Copy bchat ID",
    copySpendKey: "Copy spend key",
    copyMasterNodeKey: "Copy master node key",
    copyTransactionId: "Copy transaction ID",
    copyViewKey: "Copy view key",
    createNewWallet: "Create new wallet",
    deleteWallet: "Delete Wallet",
    exit: "Exit Wallet",
    importOldGUIWallet: "Import wallets from old GUI",
    manageKeyImages: "Manage Key Images",
    openWallet: "Open wallet",
    rescanWallet: "Rescan Wallet",
    restoreWalletFile: "Restore wallet from file",
    restoreWalletSeed: "Restore wallet from seed",
    saveQR: "Save QR code to file",
    sendToThisAddress: "Send to this address",
    settings: "Settings",
    showDetails: "Show details",
    showPrivateKeys: "Show Private Keys",
    showQRCode: "Show QR Code",
    switchWallet: "Switch Wallet",
    viewOnExplorer: "View on explorer",

    // new vamp
    favourite: "Favourite"
  },
  notification: {
    positive: {
      addressCopied: "Address copied to clipboard",
      linkCopied: "Link copied to clipboard",
      backupOwnerCopied: "Backup owner copied to clipboard",
      bannedPeer: "Banned {host} until {time}",
      copied: "{item} copied to clipboard",
      decryptedBNSRecord: "Successfully decrypted BNS Record for {name}",
      itemSaved: "{item} saved to {filename}",
      keyImages: {
        exported: "Key images exported to {filename}",
        imported: "Key images imported"
      },
      bnsRecordUpdated: "BNS Record was successfully updated",
      belnetAddressCopied: "Full belnet address copied",
      belnetNameCopied: "Belnet name copied",
      passwordUpdated: "Password updated",
      namePurchased: "Name successfully purchased",
      nameRenewed: "Name successfully renewed",
      nameCopied: "Name copied to clipboard",
      ownerCopied: "Owner copied to clipboard",
      qrCopied: "QR code copied to clipboard",
      registerMasterNodeSuccess: "Successfully registered master node",
      sendSuccess: "Transaction successfully sent",
      masterNodeInfoFilled: "Master node key and min amount filled",
      bchatIdCopied: "Bchat ID copied to clipboard",
      signatureCopied: "Signature copied to clipboard",
      signatureVerified: "Signature verified",
      stakeSuccess: "Successfully staked",
      transactionNotesSaved: "Transaction notes saved"
    },
    errors: {
      banningPeer: "Error banning peer",
      cannotAccessRemoteNode:
        "Could not access remote node, please try another remote node",
      changingPassword: "Error changing password",
      copyWalletFail: "Failed to copy wallet",
      copyingPrivateKeys: "Error copying private keys",
      dataPathNotFound: "Data storage path not found",
      decryptBNSRecord: "Failed to decrypt BNS Record for {name}",
      differentNetType: "Remote node is using a different nettype",
      enterSeedWords: "Enter seed words",
      enterTransactionId: "Enter transaction ID",
      enterTransactionProof: "Enter transaction proof",
      enterWalletName: "Enter a wallet name",
      enterName: "Enter a name",
      errorSavingItem: "Error saving {item}",
      failedMasterNodeUnlock: "Failed to unlock master node",
      failedToSetLanguage: "Failed to set language: {lang}",
      failedWalletImport: "Failed to import wallet",
      failedWalletOpen: "Failed to open wallet. Please try again.",
      failedWalletRead: "Failed to read wallets",
      internalError: "Internal error",
      invalidAddress: "Address not valid",
      invalidAmount: "Amount not valid",
      invalidBackupOwner: "Backup owner address not valid",
      invalidNameLength: "Name must be between 1 and 64 characters long",
      invalidNameFormat:
        "Name may only contain alphanumerics, hyphens and underscore",
      invalidNameHypenNotAllowed:
        "Name may only begin or end with alphanumerics or an underscore",
      invalidOldPassword: "Invalid old password",
      invalidOwner: "Owner address not valid",
      invalidPassword: "Invalid password",
      invalidPaymentId: "Payment id not valid",
      invalidPrivateViewKey: "Invalid private viewkey",
      invalidPublicAddress: "Invalid public address",
      invalidRestoreDate: "Invalid restore date",
      invalidRestoreHeight: "Invalid restore height",
      invalidSeedLength: "Invalid seed word length",
      invalidMasterNodeCommand:
        "Please enter the master node registration command",
      invalidMasterNodeKey: "Master node key not valid",
      invalidBchatId: "Bchat ID not valid",
      invalidSignature: "Invalid signature",
      invalidWalletPath: "Invalid wallet path",
      keyImages: {
        exporting: "Error exporting key images",
        reading: "Error reading key images",
        importing: "Error importing key images"
      },
      negativeAmount: "Amount cannot be negative",
      newPasswordNoMatch: "New passwords do not match",
      newPasswordSame: "New password must be different",
      notEnoughBalance: "Not enough unlocked balance",
      passwordNoMatch: "Passwords do not match",
      remoteCannotBeReached: "Remote daemon cannot be reached",
      selectWalletFile: "Select a wallet file",
      unknownError: "An unknown error occurred",
      walletAlreadyExists: "Wallet with name already exists",
      walletPathNotFound: "Wallet data storage path not found",
      zeroAmount: "Amount must be greater than zero"
    },
    warnings: {
      noKeyImageExport: "No key images found to export",
      usingLocalNode: "Could not access remote node, switching to local only",
      usingRemoteNode: "beldexd not found, using remote node"
    }
  },
  placeholders: {
    additionalNotes: "Additional notes",
    addressBookName: "Name that belongs to this address",
    addressOfSigner: "Public wallet address of signer",
    dataToSign: "Data you want to sign with your primary address's private key",
    filterTx: "Enter an ID, name, address or amount",
    hexCharacters: "{count} hexadecimal characters",
    bnsName: "The name to purchase via Beldex Name Service",
    bnsBackupOwner: "The wallet address of the backup owner",
    bnsDecryptName: "A BNS name that belongs to you",
    belnetFullAddress: "Full belnet address to map BNS name to (without .bdx)",
    mnemonicSeed: "Enter your Recovery seed",
    pasteTransactionId: "Paste transaction ID",
    pasteTransactionProof: "Paste transaction proof",
    proveOptionalMessage:
      "Optional message against which the signature is signed",
    recipientWalletAddress: "Recipient's wallet address",
    selectAFile: "Please select a file",
    bchatId: "The Bchat ID to link to Beldex Name Service",
    signature: "Signature to verify",
    transactionNotes: "Additional notes to locally attach to the transaction",
    unsignedData: "The data as it should look before it was signed",
    walletName: "Enter your Wallet Name",
    walletPassword: "Enter Password",
    reEnterWalletPassword: "Re-Enter Password"
  },
  strings: {
    addAddressBookEntry: "Add address ",
    addressBookDetails: "Address book details",
    addressBookIsEmpty: "Address book is empty",
    addresses: {
      myPrimaryAddress: "My primary address",
      myUnusedAddresses: "My unused addresses",
      myUsedAddresses: "My used addresses",
      primaryAddress: "Primary address",
      subAddress: "Sub-address",
      subAddressIndex: "Index {index}",
      //new design vamp
      primaryAccount: "Primary Account"
    },
    advancedOptions: "Advanced Options",
    awaitingConfirmation: "Awaiting confirmation",
    bannedPeers: {
      title: "Banned peers (bans will cleared if wallet is restarted)",
      bannedUntil: "Banned until {time}"
    },
    blockHeight: "Height",
    cannotSign: "You cannot sign with a view only wallet.",
    checkTransaction: {
      description:
        "Verify that funds were paid to an address by supplying the transaction ID, the recipient address, the message used for signing and the signature.\nFor a 'Spend Proof' you dont need to provide the recipient address.",
      infoTitles: {
        confirmations: "Confirmations",
        inPool: "In pool",
        validTransaction: "Valid transaction",
        received: "Received amount"
      },
      validTransaction: {
        no: "NO",
        yes: "YES"
      }
    },
    closing: "Closing",
    connectingToBackend: "Connecting to backend",
    contribution: "Contribution",
    contributor: "Contributor",
    daemon: {
      local: {
        title: "Local Daemon Only",
        description:
          "Full security, wallet will download the full blockchain. You will not be able to transact until sync is completed."
      },
      localRemote: {
        title: "Local + Remote Daemon",
        description:
          "Get started quickly with this default option. Wallet will download the full blockchain, but use a remote node while syncing."
      },
      remote: {
        title: "Remote Daemon Only",
        description:
          "Less security, wallet will connect to a remote node to make all transactions."
      }
    },
    destinationUnknown: "Destination Unknown",
    editAddressBookEntry: "Edit address book entry",
    expirationHeight: "Expiration height",
    bns: {
      bchatID: "Bchat ID",
      belnetName1Year: "Belnet Name 1 year",
      belnetNameXYears: "Belnet Name {years} years",
      prices: "BNS Prices:"
    },
    bnsPurchaseDescription:
      "Purchase or update an BNS record. If you purchase a name, it may take a minute or two for it to show up in the list.",
    bnsDescription:
      "Here you can find all the BNS names owned by this wallet. Decrypting a record you own will return the name and value of that BNS record.",
    loadingSettings: "Loading settings",
    oxenBalance: "Balance",
    belnetNameDescription:
      "Purchase or update a name on Belnet. If you purchase a name it may take a minute or two for it to show up in the list. To learn more about belnet visit: ",
    oxenUnlockedBalance: "Unlocked balance",
    oxenUnlockedShort: "Unlocked",
    me: "Me",
    noTransactionsFound: "No transactions found",
    notes: "Notes",
    numberOfUnspentOutputs: "Number of unspent outputs",
    operator: "Operator",
    paymentID: "Payment ID",
    peerList: "Peer list",
    priorityOptions: {
      automatic: "Automatic",
      slow: "Slow",
      normal: "Normal",
      fast: "Fast",
      fastest: "Fastest",
      flash: "Flash"
    },

    proveTransactionDescription:
      "Generate a proof of your incoming/outgoing payment by supplying the transaction ID, the recipient address and an optional message.\nFor the case of outgoing payments, you can get a 'Spend Proof' that proves the authorship of a transaction. In this case, you don't need to specify the recipient address.",
    readingWalletList: "Reading wallet list",
    recentIncomingTransactionsToAddress:
      "Recent incoming transactions to this address",
    recentTransactionsWithAddress: "Recent transactions with this address",
    rescanModalDescription:
      "Select full rescan or rescan of spent outputs only.",
    saveSeedWarning: "Please copy and save these in a secure location!",
    saveToAddressBook: "Save to address book",
    seedWords: "Seed words",
    selectLanguage: "Select language",
    masterNodeContributionDescription:
      "Staking contributes to the safety of the Beldex network. For your contribution, you earn BDX. Once staked, you will have to wait either 15 or 30 days to have your BDX unlocked, depending on if a stake was unlocked by a contributor or the node was deregistered. To learn more about staking, please visit the documentation on the",
    masterNodeRegistrationDescription:
      'Enter the {registerCommand} command produced by the daemon that is registering to become a Master Node using the "{prepareCommand}" command',
    masterNodeStartStakingDescription:
      "To start staking, please visit the Staking tab",
    noMasterNodesCurrentlyAvailable:
      "There are currently no master nodes available for contribution",
    masterNodeDetails: {
      contributors: "Contributors",
      lastRewardBlockHeight: "Last reward block height",
      lastUptimeProof: "Last uptime proof",
      maxContribution: "Max contribution",
      minContribution: "Min contribution",
      operatorFee: "Operator Fee",
      registrationHeight: "Registration height",
      unlockHeight: "Unlock height",
      reserved: "Reserved",
      masterNodeKey: "Master Node Key",
      snKey: "MN Key",
      stakingRequirement: "Staking requirement",
      totalContributed: "Total contributed"
    },
    signAndVerifyDescription:
      "Sign data with your primary address's private key or verify a signature against a public address.",
    spendKey: "Spend key",
    startingDaemon: "Starting daemon",
    startingWallet: "Starting wallet",
    switchToDateSelect: "Switch to date select",
    switchToHeightSelect: "Switch to height select",
    syncingDaemon: "Syncing Daemon",
    transactionID: "Transaction ID",
    transactionConfirmed: "confirmed",
    transactions: {
      amount: "Amount",
      description: "{type} transaction",
      fee: "Fee",
      paidBySender: "paid by sender",
      received: "Received",
      sent: "Sent",
      sentTo: "{type} transaction sent to",
      timestamp: "Timestamp",
      types: {
        all: "All",
        incoming: "Incoming",
        outgoing: "Outgoing",
        pending: "Pending",
        pendingIncoming: "Pending incoming",
        pendingOutgoing: "Pending outgoing",
        miner: "Miner",
        masterNode: "Master Node",
        governance: "Governance",
        stake: "Stake",
        failed: "Failed"
      }
    },
    unlockingAtHeight: "Unlocking at height {number}",
    unspentOutputs: "Unspent outputs",
    userNotUsedAddress: "You have not used this address",
    userUsedAddress: "You have used this address",
    viewKey: "View key",
    viewOnlyMode:
      "View only mode. Please load full wallet in order to send coins.",
    website: "website"
  },
  titles: {
    addressBook: "Address book",
    addressDetails: "Address details",
    advanced: {
      checkTransaction: "CHECK TRANSACTION",
      prove: "PROVE",
      signAndVerify: "SIGN/VERIFY",
      sign: "Sign",
      verify: "Verify"
    },
    availableForContribution: "Master nodes available for contribution",
    changePassword: "Change password",
    configure: "Configure",
    currentlyStakedNodes: "Currently staked nodes",
    bnsRecordDetails: "BNS record details",
    bnsBchatRecords: "Bchat records",
    bnsBelnetRecords: "Belnet records",
    privateKeys: "Private keys",
    rescanWallet: "Rescan wallet",
    bns: {
      purchase: "PURCHASE",
      myBns: "MY BNS"
    },
    masterNode: {
      registration: "REGISTRATION",
      staking: "STAKING",
      myStakes: "MY STAKES"
    },

    masterNodeDetails: "Master node details",
    settings: {
      title: "Settings",
      tabs: {
        general: "General",
        language: "Language",
        peers: "Peers"
      }
    },
    transactionDetails: "Transaction details",
    transactions: "Transactions",
    wallet: {
      createNew: "Create new wallet",
      createdOrRestored: "Wallet created/restored",
      importFromFile: "Import wallet from file",
      importFromLegacyGUI: "Import wallet from legacy GUI",
      importFromOldGUI: "Import wallet from old GUI",
      restoreFromSeed: "Restore wallet from seed",
      restoreViewOnly: "Restore view-only wallet"
    },
    welcome: "Welcome",
    yourWallets: "Your Wallets"
  }
};
