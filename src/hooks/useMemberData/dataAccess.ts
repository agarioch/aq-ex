import { Company } from "../../types/Company";
import { COMPANY } from "../../mocks/mock";
import parseData from "./parseData";

async function fetchRequest(path: string) {
  // mocking a server response
  return COMPANY
}

export function getMember(id: number): Promise<Company> {
  return fetchRequest(`/mock/company/${id}`).then(response => parseData(response));
}

