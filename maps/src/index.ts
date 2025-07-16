import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();

console.log(user);

const company = new Company();

console.log(company);

const customMap = new CustomMap("map");
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
