# Problems

#### 1. When you open an app and `appUrl` is set to anything else than root, the app opens fine but the initial URL is not updated to match the `appUrl` value.

For example, most of our apps have `appUrl: /config` and when you open the app, the URL is still `https://….saleor.cloud/dashboard/apps/QXBwOjU0OQ%3D%3D/app` instead of `https://….saleor.cloud/dashboard/apps/QXBwOjU0OQ%3D%3D/app/config`.

##### Steps to reproduce:

1. Open the app
2. Notice the URL.

<img width="596" alt="Screenshot 2024-03-12 at 12 41 53" src="https://github.com/mmiszy/saleor-routing-app-example/assets/1338731/1d6949ce-93c7-4d76-af2d-8a6b66324cbb">

#### 2. If your app has a link to "self" (i.e. the same address you're currently on), clicking on it changes the URL to what it was supposed to be in the first place.

##### Steps to reproduce:

1. Open the app
2. Click "Go to self"
3. Notice how the dashboard URL was now updated even though the app URL didn't change.

https://github.com/mmiszy/saleor-routing-app-example/assets/1338731/7121334a-a789-429e-ab13-9775c1acad40

#### 3. Refreshing the website now results in a 404 error because the iFrame URL is set to `https://appurl.com/config/config` (notice double `/config`).

##### Steps to reproduce:

1. Open the app
2. Click "Go to self"
3. Refresh the page
4. Notice the 404 error.

#### 4. Navigating with `back` and `forward` in the browser breaks the app.

##### Steps to reproduce:

1. Open the app
2. Click "Go to 1"
3. Click "back" in the browser
4. Notice the 404 error
5. Bonus: notice that "Forward" button in the browser is disabled (probably meaning that the routing history was replaced instead of pushed).

#### 5. It's impossible to leave after a redirect (`replace`).

##### Steps to reproduce:

1. Open the app
2. Click "Go to redirects chain"
3. Wait 4 seconds for two redirects to happen
4. Notice how the URL was correctly updated.
5. Click "back" in the browser.
6. Notice the 404 error.
7. Notice that the URL didn't change back to the previous one.
