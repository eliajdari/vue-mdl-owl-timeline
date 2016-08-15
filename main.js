var mdl = require('material-design-lite');
var Vue = require('vue');
var $ = require('jquery-browserify');
var moment = require('moment');
var owlCarousel = require('owlcarousel/owl-carousel/owl.carousel.js');
var mousewheel = require('jquery-mousewheel');

var posts = [
  {
    id: 0,
    title: 'Old church rock',
    description: 'Old church next to a rocky wall',
    src: 'url("images/posts/Old-church-rock875.jpg") center / cover',
    timestamp: moment([2007, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2007, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 123,
    comments: 423,
  },
  {
    id: 1,
    title: 'Old mansion',
    description: 'Old abandoned mansion',
    src: 'url("images/posts/Old-mansion1889.jpg") center / cover',
    timestamp: moment([2008, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2008, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 12,
    comments: 824,
  },
  {
    id: 2,
    title: 'London escalator',
    description: 'Wide-angle shot of an escalator on the London Underground rail network. This image was captured at London Bridge station with a Canon 6D DSLR.',
    src: 'url("images/posts/london-escalator.jpg") center / cover',
    timestamp: moment([2009, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2009, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 25,
    comments: 534,
  },
  {
    id: 3,
    title: 'Old church rock',
    description: 'Old church next to a rocky wall',
    src: 'url("images/posts/Old-church-rock875.jpg") center / cover',
    timestamp: moment([2010, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2010, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 434,
    comments: 213,
  },
  {
    id: 4,
    title: 'Old mansion',
    description: 'Old abandoned mansion',
    src: 'url("images/posts/Old-mansion1889.jpg") center / cover',
    timestamp: moment([2011, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2011, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 223,
    comments: 720,
  },
  {
    id: 5,
    title: 'London escalator',
    description: 'Wide-angle shot of an escalator on the London Underground rail network. This image was captured at London Bridge station with a Canon 6D DSLR.',
    src: 'url("images/posts/london-escalator.jpg") center / cover',
    timestamp: moment([2012, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2012, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 230,
    comments: 120,
  },
  {
    id: 6,
    title: 'Old church rock',
    description: 'Old church next to a rocky wall',
    src: 'url("images/posts/Old-church-rock875.jpg") center / cover',
    timestamp: moment([2013, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2013, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 612,
    comments: 42,
  },
  {
    id: 7,
    title: 'Old mansion',
    description: 'Old abandoned mansion',
    src: 'url("images/posts/Old-mansion1889.jpg") center / cover',
    timestamp: moment([2015, 8, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2015, 8, 14, 14, 40, 16, 154]).fromNow(),
    likes: 1,
    comments: 124,
  },
  {
    id: 8,
    title: 'London escalator',
    description: 'Wide-angle shot of an escalator on the London Underground rail network. This image was captured at London Bridge station with a Canon 6D DSLR.',
    src: 'url("images/posts/london-escalator.jpg") center / cover',
    timestamp: moment([2016, 5, 14, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2016, 5, 14, 14, 40, 16, 154]).fromNow(),
    likes: 123,
    comments: 24,
  },
  {
    id: 9,
    title: 'Old church rock',
    description: 'Old church next to a rocky wall',
    src: 'url("images/posts/Old-church-rock875.jpg") center / cover',
    timestamp: moment([2016, 7, 15, 14, 40, 16, 154]).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    timeago: moment([2016, 7, 15, 14, 40, 16, 154]).fromNow(),
    likes: 44,
    comments: 10,
  },
];

$(document).ready(function() {
  
var current_card = new Vue({
  el: '#current-card',
  data: {
    posts: posts,
  },
});

var card_carousel = new Vue({
  el: '#card-carousel',
  data: {
    posts : posts,
  },
});

var first_moment = new Vue({
  el: '#first-moment',
  data: {
    timestamp: posts[0].timestamp,
  },
});

var last_moment = new Vue({
  el: '#last-moment',
  data: {
    timestamp: posts[(posts.length - 1)].timestamp,
  },
});

var owl_currentcard = $('#current-card');
var owl_timeline = $('#card-carousel');


owl_currentcard.owlCarousel({
  rewindNav:false,
  singleItem : true,
  slideSpeed : 1000,
  navigation: false,
  pagination: false,
  afterAction : syncPosition,
  responsiveRefreshRate : 200,
});

owl_timeline.owlCarousel({
  rewindNav:false,
  items : 5,
  itemsDesktop      : [1199,5],
  itemsDesktopSmall : [979,3],
  itemsTablet       : [768,2],
  itemsMobile       : [479,1],
  pagination:false,
  responsiveRefreshRate : 100,
  afterInit : function(el){
    el.find(".owl-item").eq(0).addClass("synced");
  }
});
  
  function syncPosition(el){
    var current = this.currentItem;
    owl_timeline
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if(owl_timeline.data("owlCarousel") !== undefined){
      center(current)
      
      // fixes slider visual bug
      $("#slider-timeline").prop("value", current);
      if (current !== 0) $("#slider-timeline").removeClass("is-lowest-value")
        else $("#slider-timeline").addClass("is-lowest-value");
      $("#slider-timeline").addClass("is-upgraded");
      $("#slider-timeline + .mdl-slider__background-flex .mdl-slider__background-lower").css("flex", 
      (current / parseInt(posts.length-1)) + " 1 0%");
      $("#slider-timeline + .mdl-slider__background-flex .mdl-slider__background-upper").css("flex", 
      ((parseInt(posts.length-1) - current) / parseInt(posts.length-1)) + " 1 0%");
      
    }
  }
 
  owl_timeline.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    owl_currentcard.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = owl_timeline.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        owl_timeline.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        owl_timeline.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      owl_timeline.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      owl_timeline.trigger("owl.goTo", num-1)
    }
    
  }
 
 
owl_timeline.on('mousewheel', '.owl-item', function (e) {
    if (e.deltaY<0 || e.originalEvent.deltaY>0) {
        owl_timeline.trigger('owl.next');
    } else {
        owl_timeline.trigger('owl.prev');
    }
    e.preventDefault();
});

owl_currentcard.on('mousewheel', '.owl-item', function (e) {
    if (e.deltaY<0 || e.originalEvent.deltaY>0) {
        owl_currentcard.trigger('owl.next');
    } else {
        owl_currentcard.trigger('owl.prev');
    }
    e.preventDefault();
});

$("#slider-timeline").prop("min", "0");
$("#slider-timeline").prop("max", posts.length-1);
$("#slider-timeline").prop("value", 0);

$(document).on('input change', '#slider-timeline', function() {
  var sliderVal = parseInt($("#slider-timeline").val());
  owl_currentcard.trigger("owl.goTo", sliderVal);
});

$(".current_card_info" )
  .mouseenter(function() {
    $(this)
      .css("background", 'rgba(	69, 90, 100, 0.7)')
      .addClass("mdl-shadow--2dp")
  })
  .mouseleave(function() {
    $(this)
      .css("background", 'none')
      .removeClass("mdl-shadow--2dp")
});

});