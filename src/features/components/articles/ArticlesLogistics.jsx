import React from "react";
import styles from "./articles.module.css";
import ArticleHeaderDash from "./ArticleHeaderDash";
import coverImgPng from "./assets/img/cargo-cover.png";
import graphicImgPng from "./assets/img/cargo-competition.png";
import articleImgPng1 from "./assets/img/startup.png";
import articleImgPng2 from "./assets/img/alcohol.png";
import articleImgPng3 from "./assets/img/finance.png";
import relatedArticleImgPng from "./assets/img/ntflx.png";

const ArticlesLogistics = () => {
  return (
    <div>
      <ArticleHeaderDash headerText='' isArticle={true} />

      <section className={`${styles.container} d-flex`}>
        <section
          className={`${styles.content_container} d-flex direction-column`}
        >
          <img className={`${styles.cover_image}`} src={coverImgPng} alt='' />
          <p className={`${styles.article_title}`}>Logistika</p>
          <section className={`${styles.article_paragraph}`}>
            <p>
              Komandamızın apardığı ilkin araşdırmalara görə, Azərbaycanda hava
              yükdaşıma şirkətlərini seçərkən qiymət, qəbul məntəqələri və sürət
              aparıcı amillərdir.
            </p>
            <p>
              Sənayedə nəzərə çarpacaq dərəcədə gərgin rəqabət aparıcı firmaları
              bazar payını artırmaq üçün yeni bir dəyər təklifi formalaşdırmağı
              tələb edir.
            </p>
            <p>
              Hal-hazırda təqribən 55 hava yükdaşıma şirkəti mövcuddur. Bununla
              belə, onların əksəriyyəti eyni dəyər təklifləri üzərində rəqabət
              aparır. 1A rəqabət meyarları:
            </p>
          </section>
          <img src={graphicImgPng} alt='' />
          <section className={`${styles.article_paragraph}`}>
            <p>
              Qrafikdən də göründüyü kimi, firmaların əksəriyyəti dıyır
              təklifini bəyannamə doldurulma və konkret hədəf qruplarına
              müxtəlif tanıtım kampaniyaları təklif etməklə həyata keçirir.
              Karqo firmalarının əldə etməyə çalışdıqları digər mühüm amillər
              bölgələr daxilində qəbul məntəqələrinin sayını artırmaqdır.
            </p>
            <p>
              Bununla belə, bizim mövzu ilə bağlı ilkin və ikinci dərəcəli
              araşdırmalarımız Azərbaycanda yükdaşıma sənayesinin gələcəyinin
              firmaların öz müştərilərinə daha çox fərdiləşdirilmiş təkliflər
              həyata keçirəcəyini proqnozlaşdırır. Daha dəqiq desək,
              müştərilərinizi digərlərindən daha yaxşı tanımaq vaxtı artıq
              yetişib!
            </p>
            <p>
              Böyük onlayn B2C platformaları artıq bu strategiyanı qəbul
              ediblər. Məsələn, Amazon, Facebook və YouTube istifadəçilərinin nə
              istədiklərini onların özlərindən daha yaxşı bilir.
            </p>
          </section>
          <p className={`${styles.article_features_desc}`}>
            “Yüksək rəqabət və müştərilərin fərqlənən tələbləri Azərbaycandakı
            hava yükdaşıma şirkətlərini daha çox fərdiləşdirilmiş kampaniyalar
            təklif etmək üçün öz müştərilərinin məlumat bazasını toplayıb
            kateqoriyalaşdırmağın əhəmiyyətini artıracaq.”
          </p>
          <section
            className={`${styles.article_footer} d-flex direction-column`}
          >
            <div className={`${styles.article_info}`}>
              <p className={`${styles.last_edited_time}`}>23 Dekabr, 2021</p>
              <p className={`${styles.author_name}`}>Çingiz Novruzzadə</p>
            </div>
            <div
              className={`${styles.footer_another_details} d-flex justify-between`}
            >
              <div className={`${styles.label_section} d-flex align-center`}>
                <span className={`${styles.label_title}`}>Etiketlər:</span>
                <div className={`${styles.label_box}`}>Business</div>
                <div className={`${styles.label_box}`}>Logistics</div>
                <div className={`${styles.label_box}`}>management</div>
                <div className={`${styles.label_box}`}>Consulting</div>
              </div>
              <div className={`${styles.share_section}`}>
                <p className={`${styles.share_section_title}`}>Paylaş:</p>
                {/* Icons */}
              </div>
            </div>
          </section>
          <section className={`${styles.comment_form}`}></section>
        </section>
        <section className={`${styles.aside_container}`}>
          <div className={`${styles.aside_box} d-flex direction-column `}>
            <img
              className={`${styles.aside_box_img}`}
              src={relatedArticleImgPng}
              alt=''
            />
            <p className={`${styles.aside_box_title}`}>
              <span className={`${styles.aside_article_name}`}>Netflix </span> /
              Fikirlər
            </p>
            <p className={`${styles.aside_box_desc}`}>
              Netflix biznes modelini necə dəyişdi
            </p>
            <div className={`${styles.aside_box_icons}`}>icons</div>
          </div>
          <div className={`${styles.aside_latest_articles}`}>
            <p className={`${styles.aside_latest_articles_title}`}>
              Ən son məqalələr
            </p>
            <div className={`${styles.aside_latest_articles_box} d-flex`}>
              <img
                className={`${styles.aside_latest_articles_img}`}
                src={articleImgPng1}
                alt=''
              />
              <div
                className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}
              >
                <p className={`${styles.aside_latest_articles_date}`}>
                  07.09.2021
                </p>
                <p className={`${styles.aside_latest_articles_desc}`}>
                  Azərbaycanın startap ekosis...
                </p>
              </div>
            </div>
            <div className={`${styles.aside_latest_articles_box} d-flex`}>
              <img
                className={`${styles.aside_latest_articles_img}`}
                src={articleImgPng2}
                alt=''
              />
              <div
                className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}
              >
                <p className={`${styles.aside_latest_articles_date}`}>
                  14.10.2021
                </p>
                <p className={`${styles.aside_latest_articles_desc}`}>
                  Böyüyən qlobal industriya satışları...
                </p>
              </div>
            </div>
            <div className={`${styles.aside_latest_articles_box} d-flex`}>
              <img
                className={`${styles.aside_latest_articles_img}`}
                src={articleImgPng3}
                alt=''
              />
              <div
                className={`${styles.aside_latest_articles_info_box} d-flex direction-column`}
              >
                <p className={`${styles.aside_latest_articles_date}`}>
                  18.01.2022
                </p>
                <p className={`${styles.aside_latest_articles_desc}`}>
                  Söhbət şirkətlərin özlərini maliyyə...
                </p>
              </div>
            </div>
            <div className={`${styles.aside_search}`}>
              <input
                className={`${styles.aside_search_input}`}
                placeholder='Axtar'
                type='text'
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ArticlesLogistics;
