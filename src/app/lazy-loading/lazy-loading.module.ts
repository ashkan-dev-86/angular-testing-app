import { RouterModule, Routes } from "@angular/router";
import { LazyLoadingComponent } from "./lazy-loading/lazy-loading.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImgLazyLoaderDirective } from "./img-lazy-loader.directive";

const route: Routes = [
    {
        path: '',
        component: LazyLoadingComponent
    }
];

@NgModule({
    declarations: [
        LazyLoadingComponent,
        ImgLazyLoaderDirective
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})
export class LazyLoadingModule { }