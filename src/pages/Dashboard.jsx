import { useEffect } from "react";
import Aside from "../components/layouts/Aside";
import Header from "../components/layouts/header";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/usersSlice";

export default function Dashboard() {
  const usersState = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userList = usersState.users.map((user) => {
    return <h1>{user.username}</h1>;
  });
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
                <i className="bi bi-diagram-3"></i>{" "}
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
                <i className="bi bi-graph-up-arrow"></i>
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
                <i className="bi bi-diagram-3"></i>{" "}
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
                <i className="bi bi-graph-down-arrow"></i>
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
