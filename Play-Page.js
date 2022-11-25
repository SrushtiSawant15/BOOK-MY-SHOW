import React from "react";
import DefaultLayoutHoc from "../layout/Default-layout";

// components
import Poster from "../components/Poster/Poster-Component";
import PlayFilters from "../components/PlayFilters/PlayFilters-Component";

const PlayPage = () => {
  return (
    <>
      <div className=" container mx-auto px-4 my-10">
        <div className=" w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className=" lg:w-3/4 p-4 bg-white rounded">
            <h2 className=" text-2xl font-bold mb-4">Plays in NCR Delhi</h2>
            <div className=" flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMyBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339165-klxteuxqbv-portrait.jpg"
                  extLink="https://in.bookmyshow.com/events/space-cadet-by-varun-thakur/ET00339165"
                  title="Space Cadet by Varun Thakur"
                  subtitle="Madhuban Hotel : Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex flex-wrap items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340371-xprpwlmpxf-portrait.jpg"
                  extLink="https://in.bookmyshow.com/events/puma-birthday-bash-with-harrdy-sandhu/ET00340371"
                  title="PUMA Birthday Bash With Harrdy Sandhu
                  "
                  subtitle="DLF Cyberhub: Gurugram"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex flex-wrap items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00328636-tgtpbbmnnc-portrait.jpg"
                  extLink="https://in.bookmyshow.com/events/late-night-show/ET00328636"
                  title="Late Night Show
                  "
                  subtitle="Guftagu Cafe : GuruGram"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tommorow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={[
                  "English",
                  "Hindi",
                  "Tamil",
                  "Punjabi",
                  "Marathi",
                  "Bengali",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
