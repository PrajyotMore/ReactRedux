import React from 'react'

const Home = () => {
    return (
        <div>
        <div className="add-to-cart">
                <img src="https://www.nicepng.com/png/full/231-2317666_cart-icon-moving-shopping-cart-icon.png"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" />
                </div>
                <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
                </div>
                <div className="btn-wrapper item">
                <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home
