/*!
 * cwGallery - for jQuery 1.7+
 * http://www.cwenterprises.co.uk
 *
 * Copyright 2012, Clive Walkden (http://www.cwenterprises.co.uk)
 *
 * @package cwGallery
 * @author Clive Walkden (http://www.cwenterprises.co.uk)
 * @version 0.1
 * @copyright Copyright (c) 2012 SOZO Design Ltd (http://www.cwenterprises.co.uk)
 * @date: 29-10-2012
 */

(function($){
	$.fn.cwGallery = function(custom) {

		// Default plugin settings
		var defaults = {
            thumb_container : 'cw_thumbs',
			img_container   : 'cw_image',
            active_class    : 'cw_active',
			animate_height  : false
		};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);

        $('.'+settings.thumb_container+' a').on({
            click : function(e) {
                e.preventDefault();

                $('.'+settings.thumb_container+' a').removeClass(settings.active_class);
                $(this).addClass(settings.active_class);

                var main_img = $('.'+settings.img_container).children('img');
                var origWidth = main_img.width();
                var origHeight = main_img.height();

                var self = this;

                var largeimg = $(this).attr('href');

                $('.'+settings.img_container).children('img').fadeTo(300,0.01,function(){
                    // Create temp image for the SOLE purpose of grabbing the image size
                    var img = $('<img/>')
                        .attr('src',largeimg)
                        .load(function(){
                            var imgHeight = this.height;
                            var imgWidth = this.width;

                            // Check if the origHeight is different
                            if(imgHeight != origHeight && settings.animate_height == true){
                                // Resize
                                $('.'+settings.img_container).children('img').animate({
                                    'height':imgHeight,
                                    'width' :origWidth
                                },700,function(){
                                    // Fade in new image
                                    $('.'+settings.img_container).children('img').attr({src: largeimg});
                                    $('.'+settings.img_container).children('img').fadeTo(300,1);
                                });
                            }else{
                                // Fade in new image
                                $('.'+settings.img_container).children('img').attr({src: largeimg});
                                $('.'+settings.img_container).children('img').fadeTo(300,1);
                            }
                            origHeight = undefined;

                        });
                });
            }
        });
	}

})(jQuery);
