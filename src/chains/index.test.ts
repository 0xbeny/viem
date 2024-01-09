import { expect, test } from 'vitest'

import * as chains from './index.js'

test('exports chains', () => {
  expect(Object.keys(chains)).toMatchInlineSnapshot(`
    [
      "acala",
      "arbitrum",
      "arbitrumGoerli",
      "arbitrumNova",
      "astar",
      "arbitrumSepolia",
      "astarZkatana",
      "aurora",
      "auroraTestnet",
      "avalanche",
      "avalancheFuji",
      "bahamut",
      "base",
      "baseGoerli",
      "baseSepolia",
      "bearNetworkChainMainnet",
      "bearNetworkChainTestnet",
      "bitTorrent",
      "bitTorrentTestnet",
      "boba",
      "bronos",
      "bronosTestnet",
      "bsc",
      "bscTestnet",
      "bxn",
      "bxnTestnet",
      "canto",
      "celo",
      "celoAlfajores",
      "chiliz",
      "celoCannoli",
      "classic",
      "confluxESpace",
      "confluxESpaceTestnet",
      "coreDao",
      "cronos",
      "cronosTestnet",
      "crossbell",
      "defichainEvm",
      "defichainEvmTestnet",
      "dfk",
      "dogechain",
      "edgeware",
      "edgewareTestnet",
      "eos",
      "eosTestnet",
      "evmos",
      "evmosTestnet",
      "ekta",
      "ektaTestnet",
      "fantom",
      "fantomSonicTestnet",
      "fantomTestnet",
      "fibo",
      "filecoin",
      "filecoinCalibration",
      "filecoinHyperspace",
      "flare",
      "flareTestnet",
      "foundry",
      "fuse",
      "fuseSparknet",
      "iotex",
      "iotexTestnet",
      "jbc",
      "karura",
      "gobi",
      "goerli",
      "gnosis",
      "gnosisChiado",
      "hardhat",
      "harmonyOne",
      "haqqMainnet",
      "haqqTestedge2",
      "holesky",
      "kava",
      "kavaTestnet",
      "klaytn",
      "klaytnBaobab",
      "kroma",
      "kromaSepolia",
      "linea",
      "lineaTestnet",
      "localhost",
      "lukso",
      "mainnet",
      "mandala",
      "manta",
      "mantaTestnet",
      "mantle",
      "mantleTestnet",
      "meter",
      "meterTestnet",
      "metis",
      "metisGoerli",
      "mev",
      "mevTestnet",
      "modeTestnet",
      "moonbaseAlpha",
      "moonbeam",
      "moonbeamDev",
      "moonriver",
      "neonDevnet",
      "neonMainnet",
      "nexi",
      "nexilix",
      "oasys",
      "oasisTestnet",
      "okc",
      "optimism",
      "optimismGoerli",
      "optimismSepolia",
      "opBNB",
      "opBNBTestnet",
      "pgn",
      "pgnTestnet",
      "plinga",
      "polygon",
      "polygonMumbai",
      "polygonZkEvmTestnet",
      "polygonZkEvm",
      "pulsechain",
      "pulsechainV4",
      "qMainnet",
      "qTestnet",
      "rollux",
      "rolluxTestnet",
      "ronin",
      "rootstock",
      "saigon",
      "sapphire",
      "sapphireTestnet",
      "scroll",
      "scrollSepolia",
      "scrollTestnet",
      "sepolia",
      "shimmer",
      "shimmerTestnet",
      "skaleBlockBrawlers",
      "skaleCalypso",
      "skaleCalypsoTestnet",
      "skaleChaosTestnet",
      "skaleCryptoBlades",
      "skaleCryptoColosseum",
      "skaleEuropa",
      "skaleEuropaTestnet",
      "skaleExorde",
      "skaleHumanProtocol",
      "skaleNebula",
      "skaleNebulaTestnet",
      "skaleRazor",
      "skaleTitan",
      "skaleTitanTestnet",
      "songbird",
      "songbirdTestnet",
      "spicy",
      "shardeumSphinx",
      "shibarium",
      "syscoin",
      "syscoinTestnet",
      "taraxa",
      "taikoJolnir",
      "taikoKatla",
      "taikoTestnetSepolia",
      "taraxaTestnet",
      "telos",
      "telosTestnet",
      "tenet",
      "thunderTestnet",
      "vechain",
      "wanchain",
      "wanchainTestnet",
      "wemix",
      "wemixTestnet",
      "xdc",
      "xdcTestnet",
      "zhejiang",
      "zkFair",
      "zkFairTestnet",
      "zkSync",
      "zkSyncTestnet",
      "zkSyncSepoliaTestnet",
      "zetachainAthensTestnet",
      "zilliqa",
      "zilliqaTestnet",
      "zora",
      "zoraSepolia",
      "zoraTestnet",
    ]
  `)
})
