export default function Modal() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#userCardModal"
      >
        Show User Card
      </button>

      <div
        class="modal fade"
        id="userCardModal"
        tabindex="-1"
        aria-labelledby="userCardModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="userCardModalLabel">
                User Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body text-center">
              <div class="d-flex flex-column align-items-center">
                <img
                  src="/images/icons8-user-48.png"
                  alt="user"
                  class="rounded-circle mb-3"
                  width="120"
                  height="120"
                />
                <h5 class="mb-1">John Doe</h5>
                <p class="text-muted mb-0">john.doe@example.com</p>
              </div>
            </div>

            <div class="modal-footer border-0 justify-content-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
