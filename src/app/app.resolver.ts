import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, map, mergeMap, Observable, of } from "rxjs";
import { CatBreedsService } from "./services/cat-breeds.service";

@Injectable()

export class CatBreedsResolver implements Resolve<boolean>{

	constructor(private catBreedsService: CatBreedsService) { }

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot):
		boolean | Observable<boolean> | Promise<boolean> {

		return this.catBreedsService.loaded$.pipe(
			mergeMap(loaded => {
				if (loaded) {
					return of(true)
				}
				return this.catBreedsService.getAll().pipe(
					map((catBreedData => {
						return !!catBreedData
					}))
				);
			}), first()
		)
	}


}
