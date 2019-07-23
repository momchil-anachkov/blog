---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Electron App"
summary: ""
authors: ["Momchil Anachkov"]
draft: true
tags: [
  "Front-End Development",
  "UI Development",
  "Electron",
  "Node.js",
]
categories: []
date: 2019-07-23T10:06:34+03:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

header:
  caption: ""
  image: "project/forex-trading-platform/featured.png"

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

At the company I was working at came a query for "Static UI development".

Now I'm not exactly sure what the client meant. Especially, since at the start we just got an email with not a lot of details. First me and my colleague (let's say John), assumed that it was just some `HTML` & `CSS` templates. Something small, doable within a couple of days. In the end it turned out to be something completely different. Still fairly small, but I'll get to that later.

A day later we go into the scheduled meeting, where the product owners, along with two other developers explained to us the problem they were trying to solve. The client was a major US telecom, which were trying to optimize their employee-to-store allocation. In essence they wanted to calculate, based on employee availability, location of residence, seniority, store location, size and working hours, which employees would be best allocated in which store(s). They had tried a bunch of possible solutions: Spreadsheets, MS Access etc., but the number of combinations of variables, required to produce the result-set they wanted was too large to just run a couple of spreadsheet formulas across and calculate within a reasonable time, even accounting for the fact that they would need to do this only once every few months. Luckily the develpment team there had experience with Python, which is quite useful for large amounts of data processing, and they could write a set of custom scripts, which when the data passed through them, would yield the desired results.

## The requirements

Now that's all well and good, but running python scripts from the command line was not something you'd reasonably expect your average business manager to be able to do. They needed some sort of graphical interface in order to comfortably manage everything. So after a couple of hours of back and forth with them, we came to a rough set of requirements. They needed to be able to do the following:

* Visually input the data, and calculation restrictions.
* See some indications that calculations are currently running.
* Have a look at the output data.
* Export the output data into an office-friendly CSV format.
