export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-2">
        <a
          href="#abc"
          data-bs-toggle="offcanvas"
          className="navbar-toggler mx-2"
        >
          <span className="">
            <i className="bi bi-list fs-4 mt-1 text-muted"></i>
          </span>
        </a>

        <div className="nav-date">
          <div className="role-name">
            <p className="mb-0 fw-bold name text-secondary">Maati Mohamed</p>
            <p className="mb-0 role">Admin</p>
          </div>
        </div>

        <div className="dropdown ms-auto">
          <div
            className="custom-small-image cursor-pointer"
            data-bs-toggle="dropdown"
            id="dropdownBtn"
            role="button"
            aria-expanded="false"
          >
            <img src="/images/icons8-user-48.png" alt="user" />
          </div>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownBtn"
          >
            <li>
              <a href="/" className="dropdown-item">
                Website
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Change Password
              </a>
            </li>
            <li>
              <div className="dropdown-item btn">Logout</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
