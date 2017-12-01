Battlerite API
=====

### How to use:
This is for people who are having issues with their API key and want to see what kind of data is available on the API.
I created a basic server using my API key for anyone who wants to look at data to use.

Root route is a get request to https://api.dc01.gamelockerapp.com/shards/global/matches
To query matches, follow the battlerite api docs and enter the query parameters after the url:
?sort=createdAt&page[limit]=3&filter[createdAt-start]=2017-11-10T13:25:30Z