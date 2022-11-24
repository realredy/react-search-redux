 
export default function SingleWrapper({children}) {
  return (
    <div className="single_boxed">
      <div className="single_boxed-inner">{children}</div>
    </div>
  );
}