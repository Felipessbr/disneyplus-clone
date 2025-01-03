const BannerSliderItem = (props) => {
    return ` 
        <div class="banner-slide__item" data-banner="item" data-id="${props.id}">
                <a href="# ${props.slug}" class="banner-slide__link">
                    <img class="banner-slide__cover" src="${props.imageCover}"
                        alt="${props.title}" />
                    <img class="banner-slide__title" src="${props.imageTitle}"
                    alt="${props.title}" data-banner="img-title"/>
                </a>
        </div>
    `
};

export default BannerSliderItem
