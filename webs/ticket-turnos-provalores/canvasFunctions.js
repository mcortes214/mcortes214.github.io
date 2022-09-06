//Functions

const randomLetters = (n) => {
    let str = '';
    for(let i=0; i < n; i++){
        str += String.fromCharCode(65 + Math.floor(Math.random() * 25));
    }
    return str;
}

const loadImageAsset = (ctx, url) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.addEventListener('load', () => {
            ctx.drawImage(img, 0, 0);
            resolve();
        }, false);
        img.src = url;
    });
}

const renderTicketBackground = (ctx, urls) => {
    return new Promise((resolve) => {
        let imageLoadedPromises = [];
        for (let url of urls){
            imageLoadedPromises.push(loadImageAsset(ctx, url));
        }
        Promise.all(imageLoadedPromises).then(() => {
            console.log('all images loaded. Resolving');
            resolve();
        });
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
    console.log('rendering data');

    //Dummy data (comment afterwards, don't delete)
    // ticketData = {
    //     firstName: ['AMALIO PÉREZ SALIERI', 'DEL VIRREY'],
    //     secondName: ['SUSANA GIMÉNEZ', 'GARCÍA LORCA'],
    //     businessName: 'AMALIO Y SUSANA MARISCOS UNIDOS LTD.',
    //     appointmentDate: '1/9/1922',
    //     appointmentTime: '23:31',
    //     expirationTime: '23:33',
    //     ticketCode1: 'GBZ-103',
    //     ticketCode2: 'GKA-491',
    //     ticketCode3: 'UVX-915',
    // };

    console.log('renderTicketData', ticketData);
    //Global
    ctx.fillStyle = '#484040';

    //Calcular espacio disponible para nombres

    ctx.textAlign = 'center';

    ctx.font = 'normal 55px myriad-pro';
    const measurement = ctx.measureText('HEIGHT SAMPLE');
    const nameLineHeight = 20 + measurement.actualBoundingBoxAscent + measurement.actualBoundingBoxDescent;
    const spaceBetweenNames = 30;

    nameBoxTopEdge = 375;
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

    //Sección - Empresa

    ctx.font = 'normal 38px myriad-pro';
    ctx.fillText(ticketData.businessName, 500, 655);

    //Sección - Data
    let lineHeaderWidth;
    ctx.textAlign = 'left';

        //Fecha
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Fecha del turno: ', 137, 765+80);
        lineHeaderWidth = ctx.measureText('Fecha del turno: ').width;
        ctx.font = 'normal 40px myriad-pro';
        ctx.fillText(ticketData.appointmentDate, 137 + lineHeaderWidth, 845);

        //Horario
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Horario del turno: ', 137, 937);
        lineHeaderWidth = ctx.measureText('Horario del turno: ').width;
        ctx.font = 'normal 40px myriad-pro';
        ctx.fillText(ticketData.appointmentTime, 137 + lineHeaderWidth, 937);

        //Vencimiento
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Válido hasta: ', 137, 1029);
        lineHeaderWidth = ctx.measureText('Válido hasta: ').width;
        ctx.font = 'normal 40px myriad-pro';
        ctx.fillText(ticketData.expirationTime, 137 + lineHeaderWidth, 1029);

    //Código de turno
    ctx.textAlign = 'center';

    ctx.font = 'bold 40px myriad-pro';
    ctx.fillText('Estimado Cliente, su código personal es:', 500, 1280 - 80);

    ctx.font = 'normal 65px myriad-pro';
    ctx.fillText(`- ${ticketData.ticketCode1} -`, 500, 1280);

    if(ticketData.ticketCode2){
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Su código de acompañante es:', 500, 1280 + 175 - 80);
    
        ctx.font = 'normal 65px myriad-pro';
        ctx.fillText(`- ${ticketData.ticketCode2} -`, 500, 1280 + 175);
    }

    if(ticketData.ticketCode3){
        ctx.font = 'bold 40px myriad-pro';
        ctx.fillText('Su código de empresa es:', 500, 1280 + 175*2 - 80);
    
        ctx.font = 'normal 65px myriad-pro';
        ctx.fillText(`- ${ticketData.ticketCode3} -`, 500, 1280 + 175*2);
    }

}

const renderTicket = (el, ticketData) => {
    console.log('renderTicket', ticketData)
    const ctx = el.getContext('2d');
    console.log(ctx);

    renderTicketBackground(ctx,['base-ticket.png'])
    .then(loadTicketFonts) //DEBUG
    .then(() => {renderTicketData(ctx, ticketData)});
}

// const renderName = (canvas, text, maxWidth) => {
//     //Esta función es para que el nombre se muestre en varias líneas si es largo
// }