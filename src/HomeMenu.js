import { NavLink } from "react-router-dom";

function HomeMenu({ items, title, handle }) {
  return (
    <div>
      <NavLink to={`/${handle}`}><h2>{title}</h2></NavLink>

      <ul>
        {items.map(item => <li>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default HomeMenu;