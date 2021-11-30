export default function SideBar() {
  return (
    <aside>
      <div>
        <button className="sidebar-item">
          <p>
            <i className="icon bell"></i>
          </p>
          <label>Proxy</label>
        </button>

        <button className="sidebar-item">
          <p>
            <i className="icon check"></i>
          </p>
          <label>SNKRS</label>
        </button>

        <button className="sidebar-item active">
          <p>
            <i className="icon chart pie"></i>
          </p>
          <label>Supply</label>
        </button>

        <button className="sidebar-item">
          <p>
            <i className="icon bookmark"></i>
          </p>
          <label>Raffle</label>
        </button>
      </div>

      <div className="sidebar-footer">
        <button className="sidebar-setting">
          <i className="icon setting"></i>
        </button>

        <label className="version">Dragon v1.0</label>
      </div>
    </aside>
  );
}
