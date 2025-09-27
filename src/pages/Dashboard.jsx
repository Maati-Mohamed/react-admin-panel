import Aside from "../components/layouts/Aside";
import Header from "../components/layouts/header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Aside />
      <div className="content">
        {/* <h5 className="text-secondary">Dashboard</h5> */}
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-one py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-bar-chart"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">Orders</p>
                <h5 className="m-0 text-center fw-bold">19</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-two py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-bar-chart"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">Products</p>
                <h5 className="m-0 text-center fw-bold">34</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-three py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-pie-chart"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">Selles</p>
                <h5 className="m-0 text-center fw-bold">126</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-four py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i class="bi bi-diagram-3"></i>{" "}
              </span>
              <div className="">
                <p className="m-0 mt-2">Selles</p>
                <h5 className="m-0 text-center fw-bold">87</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-one py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i class="bi bi-graph-up-arrow"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">Orders</p>
                <h5 className="m-0 text-center fw-bold">19</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-two py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i class="bi bi-diagram-3"></i>{" "}
              </span>
              <div className="">
                <p className="m-0 mt-2">Products</p>
                <h5 className="m-0 text-center fw-bold">34</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-three py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i class="bi bi-graph-down-arrow"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">Selles</p>
                <h5 className="m-0 text-center fw-bold">126</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2 text-white dashboard-box-four py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-bar-chart "></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">Selles</p>
                <h5 className="m-0 text-center fw-bold">87</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </>
  );
}
