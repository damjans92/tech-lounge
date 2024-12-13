import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
  return (
    <>
      <div className="flex justify-center bg-neutral-100 py-12">
        <div className="uppercase text-6xl font-thin">About</div>
      </div>
      <div className="pt-16">
        <div className="container mx-auto px-4">
          <main className="  gap-6">
            <section className="flex flex-col lg:flex-row gap-6 py-20">
              <div className="lg:w-1/2">
                <LazyLoadImage
                  src="/images/about-img.jpg"
                  height="auto"
                  width="100%"
                  alt="About Us"
                  effect="blur"
                  className="rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 text-xl sm:text-2xl font-light">
                <h2 className="text-3xl md:text-5xl font-thin mb-12">
                  <i> Elevate Your Tech Experience.</i>
                </h2>
                <p className="mb-6">
                  TechLounge is your ultimate destination for cutting-edge
                  technology. We're passionate about bringing you the latest
                  gadgets and accessories to enhance your digital lifestyle.
                </p>
                <h3 className="mb-6 ">Why Choose TechLounge?</h3>

                <ul className="mb-6">
                  <li>
                    A Curated Selection: We handpick the finest tech products
                    from renowned brands.
                  </li>
                  <li>
                    Expert Guidance: Our knowledgeable team is here to help you
                    make informed decisions.
                  </li>
                  <li>
                    Hassle-Free Shopping: Enjoy a seamless online shopping
                    experience.
                  </li>
                </ul>
                <br />

                <h3> Explore Our Range:</h3>
                <p className="mb-6">
                  <br /> Smartphones: Powerful devices that fit your lifestyle.
                  <br />
                  Tablets: Versatile companions for work and play.
                  <br />
                  Headphones: Immerse yourself in rich audio quality.
                  <br />
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default About;
