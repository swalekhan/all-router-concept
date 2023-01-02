import QuoteList from "../components/quotes/QuoteList";


const Dummy_Quotes = [
    {id:"p1", author:"max", text:"tis is a great text"},
    {id:"p2", author:"john", text:"tis is a good"},
]

const AllQuotes = () =>{

    return (
        <>
        <QuoteList quotes = {Dummy_Quotes}/>
        </>
    )
}

export default AllQuotes;