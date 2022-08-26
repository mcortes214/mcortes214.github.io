//Functions

const randomLetters = (n) => {
    let str = '';
    for(let i=0; i < n; i++){
        str += String.fromCharCode(65 + Math.floor(Math.random() * 25));
    }
    return str;
}

const renderTicketBackground = (ctx) => {
    return new Promise ((resolve) => {
        const img = new Image();
        img.addEventListener('load', () => {
            ctx.drawImage(img, 0, 0);
            resolve();
        }, false);
        img.src = 'base-ticket.png';
    });
}

const loadTicketFonts = () => {
    return new Promise((resolve) => {
        const fontBold = new FontFace('myriad-pro', 'url(MyriadPro-Semibold.otf)', {
            weight: 'bold'
        });
        const fontRegular = new FontFace('myriad-pro', 'url(MyriadPro-Regular.otf)', {
            weight: 'normal'
        });
        Promise.all([fontBold.load(), fontRegular.load()]).then(() => {
            resolve();
        })
        .catch(reason => {
            console.log(reason)
          });
    });
}

const renderTicketData = (ctx, ticketData) => {
    console.log('renderTicketData', ticketData);
    //Global
    ctx.fillStyle = '#484040';

    //Calcular espacio disponible para nombres

    ctx.textAlign = 'center';

    ctx.font = 'normal 70px myriad-pro';
    const measurement = ctx.measureText('HEIGHT SAMPLE');
    const nameLineHeight = 20 + measurement.actualBoundingBoxAscent + measurement.actualBoundingBoxDescent;
    const spaceBetweenNames = 30;

    nameBoxTopEdge = 400;
    nameBoxHeight = nameLineHeight * 4 + spaceBetweenNames;

    //Calcular y renderizar líneas de nombres

    let namesActualHeight = (ticketData.secondName.length > 0) ?
        nameLineHeight * ticketData.firstName.length + nameLineHeight * ticketData.secondName.length + spaceBetweenNames :
        nameLineHeight * ticketData.firstName.length;

    let pointerOffsetY = nameBoxTopEdge + nameBoxHeight / 2 - namesActualHeight / 2

    for( let i=0; i < ticketData.firstName.length; i++ ) {
        ctx.fillText(ticketData.firstName[i], 500, pointerOffsetY);
        pointerOffsetY += nameLineHeight;
    }
    if(ticketData.secondName.length > 0){
        pointerOffsetY += spaceBetweenNames;
        for( let i=0; i < ticketData.secondName.length; i++ ) {
            ctx.fillText(ticketData.secondName[i], 500, pointerOffsetY);
            pointerOffsetY += nameLineHeight;
        }
    }

    //Sección - Data
    let lineHeaderWidth;
    ctx.textAlign = 'left';

        //Fecha
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Fecha del turno: ', 97, 765);
        lineHeaderWidth = ctx.measureText('Fecha del turno: ').width;
        ctx.font = 'normal 40px myriad-pro';
        ctx.fillText(ticketData.appointmentDate, 97 + lineHeaderWidth, 765);

        //Horario
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Horario del turno: ', 97, 872);
        lineHeaderWidth = ctx.measureText('Horario del turno: ').width;
        ctx.font = 'normal 40px myriad-pro';
        ctx.fillText(ticketData.appointmentTime, 97 + lineHeaderWidth, 872);

        //Vencimiento
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Válido hasta: ', 97, 979);
        lineHeaderWidth = ctx.measureText('Válido hasta: ').width;
        ctx.font = 'normal 40px myriad-pro';
        ctx.fillText(ticketData.expirationTime, 97 + lineHeaderWidth, 979);

    //Código de turno
    ctx.font = 'normal 110px myriad-pro';
    ctx.textAlign = 'center';
    ctx.fillText(`- ${ticketData.ticketCode} -`, 500, 1150);

}

const renderTicket = (el, ticketData) => {
    console.log('renderTicket', ticketData)
    const ctx = el.getContext('2d');

    renderTicketBackground(ctx)
    .then(loadTicketFonts)
    .then(() => {renderTicketData(ctx, ticketData)});

}

const renderName = (canvas, text, maxWidth) => {
    //Esta función es para que el nombre se muestre en varias líneas si es largo
}