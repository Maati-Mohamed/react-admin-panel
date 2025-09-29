import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/usersSlice";
import Header from "../components/layouts/header";
import Aside from "../components/layouts/Aside";

export default function Users() {
  const usersState = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Aside />
      <div className="content">
        <h3 className="mb-4">Users Management</h3>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersState.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>user</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-1"
                        data-bs-toggle="tooltip"
                        title="View"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-warning me-1"
                        data-bs-toggle="tooltip"
                        title="Edit"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger me-1"
                        data-bs-toggle="tooltip"
                        title="Delete"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
