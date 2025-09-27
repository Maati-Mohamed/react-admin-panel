import { Link } from "react-router-dom";
import { useState } from "react";

export default function Aside() {
  const [active, setActive] = useState("active");
  return (
    <>
      <div className="offcanvas offcanvas-start" id="abc">
        <div className="offcanvas-header">
          <h6 className="offcanvas-title text-muted">Dashboard</h6>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="header bg-light p-2 text-center rounded-2">
          <h5 className="fw-bold mb-0">AlSoouq</h5>
          <span className="fs-10 text-muted">maati4455@gmail.com</span>
        </div>

        <div className="aside-body mt-4">
          <ul className="list-unstyled">
            <li className="p-3">
              <a href="" className="tex-secondary">
                <span className="me-3 fs-5">
                  <i className="bi bi-tachometer-alt"></i>
                </span>
                Dashboard
              </a>
            </li>
            <li className="p-3">
              <a href="" className="tex-secondary">
                <span className="me-3 fs-5">
                  <i className="fa fa-tachometer-alt"></i>
                </span>
                Products
              </a>
            </li>
            <li className="p-3  ">
              <a href="" className="tex-secondary">
                <span className="me-3 fs-5">
                  <i className="fa fa-tachometer-alt"></i>
                </span>
                Categores
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="aside p-3">
        <div className="aside-header p-2 text-center rounded-2">
          <h5 className="fw-bold mb-0">M-panel</h5>
          <span className="fs-10 text-muted">m_panel@gmail.com</span>
        </div>
        <div className="aside-body mt-4">
          <ul className="list-unstyled">
            <li className="p-1">
              <Link href="/admin" className="">
                <span className="me-3 fs-5">
                  <i className="bi bi-house text-dark"></i>
                </span>
                Dashboard
              </Link>
            </li>
            <li className="p-1">
              <Link href="/admin/products" className="">
                <span className="me-3 fs-5">
                  <i className="bi bi-bag text-dark"></i>
                </span>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
