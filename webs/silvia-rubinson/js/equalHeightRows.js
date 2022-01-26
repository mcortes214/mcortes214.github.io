class EqualHeightRows {
    
    constructor(rowClass, spacing){
        //Wait until all images finished loading before processing them
        Promise.all(Array.from(document.images)
            .filter(img => !img.complete)
            .map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))
        )
        .then(() => {
            this.resizeImages();
            console.log('images have been resized');
        });
        this.heightEqualizingRows = document.querySelectorAll(rowClass);
        this.spacing = spacing;


        window.addEventListener('resize', this.resizeImages);
    }

    resizeImages(){
        for (let row of this.heightEqualizingRows){
            row.style.display = 'flex';
            const children = row.children;
            const images = row.querySelectorAll('img');

            //equalize heights and measure relative widths
            let sumOfWidths = 0;
            for(let image of images){
                    image.style.height = '1000px';
                    sumOfWidths += image.clientWidth;
            }

            //calculate paddings
            let paddings = 20*(images.length - 1);
            console.log(paddings);
            let shrinkingRatio = (row.clientWidth - paddings) / sumOfWidths;
            
            //re-scale images
            for(let image of images){
                image.style.height = image.clientHeight * shrinkingRatio + 'px';
                //width re-scales automatically
            }

            //Apply paddings
            let isFirstItem = true;
            for(let child of children){
                if( isFirstItem ) { isFirstItem = false ; continue }
                child.style.paddingLeft = this.spacing ? this.spacing : '20px';
            }
        }
    }
}