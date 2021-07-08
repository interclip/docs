Interclip codes are short strings used to identify one clip from another. 

## Format rules
The rules are as follows:
- Only ASCII letters A-Z and numbers 0-9 are allowed
- The code is case insensitive
- There are no two identical codes
- All codes are exactly 5 letters long (always have been, so there are no _legacy_ codes)
- A single URL only has one code associated with it

## Expiration
All codes expire after one month since [#47](https://github.com/aperta-principium/Interclip/pull/47), mainly because Interclip is not intended to be used as a URL shortener, and the less clips we have, the faster the SQL queries will run, so yay!