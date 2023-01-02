import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hook/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
  

const AllQuotes = () =>{
   const {sendRequest, status, data:loadedQuote,error} =  useHttp(getAllQuotes,true);
   useEffect(()=>{
    sendRequest()
   },[sendRequest])

   if(status ==="pending"){
    return <div className="centered">
        <LoadingSpinner/>
    </div>
   }

   if(error){
    return <div className="centered focuced">{error}</div>
   }

   if(status === "completed" && (!loadedQuote|| loadedQuote.length === 0)){
    return <NoQuotesFound/>
   }
  


    return (
        <>
        <QuoteList quotes = {loadedQuote}/>
        </>
    )
}

export default AllQuotes;