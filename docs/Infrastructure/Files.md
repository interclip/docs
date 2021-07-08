You can actually host files on Interclip, here is the documentation for all of that.

## Frontend 
There is a simple interface at `/file` which is powered by a JS script, which upon selection of a file (drag n' drop, input selection, or pasting of an image) does these things:
1. Checks if the file isn't over the `fileSizeLimitInMegabytes` limit
2. Starts a `XMLHttpRequest()` (please don't kill me for not using `fetch()`, but `XMLHttpRequest()` let's me update the progress bar)
3. Updates the progress bar on every `onprogress` event
4. If the upload succeeds, it creates a form (along with an anti-CSRF token and the returned URL) and submits it to `includes/new`, where the user gets a code for their file

## Backend
### PHP
The file upload script for all uploads is here: https://github.com/aperta-principium/Interclip/blob/main/upload/index.php

What it does is it takes the `uploaded_file` from the `$_FILES` superglobal and:
1. Checks if the file is above the file size limit
2. Creates a unique identifier for the file, getting the first 10 characters of a SHA1, which is generated from the `uniqid()` with the seed of the current timestamp joined with a random shuffle of the alphanumeric alphabet. This method does not check for duplicates because it would impact performance. There are about 3 quadrillion (3.656158440062976 × 10^15) of possible combinations of file ids.
3. The extension of the file is scanned for illegal characters (anything non-ASCII basically)
4. If it doesn't contain any, it moves the file from its `tmp_name` to `upload/uploads/` under the new name
5. It executes `upload.sh` with an argument as the path of the newly uploaded file in the background
6. It renders the URL in plaintext and exits

### `upload.sh`
The upload script does thee uploading in two easy steps:
1. It copies the file to the cloud storage server via `rclone`
2. It removes the original file

### The file reverse-proxy
#### Limitations
There are currently 2 major limitations to Interclip files:
1. The file proxy is deployed to Cloudflare workers and has a limit of 100K requests daily (if you want to bring Interclip files down, this is your way to go)
2. The server is limited to 20TB of file uploads per month, which means, that users can upload a max of about 200K 3MB images per day. 