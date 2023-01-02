import { Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";

const Dummy_Quotes = [
   { id: "p1", author: "max", text: "tis is a great text" },
   { id: "p2", author: "john", text: "tis is a good" },
]

const QuoteDetail = () => {
   const paras = useParams()
   const match = useRouteMatch()
   console.log(match)

   const find = Dummy_Quotes.find((e) => e.id === paras.quoteId)

   if (!find) {
      return <p>no data found</p>
   }
   return (
      <>
         <HighlightedQuote text={find.text} author={find.author} />
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