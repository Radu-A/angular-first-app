import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housing.location.info";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track $index) {
      <app-housing-location
        [housingLocation]="housingLocation"
      ></app-housing-location>
      }
    </section>
  `,
  styleUrl: "./home.css",
})
export class Home {
  service = inject(HousingService);

  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";

  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.service.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation.city
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
    );
  }
}
