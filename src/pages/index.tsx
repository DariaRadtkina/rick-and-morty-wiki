import FilterSidebar from "@/components/FilterSidebar";
import SearchBar from "@/components/SearchBar";
import { fetchCharacters } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState({
    status: "",
    species: "",
    gender: "",
    name: "",
  });

  useEffect(() => {
    setFilters((prev) => ({ ...prev, name: searchQuery }));
  }, [searchQuery]);

  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }));
  };

  const clearFilters = () => {
    setFilters({ status: "", species: "", gender: "", name: "" });
    setSearchQuery("");
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", currentPage, filters],
    queryFn: () => fetchCharacters({ page: currentPage, ...filters }),
  });

  return (
    <div className="container">
      <SearchBar />
      <div className="row">
        <FilterSidebar />
        <div className="col-lg-8 col-12"></div>
      </div>
    </div>
  );
}
