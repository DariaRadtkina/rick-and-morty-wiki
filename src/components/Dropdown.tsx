interface DropdownProps {
  dropdownName: string;
  lengthForDropdown: number;
}

export default function Dropdown({
  dropdownName,
  lengthForDropdown,
}: DropdownProps) {
  const capitalize = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const options = Array.from(
    { length: lengthForDropdown },
    (_, index) => index + 1,
  );

  return (
    <div className="col-lg-3 col-12 mb-4">
      <h4 className="text-center mb-4">Pick {capitalize(dropdownName)}</h4>
      <div className="input-group mb-3">
        <select className="form-select" id="Episode">
          <option value="1">Choose...</option>
          {options.map((episode) => (
            <option key={episode} value={episode}>
              {dropdownName} - {episode}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
