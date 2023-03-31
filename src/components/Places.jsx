import React from "react";
import { AiFillStar } from "react-icons/ai";

const Places = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places not to be missed</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, a
          quibusdam. Et nostrum accusamus sunt fugiat, corrupti aut sint totam.
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://wallpapercave.com/dwp1x/wp4189542.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://wallpapercave.com/dwp1x/wp4189576.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://wallpapercave.com/dwp1x/wp4189603.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://images.unsplash.com/photo-1588917085474-bc41e9f8d9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://images.unsplash.com/photo-1551189180-86415f91f06f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="https://images.unsplash.com/photo-1642514805906-a8307e41c3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Our Recomendation</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/1013739900/tr/foto%C4%9Fraf/b%C3%BCy%C3%BCk-bir-%C3%A7ay%C4%B1r-%C5%9Fark%C4%B1-kul-g%C3%B6l%C3%BC-k%C4%B1rg%C4%B1zistan-narin-ger-kampta.jpg?s=612x612&w=0&k=20&c=JxPvJP5B5RK4SpwGniH1t5PtDIt6FSvCC42zwg96IQw="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/478765231/tr/foto%C4%9Fraf/yurt-settlement-in-the-mongolian-steppe.jpg?s=612x612&w=0&k=20&c=ZRcIks_O1PPD_JSJWpwH2urQxPoGYxOpN8UZd639SOA="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-[190px] object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/1210040461/tr/foto%C4%9Fraf/son-kul-g%C3%B6l%C3%BC-k%C4%B1rg%C4%B1zistan.jpg?s=612x612&w=0&k=20&c=7v9AItiLRsbRtlE5TlN_6SoekNQXndew2xzMk2Ro9cw="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/547167580/tr/foto%C4%9Fraf/the-ger-camp-in-a-large-meadow-at-ulaanbaatar-mongolia.jpg?s=612x612&w=0&k=20&c=JrM2-nAupu527wftWKFjXIRAzphx3IKohnXmihCL9Pk="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/1285912060/tr/foto%C4%9Fraf/ye%C5%9Fil-da%C4%9Flarda-kazak-geleneksel-yurt-geleneksel-yourt-konseptinde-a%C3%A7%C4%B1k-hava-kamp.jpg?s=612x612&w=0&k=20&c=da_QX5LuRc8ql34rrszKd29CCgQx_SGccvUSqfH4PPc="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/617585998/tr/foto%C4%9Fraf/asian-yurts-of-the-nomads-on-meadow-kyrgyzstan.jpg?s=612x612&w=0&k=20&c=aiTVHMhc6gs49o38O-wDdPxzG8A0ZC0PifuDT0zXvHs="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/1337352467/tr/foto%C4%9Fraf/bayanbulak-prairie-in-xinjiang-province.jpg?s=612x612&w=0&k=20&c=CqznqPj46SQbnmTmdt-EI24k0Rl-wEYRmA2jMjvylis="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="https://media.istockphoto.com/id/915682624/tr/foto%C4%9Fraf/lake-districtda-%C3%BCst-d%C3%BCzey-%C3%A7ift-y%C3%BCr%C3%BCy%C3%BC%C5%9F.jpg?s=612x612&w=0&k=20&c=nuFFQnSoATmR8jZNHAHEFfKogz1nTZZttbn3-3zDM0A="
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Lorem, ipsum.</p>
                <p className="font-bold">$500</p>
              </div>
              <p className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facere!
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Places;
