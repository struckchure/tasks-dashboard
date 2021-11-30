import user_img from "../assets/img/user-1.jpg";

export default function Nav() {
  return (
    <nav>
      <div className="links">
        <a href="#">
          <button className="nav-item active">Tasks</button>
        </a>
        <a href="#">
          <button className="nav-item">Profile</button>
        </a>
        <a href="#">
          <button className="nav-item">Order</button>
        </a>
        <a href="#">
          <button className="nav-item">Setting</button>
        </a>
      </div>

      <div className="tools">
        <button className="notification-btn">
          <i className="icon bell large"></i>
          <label>4</label>
        </button>

        <button className="avatar-btn">
          <img src={user_img} alt="user image" className="avatar" />
          <i className="icon chevron down text-white small"></i>
        </button>
      </div>
    </nav>
  );
}
