# unlikeX
A script to unlike X posts (or Twitter tweets, if you like) en masse.
## Usage
Go to ```https://x.com/{profile}/likes``` and execute the script. Some caveats, though: you will get rate limited (429 response) for around ten to fifteen minutes, roughly every 500 unlikes you send (modify the interval accordingly, to upwards of ```4500``` (default), if you think that will keep the process alive). On top of that, some of your likes might magically disappear to never be shown again on your profile--they might reappear as unliked posts when new likes are added; you'll need to like and unlike those in order to get rid of them definitively. Over time, your counter might get to reflect the real number of likes.
