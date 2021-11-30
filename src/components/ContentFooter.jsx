export default function ContentFooter() {
  return (
    <div className="content-footer">
      <div>
        <button>
          <i className="icon lock"></i>
          <span>Captcha V3</span>
        </button>
      </div>

      <div>
        <button>
          <i className="icon plus"></i>
          <span>Create task</span>
        </button>

        <button>
          <i className="icon trash"></i>
          <span>Delete</span>
        </button>
      </div>

      <div>
        <button>
          <i className="icon play"></i>
          <span>Start All</span>
        </button>

        <button>
          <i className="icon stop"></i>
          <span>Stop All</span>
        </button>
      </div>
    </div>
  );
}
