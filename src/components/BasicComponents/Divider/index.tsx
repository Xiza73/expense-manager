import "./index.scss";

type Props = {
  type: "circle" | "diamond";
};

export default function Divider({ type }: Props) {
  return (
    <>
      <div className="main_container">
        <div className={`lines ${type === "circle" ? "line-circle" : ""}`}>
          <div className={type}></div>
        </div>
      </div>
    </>
  );
}
