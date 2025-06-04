import Dropdown from "@/components/Dropdown";
import EpisodesTitle from "@/components/EpisodesTitle";

export default function Header() {
  return (
    <div className="container">
      <EpisodesTitle />
      <div className="row">
        <Dropdown dropdownName="Episodes" lengthForDropdown={51} />
      </div>
    </div>
  );
}
