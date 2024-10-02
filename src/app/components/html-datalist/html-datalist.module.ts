import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HtmlDatalistComponent } from "./html-datalist.component";

const route: Routes = [
    {
        path: '',
        component: HtmlDatalistComponent
    }
];

@NgModule({
    declarations: [
        HtmlDatalistComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})
export class HtmlDatalistModule { }