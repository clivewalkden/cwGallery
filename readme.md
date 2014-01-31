# CW Gallery

A Simple gallery script without the extra bloat.

[![Build Status](https://travis-ci.org/clivewalkden/cwHideReveal.png?branch=develop)](https://travis-ci.org/clivewalkden/cwHideReveal)
[![Bitdeli Badge](https://d2weczhvl82c0.cloudfront.net/clivewalkden/cwgallery/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/clivewalkden/cwGallery/master/dist/cw_gallery.min.js
[max]: https://raw.github.com/clivewalkden/cwGallery/master/dist/cw_gallery.js

In your web page:

```html
<div id="cwgallery">
    <div class="cw_image">
        <img src="http://farm9.staticflickr.com/8424/7720259766_ef2fc0c2bf.jpg">
    </div>
    <ul class="cw_thumbs">
        <li><a href="http://farm9.staticflickr.com/8424/7720259766_ef2fc0c2bf.jpg" class="cw_active"><img src="http://farm9.staticflickr.com/8424/7720259766_ef2fc0c2bf_q.jpg"></a></li>
        <li><a href="http://farm9.staticflickr.com/8440/7882885212_b2822e751e.jpg"><img src="http://farm9.staticflickr.com/8440/7882885212_b2822e751e_q.jpg"></a></li>
        <li class="last"><a href="http://farm8.staticflickr.com/7130/7882880940_56c68d4198.jpg"><img src="http://farm8.staticflickr.com/7130/7882880940_56c68d4198_q.jpg"></a></li>
    </ul>
</div>

<script src="libs/jquery/jquery.js"></script>
<script src="dist/cw_gallery.min.js"></script>
<script>
jQuery(function($) {
	$('#cwgallery').cwGallery(); // "awesome"
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
[CW Gallery Homepage][http://clivewalkden.co.uk/code/cw_hide_reveal/]

## Release History

#### v0.3.0 - 31st January 2014 ####
* Linted code. Setup project correctly.

#### v0.1.0 - 9th November 2012 ####
* Created the first version of the script based on previous created scripts.
