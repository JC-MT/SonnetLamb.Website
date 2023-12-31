import './Gallery.scss'

export default function Gallery(){

    const imagesForCarouselOne = [
        'https://static.wixstatic.com/media/15312d_2fc5e6113e5d4ccea808c462335a68e5~mv2_d_3000_4500_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_2fc5e6113e5d4ccea808c462335a68e5~mv2_d_3000_4500_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_8cf5049e2cad429590e6eaa39a36df5c~mv2_d_4000_6000_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_8cf5049e2cad429590e6eaa39a36df5c~mv2_d_4000_6000_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_33bd129a176346e5b8a047e2f9614411~mv2_d_4000_6000_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_33bd129a176346e5b8a047e2f9614411~mv2_d_4000_6000_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_862f3d0ad1634e25baf31c265996507c~mv2_d_4000_6000_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_862f3d0ad1634e25baf31c265996507c~mv2_d_4000_6000_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_315930b1905241eca6269d89b153022f~mv2_d_4000_6000_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_315930b1905241eca6269d89b153022f~mv2_d_4000_6000_s_4_2.jpg'
    ]
        
    const imagesForCarouselTwo = [
        'https://static.wixstatic.com/media/15312d_7614602fd9944755bbe69071daf431ce~mv2.jpg/v1/fit/w_480,h_600,q_90/15312d_7614602fd9944755bbe69071daf431ce~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_f290a57bef3f4b5b8ead08265bbfcf42~mv2_d_6720_4480_s_4_2.jpg/v1/fit/w_900,h_600,q_90/15312d_f290a57bef3f4b5b8ead08265bbfcf42~mv2_d_6720_4480_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_7d2f8af4c489481e924ed0415914d342~mv2.jpg/v1/fit/w_840,h_600,q_90/15312d_7d2f8af4c489481e924ed0415914d342~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_7afd89929b5b4c2bbaa84837a304cda5~mv2_d_4480_6720_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_7afd89929b5b4c2bbaa84837a304cda5~mv2_d_4480_6720_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_0f0a188b47ca4766814b15fa39c63f43~mv2.jpg/v1/fit/w_480,h_600,q_90/15312d_0f0a188b47ca4766814b15fa39c63f43~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_86f6674b4e9a420991de872bda31b5a8~mv2_d_6720_4480_s_4_2.jpg/v1/fit/w_900,h_600,q_90/15312d_86f6674b4e9a420991de872bda31b5a8~mv2_d_6720_4480_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_32566dc2ae85403a9f0e5039e826f391~mv2.jpg/v1/fit/w_751,h_600,q_90/15312d_32566dc2ae85403a9f0e5039e826f391~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_2203a2ec00204c2285be317edbf8d925~mv2.jpg/v1/fit/w_840,h_600,q_90/15312d_2203a2ec00204c2285be317edbf8d925~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_8e22cb8f06804e209c9c9d018e2245e0~mv2.jpg/v1/fit/w_480,h_600,q_90/15312d_8e22cb8f06804e209c9c9d018e2245e0~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_7db56d6ffa824b3bab7d91574c5979f5~mv2_d_4480_6720_s_4_2.jpg/v1/fit/w_400,h_600,q_90/15312d_7db56d6ffa824b3bab7d91574c5979f5~mv2_d_4480_6720_s_4_2.jpg',
        'https://static.wixstatic.com/media/15312d_48edb074cfa149dc8448fcfd7f0c87c1~mv2.png/v1/fit/w_362,h_600,q_90/15312d_48edb074cfa149dc8448fcfd7f0c87c1~mv2.png',
        'https://static.wixstatic.com/media/15312d_4831fe81169c490a886556a699f13071~mv2.jpg/v1/fit/w_450,h_600,q_90/15312d_4831fe81169c490a886556a699f13071~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_b08ed31a360b473b885d672a6db6f93c~mv2.jpg/v1/fit/w_320,h_600,q_90/15312d_b08ed31a360b473b885d672a6db6f93c~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_b4fefc9396424b768da536c77cf4fae1~mv2.jpg/v1/fit/w_600,h_600,q_90/15312d_b4fefc9396424b768da536c77cf4fae1~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_1b8344adab1c4defb45070535c65149e~mv2.jpg/v1/fit/w_429,h_600,q_90/15312d_1b8344adab1c4defb45070535c65149e~mv2.jpg'
    ]
    const imagesForCarouselThree = [
        'https://static.wixstatic.com/media/15312d_fa387dccde48495c9c04877a59ef90a6~mv2.jpg/v1/fit/w_600,h_600,q_90/15312d_fa387dccde48495c9c04877a59ef90a6~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_862a28c52f48420da4a5dfc64a044568~mv2.jpg/v1/fit/w_600,h_600,q_90/15312d_862a28c52f48420da4a5dfc64a044568~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_35d13023b14b4d5fa4f8234ee5d51d79~mv2.jpg/v1/fit/w_600,h_600,q_90/15312d_35d13023b14b4d5fa4f8234ee5d51d79~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_05b7455fce7d45a3b73d8eb142595e35~mv2.jpg/v1/fit/w_400,h_600,q_90/15312d_05b7455fce7d45a3b73d8eb142595e35~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_da02f75e6f9f4610bf13603d459b6070~mv2.jpg/v1/fit/w_488,h_600,q_90/15312d_da02f75e6f9f4610bf13603d459b6070~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_da3c0d2b795e4283849c173be6cfc554~mv2.jpg/v1/fit/w_480,h_600,q_90/15312d_da3c0d2b795e4283849c173be6cfc554~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_e7be0eab5c694103a86d07e52493cc64~mv2.jpg/v1/fit/w_480,h_600,q_90/15312d_e7be0eab5c694103a86d07e52493cc64~mv2.jpg',
        'https://static.wixstatic.com/media/15312d_7a2554a8f16d4bde99655857d1e872e7~mv2_d_2240_3360_s_2.jpeg/v1/fit/w_400,h_600,q_90/15312d_7a2554a8f16d4bde99655857d1e872e7~mv2_d_2240_3360_s_2.jpeg',
        'https://static.wixstatic.com/media/15312d_91ba929ea0554daba8f0e0ecf113ed58~mv2_d_2240_3360_s_2.jpeg/v1/fit/w_400,h_600,q_90/15312d_91ba929ea0554daba8f0e0ecf113ed58~mv2_d_2240_3360_s_2.jpeg'
    ]

  return (
    <div className="galleryContainer">
        <div className="galleryContainer__carousel" >
            { imagesForCarouselOne.map((image) => {
                return (
                    <div className="galleryContainer__carousel__imgContainer">
                        <img className="galleryContainer__carousel__imgContainer__img" src={image} />
                    </div>
                )
            })}
        </div>
        <div className="galleryContainer__carousel" >
            { imagesForCarouselTwo.map((image) => {
                return (
                    <div className="galleryContainer__carousel__imgContainer">
                        <img className="galleryContainer__carousel__imgContainer__img" src={image} />
                    </div>
                )
            })}
        </div>
        <div className="galleryContainer__carousel" >
            { imagesForCarouselThree.map((image) => {
                return (
                    <div className="galleryContainer__carousel__imgContainer">
                        <img className="galleryContainer__carousel__imgContainer__img" src={image} />
                    </div>
                )
            })}
        </div>
    </div>
  );
};