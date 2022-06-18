function addPopupNavbar() {
  document.body.innerHTML =
    `
<div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Popup URL:</span>
    </div>

    <input
      id="url"
      type="text"
      class="form-control"
      aria-describedby="basic-addon1"
    />

    <div class="input-group-append">
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select demo
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="/options/options.html"
              >Options</a
            >
          </li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>` + document.body.innerHTML;

  document.querySelector("#url").value = window.location.href;
}

addPopupNavbar();
