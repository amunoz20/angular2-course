import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ProductsView } from "./products/products.view";

const appRoutes: Routes = [
    {
        path: "products",
        component: ProductsView
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);