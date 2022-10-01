const photoCardComponent = {
    render(photoObj) {
        return `
            <div class="photo" title="${photoObj.alt}">
                <img src="${photoObj.src.medium}" alt="${photoObj.alt}">
                <div class="img-info">
                    <div class="like-div">
                        <button class="like buttoning" title="Like"><i class="fas fa-solid fa-heart like"></i></button>
                    </div>
                    <div class="download">
                        <p><a href="${photoObj.photographer_url}" target="blank" title="Photograph's profile">${photoObj.photographer}</a></p>
                        <a download href="${photoObj.src.original}" class="buttoning" title="Download" target="blank">
                            <i class="fas fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        `
    }
}

export default photoCardComponent;

