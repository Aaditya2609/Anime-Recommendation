import { useState } from "react";
import "./styles.css";

export default function App() {
  const AnimeDatabase = {
    action: [
      {
        name: "Attack On Titan",
        rating: "4.8/5",
        image:
          "https://resizing.flixster.com/8AXVSwpo0b8E-jseuvnAkToaoL4=/206x305/v2/https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg"
      },
      {
        name: "Demon Slayer",
        rating: "4.6/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/09211a5ab1a7a41cbd18c90b1c8f076b1641869179_full.jpg"
      },
      {
        name: "Fate/Stay Night",
        rating: "4.9/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire2/fd6f801d77097e20eb5ffb9232de14d01430173031_full.jpg"
      },
      {
        name: "Blue Exorcist",
        rating: "4.1/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire1/e0c8a39fa014e57a95ef3682a4cc61d31483733959_full.jpg"
      },
      {
        name: "Jujutsu Kaisen",
        rating: "4.7/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/02c909684baa37d6ef70a9df742d58951610752067_full.jpg"
      }
    ],

    adventure: [
      {
        name: "Naruto:Shippuden",
        rating: "4.8/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire4/1c1df98707aa0f22aa54342af725e48a1491245343_full.jpg"
      },
      {
        name: "JoJo's Bizarre Adventure",
        rating: "4.1/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/04b29833ccaaf2ee6bda1d08f2f02ecf1539039197_full.jpg"
      },
      {
        name: "Dragon Ball Super",
        rating: "4.5/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/98ea4207e23a2ea3e3af39ad641d88001533322009_full.jpg"
      },
      {
        name: "The Rising of the Shield Hero",
        rating: "4.5/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire4/74dc98daf4362012ff758c7f4a13b2381649904825_full.jpg"
      },
      {
        name: "Akame Ga Kill!",
        rating: "3.8/5",
        image:
          "https://resizing.flixster.com/u-uScMyIr2msiXuq9WS3s7vlC9M=/206x305/v2/https://flxt.tmsimg.com/assets/p11321710_b_v8_aa.jpg"
      }
    ],

    SOL: [
      {
        name: "School Babysitters",
        rating: "4.2/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire2/9623d4b3535916a4289390665ad31b481514496828_full.jpg"
      },
      {
        name: "Miss Kobayashi's Dragon Maid",
        rating: "4/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire4/6d3bd07ec5e5d3e3f3a5f35e50f50dec1628229684_full.jpg"
      },
      {
        name: "K-On!",
        rating: "4/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire1/475f7d3e97be05c1a351fc89e0184f781613567545_full.jpg"
      },
      {
        name: "Komi Can't Communicate",
        rating: "4.5/5",
        image:
          "https://img.bunnycdnn.ru/_r/300x400/100/5c/94/5c946ba84494983519adbbb324095e42/5c946ba84494983519adbbb324095e42.jpg"
      }
    ],
    comedy: [
      {
        name: "Assassination Classroom",
        rating: "4.6/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/dd3f02603f8c7bedcc8962b6a6fb392e1473190970_full.jpg"
      },
      {
        name: "Konosuba!!",
        rating: "4.3/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/7ba81b1709a87f5ca8930229b10029a61484092235_full.jpg"
      },
      {
        name: "One Punch Man",
        rating: "4.7/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire2/486f88e5889422c72ab7b12a58f794721554828665_full.jpg"
      },
      {
        name: "Spy X Family",
        rating: "4.6/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire1/7c186f0cbe78d53cc327520b3b390a821649089667_full.jpg"
      }
    ],

    romance: [
      {
        name: "Rascal Does Not Dream Of Bunny Girl Senpai",
        rating: "5/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire2/9f8894f961340ccdd9464a53b14ca3bd1538572740_full.jpg"
      },
      {
        name: "Your Lie In April",
        rating: "5/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/40e6c04e05ce1efb08815b870a6d39331412797514_full.jpg"
      },
      {
        name: "Horimiya",
        rating: "4.9/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire2/dc24870ae3c042db983cae330ffe60141644515734_full.jpg"
      },
      {
        name: "Kaguya-sama: Love Is War",
        rating: "4.3/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire1/cfaaa751ce731f3abecca872ddc9e7ac1649904522_full.jpg"
      },
      {
        name: "Love, Chunibyo & Other Delusions!",
        rating: "4.1/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire3/d6ee37b791b46c7c66cda8af1e72298b1392243736_full.jpg"
      },
      {
        name: "My Dress Up Darling",
        rating: "4.5/5",
        image:
          "https://img1.ak.crunchyroll.com/i/spire1/3f4a1835d85925aee588edef6bbebe5d1641592593_full.jpg"
      }
    ]
  };

  const [genre, setGenre] = useState("action");
  function GenreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Anime Recommendations</h1>
      <p>
        Here's a list made from some anime that I have watched.Click on a genre
        to know about them.
      </p>
      <div>
        {Object.keys(AnimeDatabase).map((genre) => (
          <button onClick={() => GenreClickHandler(genre)}>
            {genre.toUpperCase()}
          </button>
        ))}
      </div>
      <br />
      <div>
        <ul>
          {AnimeDatabase[genre].map((anime) => (
            <li key={anime.name}>
              {" "}
              <div id="Name"> {anime.name} </div>
              <div id="Rating"> Rating: {anime.rating} </div>
              <div id="image">
                {" "}
                <img src={anime.image} />{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
