# link-summarizer [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Summarizes a given link

## Installation

```sh
$ npm install --save link-summarizer
```

## Usage

```js
var callback = function(response, arg1) {
    console.log(response);
};

var summarizer = require("./index")();
var url = "https://en.wikipedia.org/wiki/Bacteria";
summarizer.summarizeLink(url, callback, ["dummy"])

/*
{
	title: 'Wikipedia',
	softTitle: 'Wikipedia',
	date: '. Retrieved 10 September 2008',
	author: [],
	publisher: undefined,
	copyright: 'Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.',
	favicon: '/static/favicon/wikipedia.ico',
	description: undefined,
	keywords: undefined,
	lang: 'en',
	canonicalLink: 'https://en.wikipedia.org/wiki/Bacteria',
	tags: [],
	image: null,
	videos: [],
	status: 'ok',
	summary: 'Bacteria were among the first life forms to appear on Earth, and are present in most of its habitats.'
}
*/
```
## License

BSD-2-Clause-FreeBSD © [Ravikiran Janardhana](https://www.ravikiranj.net)


[npm-image]: https://badge.fury.io/js/link-summarizer.svg
[npm-url]: https://npmjs.org/package/link-summarizer
[travis-image]: https://travis-ci.org/ravikiranj/link-summarizer.svg?branch=master
[travis-url]: https://travis-ci.org/ravikiranj/link-summarizer
[daviddm-image]: https://david-dm.org/ravikiranj/link-summarizer.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ravikiranj/link-summarizer
