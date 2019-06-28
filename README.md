# err insufficent resources

Does your Chrome tell you that, upon making _thousands_ of requests, it no longer has sufficient resources?

This repository reproduces the infamous ERR_INSUFFICIENT_RESOURCES bug that is in Chrome and possibly less prone to occur in browsers.

## Discovery

We notice that at around 7000 "concurrent" requests, Chrome's network stack begins to fail. Firefox seems to have a better internal buffer or queue to handle outgoing requests and returning responses.

For the purpose of this test, we use 8000 requests and await on them, and increment a simple counter after each completed request.

Please see the screenshots directory for examples of failure in Chrome but success in Firefox.

## Tech

* NestJS on backend API
* CRA React on frontend UI
