import photoCardComponent from "./photoCardComponent.js";


const photolioComponent = {
    render(photos) {
        const col1 = [];
        const col2 = [];
        const col3 = [];
        for(let i = 0; i < photos.length; i++) {
            if(i < 5) {
                col1.push(photoCardComponent.render(photos[i]));
            } else if(i < 10) {
                col2.push(photoCardComponent.render(photos[i]));
            } else if(i < 15) {
                col3.push(photoCardComponent.render(photos[i]));
            }
        }

        return `
            <div class="row">${col1.join('')}</div>
            <div class="row">${col2.join('')}</div>
            <div class="row">${col3.join('')}</div>
        `
    }
}

export default photolioComponent;