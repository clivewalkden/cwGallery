/*! CW Gallery - v0.3.0 - 2014-01-31
* http://clivewalkden.co.uk/code/cw_gallery/
* Copyright (c) 2014 Clive Walkden; Licensed MIT */
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

                var largeimg = $(self).attr('href');

                $('.'+settings.img_container).children('img').fadeTo(300,0.01,function(){
                    // Create temp image for the SOLE purpose of grabbing the image size
                    var img = $('<img/>')
                        .attr('src',largeimg)
                        .load(function(){
                            var imgHeight = this.height;
                            //var imgWidth = this.width;

                            // Check if the origHeight is different
                            if(imgHeight !== origHeight && settings.animate_height === true){
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
  };

})(jQuery);
