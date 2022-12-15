export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/squiddaodev/squid-dao";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

export const SQUID_NFT_GRAPH_URLS: { [key: string]: string } = {
  4: "https://api.thegraph.com/subgraphs/name/squiddaodev/squid-dao-nft-rinkeby",
  1: "https://api.thegraph.com/subgraphs/name/squiddaodev/squid-dao-nft",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    SQUID_ADDRESS: "0x75d9f9179F95b41236329f85EA1C12DA824A77B1",
    SSQUID_ADDRESS: "0xe8fb1c2Bd5DCC22d4Cd418a85F5B9cc339e8AD47",
    WSSQUID_ADDRESS: "",

    DAI_ADDRESS: "0x16e1a5c4fA7A0AFb529FE44938Cd3c4F79Cc9A44", // duplicate
    STAKING_ADDRESS: "0xD4204408097e26F595b377fdE6bb5F0Ae641d9Bf",
    STAKING_HELPER_ADDRESS: "0x9c8e53C5b1cc6834a29588B659199f411640b038",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    OLD_SSQUID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x13Dc869A498695c97Da1632D60F8F4Ed68d1551E",
    BONDINGCALC_ADDRESS: "0xB7Da17dFBa21ADae30088E9AB40bd099E4BFA525",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0xBDeB960973E2342751aFc4f5222260DFF5445d48",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW

    AUCTION_ADDRESS: "0x6D76b7d6eB44e51CFF2B8A8876a7ef2D92aAa5Cc",
    OHM_ADDRESS: "",

    VOTING_ESCROW_ADDRESS: "",
    VOTING_ESCROW_HELPER_ADDRESS: "",
    FEE_DISTRIBUTOR_ADDRESS: "",
    WETH_FEE_DISTRIBUTOR_ADDRESS: "",
    FEE_DISTRIBUTOR_CLAIM_HELPER: "",
  },
  1: {
    SQUID_ADDRESS: "0x21ad647b8F4Fe333212e735bfC1F36B4941E6Ad2",
    SSQUID_ADDRESS: "0x9d49BfC921F36448234b0eFa67B5f91b3C691515",
    WSSQUID_ADDRESS: "0x3b1388eB39c72D2145f092C01067C02Bb627d4BE",

    DAI_ADDRESS: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // weth
    STAKING_ADDRESS: "0x5895B13Da9BEB11e36136817cdcf3c4fcb16aaeA", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x3eC8d9C851552b8917182F39F6014e14e6EE0BfC", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    OLD_SSQUID_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
    AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
    DISTRIBUTOR_ADDRESS: "0x2d99d0B76168E315f2dC699BFf8D47Be30B3F9D7",
    BONDINGCALC_ADDRESS: "0x9c7A74a78880B1Dd9793EDbE62fd409EEf2062D1",
    CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
    TREASURY_ADDRESS: "0x61d8a57b3919e9F4777C80b6CF1138962855d2Ca",
    CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0xab192edC9D0c2d38F7320dff222384764759a60c",
    FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW

    AUCTION_ADDRESS: "0xBD789bEddB50F9231Ea3e2ec76AFeB80C3e43Fc8",
    OHM_ADDRESS: "0x383518188C0C6d7730D91b2c03a03C837814a899",

    VOTING_ESCROW_ADDRESS: "0x58807E624b9953C2279E0eFae5EDcf9C7DA08c7B",
    VOTING_ESCROW_HELPER_ADDRESS: "0xaBd414B8B7c2EB3c91c45AFb6842fAcf092aE7F9",
    FEE_DISTRIBUTOR_ADDRESS: "0xF3bC8fabcFC368B52ec18016d6cA8ab8967c550A",
    WETH_FEE_DISTRIBUTOR_ADDRESS: "0x008EB46CdC6651eeE592eE23fe4b121dAEBfbb18",
    FEE_DISTRIBUTOR_CLAIM_HELPER: "0xa0Ce3F88bB6cD303931202BEC5E5358BCe9773f8",
  },
};
