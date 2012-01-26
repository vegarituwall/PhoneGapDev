


/** local functions **/

function _log ( msg )
{
    console.log (msg);
    debug.log(msg);
}



var _sbs = _sbs || {
    
    'version': '0.2.0',
    'host': 'http://localhost',
    'port': 8080,
    'group_id': '4704808A-80A9-6DD3-341F-E18A3F00563A',
    'group_name': 'Socketbug Demo Group',
    'application_id': '5E3E8FB6-86CF-6BF8-B4C4-6B2497BC388C',
    'application_name': 'Socketbug Demo Application',
    'debug_level': 4,
    'helpers': [],
    'libraries': [],
    'plugins': [],
    'connect_callback': function() { _log('connected to socketbug.'); },
    'disconnect_callback': null,
    'message_callback': null
    
};










$("document").ready(function() {
                    
                    
                    
                    $("#rwMyInfo").click(function() {
                                         var fbs = FB.getSession();
                                         alert(JSON.stringify(fbs.uid));
                                         });
                    });


// Cross Domain Support
// PhoneGap Apps start from file:// url on URI requests.
//
$( '#page1' ).live( 'pageinit',function(event) {
                   
                   });


$( '#page5' ).live( 'pageinit',function(event) {
                   
                   
                   $("#post_text_but").click(function() {
                                             
                                             
                                             tile_sample_data.title   = $("#post_title").val()
                                             tile_sample_data.content = $("#post_content").val();
                                             
                                             $.ajax ( {
                                                     url: 'http://rituwall-development.herokuapp.com/walls/4f077ace167d4f0100000002/tiles',
                                                     type: 'POST',
                                                     data: { data: tile_sample_data, format: "json" },
                                                     dataType: 'json',
                                                     crossDomain: true,
                                                     beforeSend: function(xhr) {
                                                     //_log('Before Send Encode Authentication: '+Base64.encode("RW" + ":" + "rituwall"));
                                                     //xhr.setRequestHeader("Authorization", "Basic " + Base64.encode("RW" + ":" + "rituwall"));
                                                     },
                                                     success: function (data) {
                                                     alert('Posted Successful!');
                                                     _log('Success!!!');
                                                     _log(JSON.stringify(data));
                                                     $("#post_title").val('')
                                                     $("#post_content").val('');
                                                     $("#posted_text").html(JSON.stringify(data));
                                                     },
                                                     error: function(data) {
                                                     _log(JSON.stringify(data));
                                                     $("#posted_text").html(JSON.stringify(data));
                                                     }
                                                     });
                                             });
                   });








/** RITUWALL CODE **/
/** RITUWALL CODE **/
/** RITUWALL CODE **/
/** RITUWALL CODE **/
/** RITUWALL CODE **/


/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/

function preventBehavior(e) 
{ 
    e.preventDefault(); 
};
//document.addEventListener("touchmove", preventBehavior, false);


var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

// Wait for PhoneGap to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// PhoneGap is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
    // Uncomment to view the base64 encoded image data
    // console.log(imageData);
    
    // Get image handle
    //
    var smallImage = document.getElementById('smallImage');
    
    // Unhide image elements
    //
    smallImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI 
    // console.log(imageURI);
    
    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');
    
    // Unhide image elements
    //
    largeImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
    
    alert(imageURI);
    
}

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}

// Called if something bad happens.
// 
function onFail(message) {
    alert('Failed because: ' + message);
}

/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/
/** PHONEGAP SAMPLE FOTO APP **/





/** GITHUB URL: https://github.com/davejohnson/phonegap-plugin-facebook-connect **/
/** **/
/** PHONEGAP FACEBOOK PLUGIN APP **/
/** PHONEGAP FACEBOOK PLUGIN APP **/            
/** PHONEGAP FACEBOOK PLUGIN APP **/
/** PHONEGAP FACEBOOK PLUGIN APP **/
/** PHONEGAP FACEBOOK PLUGIN APP **/





if (typeof PhoneGap == 'undefined') alert('PhoneGap variable does not exist. Check that you have included phonegap.js correctly');
if (typeof PG == 'undefined') alert('PG variable does not exist. Check that you have included pg-plugin-fb-connect.js correctly');
if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');

FB.Event.subscribe('auth.login', function(response) {
                   //alert('auth.login event');
                   //alert(JSON.stringify(response));
                   
                   });

FB.Event.subscribe('auth.logout', function(response) {
                   //alert('auth.logout event');
                   });

FB.Event.subscribe('auth.sessionChange', function(response) {
                   //alert('auth.sessionChange event');
                   });

FB.Event.subscribe('auth.statusChange', function(response) {
                   //alert('auth.statusChange event');
                   });

function getSession() {
    //alert(JSON.stringify(FB.getSession()));
}

function getLoginStatus() {
    FB.getLoginStatus(function(response) {
                      if (response.session) {
                      alert('logged in');
                      } else {
                      alert('not logged in');
                      }
                      });
}

function me() {
    $("#facebook-name").html('Used not logged in.');
    $("#facebook-avatar").fadeOut("fast");
    
    FB.api('/me', function(response) {
           if (response.error) {
           alert(JSON.stringify(response.error));
           } else {
           var data = document.getElementById('facebook-log');
           $("#session-data").html(JSON.stringify(response, null, '<br>'));
           $("#facebook-name").html(response.name);
           //alert("http://graph.facebook.com/"+response.id+"/picture");
           $("#facebook-avatar").fadeIn("fast");
           $("#facebook-avatar").attr("src", "http://graph.facebook.com/"+response.id+"/picture");
           /*
            response.data.forEach(function(item) {
            var d = document.createElement('div');
            d.innerHTML = item.name;
            data.appendChild(d);
            });
            */
           }
           });
    
}

function logout() {
    
    FB.logout(function(response) {
              alert('logged out');
              });
    
    
}

function login() {
    FB.login(
             function(response) {
             if (response.session) {
             //alert('logged in');
             me();
             } else {
             alert('not logged in');
             }
             },
             { perms: "email,offline_access" }
             );
}

document.addEventListener('deviceready', function() {
                          try {
                          //alert('Device is ready! Make sure you set your app_id below this alert.');
                          FB.init({ appId: "180197132006312", nativeInterface: PG.FB });
                          //document.getElementById('data').innerHTML = "";
                          } catch (e) {
                          alert(e);
                          }
                          }, false);

/** PHONEGAP FACEBOOK PLUGIN APP **/
/** PHONEGAP FACEBOOK PLUGIN APP **/
/** PHONEGAP FACEBOOK PLUGIN APP **/            
/** PHONEGAP FACEBOOK PLUGIN APP **/
/** PHONEGAP FACEBOOK PLUGIN APP **/




