
import producto1 from '../../assets/banners/1.jpg'
import producto2 from '../../assets/banners/2.jpg'
import producto3 from '../../assets/banners/3.jpg'
import producto4 from '../../assets/banners/4.jpg'
import producto5 from '../../assets/banners/5.jpg'
import producto6 from '../../assets/banners/6.jpg'
import producto7 from '../../assets/banners/7.jpg'
import producto8 from '../../assets/banners/8.jpg'
import producto9 from '../../assets/banners/9.jpg'
import producto10 from '../../assets/banners/10.jpg'
import producto11 from '../../assets/banners/11.jpg'
import producto12 from '../../assets/banners/12.jpg'
import producto13 from '../../assets/banners/13.jpg'
import producto14 from '../../assets/banners/14.jpg'
import producto15 from '../../assets/banners/15.jpg'
import producto16 from '../../assets/banners/16.jpg'
import producto17 from '../../assets/banners/17.jpg'
import producto18 from '../../assets/banners/18.jpg'
import producto19 from '../../assets/banners/19.jpg'
import producto20 from '../../assets/banners/20.jpg'
import producto21 from '../../assets/banners/21.jpg'
import producto22 from '../../assets/banners/22.jpg'
import producto23 from '../../assets/banners/23.jpg'
import producto24 from '../../assets/banners/24.jpg'
import { SlidingBanners } from './Banner'

function Home() {
    const Banners = [
        producto1, producto2, producto3, producto4, producto5, producto6, producto7, 
        producto8, producto9, producto10, producto11, producto12, producto13, producto14, 
        producto15, producto16, producto17, producto18, producto19, producto20, producto21, 
        producto22, producto23, producto24
    ];

    return (
        <>
            <div className="bg-gradient-to-r to-cyan-600 from-primary text-white px-14 py-8">
                <h1 className="text-3xl font-bold mb-10">Bienvenido a la Universidad Internacional SEK</h1>
                <p className="text-lg">En la UISEK siempre nos hemos caracterizado por ofrecer a nuestros estudiantes y público en general, charlas y/o talleres con expertos nacionales e internacionales para ampliar la visión profesional respecto a diversos temas de interés general.</p>
            </div>
            <div className="my-4 px-14">
                <SlidingBanners images={Banners} />
            </div>
        </>
    );
}
export default Home;