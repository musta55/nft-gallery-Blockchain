
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([])
  const [fetchForCollection, setFetchForCollection]=useState(false)


const fetchNFTs = async() => {
    let nfts; 
    console.log("fetching nfts");


    const api_key = "mF-eXSx-BVMMyLePAixpaFf9Xf_rPuDu";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
  

    if (!collection.length) {
      var requestOptions = {
        method: 'GET'
      };
     
      const fetchURL = `${baseURL}?owner=${wallet}`;
  
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
    }

    if (nfts) {
      console.log("nfts:", nfts)
      setNFTs(nfts.ownedNfts)
    }
  }

  const fetchNFTsForCollection = async () => {
    if(collection.length) {
      var requestOptions = {
        method: 'GET'
      };
      const api_key = "mF-eXSx-BVMMyLePAixpaFf9Xf_rPuDu";
      const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then (data=>data.json())
      if(nfts) 
      {
        console.log("NFTs in collection:", nfts)
        setNFTs(nfts.nfts)
      }

    }
  }

  return (
 <div className="flex flex-col items-center justify-center py-8 gap-y-3">
  <div className="flex flex-col w-full justify-center items-center gap-y-2">
    <input onChange={(e)=>{setWalletAddress(e.target.value)}} type = {"text"} placeholder="Add your wallet address"></input>
    <input onChange={(e)=> {setCollectionAddress(e.target.value)}} type = {"text"} placeholder = "Add the collection address"></input>
     <label className='text-gray-600 '><input onChange={(e)=> {setFetchForCollection(e.target.checked)}} type={"checkbox"} className="mr-2"></input>Fetch For Collection</label>
     <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"} onClick={
      ()=> {
        if (fetchForCollection) {
          fetchNFTsForCollection()
        }else fetchNFTs()
      }
     }>Let's go! </button>
     </div>
 </div>
  )
}

export default Home
