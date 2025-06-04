export default function SearchBar() {
  return (
    <div>
      <h1 className="text-center mb-3">Characters</h1>
      <form className="row justify-content-center align-items-center gap-1 mb-5">
        <div className="col-7 col-md-5">
          <input
            placeholder="Search for characters"
            type="text"
            className="form-control form-control-lg shadow border-primary "
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary fs-5 px-4">Search</button>
        </div>
      </form>
    </div>
  );
}
