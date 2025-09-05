import React from "react";
import "./Structure.css";

const Structure = () => {
  return (
    <div className="org-chart">
      {/* Bodi */}
      <div className="box">BODI YA WAKURUGENZI</div>
      <div className="arrow-down"></div>

      {/* Mkurugenzi Mkuu */}
      <div className="box">MKURUGENZI MKUU</div>
      <div className="arrow-down"></div>

      {/* Vitengo vya Juu */}
      <div className="horizontal-line"></div>
      <div className="top-sections">
        <div className="box">KITENGO CHA MANUNUZI YA UMMA</div>
        <div className="box">KITENGO CHA HUDUMA ZA SHERIA</div>
        <div className="box">KITENGO CHA TEHAMA NA UHUSIANO WA UMMA</div>
        <div className="box">KITENGO CHA UHASIBU</div>
        <div className="box">KITENGO CHA UDHIBITI UBORA NA VIASHIRIA HATARISHI</div>
        <div className="box">KITENGO CHA UKAGUZI WA NDANI</div>
        <div className="box">KITIVO CHA UTAFITI PEMBA</div>
      </div>

      <div className="arrow-down"></div>
      <div className="horizontal-line"></div>

      {/* Departments */}
      <div className="departments">
        <div className="department">
          <div className="box">IDARA YA UTAFITI, UBUNIFU NA UELIMISHAJI</div>
          <div className="arrow-down"></div>
          <div className="sub-box">DIVISHENI YA UTAFITI WA VUVUVI</div>
          <div className="sub-box">DIVISHENI YA UTAFITI WA UKUAJI WA VIUMBE MAJI</div>
          <div className="sub-box">DIVISHENI YA UTAFITI WA MAZINGIRA NA MIFUMO YA BAHARI</div>
        </div>

        <div className="department">
          <div className="box">IDARA YA USIMAMIZI WA MAABARA</div>
          <div className="arrow-down"></div>
          <div className="sub-box">DIVISHENI YA MAABARA YA KEMIA NA VIMELEA</div>
          <div className="sub-box">DIVISHENI YA MAABARA YA UZALISHAJI WA VIUMBE MAJI</div>
        </div>

        <div className="department">
          <div className="box">IDARA YA RASILIMALIWATU, UTAWALA NA MIPANGO</div>
          <div className="arrow-down"></div>
          <div className="sub-box">DIVISHENI YA RASILIMALIWATU NA UTAWALA</div>
          <div className="sub-box">DIVISHENI YA MIPANGO NA TAKWIMU</div>
          <div className="sub-box">DIVISHENI YA USIMAMIZI WA KUMBUKUMBU</div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
