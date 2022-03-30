import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    var notices = [
        "Official Logan Paul fan club",
        "England is my city",
        "Publisher of the Daily Cornflake since 1998",
        "What'd you do, Prison Mike?",
        "Yo did you hear that new Corey Feldman yet?",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "Man Corey going hard on that new track",
        "Honestly, porridge is pretty dope",
        "That's a paddlin'",
        "We can't bust heads like we used to — but we have our ways. One trick is to tell them stories that don't go anywhere, like the time I caught the ferry over to Shelbyville. I needed a new heel for my shoe, so I decided to go to Morganville which is what they called Shelbyville in those days. So, I tied an onion to my belt which was the style at the time. Now, to take the ferry cost a nickel. And in those days, nickels had pictures of bumblebees on 'em. 'Give me five bees for a quarter,' you'd say. Now, where were we? Oh, yeah! The important thing was that I had an onion on my belt which was the style at the time. They didn't have white onions because of the war. The only thing you could get was those big yellow ones."
    ]

    return (
        <div>
            <label className="label" htmlFor="notice">
                Welcome to <b>Rate My Exhibition</b>!
            </label>
            <p></p>
            <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Be sure to check out our Instagram page for more great content
            </a>
            <p></p>
            <a className="link" href="https://www.youtube.com/watch?v=lq_sRC7g9VE">
                Like what we do and want to support our work? Send us a donation
            </a>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));