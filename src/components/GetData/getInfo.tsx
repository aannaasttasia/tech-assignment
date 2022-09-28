import axios from "axios";


export interface RequestType{
    data: string[]
}

export async function getData(): Promise<RequestType>{
    const dataInfo =  await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h"
      );
    return {
        data: dataInfo.data
    }
}
