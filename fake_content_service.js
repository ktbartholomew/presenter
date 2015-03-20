/*
* fake_content_service.js: Fake content service
*
* (C) 2015 Rackspace, Inc.
*
*/

var express = require('express');

var app = express();

app.get('/content/*', function(req, res) {
  var j = {"display_toc": true, "prev": null, "parents": [], "customsidebar": null, "title": "Deconst", "sourcename": "index.txt", "body": "<div class=\"section\" id=\"deconst\">\n<h1>Deconst<a class=\"headerlink\" href=\"#deconst\" title=\"Permalink to this headline\">\u00b6</a></h1>\n<p><em>Deconstruct your Documentation</em></p>\n<p><a class=\"reference external\" href=\"https://github.com/deconst\">Deconst</a> is a continuous delivery pipeline used to assemble documentation from a heterogenous set of source repositories. Individual GitHub repositories containing content in <abbr title=\"reStructuredText\">.rst</abbr> or <abbr title=\"Markdown\">.md</abbr> formats are <strong>rendered</strong> into a common JSON format, then mapped to subtrees of the final page by a <strong>page map</strong>, a plaintext file stored in its own repository.</p>\n<p>This guide serves two purposes:</p>\n<ol class=\"arabic simple\">\n<li>It&#8217;s documentation for deconst itself. If you want to write documentation for a deconst-managed site, or if you want to run a deconst cluster yourself, this will help you get started.</li>\n<li>It&#8217;s also used as a concrete example for deconst&#8217;s development! We use this to dogfood the deconst contribution and renderer workflow.</li>\n</ol>\n<div class=\"admonition warning\">\n<p class=\"first admonition-title\">Warning</p>\n<p>We&#8217;re still prototyping the deconst process and getting things up and running! Most of the content here is purely speculative at the moment and is likely to change heavily as soon as we start writing real code and plugging things into other things. It&#8217;ll change even <em>more</em> heavily once we introduce users into the mix. Take this for what it is: a glimpse into our minds at a particular point in time, which will probably lag reality somewhat until we have something running and stable.</p>\n<p class=\"last\">With that being said, if you read something and it&#8217;s <em>really</em> WTF, <a class=\"reference external\" href=\"https://github.com/deconst/deconst-docs/issues/new\">pop open an issue</a> and let&#8217;s talk about it!</p>\n</div>\n<p>Contents:</p>\n<div class=\"toctree-wrapper compound\">\n<ul>\n<li class=\"toctree-l1\"><a class=\"reference internal\" href=\"writing-docs/\">Writing Documentation for Deconst</a><ul>\n<li class=\"toctree-l2\"><a class=\"reference internal\" href=\"writing-docs/#assumptions\">Assumptions</a></li>\n<li class=\"toctree-l2\"><a class=\"reference internal\" href=\"writing-docs/#setting-up\">Setting Up</a></li>\n<li class=\"toctree-l2\"><a class=\"reference internal\" href=\"writing-docs/#pull-request-builder\">Pull Request Builder</a></li>\n<li class=\"toctree-l2\"><a class=\"reference internal\" href=\"writing-docs/#building-locally\">Building Locally</a></li>\n</ul>\n</li>\n<li class=\"toctree-l1\"><a class=\"reference internal\" href=\"running/\">Running Deconst</a><ul>\n<li class=\"toctree-l2\"><a class=\"reference internal\" href=\"running/architecture/\">Architecture</a></li>\n<li class=\"toctree-l2\"><a class=\"reference internal\" href=\"running/liftoff/\">Liftoff!</a></li>\n</ul>\n</li>\n</ul>\n</div>\n</div>\n<div class=\"section\" id=\"indices-and-tables\">\n<h1>Indices and tables<a class=\"headerlink\" href=\"#indices-and-tables\" title=\"Permalink to this headline\">\u00b6</a></h1>\n<ul class=\"simple\">\n<li><a class=\"reference internal\" href=\"genindex/\"><em>Index</em></a></li>\n<li><a class=\"reference internal\" href=\"py-modindex/\"><em>Module Index</em></a></li>\n<li><a class=\"reference internal\" href=\"search/\"><em>Search Page</em></a></li>\n</ul>\n</div>\n", "toc": "<ul>\n<li><a class=\"reference internal\" href=\"#\">Deconst</a></li>\n<li><a class=\"reference internal\" href=\"#indices-and-tables\">Indices and tables</a></li>\n</ul>\n", "current_page_name": "index", "sidebars": null, "next": {"link": "writing-docs/", "title": "Writing Documentation for Deconst"}, "hello": "Sup", "rellinks": [["genindex", "General Index", "I", "index"], ["writing-docs/index", "Writing Documentation for Deconst", "N", "next"]], "metatags": "", "meta": {}};
  res.send(JSON.stringify(j));
});

var server = app.listen(8082);
