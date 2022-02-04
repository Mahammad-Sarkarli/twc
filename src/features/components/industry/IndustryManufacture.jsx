// @ts-nocheck
import React from "react";
import styles from "./industry.module.css";
import IndustryHeaderDash from "./IndustryHeaderDash";
import headerImagePng from "./assets/img/istehsalat-header.png";
import sectionImagePng from "./assets/img/istehsalat-section.png";
const IndustryManufacture = () => {
  return (
    <div>
      <IndustryHeaderDash headerText={'SƏNAYE/İSTEHSALAT'} isHeader={true} />
          
        <section className={`${styles.paragraph_section}`}>
          <p>
            Bununla belə, bir çox regional və ya qlobal istehsalçılar istehsalat
            zəncirinin optimallaşdırılması məsələlərini həll etməyə başlayırlar.
            Qrup daxilində təkmilləşdirilmiş daxili əməkdaşlığa və istehsalat
            zənciri məlumatlarının yaradılmasına diqqət yetirilir. Beləliklə,
            bütün bu məlumatlar daha yaxşı xərc idarəetməsi yaratmaq üçün
            istifadə edilə bilər.
          </p>
          <p>
            Bütün bunlar istehsal əməliyyatlarında əhəmiyyətli irəliləyişlər
            əldə etməyə kömək edəcəkdir. Rəqabət üstünlüyü əldə etmək
            müvəffəqiyyətin açarıdır. Müştəri xidməti keyfiyyətinin
            yaxşılaşdırılması tezliklə mənfəətin artmasına gətirib çıxarır.
          </p>
          <p>
            ‘Thinkwise Business Consulting’ şirkətinin təcrübəli konsultantları
            mürəkkəb istehsalat layihələrini necə icra edəcəyini bilirlər.
            ‘Thinkwise Business Consulting’in həlləri komandanıza ətraflı
            cədvəllər hazırlamağa kömək edə bilər və üstəlik, fəaliyyətin hər
            bir mərhələsi barədə məlumat verən ətraflı qrafik və işlərin
            paylanma strukturlarını inkişaf etdirməyə kömək edə bilər. Bu yol
            xəritəsi, layihə cədvəlini təsdiq edərək və vaxt qrafiklərinin
            harada sıxıla biləcəyini müəyyən edərək səylərinizi uğura doğru
            hərəkət etdirəcək, eyni zamanda fəaliyyətlərin lazımsız ixtisarlar
            olmadan baş verməsini təmin edəcək.
          </p>
        </section>
      </div>
 

  )
}


export default IndustryManufacture;
