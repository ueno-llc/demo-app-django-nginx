# create-ueno-app + Django + nginx demo

Quick demo of a possible scenario where a django setup is running on the same domain as a React
frontend based on [`create-ueno-app`](https://github.com/ueno-llc/create-ueno-app) with an nginx
proxy inside docker. This is a proof of concept and not in any way productionized.

To start:

```bash
docker-compose build
docker-compose up
```

Runs the react app on `http://localhost` using the default template from `create-ueno-app` and the
django app on `/api`.

One new component is on the frontpage ([`nextapp/src/logged-in/LoggedIn.tsx`](nextapp/src/logged-in/LoggedIn.tsx)
that checks if the user is logged in by doing a client side `fetch` to `/test` which proxies to the
django app and checks if the user is logged in via ``. Since it's a client side request, all cookies
are passed along and authentication is checked with no changes to django's system.

Server-side implementation could also be achieved by passing along the cookie to the other app, we
have access to them since we're on the same domain.
