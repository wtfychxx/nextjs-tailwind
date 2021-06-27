const defaultClass = "px-4 h-10 rounded-lg text-white bg-gradient-to-br ";
const primary = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      } from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-500`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick != "" ? props.onClick : ""}
      disabled={props.disabled ? props.disabled : false}
    >
      {props.children}
    </button>
  );
};

const secondary = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      } from-gray-400 to-gray-800 hover:from-gray-600 hover:to-gray-900 transition duration-500`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick != "" ? props.onClick : ""}
      disabled={props.disabled ? props.disabled : false}
    >
      {props.children}
    </button>
  );
};

const danger = (props) => {
  console.log(`${props.disabled}, ${props.children}`);
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      } from-red-500 to-pink-500 hover:from-red-700 hover:to-pink-700 transition duration-500`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick != "" ? props.onClick : ""}
      disabled={props.disabled ? props.disabled : false}
    >
      {props.children}
    </button>
  );
};

const warning = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      } from-yellow-300 to-yellow-600 hover:from-yellow-500 hover:to-yellow-800 transition duration-500`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick != "" ? props.onClick : ""}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

const success = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      } from-green-500 to-cyan-700 hover:from-green-700 hover:to-cyan-900 transition duration-500`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick != "" ? props.onClick : ""}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export { primary, secondary, danger, warning, success };
