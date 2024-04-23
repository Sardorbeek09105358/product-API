import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="h-96  rounded" alt="hero" src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg&w=1920&q=75"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
        <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
        <div className="flex lg:flex-row md:flex-col">
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero