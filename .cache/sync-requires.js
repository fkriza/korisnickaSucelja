const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/frane/Desktop/hci/.cache/dev-404-page.js"))),
  "component---src-pages-followed-events-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/followedEvents.js"))),
  "component---src-pages-guest-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/guest.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/login.js"))),
  "component---src-pages-organized-events-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/organizedEvents.js"))),
  "component---src-pages-organize-event-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/organizeEvent.js"))),
  "component---src-pages-recommended-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/recommended.js"))),
  "component---src-pages-recommended-guest-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/recommendedGuest.js"))),
  "component---src-pages-register-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/register.js"))),
  "component---src-pages-search-events-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/searchEvents.js"))),
  "component---src-pages-search-events-guest-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/searchEventsGuest.js"))),
  "component---src-pages-subscribed-events-js": hot(preferDefault(require("/home/frane/Desktop/hci/src/pages/subscribedEvents.js")))
}

