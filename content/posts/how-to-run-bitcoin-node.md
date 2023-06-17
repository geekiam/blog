---
title: How to run a Bitcoin Node
subtitle: Run full validating bitcoin node on a Raspberry Pi
description: In this article we will explore how to run a full validating bitcoin node on a Raspberry Pi or old server
summary: 
author:
  name: Gary Woodfine
  github: garywoodfine
  imageUrl: /images/garywoodfine.png
featureImage:
  url: /images/bitcoin.jpg
  title:  How to run a Bitcoin Node
publishDate: 05 June 2023
publishDateTime: 2023-06-05:17:30
---

In [why run a bitcoin node](/posts/why-run-bitcoin-node "Why run a Bitcoin node | Geekiam") we explored the reasons why 
you should run a bitcoin node.  In this article we will explore how to run a full validating bitcoin node on a 
Raspberry Pi using Umbrel and run it on your home network.

Running a Bitcoin node is far less of a hassle than most people want to think and how you can also have a lot of fun doing it.
While at the same time deepening your understanding of the Bitcoin network and how it works, and also help to improve your 
understanding of the technology.

We are going to use [Start9](https://start9.com// "Start9 | Sovereign Computing") to run our Bitcoin node. 

## What is Start9?

We have previously discussed, [what is sovereign computing](/posts/what-sovereign-computing "What is Sovereign Computing | Geekiam"),
which is essentially defined as:

::quote
To be the true owner of your information and of your computer's hardware resources, as well as to share these things 
in any way you want and only with whomever you want. To participate in the Internet free of the middleman, as an 
autonomous, independent and sovereign individual.
::

Start9 is a company that is dedicated to helping people achieve Sovereign Computing.  They have developed a range of
hardware and software products to help people achieve this goal. Their flagship product is the EmbassyOS, which is a 
personal server operating system that enables you to run your own Bitcoin and Lightning node, as well as a range of 
other applications. The EmbassyOS is a fork of the popular Linux distribution Ubuntu,

Start9 have also developed a range of hardware products, which are essentially mini servers, that you can use to run
EmbassyOS on. These devices are essentially mini computers, that you can connect to your home network and run your own
personal server.  Start9 sell these devices on their [Start9 store website](https://store.start9.com/), However you can 
also purchase the hardware and build your own device.  The hardware is essentially a Raspberry Pi 4, with a 1TB SSD drive
and a case.  You can purchase all these components from Amazon or other online retailers.  You can also use an old laptop
or desktop computer, as long as it has a 1TB SSD drive.

In this article we will explore both of these options to explore how easy it is to get up and running with EmbassyOS and 
start running a Full Bitcoin node.

### Start9 EmbassyOS on a Raspberry Pi

Start9 is committed to ensuring that StartOS is accessible. It will always be possible to build your own Start9 
server similar to the ones available on their website. 

Below is the list of components we used to build our own Personal Server using a Raspberry Pi 4 8GB

* [Raspberry Pi 4 8GB](https://amzn.to/3p9G8jG)
* [Geekworm NASPi V2.0 2.5 inch SATA HDD/SSD NAS Storage Kit for Raspberry Pi 4 Model B](https://amzn.to/3NAgbD6)
* [Crucial MX500 2TB 3D NAND SATA 2.5 Inch Internal SSD](https://amzn.to/43KWDBM)
* [SanDisk HIGH ENDURANCE Video Monitoring for Dashcams & Home Monitoring 32 GB microSDHC Memory Card](https://amzn.to/3PdIecV)
* [Raspberry Pi 4 USB-C Power Supply UK Plug ](https://amzn.to/447q7cG)

![All components of Raspberry PI server](/images/raspberry-pi-server.jpg)

I'm not going to lie to you, it was a bit more difficult than I had envisioned to put together, but it was a lot of fun.
I am not going to go into the details, but I would recommend you watch the following video to help you put it together.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RQGYf6Fqf6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>






