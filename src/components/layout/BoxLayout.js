
import './boxLayout.scss';

export default function BoxLayout({children}) {
  return (
    <div className="header_boxed">
      <div className="header_boxed-inner">{children}</div>
    </div>
  );
}