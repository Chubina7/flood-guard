# Project for small startup
FloodGuard is startup, which provides customers to get alerts about climate change.

- *NOTE: For the first demo, the web-page made, instead of application.*
- *For better UserExperience see the webpage using phone (or using developer tools inspect element)*

Used **NEXT.JS framework** on top of **REACT** Library, and their hooks (useEffect, useContext, useState, useSession, NextAuth, Link tag, Image tag...)
For serving the data, **Firebase** is used.

### Behaviour on the site
- User must register first (for the demo, it is possible only using Google auth).
- User sees the profile and his/her dashboard, where staticly he/she do not have any subscription.
- User chooses the subscription. Routes are defined two ways: from the profile and from the home page.
- Clicking BUY button triggers success message (actuall transactions will be added) and state changes globally (using useContext hook).
- Now user can click the profile icon in the corner and navigate to his/her profile.
- UI changed here, because he/she bought subscription: there are statistics and some information about subscription.
- And for the last - the main purpose of that site: in every 10 seconds the data is checked, whether the stats changed or not. The program sends appropriate alerts according to that data.
