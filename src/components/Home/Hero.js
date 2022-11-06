import React from 'react';

const Hero = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs badge badge-error">
                    Donate Blood
                  </p>
                </div>

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Donate Your Blood to
                  <br className="hidden md:block" />
                  Us, Save More Life <br />
                  <span className="inline-block text-deep-purple-accent-400">
                    Together
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  The need for blood transfusions (whether during peacetime or
                  during emergencies or disasters), when a surge in demand for
                  blood occurs or when blood services are disrupted, can only be
                  met through an effective blood donor programme characterised
                  by the wide and active participation of the population.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold btn"
                >
                  Check Donate
                </a>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover  w-full h-56 rounded shadow-lg sm:h-96"
                src="https://i.ibb.co/B29wj5c/hero.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;