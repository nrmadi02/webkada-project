import Image from "next/image";
import { InformationItem } from "../items/information.item";
import { InformationMobileItem } from "../items/information-mobile.item";
import { useState } from "react";

const informationItems = [
  {
    title: "Profil Singkat",
    description: (
      <p className="text-center font-normal text-[16px] lg:text-[20px] text-neutral-900">
        H. Harda Kiswaya, S.E., M.Si. atau biasa dipanggil Pak Harda, lahir di
        Godean pada tanggal 26 Januari 1964. Beliau merupakan Putra Asli Daerah
        yang dikenal sebagai sosok pekerja keras, berintegritas, berkredibiltas,
        sederhana, dan merakyat. Pak Harda merupakan seorang figur pemimpin yang
        karismatik sebagai seorang “BAPAK” khususnya bagi seluruh ASN di
        lingkungan Pemkab Sleman.
      </p>
    ),
  },
  {
    title: "Riwayat Pendidikan",
    description: (
      <p className="text-center font-normal  text-[16px] lg:text-[20px] text-neutral-900">
        Pak Harda memulai pendidikan formalnya di SDN Jetis Sidoagung Godean,
        berlanjut ke SMPN 1 Godean. Kemudian melanjutkan di SMEA Negeri 5 Godean
        atau yang sekarang dikenal sebagai SMKN 1 Godean. Beliau menempuh
        pendidikan S1 di Fakultas Ekonomi Jurusan Akuntansi di Universitas Islam
        Indonesia pada tahun 1991. Beliau kemudian melanjutkan pendidikan S2 di
        Ilmu Ekonomi UPN Veteran Yogyakarta.
      </p>
    ),
  },
  {
    title: "Karir",
    description: (
      <p className="text-center font-normal  text-[16px] lg:text-[20px] text-neutral-900">
        Berkarir di Lingkungan Pemerintahan Kabupaten Sleman sejak Tahun 1993.
        Selama 20 tahun beliau bekerja di Badan Keuangan Aset Daerah (BKAD)
        Sleman sehingga dari pengalaman luar biasa tersebut beliau sangat
        memeahami pengelolalaan Keuangan APBD Sleman. Beliau kemudian dipercayai
        untuk menjabat sebagai Sekretaris Daerah Kabupaten Sleman dari tahun
        2020 hingga tahun 2024.
      </p>
    ),
  },
  {
    title: "Prestasi",
    description: (
      <p className="text-center font-normal  text-[16px] lg:text-[20px] text-neutral-900">
        Atas pengabdiannya selama 20 tahun di BKAD Sleman, Pak Harda diganjar
        dengan{" "}
        <strong>
          Jasa Penghargaan Satya Lancana Karya Satya XX Tahun 2019
        </strong>{" "}
        yang ditetapkan oleh Presiden Republik Indonesia Ir. Joko Widodo alias
        Jokowi.
      </p>
    ),
  },
  {
    title: "Motto",
    description: (
      <p className="text-center text-[16px] lg:text-[20px] text-neutral-900 font-bold">
        “Guyup rukun, golong gilig, sawiji, greget, sengguh ora mingkuh sinartan
        patraping tumindak prasaja welas asih, sembada lan tembayatan menika
        dados lelandhesanipun greget Sesarengan Mbangun Sleman. Ngemuti bilih
        kridha amemangun Sleman menika dipun tindakaken lan kapisungsungaken
        kangge sedaya masyarakat Sleman”
      </p>
    ),
  },
];

const InformationSection = () => {
  const [isHovered, setIsHovered] = useState<{
    [key: number]: boolean;
  }>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const itemHidden = Object.values(isHovered).some((value) => value);

  return (
    <section id="profile">
      <div className="lg:py-[170px] py-9 overflow-x-hidden">
        <div className="lg:h-[500px] hidden h-[175px] lg:flex items-center relative">
          <Image
            src="/images/harda-color-image.svg"
            alt="visi-misi"
            width={670}
            height={500}
            className="lg:h-[500px] h-[175px] w-auto"
          />
          <div className="w-full">
            {informationItems.map((informationItem, idx) => (
              <InformationItem
                key={idx}
                title={informationItem.title}
                description={informationItem.description}
              />
            ))}
          </div>
        </div>
        <div className="w-full bg-cover relative h-full min-h-[550px] lg:hidden bg-[url('/images/harda-profile.png')]">
          <div className="lg:hidden w-full right-0 left-0 absolute bottom-0 h-[550px]">
            {!itemHidden ? (
              <>
                {informationItems.map((information, idx) => (
                  <InformationMobileItem
                    key={idx}
                    title={information.title}
                    description={information.description}
                    isHovered={isHovered[idx]}
                    setIsHovered={(e) => {
                      setIsHovered({ ...isHovered, [idx]: e });
                    }}
                  />
                ))}
              </>
            ) : (
              <>
                <InformationMobileItem
                  title={
                    informationItems[Object.values(isHovered).indexOf(true)]
                      .title
                  }
                  description={
                    informationItems[Object.values(isHovered).indexOf(true)]
                      .description
                  }
                  isHovered={isHovered[Object.values(isHovered).indexOf(true)]}
                  setIsHovered={(e) => {
                    setIsHovered({
                      ...isHovered,
                      [Object.values(isHovered).indexOf(true)]: e,
                    });
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
