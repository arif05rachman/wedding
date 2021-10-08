import React from "react";
import ArifImage from "../assets/images/arif.jpg";
import PutriImage from "../assets/images/putri.jpg";
import QRImage from "../assets/images/QR.jpeg";

const Wedding = () => {
  return (
    <div
      id="invitation"
      className="
      w-full
      auto-rows-max
      grid
      gap-8
      md:gap-16
      place-items-center
      py-8
      md:py-16
      font-cormorant-sc
      grad-trans-white-trans
    "
    >
      <h2 className="text-center md:text-lg sm:text-xs lg:text-3xl antialiased sm:subpixel-antialiased md:antialiased font-semibold">
        Invitation
      </h2>
      <div
        className="
    grid
    gap-4
    md:text-lg
    px-8
    sm:px-16
    md:px-24
    lg:px-60
    place-items-center
  "
      >
        <p className="text-center xs:text-xs md:text-lg xl:text-xl text-base font-alef">
          And one of His signs is that He created for you spouses from among
          yourselves so that you may find comfort in them. And He has placed
          between you compassion and mercy. Surely in this are signs for people
          who reflect.
        </p>
        <p className="font-semibold md:text-1.5xl font-alef">(QS Ar-Rum 21)</p>
        <div className="w-1/5 divide-y divide-yellow-400">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <p className="py-10 text-center md:text-lg sm:text-sm lg:text-1.5xl antialiased sm:subpixel-antialiased md:antialiased font-alef">
          The wedding of
        </p>
        <div
          className="
            grid
            gap-4
            sm:grid-flow-col sm:grid-cols-7
            md:grid-cols-5
            place-items-center
            text-center
          "
        >
          <div
            className="
              grid
              gap-4
              place-items-center
              sm:col-span-3
              md:col-span-2
              md:text-xl
              sm:px-4
            "
          >
            <div
              className="
                rounded-full
                h-16
                md:h-32
                w-16
                md:w-32
                bg-gradient-to-t
                from-yellow-600
                via-red-500
                to-purple-400
                p-1
                md:p-2
                select-none
              "
            >
              <a
                className="
                  block
                  rounded-full
                  ring-2
                  md:ring-4
                  ring-white
                  cursor-pointer
                "
                href="https://www.instagram.com/azzahraputr11"
                target="noreferrer"
              >
                <img
                  width="128"
                  height="128"
                  src={PutriImage}
                  alt="Putri Fatimah Azzahra"
                  className="rounded-full"
                />
              </a>
            </div>
            <p className="font-bold">
              Putri Fatimah Azzahra <br />
              (PUPUT)
            </p>
            <p className="text-tiny">daughter of</p>
            <p>Bp. Burhan Herwadi & Ibu Yiyis Dewi Darwisah</p>
          </div>
          <div className="text-3xl sm:text-6xl mb-2 font-Sacramento text-yellow-700">
            &amp;
          </div>
          <div
            className="
              grid
              gap-4
              place-items-center
              sm:col-span-3
              md:col-span-2
              md:text-xl
              sm:px-4
            "
          >
            <div
              className="
                rounded-full
                h-16
                md:h-32
                w-16
                md:w-32
                bg-gradient-to-t
                from-yellow-600
                via-red-500
                to-purple-400
                p-1
                md:p-2
                select-none
              "
            >
              <a
                className="
                  block
                  rounded-full
                  ring-2
                  md:ring-4
                  ring-white
                  cursor-pointer
                "
                href="https://www.instagram.com/arif05rachman"
                target="noreferrer"
              >
                <img
                  width="128"
                  height="128"
                  src={ArifImage}
                  alt="Arif Rachman Husen"
                  className="rounded-full"
                />
              </a>
            </div>
            <p className="font-bold">
              Arif Rachman Husen <br />
              (Arif)
            </p>
            <p className="text-tiny">daughter of</p>
            <p>Bp. Tengku Husen Yusup & Ibu U Solihah</p>
          </div>
        </div>
      </div>
      <div
        className="w-full
          auto-rows-max
          grid
          gap-8
          md:gap-16
          place-items-center
          py-8
          md:py-16"
      >
        <p className="text-center md:text-lg sm:text-sm lg:text-1.5xl antialiased sm:subpixel-antialiased md:antialiased font-alef">
          Will Be Held On
        </p>
        <div
          class="
              w-full
              md:w-2/3
              bg-linen bg-opacity-50
              grid
              gap-4
              place-items-center
              px-4
              md:px-12
              py-12
              bg-yellow-100
            "
        >
          <img
            src="data:image/png;base64,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"
            class="w-6 md:w-8"
            alt="ICON"
            width="32"
            height="32"
          />
          <div class="grid grid-flow-col gap-4 auto-cols-max place-items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBbU8xDoJAENzjDpBA4AoIliYQwhMsKS3xB/oCfYrf8BeUdtpQ0WANxTXAEUhwj8TEwk0muduZzMxS13Vvtm3vTdPkACDneRbwMywMQ25Z1gUJ6PsehmEoxnE8CyHqVRAEgfB9HxhjqwCJrGmaJ/6PbdsWNIoi6XneCaMAo1Zg3GaaplzX9TtDlxdaCiS4cnEcByilsCyL6nSldV3LOI5HwzAOiiCErAIFKeWWqiJVVT3SNCW4zDRNAwU1WJjT7zllWRZJkrzxydF+h4Cu6wSBP5PnucrneJH4APQnWE9ox8uaAAAAAElFTkSuQmCC"
              alt="\"
              width="8"
              height="9"
            />
            <p class="font-medium md:text-1.875xl">AKAD</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgBXZDLCYNAEIZn44KK4A4igngxHdhBUkJK0gpSguTuQQ/et4OkhFQggiD4zoxgDi4sDHz/Y3YFnI5lWTHdO43JsixKHAAREwJPho7jgGEY0Pd9JRkGQfBQSuW+75MOwbZtmOcZmqb5yJgOOfIoitDzPDBNc3d3XQdSyrekyDQMQ6SUHQohgLphmqav1rq6uK57O5wMt22DcRxZkHL9heJ56z/k7mEYsrquXyygGtkSQHat66pJkBVFoY/XSYq60kJIc1uWZXv+lx9JCVOQ9xijKgAAAABJRU5ErkJggg=="
              alt="/"
              width="8"
              height="9"
            />
          </div>
          <p class="font-medium md:text-1.5xl">
            <span>October </span>
            <span class="font-gilda">23, </span>
            <span class="font-gilda">2021 08.00 </span>
            <span>WIB</span>
          </p>
          <p class="text-gray-500 text-center">
            <strong>Padepokan Seni Bumi Ageung</strong>
            <br /> Kampung Balandongan, Desa Pagersari, Kecamatan Pagerageung,
            Kabupaten Tasikmalaya{" "}
          </p>
        </div>
        <div
          class="
              w-full
              md:w-2/3
              bg-linen bg-opacity-50
              grid
              gap-4
              place-items-center
              px-4
              md:px-12
              py-12
              bg-yellow-100
            "
        >
          <img
            src="data:image/png;base64,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"
            class="w-6 md:w-8"
            alt="ICON"
            width="32"
            height="32"
          />
          <div class="grid grid-flow-col gap-4 auto-cols-max place-items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBbU8xDoJAENzjDpBA4AoIliYQwhMsKS3xB/oCfYrf8BeUdtpQ0WANxTXAEUhwj8TEwk0muduZzMxS13Vvtm3vTdPkACDneRbwMywMQ25Z1gUJ6PsehmEoxnE8CyHqVRAEgfB9HxhjqwCJrGmaJ/6PbdsWNIoi6XneCaMAo1Zg3GaaplzX9TtDlxdaCiS4cnEcByilsCyL6nSldV3LOI5HwzAOiiCErAIFKeWWqiJVVT3SNCW4zDRNAwU1WJjT7zllWRZJkrzxydF+h4Cu6wSBP5PnucrneJH4APQnWE9ox8uaAAAAAElFTkSuQmCC"
              alt="\"
              width="8"
              height="9"
            />
            <p class="font-medium md:text-1.875xl">RESEPSI</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgBXZDLCYNAEIZn44KK4A4igngxHdhBUkJK0gpSguTuQQ/et4OkhFQggiD4zoxgDi4sDHz/Y3YFnI5lWTHdO43JsixKHAAREwJPho7jgGEY0Pd9JRkGQfBQSuW+75MOwbZtmOcZmqb5yJgOOfIoitDzPDBNc3d3XQdSyrekyDQMQ6SUHQohgLphmqav1rq6uK57O5wMt22DcRxZkHL9heJ56z/k7mEYsrquXyygGtkSQHat66pJkBVFoY/XSYq60kJIc1uWZXv+lx9JCVOQ9xijKgAAAABJRU5ErkJggg=="
              alt="/"
              width="8"
              height="9"
            />
          </div>
          <p class="font-medium md:text-1.5xl">
            <span>October </span>
            <span class="font-gilda">23, </span>
            <span class="font-gilda">2021 10.00 </span>
            <span>WIB</span>
          </p>
          <p class="text-gray-500 text-center">
            <strong>Padepokan Seni Bumi Ageung</strong>
            <br /> Kampung Balandongan, Desa Pagersari, Kecamatan Pagerageung,
            Kabupaten Tasikmalaya{" "}
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              window.open("https://g.page/bumi-ageung?share", "_blank");
            }}
            style={{ backgroundColor: "#d5ad6d" }}
            className="text-white font-bold py-2 px-4 rounded"
          >
            Show In Maps
          </button>
        </div>
        <div>
          <img src={QRImage} width="320rem" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wedding;
