import bulb from "../images/bulb.gif";
import ameno from "../audio/ERA - Ameno.mp3";
import "./about-page.css";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <hr />
      <h2>Janet Santoyo</h2>
      <p>
        We're learning HTML <em>together</em>!
      </p>
      {/* <div>
        <div id="js-output"></div>
        <button id="click-button">Click Me</button>
        <div>
          <input type="text" id="speak-input" />
          <button id="speak-button">Speak</button>
        </div>
      </div> */}
      <p>Some things that I've been doing lately:</p>
      <ul className="emoji-list">
        <li>Drawing dnd characters</li>
        <li>Watching Attack on Titan's latest season</li>
        <li>Cooking recipes from Overwatch's cookbook</li>
      </ul>
      <p>Some languages that I am going to be using:</p>
      <ul className="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
      </ul>
      <p>
        An app I use daily is:{" "}
        <a
          href="https://store.steampowered.com/"
          target="_blank"
          rel="noreferrer"
          title="Software recommendation"
        >
          Steam
        </a>
      </p>

      <p>
        My Artstation is:{" "}
        <a
          href="https://www.artstation.com/eatapancake"
          target="_self"
          title="Portfolio"
        >
          Here
        </a>
      </p>
      <img id="img-bulbsaur" src={bulb} alt="bulbasaur" width="400" />
      <p>Here is a quote from Portal: </p>
      <blockquote cite="https://theportalwiki.com/wiki/GLaDOS_voice_lines">
        "While it has been a faithful companion, your Companion Cube cannot
        accompany you through the rest of the test. If it could talk - and the
        Enrichment Center takes this opportunity to remind you that it cannot -
        it would tell you to go on without it because it would rather die in a
        fire than become a burden to you."
      </blockquote>
      <address>-GLaDOS</address>

      <audio controls>
        <source src={ameno} type="audio/mpeg" />
      </audio>
    </main>
  );
}

export default AboutPage;
