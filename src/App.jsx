import CofffeMagazine from './components/CofffeMagazine';
import FeaturedMugs from './components/FeaturedMugs';
import Footer from './components/Footer';
import Header from './components/Header';
import LifeStyleStories from './components/LifeStyleStories';
import MoreProduct from './components/MoreProduct';
import Slider from './components/Slider';
import Story from './components/Story';
import Subcribe from './components/Subcribe';

function App() {
    return (
        <>
            <div className='content'>
                <Header />

                <main>
                    <Slider />
                </main>

                <Story />

                <FeaturedMugs />
                <MoreProduct />
                <CofffeMagazine />
                <LifeStyleStories />
                <Subcribe />

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default App;
