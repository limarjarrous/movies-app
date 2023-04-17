import "./Dropdown.css";

const Dropdown = ({ onLogout }) => {
  //   const options = ["one", "two", "three"];
  //   const defaultOption = options[0];

  return (
    <div className="dropdown">
      <ul className="dd_menu">
        <li className="dd_item">
          <button onClick={() => onLogout()}>Log out</button>
        </li>
        {/* <li className="dd_item">
          <button onClick={() => console.log(2)}>Menu 2</button>
        </li> */}
      </ul>
    </div>
  );
};

export default Dropdown;
