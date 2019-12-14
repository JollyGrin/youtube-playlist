# youtube-playlist
Turn any youtube playlist into a dynamically generated site. Using Next.js, Bulma, and Zeit Now

# Tutorial
[Follow the tutorial on Medium](google.com)

# Installation

1. `git clone https://github.com/JollyGrin/youtube-playlist.git`

2. `npm i`

3. `npm run css:build`

4. Create an .env file with credentials your [Google Developer Console](https://console.developers.google.com/):

```
APIKEY=YourAPIKey
PLAYLIST=YoutubePlaylistID
```

# Deployment
Using Zeit Now, set 2 secrets using from your terminal using the CLI to set the API key and Playlist ID:
```
now secrets add <secret-name> <secret-value>

// example
now secrets add secret-name-key AUhk4Ue34qTR6EvCF-3hUY674DseRT
now secrets add secret-name-playlist PL2i-OpRn3xVwXFgn88_dDL09xA-6FA0ff
```

Then edit `now.json`:

```
{
    "build": {
        "env": {
            "APIKEY": "@secret-name-key",
            "PLAYLIST": "@secret-name-playlist"
        }
    }
}
```

You can now deploy the app with 

``` now ```
