import "swiper/swiper-bundle.css";
import HomeSlider from "../components/home/HomeSlider";
import CategorySection from "../components/home/CategorySection";
import LatestArrivals from "../components/home/LatestArrivals";

const Home = () => {
  return (
    <>
      <section>
        <HomeSlider />
      </section>
      <section>
        <LatestArrivals />
      </section>
      <section className="py-12">
        <CategorySection />
      </section>
      <section>
        <div className="container mx-auto px-4 sm:pt-12 pb-12 sm:pb-28 flex">
          <div>
            <img
              src="/images/banner-coming-soon-2.jpg"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
