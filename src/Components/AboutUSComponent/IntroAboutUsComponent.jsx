import video1 from "../../../public/img/videos/vid_1.mp4";
import video2 from "../../../public/img/videos/vid_2.mp4";
function IntroAboutUsComponent() {
    return (
        <section>
            <div className="w-95">
                <div className="intro-item d-flex flex-wrap">
                    <div className="col-12 col-md-6 left">
                        <video className="videos" autoPlay={true} loop={true} muted>
                            <source src={video1} type="video/mp4" />
                            <source src={video1} type="video/ogg" />
                        </video>
                    </div>
                    <div className="col-12 col-md-6 right">
                        <h4>
                            <span className="name">Vuông Tròn</span> - <span className="slogan">Đậm Đà Hương Vị Vẹn Tròn Niềm Vui</span>
                        </h4>
                        <p className="intro_content">
                            Nhà hàng Vuông Tròn tọa lạc trong không gian rộng rãi, thoáng đãng và đẹp mắt, kết hợp hiện đại và truyền thống Việt Nam.
                            Vuông Tròn là địa điểm lý tưởng cho mọi người thưởng thức bữa ăn ngon và ý nghĩa cùng gia đình, bạn bè và đồng nghiệp.
                        </p>
                    </div>
                </div>
                <div className="intro-item d-flex flex-row-reverse flex-wrap">
                    <div className="col-12 col-md-6 left">
                        <video className="videos" autoPlay={true} loop={true} muted>
                            <source src={video2} type="video/mp4" />
                            <source src={video2} type="video/ogg" />
                        </video>
                    </div>
                    <div className="col-12 col-md-6 right">
                        <h4>
                            <span className="name">Vuông Tròn</span> - <span className="slogan">Đậm Đà Hương Vị Vẹn Tròn Niềm Vui</span>
                        </h4>
                        <p className="intro_content m-0">
                            Chúng tôi tự hào về việc sử dụng những nguyên liệu tươi ngon nhất, được chọn lựa kỹ lưỡng từ những nguồn cung cấp địa
                            phương. Mỗi món ăn đều được chế biến một cách tỉ mỉ, đảm bảo mang đến cho thực khách hương vị đặc sắc và độc đáo.Mỗi món
                            ăn tại quán đều được chế biến một cách tỉ mỉ và công phu.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroAboutUsComponent;
