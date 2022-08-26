// Form component class

class Form {
    constructor(formElement, onSubmit){
        if (!formElement) throw 'no element defined for form';
        this.formElement = formElement;
        this.states = ['awaiting', 'processing', 'ready'];
        this.onSubmit = onSubmit;

        this.formElement.addEventListener('submit', (e) => {
            this.onSubmit(e);
        })
    }

    setState(newState){
        for(let state of states){
            if ( this.formElement.classList.includes(`form--${state}`) ){
                this.formElement.classList.remove(`form--${state}`);
            }
        }
        this.formElement.classList.add(`form--${newState}`);
    }

    collectData(){
        const inputCollection = this.formElement.querySelectorAll('input:not([type="submit"])');
        const inputElements = [...inputCollection];
        const data = inputElements.reduce((acc, input) => {
            acc[input.id] = input.value;
            return acc;
        }, {})
        return data;
    }

}