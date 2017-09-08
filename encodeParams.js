const abiEncoder = require('ethereumjs-abi');
const BigNumber = require('bignumber.js');

//CND
const TOKEN_FACTORY_ADDRESS = '0x0039F22efB07A647557C7C5d17854CFD6D489eF3';
const encodedParamsCND = abiEncoder.rawEncode(['address'], [TOKEN_FACTORY_ADDRESS]);
console.log('ENCODED PARAMS CND: \n',encodedParamsCND.toString('hex'));

//Contribution
const CONTRIBUTION_WALLET_ADDRESS = "0x0039F22efB07A647557C7C5d17854CFD6D489eF3";
const FOUNDERS_WALLET_ADDRESS = "0x0039F22efB07A647557C7C5d17854CFD6D489eF3";
const ADVISORS_WALLET_ADDRESS = "0x0039F22efB07A647557C7C5d17854CFD6D489eF3";
const BOUNTY_WALLET_ADDRESS = "0x0039F22efB07A647557C7C5d17854CFD6D489eF3";

const encodedParamsContribution = abiEncoder.rawEncode(['address', 'address', 'address', 'address'], [CONTRIBUTION_WALLET_ADDRESS, FOUNDERS_WALLET_ADDRESS, ADVISORS_WALLET_ADDRESS, BOUNTY_WALLET_ADDRESS]);
console.log('ENCODED PARAMS CONTRIBUTION: \n',encodedParamsContribution.toString('hex'));

//Tier
const totalCap = new BigNumber(10 ** 18 *2); //2eth
const minimum = new BigNumber(10**18 * 0.2); //0.2eth
const maxInvestorCap = new BigNumber(10 ** 18 * 1 ); //1 eth
const exchangeRate= 1000;
const startTime= 1503000000;
const endTime= 1504000000;
const valuesTier = [totalCap.toString(10), minimum.toString(10), maxInvestorCap.toString(10), exchangeRate, startTime, endTime];
const encodedParamsTier = abiEncoder.rawEncode(['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'], valuesTier);
console.log('ENCODED PARAMS TIER: \n', encodedParamsTier.toString('hex'));