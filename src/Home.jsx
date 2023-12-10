import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Product from './Product';
import { Product1 } from './Product1';
import { Product2 } from './Product2';
import './ImageSlider.css';
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <ImageSlider slides={SliderData} />;
        <div className="home__row">
          <Product2 title={"Gaming accessories"}
            image1={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"}
            title1={"Gaming accessories"}
            image2={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"}
            title2={"Keyboards"}
            image3={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"}
            title3={"Computer mice"}
            image4={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"}
            title4={"Chairs"}
          />
          <Product title={"Toys under $25"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"}
          />
          <Product title={"Deals in PCs"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"}
          />
          <Product2 title={"Refresh your space"}
            image1={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg"}
            title1={"Dining"}
            image2={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg"}
            title2={"Kitchen"}
            image3={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg"}
            title3={"Home"}
            image4={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg"}
            title4={"Health & Beauty"}
          />
        </div>
        <div className="home__row">
          <Product
            title={"Top Deal"}
            image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41Gl9nk7v8L._AC_SY230_.jpg"}
          />

          <Product2
            title={"Shop deals in Fashion"}
            image1={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"}
            title1={"Jeans under $50"}
            image2={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg"}
            title2={"Dresses under $30"}
            image3={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg"}
            title3={"Tops under $25"}
            image4={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg"}
            title4={"Shoes under $50"}
          />
          <Product
            title={"Home decor under $50"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg"}
          />
          <Product
            title={"Shop holiday gift guides"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_1x_379x304_EN._SY304_CB576347904_.jpg"}
          />
        </div>
        <div className="home__row">
          <Product1
            title={"Most wished for in Movies & TV"}
            image1={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71EiFp3q84L._AC_SY200_.jpg"}
            image2={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81biiIq1mcL._AC_SY200_.jpg"}
            image3={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81-xkYB2izL._AC_SY200_.jpg"}
            image4={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717mzNpA9HL._AC_SY200_.jpg"}
            image5={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81rjuxLh2TL._AC_SY200_.jpg"}
            image6={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81w6IGFnj6L._AC_SY200_.jpg"}
            image7={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71h7HHb9lIL._AC_SY200_.jpg"}
            image8={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+JRa6G+3L._AC_SY200_.jpg"}
          />
        </div>
        <div className="home__row">
          <Product1
            title={"Best Sellers in Home & Kitchen"}
            image1={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51Uh1WoYBgL._AC_SY200_.jpg"}
            image2={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51fd-ARdg7L._AC_SY200_.jpg"}
            image3={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71M6a8SHCeL._AC_SY200_.jpg"}
            image4={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61KePAu1JAL._AC_SY200_.jpg"}
            image5={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nY9nYn30L._AC_SY200_.jpg"}
            image6={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71nhPE7vxHL._AC_SY200_.jpg"}
            image7={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81BzqCSxQYL._AC_SY200_.jpg"}
            image8={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SnAWj1EtL._AC_SY200_.jpg"}
          />

        </div>
        <div className="home__row">
          <Product
            title={"A whole new way to work"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg"}
          />
          <Product
            title={"New arrivals from Home"}
            image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/4134F8em5JL._SY160_.jpg"}
          />
          <Product
            title={"Deals on most-loved finds"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/DiscoTec/2023/Shoulder/W1/GW/DQC/SP23_332_DQC_CML01_HOME_1x._SY116_CB577173228_.jpg"}
          />
          <Product
            title={"Host gifts under $50"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/img22/Events/Winter23/WIN23_HostessGifts_CofTableBooks_QuadCard_D_04_186x116._SY116_CB577074175_.jpg"}
          />
        </div>
        <div className="home__row">
          <Product
            title={"More smiles, for less"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/US-hq/2023/img/Consumables/XCM_CUTTLE_1645243_3455324_186x116_1X_en_US._SY116_CB575931318_.jpg"}
          />
          <Product
            title={"Personal Care under $25"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg"}
          />
          <Product
            title={"Deals on shoes"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v8._SY304_CB573698005_.jpg"}
          />
          <Product
            title={"Creating business solutions"}
            image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg"}
          />
        </div>

      </div>
    </div>
  )
}

export default Home

