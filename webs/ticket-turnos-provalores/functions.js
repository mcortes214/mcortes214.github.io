const downloadCanvas = (el) => {
    const link = document.createElement('a');
    link.download = 'Turno Provalores.png';
    link.href = el.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
    link.delete;
}

//TODO: hacer una validación de verdad
const validateInput = () => true;


const splitSentence = (str, maxCharsPerLine) => {

    // Split up the string and use `reduce`
    // to iterate over it
    const temp = str.split(' ').reduce((acc, c) => {
    
      // Get the number of nested arrays
      const currIndex = acc.length - 1;
    
      // Join up the last array and get its length
      const currLen = acc[currIndex].join(' ').length;
    
      // If the length of that content and the new word
      // in the iteration exceeds 20 chars push the new
      // word to a new array
      if (currLen + c.length > maxCharsPerLine) {
        acc.push([c]);
    
      // otherwise add it to the existing array
      } else {
        acc[currIndex].push(c);
      }
    
      return acc;
    
    }, [[]]);
    
    // Join up all the nested arrays
    const out = temp.map(arr => arr.join(' '));
    
    return out;
};

const processFormData = (formData) => {
    let ticketData = {};
    //Datos simples
    ticketData.appointmentDate = formData['input-date'].split('-').reverse().join('/');
    ticketData.appointmentTime = formData['input-time'];
    ticketData.expirationTime = formData['input-max-time'];
    ticketData.ticketCode1 = randomLetters(3) + ' ' + formData['input-ticket-number-1'];
    ticketData.ticketCode2 = randomLetters(3) + ' ' + formData['input-ticket-number-2'];
    ticketData.ticketCode3 = randomLetters(3) + ' ' + formData['input-ticket-number-3'];

    //Nombre
    ticketData.firstName = splitSentence(formData['input-name-1'].toUpperCase(), 20);
    ticketData.secondName = splitSentence(formData['input-name-2'].toUpperCase(), 20);
    ticketData.businessName = formData['business-name'].toUpperCase();
    return ticketData;
};

// Startup

const screenManager = new ScreenManager({
    screens: {
        'dataForm': document.querySelector('.data-form-screen'),
        'ticketPreview': document.querySelector('.ticket-preview-screen'),
    },
    initialScreen: 'dataForm'
});

const dataForm = new Form(document.querySelector('#data-form'), (e) => {
    e.preventDefault();
    const data = dataForm.collectData();
    let hasValidData = validateInput(data);
    if(hasValidData){
        let ticketData = processFormData(data);
        console.log('form submit callback: ', ticketData)
        renderTicket(document.querySelector('canvas'), ticketData);
        screenManager.loadScreen('ticketPreview');
        //Change screen state
    }
});

//Listeners

document.querySelector('#descargar-ticket').addEventListener('click', () => {
    downloadCanvas(document.querySelector('canvas'));
});

document.querySelector('#nuevo-ticket').addEventListener('click', () => {
    window.location.reload();
});

