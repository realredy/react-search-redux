
import './layout.scss';

export default function Layout({children}) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
