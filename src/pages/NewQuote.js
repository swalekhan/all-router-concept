import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuotes = () => {
     const history = useHistory()

    const quoteFormHandler = (data) => {
        console.log(data)
       history.push('/quotes')
    }


    return (
        <QuoteForm onAddQuote={quoteFormHandler} />
    )
}

export default NewQuotes;