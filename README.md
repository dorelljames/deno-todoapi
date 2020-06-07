# Deno Todo REST API

This is a basic REST API for todos. Again? Yeah, the infamous todos for everything. Why not? :D

## Motivation

Well, I created this out to try Deno and see it for myself. I've bumped into errors here, there, left and right but see, I learned.

See [Resources](#resources) section for the libraries and third party modules I used to create this project. One would say it's pretty early to try things out today. Yes, I agree but what else can go wrong with trying? 🙃

**Disclaimer:** You can use this project in any way you want but I am not held liable should anything that'll happen or for any damage, whatsoever.

## Resources

[Opine](https://deno.land/x/opine) - Fast, minimalist web framework for Deno ported from ExpressJS.  
[deno_mongo](https://deno.land/x/mongo) - deno_mongo is a MongoDB database driver developed for deno, based on rust's official mongodb library package.  
[Dotenv](https://deno.land/x/dotenv/README.md) - Dotenv handling for deno.

One more thing, I encountered an irrecoverable error when we passed in an invalid `ObjectId` as an argument, I had to use an NPM package for that and luckily I could import and use it in the project using [pika.dev](https://www.pika.dev/).

## Configuration

Should you need to update configuration, see `.env.example` file and add the entries you need to update to `.env` file.
