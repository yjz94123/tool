import { Wallet, utils, providers } from 'ethers';




const importPrivateKeys = async (privateKeys) => {
 
   const privateKeysArray = privateKeys.split('\n').map((key) => key.trim());
 
   const provider = new providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/6CgT1Pm0kzQD-X525iRt_OdyrYiHGF8g');
 
   // 处理每个私钥
   const newData = await Promise.all(privateKeysArray.map(async (privateKey) => {
     try {
       const wallet = new Wallet(privateKey, provider);
       const address = wallet.address;
       const balanceBN = await wallet.getBalance();
       const balance = utils.formatEther(balanceBN);
 
       return {
         key: address,
         address,
         balance,
         group: '',  // 根据需要设置分组
         exchangeAddress: '',  // 根据需要设置交易所地址
       };
     } catch (error) {
       console.error(`导入私钥时发生错误：${error.message}`);
       return null;
     }
   }));
 
   // 过滤掉空值（导入失败的私钥）
   const filteredData = newData.filter((item) => item !== null);

      // 保存私钥到本地存储
      localStorage.setItem('privateKeys',privateKeys);
 
   return filteredData
 


 
 
 };





 export default {
    importPrivateKeys
 }