---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Employee Assignment Optimization"
summary: "How our team played a role in making things nicer for thousands of people."
authors: ["Momchil Anachkov"]
draft: true
tags: [
  "Desktop Application Development",
  "UI Development",
  "Electron",
  "Node.js",
]
categories: []
date: 2019-07-24T10:06:34+03:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: true

header:
  caption: ""
  image: "project/electron-app/header.jpg"

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

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

One evening, at the company, where I was working at came a query for "Static UI development".

Now I'm not exactly sure what the client meant. Especially, since at the start we just got an email with not a lot of details. First me and my colleague (let's say John), assumed that it was just some HTML & CSS templates. Something small, doable within a couple of days. In the end it turned out to be something completely different. Still fairly small, but I'll get to that later.

## How the requirements came to be

A day later we go into the scheduled meeting, where the product owners (PO), along with two other developers explained to us the problem they were trying to solve. The client was a major US telecom, and they were trying to optimize their employee-to-store allocation.

They wanted to calculate which employees would be best allocated in which store(s). Matching things like:

* employee availability with store working hours
* employee location of residence with store location
* employee experience with store size 

They had tried a bunch of possible solutions: Spreadsheets, MS Access etc., but the number of combinations of variables, required to produce the result-set they wanted was too large to run a couple of spreadsheet formulas across and calculate within a reasonable time. Even accounting for the fact that they would need to do this only once every few months. Luckily the development team there had experience with Python, which is quite useful for large amounts of data processing. They could write a set of custom scripts, which, when ran across the data, would yield the desired results.

Now that's all well and good, but running python scripts from the command line was not something you'd expect your average business manager be able to do. They needed some sort of graphical interface to comfortably manage everything. So after a couple of hours of back and forth with them, we came to a rough set of requirements. They needed to be able to do the following:

* Input the data, and calculation restrictions.
* See some indications that calculations are currently running.
* Have a look at the output data.
* Export the output data into an office-friendly CSV format.

We managed to secure a day for research from the guys, to see how we could best handle this.

## A plan of action

Now that we worked out the functional requirements, we started looking for a way to make them a reality. The team consisted of just me and John. We are both web developers, and creating desktop applications was something we had limited experience in. Luckily I had some spare time before all this went down and had looked over a framework called [Electron](https://electronjs.org/): A NodeJS/Chromium based tool for desktop application development, using web technologies. We spent a few hours looking over the documentation together, and came to the conclusion that it fully satisfied our functional needs. _We could make this work._

We had another meeting next afternoon and let the guys know of our plan. It was time to kick off development.

## How the plan was carried out

The next day we looked over GitHub and found a [popular Electron seed repository](https://github.com/electron-react-boilerplate/electron-react-boilerplate), featuring [React](https://reactjs.org) as the component framework of choice. Things were off to a great start.

We plugged in [React Bootstrap](https://react-bootstrap.github.io/) as our component library. This was more of a back-office, system tool, and not a client-facing one, there was no need for a fancy design. The UI had to be first and foremost functional. We synced this with our PO guys and they agreed wholeheartedly, as it would drastically reduce development and delivery time. As anyone, who's worked on a custom design knows - Depending on the complexity it can take half, or even more of your development time working on the design alone. We themed the UI to use colors, consistent with our client's brand and kept moving from there.

Over the next week we worked closely with the Python team. Discussing the communication interface between the UI and calculation module. 
As development moved along, we noticed some extra quality of life improvements that could be made. For example - Since the employee distribution calculation took a substantial amount of time, we implemented a way to interrupt the process. This was useful in case someone made an error, inputting the data.

One by one, we implemented the functional requirements. Syncing daily with the PO and Python team. Demoing each feature, as implemented. We comfortably fit within the delivery timeline.

I've scrubbed the UI for sensitive info, as well as made some adjustments so most things can fit on a single screen. I'm happy to share with you general overview of how things looked on the finished product.

{{< figure src="home.png" lightbox="true" title="The user interface" alt="Employee Assignment Optimizer UI showcase" >}}

## Finally

It was very exciting to work on a project with these implications, even if it was a bit short. It feels great, knowing you had a part in something that affects thousands of people. We got to expand our technology stack with Electron. A tool, quite handy for desktop application development and for people with our specific skill set. This allowed us to be able to take more varied projects in the future. And last, but not least, we had the chance to work with some lovely people abroad, on this thrilling project.
