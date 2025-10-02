import { useEffect } from "react";
import Aside from "../components/layouts/Aside";
import Header from "../components/layouts/header";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/usersSlice";
import { t } from "i18next";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import RadarChart from "../components/charts/RadarChart";
import PolarChart from "../components/charts/PolarChart";

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
          <div className="col-md-3 px-1">
            <div className="mb-2 dashboard-box-one py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-bar-chart"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Orders")}</p>
                <h5 className="m-0 text-center fw-bold">19</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2 dashboard-box-two py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-bar-chart"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Products")}</p>
                <h5 className="m-0 text-center fw-bold">34</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2  dashboard-box-three py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-pie-chart"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Selles")}</p>
                <h5 className="m-0 text-center fw-bold">126</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2  dashboard-box-four py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-diagram-3"></i>{" "}
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Selles")}</p>
                <h5 className="m-0 text-center fw-bold">87</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2  dashboard-box-one py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-graph-up-arrow"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Orders")}</p>
                <h5 className="m-0 text-center fw-bold">19</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2  dashboard-box-two py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-diagram-3"></i>{" "}
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Products")}</p>
                <h5 className="m-0 text-center fw-bold">34</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2  dashboard-box-three py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-graph-down-arrow"></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Selles")}</p>
                <h5 className="m-0 text-center fw-bold">126</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-1">
            <div className="mb-2  dashboard-box-four py-3 d-flex gap-4 justify-content-center align-items-center">
              <span className="fs-1">
                <i className="bi bi-bar-chart "></i>
              </span>
              <div className="">
                <p className="m-0 mt-2">{t("Selles")}</p>
                <h5 className="m-0 text-center fw-bold">87</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <BarChart />
          </div>
          <div className="col-md-6">
            <LineChart />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <PieChart />
          </div>
          <div className="col-md-4">
            <DoughnutChart />
          </div>
          <div className="col-md-4">
            <PolarChart />
          </div>
        </div>
      </div>
    </>
  );
}
