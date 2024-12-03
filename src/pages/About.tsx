function About() {
  return (
    <>
      <div className="flex justify-center bg-neutral-100 py-12">
        <div className="uppercase text-6xl font-thin">About</div>
      </div>
      <div className="pt-16">
        <div className="container mx-auto px-4">
          <main className="flex flex-col md:flex-row gap-6">
            <section className="flex flex-col md:flex-row gap-6 py-20">
              <div className="md:w-1/2">
                <img
                  src="/images/about-img.jpg"
                  alt="About Us image"
                  className="rounded-md"
                />
              </div>
              <div className="md:w-1/2  text-2xl font-light">
                <h2 className="text-4xl font-light mb-8">
                  <i> Elevate Your Tech Experience.</i>
                </h2>
                <p className="mb-6">
                  TechLounge is your ultimate destination for cutting-edge
                  technology. We're passionate about bringing you the latest
                  gadgets and accessories to enhance your digital lifestyle.
                </p>
                <h3 className="mb-6 ">Why Choose TechLounge?</h3>
                <p className="mb-6">
                  <ul>
                    <li>
                      A Curated Selection: We handpick the finest tech products
                      from renowned brands.
                    </li>
                    <li>
                      Expert Guidance: Our knowledgeable team is here to help
                      you make informed decisions.
                    </li>
                    <li>
                      Hassle-Free Shopping: Enjoy a seamless online shopping
                      experience.
                    </li>
                  </ul>
                  <br />
                </p>
                <h3> Explore Our Range:</h3>
                <p className="mb-6">
                  <br /> Smartphones: Powerful devices that fit your lifestyle.
                  <br />
                  Tablets: Versatile companions for work and play.
                  <br />
                  Headphones: Immerse yourself in rich audio quality.
                  <br />
                  [Other product categories, e.g., smartwatches, gaming
                  consoles, etc.]
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
