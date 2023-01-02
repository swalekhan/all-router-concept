import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";



const Dummy_Quotes = [
   { id: "p1", author: "max", text: "tis is a great text" },
   { id: "p2", author: "john", text: "tis is a good" },
]


const QuoteDetail = () => {
   const paras = useParams()

   const find = Dummy_Quotes.find((e) => e.id === paras.quoteId)

   if(!find){
      return <p>no data found</p>
   }
   return (
      <>
         <HighlightedQuote text={find.text} author={find.author} />
         <Route path={`/quotes/${paras.quoteId}/comments`}>
            <Comments />
         </Route>
      </>
   )
}

export default QuoteDetail;