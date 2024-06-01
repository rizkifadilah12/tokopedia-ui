import { useState } from "react";
import Kategori from "./Kategori";
import SlideKategori from "./SlideKategori";

const KategoriAndTopUp = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="custom-shadow mx-28 mt-4 flex h-[20rem] flex-col p-4 ">
      <div className="flex flex-row gap-5 ">
        <div>
          <h2 className="font-open-sauce-one text-[23px] text-color5">
            <strong>Kategori Pilihan</strong>
          </h2>
          <div className="mt-5 w-[40rem]">
            <Kategori />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h2 className="flex items-center gap-2 font-open-sauce-one text-[23px] text-color5">
            <strong>Top Up & Tagihan</strong>
            <p className="text-[15px] text-color2">
              <strong>Lihat Semua</strong>
            </p>
          </h2>
          <div className="mt-5 rounded shadow">
            <div className="flex items-center justify-between border-b text-center">
              <button
                className={`tabsItem ${activeTab === 0 ? "tabsItemActive" : ""}`}
                onClick={() => setActiveTab(0)}
              >
                Pulsa
              </button>
              <button
                className={`tabsItem ${activeTab === 1 ? "tabsItemActive" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                Paket Data
              </button>
              <button
                className={`tabsItem ${activeTab === 2 ? "tabsItemActive" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                Fight
              </button>
              <button
                className={`tabsItem ${activeTab === 3 ? "tabsItemActive" : ""}`}
                onClick={() => setActiveTab(3)}
              >
                Listrik Pln
              </button>
              <button
                className={`tabsItem w-12 ${activeTab === 4 ? "tabsItemActive " : ""}`}
                onClick={() => setActiveTab(4)}
              >
                :
              </button>
            </div>
            <div className="h-[7.5rem] overflow-hidden p-3 transition-all">
              {activeTab === 0 || activeTab === 1 ? (
                <div className={`mt-4 flex`}>
                  <div className="flex w-full items-center gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-12 text-color1">
                        <strong>Nomor Telepon</strong>
                      </label>
                      <input placeholder="Masukan Nomor" className="inputText" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-12 text-color1">
                        <strong>Nominal</strong>
                      </label>
                      <input className="inputText" placeholder="Masukan Nominal" />
                    </div>
                    <div className="mt-4">
                      <button className="h-10 w-20 rounded bg-color4 p-2 text-white"> Beli </button>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === 2 && (
                <div className={`flex w-full`}>
                  <div className="w-full">Tab 3 Content</div>
                </div>
              )}
              {activeTab === 3 && (
                <div className={`flex w-full`}>
                  <div className="w-full">Tab 4 Content</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <SlideKategori />
      </div>
    </div>
  );
};

export default KategoriAndTopUp;
