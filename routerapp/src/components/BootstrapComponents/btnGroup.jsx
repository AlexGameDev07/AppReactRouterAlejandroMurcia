function callBtnGroup() {
   return (
      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
         <button type="button" class="btn btn-primary">Button</button>
         <button type="button" class="btn btn-primary">Button</button>
         <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               Dropdown
            </button>
            <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
         </div>
         <div class="btn-group dropstart" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               Dropdown
            </button>
            <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
         </div>
         <div class="btn-group dropend" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               Dropdown
            </button>
            <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
         </div>
         <div class="btn-group dropup" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               Dropdown
            </button>
            <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
               <li><a class="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
         </div>
      </div>
   );
}

export default callBtnGroup;