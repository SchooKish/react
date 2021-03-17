import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../store/quotes/actions";
import { STATUSES } from "../utils/constants";

export default function Home() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);
  const quotesRequest = useSelector((state) => state.quotes.request);

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  const renderQuotes = useCallback(
    (quotes) => (
      <div>
        <h4>{quotes.author}</h4>
        <span>{quotes.quote}</span>
      </div>
    ),
    []
  );

  if (quotesRequest === STATUSES.REQUEST) {
    return <h3>Loading</h3>;
  }

  if (quotesRequest === STATUSES.FAILURE) {
    return <h3>ERROR</h3>;
  }

  return (
    <>
      <h4>Home</h4>
      {quotes.map(renderQuotes)}
    </>
  );
}
