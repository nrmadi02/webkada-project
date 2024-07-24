import Image from "next/image";
import { InformationItem } from "../items/information.item";

const informationItems = [
  {
    title: "Profil Singkat",
    description: (
      <p className="text-center text-[20px] text-neutral-900">
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
      <p className="text-center text-[20px] text-neutral-900">
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
      <p className="text-center text-[20px] text-neutral-900">
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
      <p className="text-center text-[20px] text-neutral-900">
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
      <p className="text-center text-[20px] text-neutral-900 font-bold">
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
  return (
    <section>
      <div className="py-[170px] overflow-x-hidden">
        <div className="h-[500px] flex items-center relative">
          <Image
            src="/images/harda-color-image.svg"
            alt="visi-misi"
            width={670}
            height={500}
            className="h-[500px] w-auto"
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
      </div>
    </section>
  );
};

export default InformationSection;
