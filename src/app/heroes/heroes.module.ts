import { NgModule } from "@angular/core";
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { HeroesRoutingModule } from "./heroes-routing.module";


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [
    HeroesRoutingModule
  ]
})
export class HeroesModule {

}
