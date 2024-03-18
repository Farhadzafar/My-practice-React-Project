// SideBar
export default function Sidebar() {
  return (
    <aside className="slider">
      <Reaslte />
      <Footer />
    </aside>
  );
}

function Reaslte() {
  return (
    <div className="reaslte">
      <div className="reaslte-name">
        <p>six simester</p>
        <span>C</span>
      </div>
      <div className="reaslte-dscribtion">
        <p>
          mark <br></br>
          <span>3409</span>
        </p>
        <p>
          Averge <br></br>
          <span>76.32</span>
        </p>
        <p>
          ciridet <br></br>
          <span>21</span>
        </p>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      copy right by <a href="www.farhadzafar/khan">Farhad zafari</a>
    </footer>
  );
}
