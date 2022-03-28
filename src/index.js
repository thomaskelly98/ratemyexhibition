import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    var notices = [
        "Official Logan Paul fan club",
        "England is my city",
        "Publisher of the Daily Cornflake since 1998",
        "What'd you do, Prison Mike?",
        "Yo did you hear that new Corey Feldman yet?",
        "If he eat my ass he's a bottom feeder",
        "Man Corey going hard on that new record",
        "Honestly, porridge is pretty dope",
        "That's a paddlin'",
        "We can't bust heads like we used to — but we have our ways. One trick is to tell them stories that don't go anywhere, like the time I caught the ferry over to Shelbyville. I needed a new heel for my shoe, so I decided to go to Morganville which is what they called Shelbyville in those days. So, I tied an onion to my belt which was the style at the time. Now, to take the ferry cost a nickel. And in those days, nickels had pictures of bumblebees on 'em. 'Give me five bees for a quarter,' you'd say. Now, where were we? Oh, yeah! The important thing was that I had an onion on my belt which was the style at the time. They didn't have white onions because of the war. The only thing you could get was those big yellow ones."
    ]

    return (
        <div>
            <label className="label" htmlFor="notice">
                {notices[Math.floor(Math.random() * notices.length)]}
            </label>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));