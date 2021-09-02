# The admin bar

When logged in (this can be achieved by visiting `/login`), you can toggle the admin bar.

**Note: you have to have permission to access the admin bar, this can be easily configured by setting the `AUTH_TYPE` to `mock` in the `.env` file**

## Keyboard shortcuts
You can toggle the admin bar using <kbd>Shift+B</kbd>

## How it looks like
![image](/img/docs/adminbar.png)

### Legend
- **Client**: The total time it took the client to render the DOM and fetch all the necessary resources
- **Server**: The total time it took the server to process the request
- **HTTP**: The status code returned by the current page
- **Branch@Commit**: Pretty self-explanatory, it displays the latest tag and the newest local commit
- **Memory**: The allocated memory to the PHP script