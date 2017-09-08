const abiEncoder = require('ethereumjs-abi');
const TOKEN_FACTORY_ADDRESS = '0x0';
const encodedParamsCND = abiEncoder.rawEncode(['address'], [TOKEN_FACTORY_ADDRESS]);
console.log('ENCODED PARAMS CND: \n',encodedParamsCND);