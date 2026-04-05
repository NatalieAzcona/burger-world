import "../../assets/styles/emoji.scss";

const EmojiFace = ({ type, children }) => (
  <div className={`emoji ${type}`}>{children}</div>
);

export default EmojiFace;
