// import { HTTP_METHODS } from "../globals";
import { HTTP_METHODS } from "../../globals";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getPokemons(limit = 0, offset = 0) {
    return createApiRequest(
      `/pokemon/?limit=${limit}&offset=${offset}`,
      HTTP_METHODS.GET,
      {}
    );
  }
  getPokemonByNameOrId(id = "") {
    return createApiRequest(`/pokemon/${id}/`, HTTP_METHODS.GET, {});
  }
  getSpeciesByNameOrId(id = "") {
    return createApiRequest(`/pokemon-species/${id}/`, HTTP_METHODS.GET, {});
  }
  getEvolutionChainByNameOrId(id = "") {
    return createApiRequest(`/evolution-chain/${id}/`, HTTP_METHODS.GET, {});
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;
