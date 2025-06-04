import Dropdown from "@/components/Dropdown";
import LocationTitle from "@/components/LocationTitle copy";

export default function Header() {
  return (
    <div className="container">
      <LocationTitle />
      <div className="row">
        <Dropdown dropdownName="Location" lengthForDropdown={51} />
      </div>
    </div>
  );
}
