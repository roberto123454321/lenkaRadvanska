import "./Bio.css";

export default function Bio() {
  return (
    <div id="bio" className="lighter-background section-padding">
      <div className="bio">
        <p>
          Mgr. Lenka Radvanská, PhD. vyštudovala učiteľstvo hudobného umenia a biológie na Prešovskej univerzite v Prešove. Neskôr si svoje hudobné vedomosti rozšírila veľkým doktorátom z Didaktiky hudby na pôde Katedry hudby Katolíckej univerzity v Ružomberku. V oblasti súčasnej kresťanskej hudby sa podieľala na tvorbe hymny Campfestu Som nový (2017), bola súčasťou CD nosičov spoločenstva MaranaTha v Prešove, kde prispela aj autorskými piesňami Vydýchnem a Láska, láska (2019). Ako vokalistka spolupracovala s kresťanskými hudobnými kapelami Timothy, LCH live, s projektom Godzone, či hudobníkmi Dominikou Gurbaľovou a Petrom Křemenom. V roku 2020 spolu s kapelou nahrala debutový album Žalmy.
        </p>

        <p>
          Božie slovo a špeciálne Kniha žalmov má v mojom živote dôležité miesto. Verím, že cez Slovo sa nám Boh sám dáva spoznať osobným, živým spôsobom. V žalmoch sú ukryté všetky emócie, s ktorými sa človek môže stretnúť. Pomáhajú mi pochopiť, prijať, spracovať životné okolnosti a kráčať ďalej.
        </p>

        <ul className="bio-links">
          <li>
            <a href="https://mojamuzika.dennikn.sk/rozhovory/tuzim-po-tom-aby-zalmove-texty-zazneli-v-kaviarnach-a-baroch-hovori-lenka-bednarova">
            <h4>Moja Muzika</h4>
            Túžim po tom, aby žalmové texty zazneli v kaviarňach a baroch, hovorí Lenka Bednárová, ktorá žalmy zhudobňuje do jazzovej podoby</a>
          </li>

          <li>
            <a href="https://www.slovoplus.sk/spevacka-lenka-bednarova-mam-rada-zivot-hoci-aj-uprostred-tazkych-udalosti">
            <h4>Slovo+</h4>
              Speváčka Lenka Bednárová: Mám rada život, hoci aj uprostred ťažkých udalostí</a>
          </li>

          <li>
            <a href="https://www.katolickenoviny.sk/mladym/category/mladym/article/lenka-zaodela-zalmy-do-noveho-satu.xhtml">
            <h4>Katolícke noviny</h4>
              Lenka zaodela žalmy do nového šatu - Mladým</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
