---
title: The story of a forex trading platform.
summary: Web and Hybrid Mobile App Development and support.
authors: [ "Momchil Anachkov" ]
draft: false
categories: []
tags: [
  "Front-End Development",
  "Hybrid Apps",
  "Cordova",
  "Integration",
  "Theming",
  "UI Development",
  "Angular.js"
]
date: "2019-07-04T00:00:00Z"

reading_time: false  # Show estimated reading time?
share: false  # Show social sharing links?
profile: true  # Show author profile?
comments: false  # Show comments?

# Optional external URL for project (replaces project detail page).
external_link: ""

header:
  caption: ""
  image: "project/forex-trading-platform/featured.png"

image:
  caption: 
  focal_point: Left
  preview_only: true

links:
# - icon: twitter
#   icon_pack: fab
#   name: Follow
#   url: https://twitter.com/

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

## Intro

A client came to the company, where I was working at the time, and had a unique request. They had already successfully built a CFD trading website/platform and were looking for a few things we could provide. It was a great opportunity, both for the company, as well as our team, to grow and evolve.

So here's what they needed from us, the story of how each of these things came to be, the challenges we faced, how we overcame them, and in the end delivered a nice client experience.

## Supporting the already established code-base.

The guys had already released the platform, but as with any software product, shipping is only half the battle. Once you get that large flow of users, you need a dedicated team to iron out issues, impossible to catch on a smaller testing scale. We were tasked with handling defect resolution, and in the meantime aligning the code-base with established best practices.

Taking over a software project from another team is always a challenge as you need to step into the thoughts of the developers, when they were writing the code-base. This is also especially true when we're talking about a large-scale project, such as a trading platform. Luckily we had solid experience with the technology stack used: Node.js, NPM, Grunt along with Angular.js. So after a couple of introductory weeks filled with onboarding about functional requirements, and another couple for getting acquainted with the project architecture, we were confident enough to start making refactoring, and stabilization changes, without too much worry about regressions. We were off to a great start.

## Developing an iOS and Android app

In this day and age everyone's time is quite valuable. People have so many things to keep track and take care of throughout the day. Many users want the ability to carry out tasks on the go. This is the main reason many website development strategies embrace the mobile-first approach. Because [stats show that _most website traffic comes from mobile devices_](http://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide): tablets, phones and the like. This is exactly why our clients accurately deduced that they need a moblie version of their platform. And for a product that expects frequent use from single users, a dedicated iOS & Android app makes perfect sense.

So we took some time to research potential options. Let's go over them.

#### Developing a native App for each platform. One in Swift (for iOS), one in Java (for Android)

Obviously the baseline approach was to write two applications. One for iDevice and one for Android users. This had some hefty implications.

  1. **Twice the codebase.** Every feature set would have to be implemented twice, tested twice, and maintained twice. While for a larger company this could be a potential option, due to the performance benefits of this approach, this large workload was something that would hevily affect tangible progress and the speed at which we could deliver.
  2. **Platform-specific team capability.** While we were well-versed in web development including many of it's flavors, mobile app development was hardly our forte. We would have to dedicate extra time for knowledge acquisition, and learn on the go. While this is _technically_ possible it would definitely affect deadlines and time-to-resolution in case of issues arising.

All in all, this route had some major drawbacks so we decided to keep looking for alternatives in hope of finding something better suited.

#### Turning the mobile version of the platform into a Progressive Web App

Next we considered going the Progressive Web App route. However at the time of analysis PWAs were still a novel concept and quite immature. API support for things like geolocation, and the like was still not stable. Add the fact that Apple and Google were not on the same page, regarding feature set, and one could see why we dismissed what lay down that road.

So we keep looking...

#### Developing a hybrid app

And in comes the saving grace. While at the time, there were, and still are some issues with things like Cordova, Ionic and the like, it was the best fit for our case. The mobile version of the trading platform was already written and stable (👏). This meant that we could for the most part _wrap_ the existing platform and go from there. There were many benefits to this.

1. **This required minimal effort.** Relative to the native approach, the time that would be required to do this was minuscule. That meant that once we managed to package the web platform in a Cordova application we would have a stable base to move forward from.
2. **We inherit all of the app's design.** Existing users wouldn't have to learn a different UI to do the things they already knew how to do in their mobile workflow.
3. **Less code to maintain.** Since Cordova apps are in essence web pages, presented in a native web view, we could reuse the codebase throughout all the platforms. That means that there wouldn't have to be seperate people maintaining the app for an Android and iOS device, and even more than that...
4. **Changes to the code would be reflected across all platforms.** Since we're using the same code base, once we develop a new feature, or fix an existing issue, that change could be pushed everywhere. Users of one platform wouldn't have to wait for updates, already available on another one. This was quite important as we already knew there was a [design overhaul](#redesigning-the-mobile-app-and-website) looming in the near future.

We were extremely happy to have found a development strategy and stack that was so promising for our use-case. 🥳 This was not to say that the implementation was simple. As anyone familiar with Cordova, knows there are rules you have to obey, as there are with any framework. There is a very specific project structure, that you have to follow, and that meant we had to rework parts of the existing workflow so that all modules of the project can integrate successfuly and play nice with each other. Still, after a few days of overview, analysis, and planning how the integration would play out, we started restructuring things. After about a month of work, module by module, we successfully integrated the platform into a working hybrid mobile application. 🚀

We were now ready to start working on feature requests!

## Redesigning the mobile app and website

While the platform was fully functional, along with the newly packaged mobile app, some time had passed, since release. As such, the design had become a little outdated. And so they came to us with a request:

> We have a new design in the works and we would like you guys to work with us on it's implementation.

Fantastic!

For about the next month we worked closely with our client's designer to work out the details. As with any initial design, there were a few edge cases to iron out due to the dynamic nature of the app. I'm delighted to say that the redesign was quite successful and went very smoothly. I'm also happy to share the end result of some of that work with you. Take a look below.

<div class="phone-gallery">
  <div class="phone-gallery__content">
    {{< figure src="phone-1.jpg" lightbox="true" alt="A list of a user's favorited quotes" >}}
    {{< figure src="phone-2.jpg" lightbox="true" alt="A detailed, charted view of a commodity" >}}
    {{< figure src="phone-3.jpg" lightbox="true" alt="A list of a user's open orders" >}}
    {{< figure src="phone-4.jpg" lightbox="true" alt="A history of all the user's orders" >}}
    {{< figure src="phone-5.jpg" lightbox="true" alt="A list of a user's previous orders, along with profits/losses" >}}
  </div>
</div>

And due to [our choice to go with a _hybrid app_ approach](#developing-a-hybrid-app) we could easily update all the platforms we were targeting: Android, iOS and Mobile.

## Adding Themes Functionality

Staring at a screen all day inevitably puts strain on your eyes. And while a white, bright theme may be ok on your phone if you want to check or do something on the go, it is definitely lacking, when it comes to working, surrounded by multiple displays throughout the day. And so the guys came to us with another request.

> We'd like our users to be able to customize the appearance of the platform to their needs.

Now obviously brand-specific colors would have to remain the same, but there was no reason a sort of _night mode_ couldn't be implemented. So off we go! 🔥

... or so we thought.

Sadly the UI of the platform was not developed with theming in mind. I'm sure anyone who's worked on custom themes, be they simple static color schemes, or allowing the user to customize each facet of the application, knows how important your markup & CSS structure is in such a case. And as you can imagine it took us a while to rework the UI, to become _themable_, moving forward with care not to cause any UI regressions.

Even though it took some time, in the end all went well. We managed to rework the codebase to align it with the desired functionality, and plugged in the _night mode_ color values and voila. A pleasant dark theme, that's easy on the eyes.

{{< figure src="mode-light.png" title="Light mode" lightbox="true" alt="Light mode theme" >}}

{{< figure src="mode-dark.png" title="Dark mode" lightbox="true" alt="Light mode theme" >}}

Even we, as a team were happy, since looking at the platform for a sizeable portion of the day, was much more pleasant.

## Copytrading

An exciting time came along at one point, when our client came to us with their first functional feature request: **Copytrading**.

Sounds fancy. So what is that?

The idea is that certain investors can make their profiles public, allowing you to see their trading data i.e. what positions they have currently open, when they opened them, etc. You could then _follow_ these traders, and what would happen is that you would start mirroring the positions they open and close from here on. The idea being, that if you have someone that consistently demonstrates profit over a longer period of time, you could follow them and trust that they know what they're doing, as they probably wouldn't want to make bad investments themselves, and therefore net an easier, lower-risk profit.

We started development on it and after a couple of months of working together with the off-site backend team, to coordinate the API we managed to deliver what I would call a very successful implementation. You can view some of the related UI below.

<div class="copytrading-gallery">
  {{< figure src="copytrading-profile.png" lightbox="true" title="Profile details of a single trader" alt="Profile details of a single trader" >}}
  {{< figure src="copytrading-sidebar.png" lightbox="true" title="List of traders" alt="Profile details of a single trader" >}}
</div>

## In the end...

It was an interesting journey. It had it's ups and downs, but there was definitely a lot to learn from it, and learn we did. Our team did a great job throughout: Analyzing the issues, picking the right tools and development approaches for the job, delivering competent solutions, aligned with the client's needs, and ultimately fostering a healthy client-provider relationship.

<style>
  .phone-gallery {
    box-sizing: border-box;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .phone-gallery__content {
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-width: thin;
  }

  .phone-gallery figure:not(:last-of-type) {
    margin-right: 0.5rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  .phone-gallery figure {
    display: inline-block;
    border: 10px solid #010101;
    border-radius: 10px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .phone-gallery figure img {
    height: 420px;
  }

  .copytrading-gallery {
    display: flex;
  }

  .copytrading-gallery figure {
    margin-top: 1rem !important;
    margin-right: 0.5rem;
    margin-bottom: 0.35rem;
  }
</style>
