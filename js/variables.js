/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "images/foto.jpg",
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Modulo correttamente inviato! :)";
var contact_form_error_msg = "Errore nell'invio del messaggio :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "GIORNI";                            //Countdown "Days" label
var c_hours = "ORE";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEC.";                         //Countdown "Seconds" label
var countdown_end_msg = "Evento iniziato!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 11;                      //The initial zoom when Google map loads
var map_initial_latitude = 41.56246;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = 14.65769;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Ricevimento",
        "latitude": 41.51112,
        "longitude": 14.82385,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Sala Ricevimenti Ciocca <br> Str. Interpoderale Parruccia, 86016 Riccia (CB)"
    },
    {
        "title": "Cerimonia",
        "latitude": 41.56246,
        "longitude": 14.65769,
        "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Chiesa di San Bartolomeo <br> Salita S. Bartolomeo 26, 86100 Campobasso"
    }
];
