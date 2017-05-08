# Semantic HTML

In a nutshell, the "Semantic Web" is an idea that aims to make DATA on the web more accessible, specifically more accessible programmatically. While there are a number of techniques used to achieve this, we will focus on one aspect - *Semantic HTML Section Tags*.

## Problem?

The problem is that HTML is really a language to describe *structure* - it tells us how DATA should look, not what the DATA is. HTML5 section tags are the first baby steps used to start to make data more accessible, in order to provide *meaning*. An HTML5 `<section>` tag can be used in place of a `<div>`, for example, to provide some meaning as to what type of data is contained within the `<div>`.

To preface the usefulness of section tags in HTML5, let's look at a real world examples...

1. *Specialized interfaces*: Imagine tying to read a web page on something tiny like google glass, or a "smart watch". Lot's of pinching and zooming and pretty tough to do. Now imagine if that smart watch could determine the content and respond to voice commands like "Show navigation", "Show Main Content", "Next Section". This could happen across all sites today if they used Semantic markup. But there is no way to make that work if your site is just a bunch of unstructured divs.
1. *Accessibility Devices*: Several accessibility devices rely on semantic markup to make it possible for those with accessibility needs to access the web.

But it's not just about making your site more accessible in a programatic way. It's also about making the code for your site clearer and thus easier to maintain.