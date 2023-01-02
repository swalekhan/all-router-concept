import { Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import useHttp from "../hook/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";


const QuoteDetail = () => {
   const paras = useParams()
   const match = useRouteMatch()
    const {quoteId} = paras;

   const {sendRequest, status, data:loadedQuote,error} =  useHttp(getSingleQuote,true);
   useEffect(()=>{
    sendRequest(quoteId)
   },[sendRequest, quoteId])   // whenever quoteId will change useEffect hook call function

   if(status ==="pending"){
    return <div className="centered">
        <LoadingSpinner/>
    </div>
   }

   if(error){
    return <div className="centered focuced">{error}</div>
   }
 
   // const find = Dummy_Quotes.find((e) => e.id === paras.quoteId)

   if (!loadedQuote.text) {
      return <p>no data found</p>
   }
   return (
      <>
         <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
         <Route path={`${match.path}`} exact>
            <div className="centered">
               <Link className="btn--flat" to={`${match.url}/comments`}>Load component</Link>
            </div>
         </Route>

         <Route path={`${match.path}/comments`}>
            <Comments />
         </Route>
      </>
   )
}

export default QuoteDetail;