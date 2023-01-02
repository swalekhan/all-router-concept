import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hook/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

const NewQuotes = () => {
     const history = useHistory()
       
     const {sendRequest, status } = useHttp(addQuote)
  
     useEffect(()=>{
       if(status === "completed"){
        history.push('/quotes')
       }
     },[status, history])

    const quoteFormHandler = (data) => {
        sendRequest(data)  
    }


    return (
        <QuoteForm isLoading={status === "pending"} onAddQuote={quoteFormHandler} />
    )
}

export default NewQuotes;