import { Observable } from "rxjs";
import { BestSeller } from "../interfaces/best-seller";
export abstract class BestsellerAPI {
    abstract getAllBestsellers(): Observable<BestSeller[]>;
    }