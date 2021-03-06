# API

There is a very simple API for anybody to use. Remember, clips only last for a month! (as of [v3.2.4](https://github.com/aperta-principium/Interclip/releases/tag/v3.2.4))

## Create clips

### Example queries

⚠️ Warning! The endpoint `https://interclip.app/includes/api` has been deprecated and will not work anymore.

#### POST

`https://interclip.app/api/set`

body:

```json
{
  "url": "https://duckduckgo.com"
}
```

#### GET

`https://interclip.app/api/set?url=https://flutter.dev/`

### Example response

```json
{
  "status": "success",
  "result": "k02yl"
}
```

## Get a clip

### Example queries

⚠️ Warning! The endpoint `https://interclip.app/includes/get-api` has been deprecated and will not work anymore.

#### POST

`https://interclip.app/api/get`
body:

```json
{
  "code": "tasks"
}
```

**GET**
`https://interclip.app/api/get?code=tasks`

### Example response

```json
{
  "status": "success",
  "result": "https://taskord.com/"
}
```

## Get file upload stats

### Example query

**GET**
`https://interclip.app/includes/size.json`

### Example response

```json
{
  "count": 26,
  "bytes": 163544872
}
```

## `curl` file upload

Sample command: `curl -F "uploaded_file=@file.txt" https://interclip.app/upload/`, where `file.txt` is your file.
