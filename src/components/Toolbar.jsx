export default function Toolbar() {
  return (
    <div className="toolbar">
      <div>
        <h4 className="text-white lato">3 tasks selected totally</h4>
      </div>

      <div className="actions">
        <div className="input-icon">
          <i className="icon search"></i>
          <input type="text" placeholder="search ..." />
        </div>

        <button className="action-btn ml-10">
          <i className="icon edit"></i>Import
        </button>
      </div>
    </div>
  );
}
