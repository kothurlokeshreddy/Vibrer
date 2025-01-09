import { FaSearch, FaUser} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import './index.css'

const Header = () => {
    return (
      <header className = "header">
        <img className = "logo" src = "https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__" alt = "logo"/>
        <nav>
          <ul className = "nav-list-items">
            <li>Home</li>
            <li>Living
              <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Storage
            <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Dining
            <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Bedroom
            <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Matress
            <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Study
            <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Office
            <RiArrowDropDownLine className="dropdown"/>
            </li>
            <li>Outdoor
            <RiArrowDropDownLine className="dropdown"/>
            </li>
          </ul>
        </nav>
        <div className="nav-icons-button">
          <FaSearch/>
          <FaUser/>
        </div>
      </header>
    );
  };
  
  export default Header;
  