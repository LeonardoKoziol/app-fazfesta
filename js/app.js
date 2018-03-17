// Dom7
var $$ = Dom7;
$$('logoff').hide();
$$('.login-screen-open').show();

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SignUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

      
  
  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);


    firebase
    .auth()
    .createUserWithEmailAndPassword(username,password) //Promisses
    .then( function () {
      app.dialog.alert('Bem Vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem Vindo: '+ username);

    })
    .catch( function(error){
      console.error(error.code)
      console.error(error.message)
      app.dialog.alert('Falha ao cadastrar, se fudeu');
      // this.$$('.toolbar-inner').innerHtml = 'Bem Vindo:' + username;
    })

    app.loginScreen.close('#my-login-screen');



});
