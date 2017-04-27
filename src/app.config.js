/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Filename: app.config.js
Description:
    - Router config
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
router.$inject = ['$urlRouterProvider', '$locationProvider'];

function router($urlRouterProvider, $locationProvider){
	//HTML5 mode = true is to remove the '#' from URL
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/home');
}

export default router;