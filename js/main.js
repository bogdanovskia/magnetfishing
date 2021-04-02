var scrWidth = $(window).width();

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    $('.back-to-top').addClass('shown');
  } else {
    $('.back-to-top').removeClass('shown');
  }
}

window.onscroll = function() {scrollFunction()}

$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top - 20;

  $("body, html").animate({
    scrollTop: position
  }, 700);
});

$('.navbar a').click(function () {
  if (scrWidth < 992) {
    $('.navbar-toggler').click();
  }
});

$(document).ready(function () {

  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 14,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(-33.7911713, 151.1976931),

      // How you would like to style the map. 
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ff0200"
            },
            {
              "saturation": 7
            },
            {
              "lightness": 19
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "saturation": "-3"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#748ca3"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ff0200"
            },
            {
              "saturation": -100
            },
            {
              "lightness": 100
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ff0200"
            },
            {
              "saturation": "23"
            },
            {
              "lightness": "20"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.school",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffdbda"
            },
            {
              "saturation": "0"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#ff0200"
            },
            {
              "saturation": "100"
            },
            {
              "lightness": 31
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#f39247"
            },
            {
              "saturation": "0"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
            {
              "hue": "#008eff"
            },
            {
              "saturation": -93
            },
            {
              "lightness": 31
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#ffe5e5"
            },
            {
              "saturation": "0"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
            {
              "hue": "#bbc0c4"
            },
            {
              "saturation": -93
            },
            {
              "lightness": -2
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "hue": "#ff0200"
            },
            {
              "saturation": -90
            },
            {
              "lightness": -8
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#e9ebed"
            },
            {
              "saturation": 10
            },
            {
              "lightness": 69
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#e9ebed"
            },
            {
              "saturation": -78
            },
            {
              "lightness": 67
            },
            {
              "visibility": "simplified"
            }
          ]
        }
      ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-33.7911713, 151.1976931),
      map: map,
      title: 'Snazzy!'
    });
  }

});