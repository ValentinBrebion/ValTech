---
next: false
prev: false
---
# Introduction to PWA
## Definition 
> The history of Progressive Web Apps (PWA) dates back to the early 2010s when developers and companies began exploring new ways to create richer and more performant web experiences that could rival native applications. They were later popularized by Google around 2015.

## History

::: warning <h1 class="PWA__center">What is PWA?</h1>
<u>***<h3 class="PWA__center">Origins in Mobile Web Applications:</h3>***</u> *Before the emergence of PWAs, web developers worked on techniques to improve the user experience of websites on mobile devices. This includes responsive design, which allows websites to adapt to different screen sizes, as well as the use of caches to store data locally.*

<u>***<h3 class="PWA__center">Publication of Alex Russell and Frances Berriman's Article:</h3>***</u> *In 2015, Alex Russell and Frances Berriman, Google engineers, published <a href="https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/" target="_blank">an article describing the concept of Progressive Web Apps</a>. They introduced the idea of using modern browser capabilities to create web applications that behave like native applications.*

<u>***<h3 class="PWA__center">Key Characteristics of PWAs:</h3>***</u> *PWAs combine several existing technologies such as Service Workers, Web App Manifests, and caches to allow web applications to be installed on devices, access native features, and work offline.*

<u>***<h3 class="PWA__center">Support from Major Browsers and Tech Giants:</h3>***</u> *Major web browsers, including Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari, began implementing features enabling PWA support. Additionally, technology companies such as Google and Microsoft have strongly promoted PWAs as a viable alternative to native applications.*

<u>***<h3 class="PWA__center">Growing Adoption:</h3>***</u> *PWAs began gaining popularity due to their ability to offer a user experience similar to native applications while being easier to develop, deploy, and update. Many companies have adopted PWAs for their cost and performance benefits.*

<u>***<h3 class="PWA__center">Continuous Evolution:</h3>***</u> *Over time, PWA capabilities have continued to improve, offering increasingly rich user experiences. Developers have also explored new ways to use PWAs, such as desktop applications and advanced offline experiences.*
:::

## Wait a minute... service workers???
An extremely stylish term but very useful as they offer features such as **`cache management, push notifications, and network request interception`**.

::: danger ⚠️ Warning
The `manifest.json` and `sw.js` files must always be at the root of the file
:::

::: details Code to add to activate service workers (in head)
```js
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js')
.then((reg) => console.log("sw registered"), reg).catch((err) => console.log("sw not registered!"), err);}
```
>The following code will register the service worker in the sw.js file to which we can assign specific events
listening to actions on the page. ***You can leave the sw.js file empty if you only want to make your site downloadable. We'll use it for example for caching if we want our site to retain links and content offline***
:::

## Wait a minute... manifest.json???
*Another unfamiliar term that doesn't make much sense on its own but is central to a PWA. Having a manifest provides other benefits as well. Here are some:*

1. It allows some browsers to add a shortcut to the PWA on the desktop or home screen
2. It allows the PWA to be listed on certain app stores such as the Windows Store
3. It allows the PWA to be displayed in full screen, without browser UI, with an initial launch screen (splashscreen) when opening the PWA

::: details Manifest Properties
- **<u>`name:`</u>** displayed on the splash-screen
- **<u>`short_name:`</u>** displayed below the shortcut on the desktop or home screen
- **<u>`description:`</u>** a general description of the application
- **<u>`start_url:`</u>** the URL that is loaded first when opening the application from its shortcut on the desktop or home screen
- **<u>`background_color:`</u>** The background color of the splash-screen
- **<u>`theme_color:`</u>** the general theme color of the application, used particularly in status bars if they are displayed
- **<u>`display:`</u>** specifies the display mode. Here are the different modes available sorted by fallback order:
- **<u>`fullscreen:`</u>** all available display area is used and no user agent is shown
- **<u>`standalone:`</u>** similar behavior to a native application. This can mean that the application has its own window, its own icon in the application launcher, etc. In this mode, the user agent will exclude interface elements that control navigation but may include other elements like a status bar
- **<u>`minimal-ui:`</u>** the application will look and behave like a standalone application, but it will have some interface elements for controlling navigation. The elements vary depending on the browser and system
- **<u>`browser (default):`</u>** the application opens in a new tab or browser window, depending on the browser and platform
- **<u>`icons:`</u>** list of application icons of different resolutions, used notably for the shortcut and splashscreen. The recommended sizes to provide are at minimum 192x192px and 512x512px. The device will automatically choose the best icon according to the cases. It is also interesting to provide a vector SVG version of the icon as a fallback that will adapt to a maximum of sizes
- **<u>`screenshots:`</u>** list of application screenshots in different form factors, displayed in some web app stores or in the installation window interface for some browsers
::: 