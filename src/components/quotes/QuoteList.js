import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) =>{
  quotes.sort((quoteA,quoteB)=>{
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  })
}

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()

  const queryParam = new URLSearchParams(location.search)   // javascript constructor
  const isSortingAscending = queryParam.get('sort') === "asc"   // we can call this function inside sortHandler func;
 
  sortQuotes(props.quotes, isSortingAscending) 

  const sortingHandler = () => {
    history.push('/quotes?sort='+(isSortingAscending?"desc":"asc")) //history render page whenever it changes url, quotes?sort this is a optional chaining; if the value exist after ? sign ia present then change page or stay on quotes; 
  }


  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sort {isSortingAscending?"Descending":"Ascending"}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
