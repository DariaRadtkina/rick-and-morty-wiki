import axios from "axios";
import { Character } from "@/types/character";
import { Episode } from "@/types/episode";
import { Location } from "@/types/location";

const BASE_URL = "https://rickandmortyapi.com/api";

export interface ApiResponse<T> {
  info: {
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}
export const fetchCharacters = async (filters: {
  page?: number;
  status?: string;
  species?: string;
  gender?: string;
  name?: string;
  characterId?: number;
}): Promise<ApiResponse<Character>> => {
  const params = new URLSearchParams();
  if (filters.page) params.append("page", filters.page.toString());
  if (filters.status) params.append("status", filters.status);
  if (filters.species) params.append("species", filters.species);
  if (filters.gender) params.append("gender", filters.gender);
  if (filters.name) params.append("name", filters.name);
  if (filters.characterId)
    params.append("characterId", filters.characterId.toString());

  const response = await axios.get(`${BASE_URL}/character`, { params });
  return response.data;
};

export const fetchEpisodes = async (): Promise<ApiResponse<Episode>> => {
  const response = await axios.get(`${BASE_URL}/episode`);
  return response.data;
};

export const fetchEpisodeCharacters = async (
  episodeId: string,
): Promise<Character[]> => {
  if (!episodeId) return [];
  const response = await axios.get(`${BASE_URL}/episode/${episodeId}`);
  const episode: Episode = response.data;
  if (!episode.characters.length) return [];

  const characterResponses = await Promise.all(
    episode.characters.map((url) => axios.get(url)),
  );
  return characterResponses.map((res) => res.data);
};

export const fetchLocations = async (): Promise<ApiResponse<Location>> => {
  const response = await axios.get(`${BASE_URL}/location`);
  return response.data;
};

export const fetchLocationCharacters = async (
  locationId: string,
): Promise<Character[]> => {
  if (!locationId) return [];
  const response = await axios.get(`${BASE_URL}/location/${locationId}`);
  const location: Location = response.data;
  if (!location.residents.length) return [];

  const characterResponses = await Promise.all(
    location.residents.map((url) => axios.get(url)),
  );
  return characterResponses.map((res) => res.data);
};
