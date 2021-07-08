Interclip uses Redis to cache key components of the app so they run as smoothly as possible.

## Redis

### What is Redis?
From [Redis](https://en.wikipedia.org/wiki/Redis) on Wikipedia 

<small><i>Wikipedia contributors. (2021, July 7). Redis. In Wikipedia, The Free Encyclopedia. Retrieved 20:52, July 8, 2021, from https://en.wikipedia.org/w/index.php?title=Redis&oldid=1032413376</i></small>


> Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability.

### Why Redis?
- It's fast (the whole database is in RAM)
- It's simple (although highly customisable, Redis is quite simple to understand and operate)

### What is Redis used for?
In Interclip, we use Redis for the two following tasks:

#### Storing clips
When a new clip is created, it is added as a key in Redis with a <abbr title="Time To Live">TTL</abbr> of 7 days, so if it accessed again within that time period, it is served from the cache, instead of the database.

#### Rate limiting
Redis keeps tab on the number of hits per IP (hashed IP, to be specific) and only stores the data for 30 seconds after the last request.

## ToDo: Service worker