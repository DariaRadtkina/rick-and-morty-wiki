const filters = {
  status: ["Alive", "Dead", "Unknown"],
  species: [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ],
  gender: ["Female", "Male", "Genderless", "Unknown"],
};

const filterSections = Object.entries(filters);

export default function FilterSidebar() {
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        className="text-primary text-decoration-underline text-center mb-3"
        style={{ cursor: "pointer" }}
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        {filterSections.map(([category, values], index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${index}`}
              >
                {category.replace(/^./, category[0].toUpperCase())}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body d-flex flex-wrap gap-3">
                {values.map((item, i) => (
                  <div key={i}>
                    <div className="form-check">
                      <input
                        className="form-check-input x"
                        type="radio"
                        name={category}
                        id={`${category}-${i}`}
                      ></input>
                      <label
                        className="btn btn-outline-primary"
                        htmlFor={`${category}-${i}`}
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
