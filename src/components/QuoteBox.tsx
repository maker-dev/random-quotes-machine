import { useEffect, useState } from "react";
import GetRandomQuote from "../util/GetRandomQuote";
import GetRandomColor from "../util/GetRandomColor";

interface Quote {
    quote: string;
    author: string;
}

interface QuoteBoxProps {
    color: string;
    setColor: (color: string) => void;
    transition: string;
}


function QuoteBox({color, setColor, transition}: QuoteBoxProps) {

    const [quote, setQuote] = useState<Quote>({quote: "", author: ""});

    useEffect(() => {
        setQuote(GetRandomQuote());
        setColor(GetRandomColor());
    }, [setColor])

    const changeQuote = () => {
        setQuote(GetRandomQuote())
        setColor(GetRandomColor());
    }

  return (
    <div id="quote-box">
            <blockquote id="text" style={{color: `${color}`, transition}}>
                <i className="fa-solid fa-quote-left"></i>
                {quote.quote}
                <cite id="author">- {quote.author}</cite>
            </blockquote>
      <div id="buttons-container">
        <a id="tweet-quote" className="button" style={{backgroundColor: `${color}`, transition}} href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}  target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <button id="new-quote" className="button" style={{backgroundColor: `${color}`, transition}} onClick={changeQuote}>
          new quote
        </button>
      </div>
    </div>
  )
}

export default QuoteBox