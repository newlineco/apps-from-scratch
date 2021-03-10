# Newline Course Template

Welcome to the newline course template! 

Here's what to do next:

## Installation

```
yarn
yarn start
```

## Project Organization

Your course should be organized into _modules_ with _lessons_.

Because we can include images, code, manuscript, and resources with **each lesson** we need a folder for each lesson.
Of course, putting all of the lessons in one big folder is unwieldy as well, so we use _modules_ and put each module in a folder, too.

**Modules' and lessons' course order will be implied by alphabetical folder order**.

Under the `course/` directly, each module should be in a folder like `module_00`, `module_01`, etc.

Each lesson should also be in a folder.

## Configuration

* The course has a config in `config.js`
* Each module has a config in `config.js`
* Each lesson has a config in the markdown frontmatter. 

Don't worry too much about these values now -- we'll deal with them more when we get closer to launch.

## A Complete Example

The Tinyhouse course is a completed example of a course with this structure. You should use it as your guide for more complicated things you want to do. But

[Checkout the repo here](https://gitlab.com/fullstackio/books/tinyhouse/tinyhouse_internal)

## Writing

For each lesson, create a folder and markdown file. See below for importing code.

## Previewing Your Changes

```
yarn start
```

This will start the preview server. You can make changes and it will live update

## Sharing Resources

Within each lesson folder, you can have two directories:

- `public` -- public images / PDFs / anything that is public / can be in a preview
- `protected` -- files we want to *require* login to be able to download. 

Generally you'll use `public` for images -- we'll show some of these in previews. 

But requests to `protected` we proxy through our server and require a login. It's a good fit for downloadable resources (like the completed sample code).

## Importing Code

See the lesson `course/module_01/lesson_01.01/code-loading-lesson.md`


## Getting Help

Just reach out to me (Nate) and I'll get you unstuck.

