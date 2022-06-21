import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PostPageComponent } from "./pages/post-page/post-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { Component } from "@angular/core";

const routes: Routes =[
  {
    path: '',
    component: HomePageComponent
  },
  //Blog Past
  {
    path: ':slug/id',
    component: PostPageComponent,
  },
  //HandLing 404 - Error Page
  {
    path: '**',
    component: ErrorPageComponent
  }
];

export const RoutingModule = RouterModule.forRoot(routes);
