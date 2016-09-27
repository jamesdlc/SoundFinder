# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Choose Your Own API Integration

Your goal is to build an API "Mashup", or "rapid prototype", using Angular and your choice of public APIs.

## Setup

Please fork and clone this repo, and run the `budo` local server:
```bash
budo  -P --host=localhost --open
```

## Suggested API Endpoints

* [Open Movie Database API](http://www.omdbapi.com)
* [Github API](https://developer.github.com/v3/)
* [Reddit API](https://www.reddit.com/dev/api)
* [City Bikes API](http://api.citybik.es/v2/)
* [Spotify Web API](https://developer.spotify.com/web-api/)

**Do Not** Use endpoints that require AUTH or SECRET TOKENs.

> Keep in mind that *most* API endpoints are **NOT** meant to be consumed directly by the client/front-end/browser. There is *nowhere* to hide a "secret" api token in a front end application(!), so APIs like instagram, facebook, twitter, etc. are not suitable for this kind of project.

## Rapid Prototype
Angular is the perfect tool for building quick front-end prototypes so that you can get feedback.

You have the next hour to build a rapid prototype to show to your client (Make a plan and *Keep it Simple*!):

1. First, come up with a "proof of concept".
  - Do you have the data you need?
  - Do you have the tools you need?
2. Next, create a quick mock-up so you can get *client feedback* (it can be a single HTML file!):
  - Your client should be able to navigate, and click/toggle UI elements.
  - But everything should be *hard coded*.
3. Get *client feedback*.
  - If the client likes it, build it out, and plug in your API.
  - Otherwise, incorporate their feedback and iterate again.

Once you have client-approval, bring it to life.

> Keep in mind: Developer time is expensive. Iterate quickly and get client feedback before investing too much time into a single idea or approach! You won't get it right the first time!

<img width="400" src="https://media.giphy.com/media/JJt9Kx3lVCMlG/giphy.gif" title="the evolution of the bicycle">

## Killer Feature
Your app should do one thing, and do it well. Here are some ideas:

* **Like it / Love it** -- toggle UI elements like buttons and icons
* **Sort it / Search it** -- make it easy to search your content
* **Bookmark it / Share it** -- use query parameters or hash state to create shareable links
* **Gameify it** -- make a quiz, flash cards, guessing game, or typeracer clone

## Highly Polished
Focus your attention on creating a seamless, highly polished, front-end user experience.

* Does the layout make sense?
* Is it "mobile first"? (Does content "reflow" correcty when the window resizes?)
* Do elements toggle correctly / intuitively?
* Could you incorporate icons/colors into your buttons?
* Did you use load-spinners so I know what's happening?
* Did you consider edge cases?
    * Did you handle empty or incomplete API responses?
    * Did you handle bad user input into forms?
    * Did you handle API errors, not just success?


<img width="400" src="https://media.giphy.com/media/d1vaWA1lsbIdy/giphy.gif" title="nailed it">
