class ScreenManager {
    constructor(options){
        this.screens = options.screens; //Array of HTML Elements
        this.activeScreen = options.initialScreen; //String
        this.loadScreen(this.activeScreen);
    }

    loadScreen(newScreenName){
        const oldScreen = this.screens[this.activeScreen];
        const newScreen = this.screens[newScreenName];
        console.log('--- new screen load ---');
        console.log('old: ', oldScreen);
        console.log('new: ', newScreen);

            if(newScreen != oldScreen){
                console.log('diff screen');
                // oldScreen.addEventListener('transitionend', function transition(e){
                //     alert('fin de transición');
                //     oldScreen.removeEventListener('transitionend', transition);
                    newScreen.classList.add('screen--visible');
                // });
                oldScreen.classList.remove('screen--visible');

            }
            else {
                console.log('same screen');
                newScreen.classList.add('screen--visible');
            }
            // this.activeScreen = newScreenName;
    }
}