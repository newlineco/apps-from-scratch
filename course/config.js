module.exports = ({ dedent }) => ({
  title: "newline course",
  slug: "newline-course",
  permalink: "/courses/newline-course",
  // posterImageUrl: "./images/tinyhouse-video-banner.png",
  // heroVideoUrl: "https://fullstack.wistia.com/medias/huan3dtzrj",
  gitRepoHttpUrl:
    "https://gitlab.com/fullstackio/books/newline-course-template",
  publicLessonCount: 0,
  previewPercent: 40,
  modulePrefix: "module_",
  lessonDirsGlob: "module_*/lesson_*",
  moduleDirsGlob: "module_*",
  authorSlugs: ["eigenjoy"],
  isFree: false,
  isShownPublicly: false,
  previewPagesOnSite: false,
  useDeltas: true,
  heroVideoUrl: "https://fullstack.wistia.com/medias/nv9ic6epti",
  posterImageUrl: "./images/twitter.jpg",
  ogImageUrl: "./images/twitter.jpg",
  twitterPromoImageUrl: "./images/twitter.jpg",
  // heroPhotoUrl: "./path/to/file.jpg",
  // heroLogoUrl: "./path/to/logo.jpg"
  /* INSTRUCTIONS: Read the template below, write your own version, and then delete this comment (and the extra text) */
  summary: dedent(`
<!-- Your template is like this (markdown): -->

In this course we <headline of what we do>. <why this technology is good> but <here's how learning it is problem>. 

( the summary is short - one or two lines )
  `),
  whatYouWillLearn: {
    items: [
      { text: "How to <do thing one>" },
      { text: "Importance of <something else>" },
      { text: "How to integrate <this>" },
      { text: "Differences between <whatever>" },
      { text: "What problems <this> can solve" },
      { text: "How to create a <something else>" }
    ]
  },
  primaryDescriptionMarkdown: dedent(`
<!-- Your template is like this (markdown): -->

( the primaryDescriptionMarkdown is long - several lines, include images, as long as you want )

In this course we <headline of what we do>. <why this technology is good> but <here's how learning it is problem>. 

In <the length of these lessons> we cover <three salient points about what we cover. Your BEST points>. Its <however long it is> and comes with <these bonus features, and reasons to buy. code, etc.>

It's taught by <author name> who <credibility, reason you should listen to them>. <social proof, if you have it yet>

<then you can list other supporting stuff you want to add, anything you want here>

-------
Example:
-------

We created a free course to create your first GraphQL server (from scratch) using Node and TypeScript. TypeScript and GraphQL are a powerful combo, but there's a lot of confusing edges if you're getting it setup the first time.

In this course we cover the basics of getting TypeScript setup with Node, how GraphQL works, and how to set up a GraphQL server using Apollo server. It's two hours long, it comes with complete code examples, and we walk through the code step-by-step.

It's taught by my friend, Shopify-engineer Hassan Djirdeh and he's integrated what he's learned using GraphQL in production as an engineer at Shopify. We've already had over 1,300 students enroll and it's been getting great reviews so far.

// ... and so on

  `),
  numProjects: 1,
  linesOfCode: 1035,
  ctaFeatures: {
    features: [
      { text: "Learn about <thing>" },
      { text: "Build <thing>" },
      { text: "Integrate <a thing>" }
    ]
  },
  authorBios: {
    yourUsernameHere: dedent(`
👋 Hi! I'm me. This is where you put your bio that is specific to the course. (This is an opportunity to sell the course more than yourself)
`)
  },
  faq: [
    {
      q: "Who is this course for?",
      a: "say who this is for"
    },
    {
      q: "Why is this course free?",
      a:
        "We wanted create a super simple course & boilerplate for anyone looking to start building GraphQL APIs with some of the most popular tech stacks."
    },
    {
      q: "What if I need help?",
      a:
        "You can ask us questions anytime through the community Discord channel or by [sending us a message](mailto:us@fullstack.io)."
    }
  ]
});
